import Head from "next/head"
import styles from "../styles/Start.module.css"
import React, { useState, useEffect } from "react"


const Start = () => {

    const [textTag, setTag] = useState(<h1 className={styles.heading}>Welcome to our online store!!!</h1>);
    const [buttonTag, setButton] = useState(<button className={styles.button1}><a>CLICK ME!!!</a></button>)
    const [img, setImg] = useState(<img src="laptop_sa_senkom.svg" className={styles.laptop}></img>)

    useEffect(() => {
        Animation()
    });

    function Animation() {
        setTag(<h1 className={styles.fadeMove}>Welcome to our online store!!!</h1>)
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
            </div>
            <br></br>
            <div className={styles.section1}>
                <p className={styles.new}>THE NEW</p>
                <p className={styles.center}>RAZER BLADE 15</p>
                <br></br>
                <h1 className={styles.center}>POWER.PERFORMANCE.PERFECTION.</h1>
                <br></br>
                <div className={styles.logos}>
                    <img src="icon-intel-core-i9.png"></img>
                    <img src="logo-nvidia-geforce-rtx.png"></img>
                </div>
                <br></br>
                <div className={styles.section1_1}>
                    <img src="laptop_sa_senkom.svg" className={styles.laptop}></img>
                </div>
                <p className={styles.text}>Just when you thought a gaming laptop couldn’t be any more beastly—introducing the new Razer Blade 15, now available with the latest 12th Gen Intel® Core™ processor (14-core) and NVIDIA® GeForce RTX™ 30 Series Laptop GPUs for the most powerful gaming laptop graphics ever. With your choice of a Full HD 360Hz, QHD 240Hz (G-SYNC), or new UHD 144Hz display, enjoy unrivalled performance packed into the thinnest 15” RTX gaming laptop chassis ever.</p>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className={styles.frame}>
                <iframe className={styles.iframe} width="560" height="315" src="https://www.youtube.com/embed/54_Zsng1uFs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div className={styles.section2}>
                <img src= "laptop.jpg" className={styles.iframe}></img>
                <p className= {styles.gamerText}></p>
                
            </div>
        </div>
    )

}


export default Start
