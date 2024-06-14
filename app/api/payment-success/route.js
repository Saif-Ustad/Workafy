// app/api/payment-success/route.js

import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import moment from 'moment';
import mongoose from 'mongoose';
import { connect } from "@/lib/db";
import User from "@/lib/models/user.model";
// import { ObjectId } from 'mongodb';

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);

export async function POST(request) {
  const { sessionId, customerId } = await request.json();

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === 'paid') {
      const subscriptionId = session.subscription;
      const subscription = await stripe.subscriptions.retrieve(subscriptionId);

      const planId = subscription.plan.id;
      console.log(subscription.plan.amount);
      const planType = subscription.plan.amount === 39900 ? "silver_monthly" : subscription.plan.amount === 349900 ? "silver_yearly" : subscription.plan.amount === 99900 ? "gold_monthly" : "gold_yearly";
      const startDate = moment.unix(subscription.current_period_start).format('YYYY-MM-DD');
      const endDate = moment.unix(subscription.current_period_end).format('YYYY-MM-DD');
      const durationInSeconds = subscription.current_period_end - subscription.current_period_start;
      const durationInDays = moment.duration(durationInSeconds, 'seconds').asDays();

      await User.findOneAndUpdate(
        { _id: new mongoose.Types.ObjectId(customerId) },
        {
          $set: {
            subscription: {
              sessionId: sessionId,
              planId: planId,
              planType: planType,
              planStartDate: startDate,
              planEndDate: endDate,
              planDuration: durationInDays
            }
          }
        }
      );


      return NextResponse.json({ message: "Payment successful" });
    } else {
      return NextResponse.json({ message: "Payment failed" });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
