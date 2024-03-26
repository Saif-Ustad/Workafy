import style from "../style/Loading.module.scss"

const Loading = () => {
    return (
        <div className={style.Loading_container}>
            <div id={style.loader}>
                <div id={style.box}></div>
                <div id={style.hill}></div>
            </div>
        </div>

    )
}

export default Loading