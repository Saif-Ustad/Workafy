import style from "../style/ProjectCard.module.scss"

import { FaRegStar } from "react-icons/fa";

const ProjectCard = ({state, title, description, budget}) => {
  return (
    <div className={` p-[35px] border border-[#e9e9e9] hover:border-black rounded-md ${style.shadow_right_bottom} transition duration-300 ease-in-out mb-[20px]`}>
        <div className="flex justify-between text-[14px] md:text-[16px] text-customGreen pb-[20px]">
            <h4 >{state}</h4>
            <span className="text-[15px] md:text-[18px]"><FaRegStar /></span>
        </div>
        <h2 className="text-[16px] md:text-[18px] font-medium  text-headings mb-[15px] sm:mb-[20px]">{title}</h2>
        <p className="text-[14px] md:text-[14px] text-body-text leading-[1.75] mb-[15px] sm:mb-[20px]">{description}</p>
        <h3 className="text-[16px] md:text-[18px] font-medium  text-headings">Budget : {budget}</h3>
    </div>
  )
}

export default ProjectCard