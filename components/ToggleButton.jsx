import style from "../style/ToggleButton.module.scss";

const ToggleButton = () => {
    return (
        <label className={style.switch}>
            <input type="checkbox" />
            <span className={`${style.slider} ${style.round}`}></span>
        </label>
    );
}

export default ToggleButton;
