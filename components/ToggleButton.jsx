import { useState } from "react";
import style from "../style/ToggleButton.module.scss";

const ToggleButton = ({ onToggle }) => {
    const [isYearly, setIsYearly] = useState(false);

    const handleToggle = () => {
        setIsYearly((prevIsYearly) => !prevIsYearly);
        onToggle(!isYearly);
    };

    return (
        <label className={style.switch}>
            <input type="checkbox" onChange={handleToggle} />
            <span className={`${style.slider} ${style.round}`}></span>
        </label>
    );
};

export default ToggleButton;
