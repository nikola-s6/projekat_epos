import Head from "next/head"
import styles from "../styles/Start.module.css"
import React, { useState, useEffect } from "react"




const Start = () => {

    const [textTag, setTag] = useState(<h1 className={styles.heading}>Welcome to our online store!!!</h1>);
    const [buttonTag, setButton] = useState(<button onClick={Animation} className={styles.button1}><a>CLICK ME!!!</a></button>)
    const [img, setImg] = useState(<img src="laptop_sa_senkom.svg" className={styles.laptop}></img>)

    useEffect(() => {
        Animation()
    });

    function Animation() {
        setButton(<button className={styles.move}><a>CLICK ME!!!</a></button>)
        setTag(<h1 className={styles.fadeMove}>Welcome to our online store!!!</h1>)
    }

    function AnimationImg() {
        setImg(<img src="laptop_sa_senkom.svg" className={styles.fromBottom}></img>)
    }

    return (
        <div>
            <Head>
                <title>Razer</title>
                <link rel="icon" href="/razer_logo.svg" />
            </Head>
            <div className={styles.body}>
                <div className={styles.section}>
                    {textTag}
                </div>
                {buttonTag}
            </div>
            <div className={styles.section1}>
                {img}
            </div>
        </div>
    )

}


export default Start
