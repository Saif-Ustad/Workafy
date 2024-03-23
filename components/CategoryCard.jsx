import style from "../style/CategoryCard.module.scss";

const CategoryCard = ({icon, skillsCount, category}) => {
    return (
        <div className="max-w-[580px]">
            <div className={`flex gap-[40px] sm:gap-[30px] py-[30px] px-[30px]  border border-[#e9e9e9] hover:border-black ${style.shadow_right_bottom} transition duration-300 ease-in-out`}>
                <span className="text-[35px] sm:text-[40px] text-headings relative">
                    {icon}
                    <div className={style.category_card_icon_circle}></div>
                </span>
                
                <div>
                    <p className="text-[14px] sm:text-[15px] text-headings  pb-2 ">{skillsCount} skills</p>
                    <h2 className="text-[16px] sm:text-[18px] text-headings font-medium pb-1 sm:pb-2">{category}</h2>
                    
                </div>
            </div>

        </div>
    )
}



export default CategoryCard


