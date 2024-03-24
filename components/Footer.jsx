import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="container mx-auto  px-4 sm:px-6 lg:px-8 mt-[15px] ">
        <div className="flex flex-col lg:flex-row items-center justify-between py-6 border-b border-gray-300 gap-[15px] lg:gap-[80px]" >
          <ul className="flex  gap-[15px] md:gap-[25px] text-[15px] sm:text-[16px] text-headings font-medium mb-2">
            <li><a href="/">Terms of Service</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">User Agreement</a></li>
            <li><a href="/">Copyright Infrigment Policy</a></li>
          </ul>
          <ul className="flex  gap-[10px] md:gap-[25px] items-center text-[16px] sm:text-[18px] text-headings font-medium">
            <li><a href="/">Follow us</a></li>
            <li><a href="/"><FaFacebookF /></a></li>
            <li><a href="/"><FaSquareXTwitter /></a></li>
            <li><a href="/"><FaInstagram /></a></li>
            <li><a href="/"><FaLinkedinIn /></a></li>
            <li><a href="/"><FaYoutube /></a></li>
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 py-[60px] gap-[40px] border-b border-gray-300">
          <ul className="flex flex-col gap-[10px] text-[14px] md:text-[15px] text-body-text">
            <li className="text-[15px] sm:text-[16px] text-headings font-medium mb-3"><a href="/">About</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Connect</a></li>
            <li><a href="/">How it Works</a></li>
            <li><a href="/">Career</a></li>
            <li><a href="/">Blogs</a></li>
            <li><a href="/">How to apply?</a></li>

          </ul>
          <ul className="flex flex-col gap-[10px] text-[14px] md:text-[15px] text-body-text">
            <li className="text-[15px] sm:text-[16px] text-headings font-medium mb-3"><a href="/">Useful Links</a></li>
            <li><a href="/">Trust & Safety</a></li>
            <li><a href="/">Fraud Prevention</a></li>
            <li><a href="/">Report a Bug</a></li>
            <li><a href="/">Feedback</a></li>
            <li><a href="/">Code of Conduct</a></li>
            <li><a href="/">FAQs</a></li>
          </ul>


          <ul className="flex flex-col gap-[10px] text-[14px] md:text-[15px] text-body-text">
            <li className="text-[15px] sm:text-[16px] text-headings font-medium mb-3"><a href="/">Support</a></li>
            <li><a href="/">Find Work</a></li>
            <li><a href="/">Hire eXperts</a></li>
            <li><a href="/">Fees & Charges</a></li>
            <li><a href="/">Refund & Cancellation</a></li>
            <li><a href="/">Help & Support</a></li>
            <li><a href="/">Cookie Policy</a></li>
          </ul>

          <div>
            <h2 className="text-[15px] sm:text-[16px] text-headings font-medium mb-3">Subscribe</h2>
            <div className="border border-gray-300 px-6 py-4 bg-white grid grid-cols-2 "  >
              <input type="text" className="border-none outline-none text-body-text" placeholder="Your email address" />
              <span className="flex justify-end">Send</span>
            </div>
          </div>

        </div>

        <div className="py-6">
          <h2 className="text-[14px] md:text-[15px] text-headings">© 2024 Freelancing. All rights reserved.</h2>
        </div>
      </div>
    </section>
  )
}

export default Footer