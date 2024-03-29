import FeatureCard from "./FeatureCard";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { RiCustomerService2Line } from "react-icons/ri";


const FeatureCardData = [
    {   
        icon:<LiaLaptopCodeSolid />,
        title:"Post a Job",
        text:"Getting started is a breeze. Post your job for free with a simple title and description, and watch as the best talent comes to you.", 
    },
    {   
        icon:<HiMiniCodeBracket />,
        title:"Choose Freelancers",
        text:"Browse through our extensive network of over 250,000 vetted freelancers across 5000+ skills. Hire eXperts for your project with ease.", 
    },
    {   
        icon:<AiOutlineSafetyCertificate />,
        title:"Pay safely",
        text:"Enjoy peace of mind with our secure payment system. Pay for the work you approve, ensuring satisfaction and safety for both parties.", 
    },
    {   
        icon:<RiCustomerService2Line />,
        title:"We're here to help",
        text:"At Workafy, we're dedicated to your success. Our support team is always ready to assist, ensuring a smooth and satisfying experience.", 
    }

]


const Feature = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8  mt-[100px] sm:mt-[150px] " data-aos="fade-up">
        <div>
            <h1 className="text-[25px] md:text-[30px] font-semibold text-headings mb-2">Need anything done?</h1>
            <p className="text-[14px] md:text-[15px] text-headings mb-8 md:mb-[60px]">Most viewed and all-time top-selling services</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 " >
            {FeatureCardData.map((data, id) => (
                <FeatureCard key={id} icon={data.icon} title={data.title} text={data.text} />
            ))}
        </div>
    </div>
  )
}

export default Feature