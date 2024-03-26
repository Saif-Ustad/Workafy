

import style from "../style/Work.module.scss"

import { IoIosArrowRoundForward } from "react-icons/io";

import ProjectCard from "../components/ProjectCard"

import Slider from "react-slick";

import { IoIosArrowRoundBack } from "react-icons/io";



const ProjectsData = [
    {
        state: "United States",
        title: "YouTube Video Editor for an Agency",
        description: "We are an established digital agency specializing in YouTube content creation and marketing, and we are...",
        budget: "$350"
    },
    {
        state: "United States",
        title: "Developer needed to build a Web-based app",
        description: "Fully developed concept with some written code. I already have mobile app code for iOS and Android that ...",
        budget: "$2500"
    },
    {
        state: "United States",
        title: "Cryptocurrency token contract",
        description: "Experienced person to create the smart contract and presale website for a meme token...",
        budget: "$200"
    },
    {
        state: "United States",
        title: "ChatGPT Consulting",
        description: "We are seeking a highly skilled and innovative ChatGPT Developer to join our team. As a ChatGPT Developer, you will be...",
        budget: "$2000"
    },
    {
        state: "United States",
        title: "YouTube Video Editor for an Agency",
        description: "We are an established digital agency specializing in YouTube content creation and marketing, and we are...",
        budget: "$350"
    },
    {
        state: "United States",
        title: "Developer needed to build a Web-based app",
        description: "Fully developed concept with some written code. I already have mobile app code for iOS and Android that ...",
        budget: "$2500"
    },
    {
        state: "United States",
        title: "Cryptocurrency token contract",
        description: "Experienced person to create the smart contract and presale website for a meme token...",
        budget: "$200"
    },
    {
        state: "United States",
        title: "ChatGPT Consulting",
        description: "We are seeking a highly skilled and innovative ChatGPT Developer to join our team. As a ChatGPT Developer, you will be...",
        budget: "$2000"
    },
]

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return <div className={`${style.CustomPrevArrow} `} onClick={onClick}><IoIosArrowRoundBack /></div>;
};

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return <div className={`${style.CustomNextArrow}`}  onClick={onClick}><IoIosArrowRoundForward /></div>;
};


const Work = () => {

    

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        swipeToSlide: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

  


    return (
        <section id="Work-section">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8  my-[50px] lg:my-[120px]" >
                <div className="flex flex-col lg:flex-row  justify-between lg:items-end mb-[25px] lg:mb-[60px]" data-aos="fade-right">
                    <div className="mb-6 lg:mb-0">
                        <h1 className="text-[25px] md:text-[30px] font-bold text-headings mb-[10px] sm:mb-[15px]">Our Latest Projects on Workafy</h1>
                        <p className="text-[14px] md:text-[15px] text-headings  ">Tap on international projects from anywhere, anytime.</p>
                    </div>
                    <div className="gap-3 mb-5 lg:mb-0 ">
                        <a href="/dashboard" className="flex items-center cursor-pointer">
                            <p className="text-[14px] md:text-[15px] font-bold text-headings">Browse All</p>
                            <span className="text-[22px] md:text-[25px]  text-headings"><IoIosArrowRoundForward /></span>
                        </a>
                    </div>

                </div>

                <div className="slider-container" data-aos="fade-left">
                    <Slider {...settings} className="gap-[20px]">
                        {ProjectsData.map((data, id) => (
                            <div key={id} className="px-2">
                                <ProjectCard state={data.state} title={data.title} description={data.description} budget={data.budget} />
                            </div>
                        ))}
                    </Slider>
                </div>

                




            </div>
        </section>
    )
}

export default Work