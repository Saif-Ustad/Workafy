
import style from "../style/Loading2.module.scss"

const Loading2 = () => {
    return (
        <div className={style.Loader2_container}>
            <div className={style.wrap}>
                <div className={style.loading}>
                    <div className={style.bounceball}></div>
                    <div className={style.text}>NOW LOADING</div>
                </div>
            </div>
        </div>

    )
}

export default Loading2