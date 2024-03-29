

import styles from "../../style/HomePageStyles/Hero.module.scss";
// import  "../style/slick_dots_hero.scss";


import Image from "next/image"

import { IoSearchOutline } from 'react-icons/io5';

import Slider from "react-slick";


import Button from '../Button';


const HeroData = [

    { link: '/Images/Hero-img-1.jpg', profile_name: "Tulika Sharma", profession: "AI Artist" },
    { link: '/Images/Hero-img-2.jpg', profile_name: "Yash Singh", profession: "Web Developer" },
    { link: '/Images/Hero-img-3.jpg', profile_name: "Nidhi Sharma", profession: "Business Development Manager" },
];



const Hero = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipeToSlide: true,
        prevArrow: <></>,
        nextArrow: <></>,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true
        

    };

    return (
        <div id="hero-section" className="container relative mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between gap-[60px] items-center pt-[30px] md:pt-[60px]">
            <div className="w-full lg:w-[60%]">
                <h1 className="font-prata text-[40px] md:text-[50px] font-semibold text-headings mb-7">Anything For You</h1>
                <p className="text-[14px] md:text-[15px] text-body-text mb-7">Find experts for your work | Get work and do it from anywhere!</p>
                <div className={`${styles.searchBar} flex flex-col md:flex-row gap-5 md:gap-0 justify-between py-5 px-6 border-black border rounded-md mb-7 lg:max-w-[650px]`} data-aos="fade-up">
                    <div className="flex justify-between items-center gap-4 max-w-[400px] w-full">
                        <IoSearchOutline className="text-[20px] hover:text-customGreen hover:cursor-pointer" />
                        <input type="text" placeholder="Try 'Video Editor' or 'Build a Website'" className="border-none focus:outline-none placeholder-[#1f4b3e] w-full " style={{ fontSize: '15px' }} />
                    </div>
                    <Button buttonText="Search" btnColor="customDarkGreen" />
                </div>
                <p className="text-[14px] md:text-[15px] text-headings" data-aos="fade-up">Popular Searches: AI Artist, Video Editor, Web Designer, Build a Website, Logo Design</p>
            </div>
            <div className="w-full lg:w-[40%]">
                <div className={`${styles.green_rectangle} w-full lg:w-auto mx-auto relative slider-container  ${styles.custom_slick_dot}`}>
                    <Slider {...settings}  >
                        {HeroData.map((data, id) => (
                            <div key={id} className="relative">
                                <Image
                                    src={data.link}
                                    alt="image"
                                    className="w-full "
                                    width={580}
                                    height={580}
                                />
                                <div className="absolute top-0 left-0 p-4">
                                    <h3 className="text-white font-medium">{data.profile_name}</h3>
                                    <h2 className="text-white font-medium">{data.profession}</h2>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* floating images */}
            <>
                <Image src="/Images/hero-floating-1.png" alt="floating-img" width={100} height={100} className={` ${styles.spin_right}  hidden lg:block absolute left-[-8%] top-[3%]`} />
                <Image src="/Images/hero-floating-2.png" alt="floating-img" width={100} height={100} className={` ${styles.bounceY} hidden lg:block absolute left-[40%] top-[10%]`} />
            </>
        </div>
    )

}

export default Hero