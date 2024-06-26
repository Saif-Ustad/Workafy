"use client"

import { useEffect, useState } from "react";
import ToggleButton from "../../../../components/ToggleButton"

import { GoArrowUpRight } from "react-icons/go";
import Footer from "@/components/DashboardPages/Footer";

import { useUser } from '@clerk/clerk-react';
import { fetchUser } from '@/lib/actions/user.action';

const SubscriptionCardData = [
  {
    Price: "399",
    PlanType: "silver_monthly",
    title: "Workafy Silver",
    subTitle: "Rank Among Top 1% Freelancers",
    description: [
      "5x your chances of getting hired",
      "Higher Profile listing in Client searches",
      "Workafy Premium Badge",
      "Apply on upto 50 projects per month",
      "Feature in Promotional Emails to Clients",
      "Work in 2 Skill Categories",
      "Add 15 Skills for increased visibility",
      "One Profile review by Workafy",
      "Workafy Priority Support"
    ],
    buttonText: "Subscribe Now",
  },
  {
    Price: "0",
    PlanType: "free",
    title: "Workafy Basic",
    subTitle: "Standard Ranking Among 3,00,000+ Freelancers",
    description: [
      "Basic Profile Listing in Searches",
      "Apply on Upto 10 Projects per month",
      "Work in 1 Skill Category",
      "No Premium Badge",
      "No Direct Client Recommendations",
      "Add 10 Skills for increased visibility",
      "Self Profile Optimization",
      "Standard Email Support",
    ],
    buttonText: "Free",
  },
  {
    Price: "999",
    PlanType: "gold_monthly",
    title: "Workafy Gold",
    subTitle: "Rank in Top 0.1% Freelancers",
    description: [
      "All Workafy Silver features and more",
      "Highest Listing in Client Searches",
      "20x your chances of getting hired",
      "Direct Recommendations to Clients",
      "Apply on upto 200 Projects/month",
      "Work in All Skill Categories",
      "Featured Profile on Job Posts",
      "Weekly Profile Reviews",
      "Workafy Priority Support",
    ],
    buttonText: "Subscribe Now",
  },
  {
    Price: "3499",
    PlanType: "silver_yearly",
    title: "Workafy Silver",
    subTitle: "Rank Among Top 1% Freelancers",
    description: [
      "5x your chances of getting hired",
      "Higher Profile listing in Client searches",
      "Workafy Premium Badge",
      "Apply on upto 50 projects per month",
      "Feature in Promotional Emails to Clients",
      "Work in 2 Skill Categories",
      "Add 15 Skills for increased visibility",
      "One Profile review by Workafy",
      "Workafy Priority Support"
    ],
    buttonText: "Subscribe Now",
  },
  {
    Price: "0",
    PlanType: "free",
    title: "Workafy Basic",
    subTitle: "Standard Ranking Among 3,00,000+ Freelancers",
    description: [
      "Basic Profile Listing in Searches",
      "Apply on Upto 10 Projects per month",
      "Work in 1 Skill Category",
      "No Premium Badge",
      "No Direct Client Recommendations",
      "Add 10 Skills for increased visibility",
      "Self Profile Optimization",
      "Standard Email Support",
    ],
    buttonText: "Free",
  },
  {
    Price: "9999",
    PlanType: "gold_yearly",
    title: "Workafy Gold",
    subTitle: "Rank in Top 0.1% Freelancers",
    description: [
      "All Workafy Silver features and more",
      "Highest Listing in Client Searches",
      "20x your chances of getting hired",
      "Direct Recommendations to Clients",
      "Apply on upto 200 Projects/month",
      "Work in All Skill Categories",
      "Featured Profile on Job Posts",
      "Weekly Profile Reviews",
      "Workafy Priority Support",
    ],
    buttonText: "Subscribe Now",
  },
]

const Page = () => {

  const [isYearly, setIsYearly] = useState(false);
  const [planType, setPlanType] = useState();

  const { user } = useUser();
  const [userId, setUserId] = useState('');

  useEffect(() => {
    if (user) {
      // Fetch the userId from user's metadata
      const { publicMetadata } = user;
      const { userId } = publicMetadata;
      setUserId(userId);

      const SetPlanTypeHandler = async () => {
        try {
          const userProfile = await fetchUser(userId);
          setPlanType(userProfile.subscription ? (userProfile.subscription.planType ? userProfile.subscription.planType: "no_plan") : "no_plan");
        }
        catch (error) {
          console.log(error);
        }
      }
      SetPlanTypeHandler();

    }
  }, [user]);


  const checkout = (plan) => {

    // console.log(plan, userId);
    fetch("/api/create-subscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({ plan: plan, customerId: userId }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        console.log(res);
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ session }) => {
        window.location = session.url;
      })
      .catch((e) => {
        console.log(e.error);
      });
  };

  // Filter subscription cards based on isYearly state
  const filteredSubscriptionCardData = isYearly
    ? SubscriptionCardData.slice(3)
    : SubscriptionCardData.slice(0, 3);


  return (
    <>
      <div className="bg-[#f1fcfa] h-[90vh] overflow-y-scroll flex flex-col gap-[20px] items-center text-center p-4 lg:p-8">
        <div>
          <h1 className="text-[20px] md:text-[30px] font-bold text-headings mb-[12px] md:mb-[16px] tracking-[1.5px]">Membership Plans</h1>
          <p className="text-[12px] sm:text-[15px] text-headings  mb-[30px]">Buy Subscription and increase chances of getting clients upto 20x</p>
          <div className=" text-[12px] sm:text-[15px] text-headings  mb-[20px] md:mb-[40px] flex justify-center gap-[20px] items-center">
            <span>Billed Monthly</span>
            <span><ToggleButton onToggle={setIsYearly} /></span>
            <span>Billed Yearly</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
          {filteredSubscriptionCardData.map((data, id) => (
            <div key={id} className="bg-white flex flex-col items-center p-[30px] max-w-[430px] rounded-[15px] shadow-md hover:translate-y-[-10px] hover:transition-transform ">
              <h1 className="text-[20px] md:text-[35px] font-bold text-headings mb-[10px] max-w-[300px]">{data.Price} <span className="text-[12px] sm:text-[15px] font-normal text-[#6b7177]  mb-[10px]">/ {isYearly ? "yearly" : "monthly"}</span></h1>
              <h2 className="text-[14px] md:text-[18px] font-medium text-headings mb-[12px] md:mb-[16px]">{data.title}</h2>
              <h3 className="text-[15px] md:text-[17px] font-bold text-headings mb-[12px] md:mb-[16px]">{data.subTitle}</h3>
              <ul className="text-[12px] sm:text-[15px] text-headings font-medium mb-[30px]">
                {data.description.map((feature, id) => (
                  <li key={id} className="mb-1">{feature}</li>
                ))}
              </ul>
              {planType === "no_plan" ? (
                  <button onClick={() => checkout(Number(data.Price))} className="bg-customGreen py-[14px] md:py-[17px] w-full  text-[13px] md:text-[15px] font-bold text-white rounded-[8px] flex justify-center items-center gap-[10px] hover:bg-white border hover:text-customGreen border-customGreen">{data.buttonText}<span className="text-[20px]"><GoArrowUpRight /></span></button>
                ):(
                  planType === data.PlanType ? (
                    <button className="bg-gray-600 py-[14px] md:py-[17px] w-full  text-[13px] md:text-[15px] font-bold text-white rounded-[8px] flex justify-center items-center gap-[10px] border " disabled>Subscribed<span className="text-[20px]"></span></button>
                  ):(
                    <button className="bg-customGreen py-[14px] md:py-[17px] w-full  text-[13px] md:text-[15px] font-bold text-white rounded-[8px] flex justify-center items-center gap-[10px] border " disabled>{data.buttonText}<span className="text-[20px]"></span></button>
                  )
                  
                )
                
              }

            </div>
          ))}
        </div>
        <Footer />
      </div>

    </>

  )
}

export default Page