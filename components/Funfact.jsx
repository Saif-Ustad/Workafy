import { GoArrowUpRight } from "react-icons/go";


const Funfact = () => {
    return (
        <section className="funfact-section bg-[#ffede8] py-[80px] sm:py-[100px]">
            <div className="container  mx-auto px-4 sm:px-6 lg:px-8   flex flex-col md:flex-row justify-between gap-[40px] md:gap-[20px] lg:gap-[50px] md:items-center" >
                <div className="md:max-w-[400px]   lg:w-1/2">
                    <h1 className="text-[25px] md:text-[30px] font-bold text-headings mb-[20px] md:mb-[30px] ">Find the talent needed to get your business growing.</h1>
                    <p className="text-[14px] md:text-[15px] text-headings mb-[30px] ">Our diverse pool of professionals is ready to fuel your business growth.</p>
                    <a href="/dashboard" ><div className="py-3 sm:py-4 bg-customDarkGreen max-w-[160px] sm:max-w-[200px] rounded-[5px] text-white font-semibold text-[15px] sm:text-[18px] flex gap-2 items-center justify-center hover:bg-customGreen cursor-pointer">Get Started <span className="text-[20px]"><GoArrowUpRight /></span></div></a>
                </div>
                <div className="flex flex-col sm:flex-row gap-[20px]  lg:w-1/2">
                    <div className="flex flex-col gap-[20px] justify-between sm:max-w-[300px] w-full">
                        <div className="  px-[10px] sm:px-[20px] py-[30px] md:py-[60px] shadow-md bg-white rounded-[15px] flex flex-col items-center text-center">
                            <h1 className="text-[30px] md:text-[40px] font-bold text-headings mb-[10px] ">4.9/5</h1>
                            <p className="text-[14px] md:text-[15px] text-headings ">Clients rate <br /> professionals on Workafy</p>
                        </div>

                        <div className="px-[10px] sm:px-[20px] py-[30px] md:py-[60px] shadow-md  bg-white  rounded-[15px] flex flex-col items-center text-center">
                            <h1 className="text-[30px] md:text-[40px] font-bold text-headings mb-[10px] ">98.6%</h1>
                            <p className="text-[14px] md:text-[15px] text-headings ">of our customers express satisfaction upon collaborating with our freelancers.</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center sm:max-w-[300px] w-full">
                    <div className="px-[10px] sm:px-[20px] py-[30px] md:py-[60px] shadow-md bg-white  rounded-[15px] flex flex-col items-center text-center">
                            <h1 className="text-[30px] md:text-[40px] font-bold text-headings mb-[10px] ">99.4%</h1>
                            <p className="text-[14px] md:text-[15px] text-headings ">of projects completed on time.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Funfact