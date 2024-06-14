// app/api/create-subscription/route.js

import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Stripe from 'stripe';
import { connect } from "@/lib/db";
import User from "@/lib/models/user.model";

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);

export async function POST(request) {
  const { plan, customerId } = await request.json();

  const [silver_monthly, silver_yearly, gold_monthly, gold_yearly] = [
    'price_1PRWZtSH7U10keZSNEdrZ9zr',
    'price_1PRWiaSH7U10keZSky74R5d3',
    'price_1P7u95SH7U10keZSb4lUIDW5',
    'price_1PRWkdSH7U10keZSXW14mbf9',
  ];

  let planId = null;

  if (plan == 399) planId = silver_monthly;
  else if (plan == 3499) planId = silver_yearly;
  else if (plan == 999) planId = gold_monthly;
  else if (plan == 9999) planId = gold_yearly;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: planId, quantity: 1 }],
      success_url: "https://workafy.vercel.app/subscription/success",
      cancel_url: "https://workafy.vercel.app/subscription",
      // shipping_address_collection: {
      //   allowed_countries: ['IN', 'US'] // Specify allowed countries
      // },
      billing_address_collection: 'required' // Require billing address
    });


    const addSession = async () => {
      try {
        
        const connection = await connect();
        if(connection) {
          await User.findOneAndUpdate(
            { _id: new mongoose.Types.ObjectId(customerId) },
            { $set: { subscription: { sessionId: session.id } } },
            { new: true }
          );  
        }
      }
      catch (error) {
        console.log(error);
      }
    }

    addSession();

    return NextResponse.json({ session });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

}



// app/api/create-subscription/route.js

// import { NextResponse } from 'next/server';
// import mongoose from 'mongoose';
// import Stripe from 'stripe';
// import { connect } from "@/lib/db";
// import User from "@/lib/models/user.model";

// const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);


// async function addSession(customerId, sessionId) {
//   try {
//     await connect();
//     const updatedUser = await User.findOneAndUpdate(
//       { _id: new mongoose.Types.ObjectId(customerId) },
//       { $set: { subscription: { sessionId: sessionId } } },
//       { new: true }
//     );

//     if (!updatedUser) {
//       console.error(`User with ID ${customerId} not found.`);
//       throw new Error("User not found");
//     }
//   } catch (error) {
//     console.error("Error updating user subscription:", error);
//     throw error;
//   }
// }


// export async function POST(request) {
//   const { plan, customerId } = await request.json();

//   const [silver_monthly, silver_yearly, gold_monthly, gold_yearly] = [
//     'price_1PRWZtSH7U10keZSNEdrZ9zr',
//     'price_1PRWiaSH7U10keZSky74R5d3',
//     'price_1P7u95SH7U10keZSb4lUIDW5',
//     'price_1PRWkdSH7U10keZSXW14mbf9',
//   ];

//   let planId = null;

//   if (plan == 399) planId = silver_monthly;
//   else if (plan == 3499) planId = silver_yearly;
//   else if (plan == 999) planId = gold_monthly;
//   else if (plan == 9999) planId = gold_yearly;

//   try {
//     const session = await stripe.checkout.sessions.create({
//       mode: "subscription",
//       payment_method_types: ["card"],
//       line_items: [{ price: planId, quantity: 1 }],
//       success_url: "https://workafy.vercel.app/subscription/success",
//       cancel_url: "https://workafy.vercel.app/subscription",
//       billing_address_collection: 'required' // Require billing address
//     });

//     // Add session to the user profile
//     await addSession(customerId, session.id);

//     return NextResponse.json({ session });
//   } catch (error) {
//     console.error("Error creating Stripe session or updating user subscription:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
