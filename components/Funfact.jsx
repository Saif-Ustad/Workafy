import { GoArrowUpRight } from "react-icons/go";
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';


const Funfact = () => {


    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2, // Change this threshold as needed
    });

    useEffect(() => {
        if (inView) {
            const myNum = document.querySelectorAll('.funfact-section .count');

            myNum.forEach((myCount) => {
                let target_count = myCount.dataset.count;
                let init_count = 0;

                let temp = target_count / 100;

                const updateNumber = () => {
                    if (init_count < target_count) {
                        init_count += temp;
                        myCount.innerText = init_count.toFixed(1);
    
                        // Schedule next update
                        setTimeout(() => {
                            updateNumber();
                        }, 30);
                    }
                    else {
                        myCount.innerText = target_count;
                        return;
                    }
                }
                updateNumber();
            });
        }
    }, [inView]);


    return (
        <section className="funfact-section bg-[#ffede8] py-[80px] sm:py-[100px]" ref={ref}>
            <div className="container  mx-auto px-4 sm:px-6 lg:px-8   flex flex-col md:flex-row justify-between gap-[40px] md:gap-[20px] lg:gap-[50px] md:items-center" >
                <div className="md:max-w-[400px]   lg:w-1/2" data-aos="zoom-in">
                    <h1 className="text-[25px] md:text-[30px] font-bold text-headings mb-[20px] md:mb-[30px] ">Find the talent needed to get your business growing.</h1>
                    <p className="text-[14px] md:text-[15px] text-headings mb-[30px] ">Our diverse pool of professionals is ready to fuel your business growth.</p>
                    <a href="/dashboard" ><div className="py-3 sm:py-4 bg-customDarkGreen max-w-[160px] sm:max-w-[200px] rounded-[5px] text-white font-semibold text-[15px] sm:text-[18px] flex gap-2 items-center justify-center hover:bg-customGreen cursor-pointer">Get Started <span className="text-[20px]"><GoArrowUpRight /></span></div></a>
                </div>
                <div className="flex flex-col sm:flex-row gap-[20px]  lg:w-1/2">
                    <div className="flex flex-col gap-[20px] justify-between sm:max-w-[300px] w-full">
                        <div className="  px-[10px] sm:px-[20px] py-[30px] md:py-[60px] shadow-md bg-white rounded-[15px] flex flex-col items-center text-center" data-aos="fade-down">
                            <h1 className="text-[30px] md:text-[40px] font-bold text-headings mb-[10px] "><span className="count" data-count="4.9">0</span>/5</h1>
                            <p className="text-[14px] md:text-[15px] text-headings ">Clients rate <br /> professionals on Workafy</p>
                        </div>

                        <div className="px-[10px] sm:px-[20px] py-[30px] md:py-[60px] shadow-md  bg-white  rounded-[15px] flex flex-col items-center text-center" data-aos="fade-up">
                            <h1 className="text-[30px] md:text-[40px] font-bold text-headings mb-[10px] " ><span className="count" data-count="98.6">0</span>%</h1>
                            <p className="text-[14px] md:text-[15px] text-headings ">of our customers express satisfaction upon collaborating with our freelancers.</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center sm:max-w-[300px] w-full">
                    <div className="px-[10px] sm:px-[20px] py-[30px] md:py-[60px] shadow-md bg-white  rounded-[15px] flex flex-col items-center text-center" data-aos="fade-left">
                            <h1 className="text-[30px] md:text-[40px] font-bold text-headings mb-[10px] "><span className="count" data-count="99.4">0</span>%</h1>
                            <p className="text-[14px] md:text-[15px] text-headings ">of projects completed on time.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Funfact