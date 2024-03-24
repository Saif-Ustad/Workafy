"use client"

import style from "../style/Work.module.scss"

import { IoIosArrowRoundForward } from "react-icons/io";

import ProjectCard from "../components/ProjectCard"

import { IoIosArrowRoundBack } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const ProjectsData = [
    {
        state:"United States",
        title:"YouTube Video Editor for an Agency",
        description:"We are an established digital agency specializing in YouTube content creation and marketing, and we are...",
        budget:"$350"
    },
    {
        state:"United States",
        title:"Developer needed to build a Web-based app",
        description:"Fully developed concept with some written code. I already have mobile app code for iOS and Android that ...",
        budget:"$2500"
    },
    {
        state:"United States",
        title:"Cryptocurrency token contract",
        description:"Experienced person to create the smart contract and presale website for a meme token...",
        budget:"$200"
    },
    {
        state:"United States",
        title:"ChatGPT Consulting",
        description:"We are seeking a highly skilled and innovative ChatGPT Developer to join our team. As a ChatGPT Developer, you will be...",
        budget:"$2000"
    },
    {
        state:"United States",
        title:"YouTube Video Editor for an Agency",
        description:"We are an established digital agency specializing in YouTube content creation and marketing, and we are...",
        budget:"$350"
    },
    {
        state:"United States",
        title:"Developer needed to build a Web-based app",
        description:"Fully developed concept with some written code. I already have mobile app code for iOS and Android that ...",
        budget:"$2500"
    },
    {
        state:"United States",
        title:"Cryptocurrency token contract",
        description:"Experienced person to create the smart contract and presale website for a meme token...",
        budget:"$200"
    },
    {
        state:"United States",
        title:"ChatGPT Consulting",
        description:"We are seeking a highly skilled and innovative ChatGPT Developer to join our team. As a ChatGPT Developer, you will be...",
        budget:"$2000"
    },
]

const Work = () => {

    const [scrollX, setScrollX] = useState(0);
    const [startX, setStartX] = useState(null);
    const ref = useRef(null);

    const handleTouchStart = (e) => {
        const firstTouch = e.touches[0];
        setStartX(firstTouch.clientX);
    };

    const handleTouchMove = (e) => {
        if (startX === null) return;
        const currentX = e.touches[0].clientX;
        const diff = startX - currentX;
        setScrollX((prevScrollX) => prevScrollX + diff);
        setStartX(currentX);
    };

    const handleTouchEnd = () => {
        setStartX(null);
    };

    const handleMouseDown = (e) => {
        setStartX(e.clientX);
    };

    const handleMouseMove = (e) => {
        if (startX === null) return;
        const currentX = e.clientX;
        const diff = startX - currentX;
        setScrollX((prevScrollX) => prevScrollX + diff);
        setStartX(currentX);
    };

    const handleMouseUp = () => {
        setStartX(null);
    };

    useEffect(() => {
        const handleMove = (e) => {
            if (startX !== null) {
                e.preventDefault();
                handleMouseMove(e);
            }
        };

        const handleUp = () => {
            handleMouseUp();
            document.removeEventListener('mousemove', handleMove);
            document.removeEventListener('mouseup', handleUp);
        };

        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', handleUp);

        return () => {
            document.removeEventListener('mousemove', handleMove);
            document.removeEventListener('mouseup', handleUp);
        };
    }, [startX, handleMouseMove, handleMouseUp]);

    useEffect(() => {
        let animationFrameId;
        const animateScroll = () => {
            if (ref.current) {
                ref.current.scrollTo({ left: scrollX, behavior: 'auto' });
            }
            animationFrameId = requestAnimationFrame(animateScroll);
        };
        animateScroll();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [scrollX]);

    return (
        <section className="Work-section">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8  my-[50px] lg:my-[120px]">
                <div className="flex flex-col lg:flex-row  justify-between lg:items-end mb-[25px] lg:mb-[60px]">
                    <div className="mb-6 lg:mb-0">
                        <h1 className="text-[25px] md:text-[30px] font-bold text-headings mb-[10px] sm:mb-[15px]">Our Latest Projects on Workafy</h1>
                        <p className="text-[14px] md:text-[15px] text-headings  ">Tap on international projects from anywhere, anytime.</p>
                    </div>
                    <div className="gap-3 mb-5 lg:mb-0 ">
                        <a href="/" className="flex items-center cursor-pointer">
                            <p className="text-[14px] md:text-[15px] font-bold text-headings">Browse All</p>
                            <span className="text-[22px] md:text-[25px]  text-headings"><IoIosArrowRoundForward /></span>
                        </a>
                    </div>

                </div>

                <div
                    ref={ref}
                    className={`${style.corousel}  mb-[20px] cursor-grab`}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                >
                    {ProjectsData.map((data, id) => (
                        <div key={id} >
                            <ProjectCard state={data.state} title={data.title} description={data.description} budget={data.budget}/>
                        </div>
                    ))}
                </div>

                {/* nav-icons */}
                <div className="flex gap-5 text-[30px] justify-center items-center">
                    <span className="cursor-pointer" onClick={() => setScrollX(scrollX - 500)}><IoIosArrowRoundBack /></span>
                    <span className="text-[20px]"><GoDotFill /></span>
                    <span className="cursor-pointer" onClick={() => setScrollX(scrollX + 500)}><IoIosArrowRoundForward /></span>
                </div>



            </div>
        </section>
    )
}

export default Work