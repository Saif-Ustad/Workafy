

const FeatureCard = ({icon, title, text}) => {
  return (
    <div>
        <div className="text-headings text-[35px] sm:text-[45px] pb-3">{icon}</div>
        <h2 className="text-[16px] sm:text-[18px] text-headings font-medium pb-2">{title}</h2>
        <p className="text-[14px] sm:text-[15px] text-headings  pb-2 leading-[1.85]">{text}</p>
    </div>
  )
}

export default FeatureCard