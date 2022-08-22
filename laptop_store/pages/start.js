import Head from "next/head"
import styles from "../styles/Start.module.css"
import React, { useState, useEffect } from "react"
import Link from 'next/link'


const Start = () => {

    const [textTag, setTag] = useState(<h1 className={styles.heading}>Welcome to our online store!!!</h1>);
    const [buttonTag, setButton] = useState(<button className={styles.button1}><Link href="/order">ORDER NOW</Link></button>)
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

            <style jsx global>{`
                 body {
                        margin: 0;
                        padding: 0;
                    }
            `}</style>

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
                <iframe className={styles.iframe} width="560" height="315" src="https://www.youtube.com/embed/54_Zsng1uFs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            <div className={styles.section2}>
                <div className={styles.images}>
                    <img src="levi_laptop.png" className={styles.laptop_left}></img>
                    <img src="desni_laptop.png" className={styles.laptop_right}></img>
                </div>
                <div className={styles.images}>
                    <div className={styles.left_text}>NEW RAZER BLADE 15</div>
                    <div className={styles.right_text}>BASE MODEL</div>
                    <br></br>
                    <br></br>
                </div>
                <div className={styles.table}>
                    <hr className={styles.line}></hr>

                    <div className={styles.row}>
                        <div className={styles.os}>OS</div>
                        <div className={styles.left_text_table}>Windows 11 Home</div>
                        <div className={styles.right_text_table}>Windows 10 Home - Free Upgrade to Windows 11*</div>
                    </div>

                    <hr className={styles.line}></hr>

                    <div className={styles.row}>
                        <div className={styles.os}>Processor</div>
                        <div className={styles.left_text_table}>12th Gen Intel® Core™ i9 Processor (14-core)</div>
                        <div className={styles.right_text_table}>6-Core Intel® Core™ i7</div>
                    </div>

                    <hr className={styles.line}></hr>

                    <div className={styles.row}>
                        <div className={styles.os}>Graphics</div>
                        <div className={styles.left_text_table}>Up to GeForce RTX™ 3080 Ti Laptop GPU</div>
                        <div className={styles.right_text_table}>Up to GeForce RTX™ 3070 Laptop GPU</div>
                    </div>

                    <hr className={styles.line}></hr>

                    <div className={styles.row}>
                        <div className={styles.os}>Display</div>
                        <div className={styles.left_text_table}>FHD 360Hz, QHD 240Hz or 4K 144Hz</div>
                        <div className={styles.right_text_table}>FHD 144Hz or QHD 165Hz</div>
                    </div>

                    <hr className={styles.line}></hr>

                    <div className={styles.row}>
                        <div className={styles.os}>Storage</div>
                        <div className={styles.left_text_table}>1TB PCIe Extra M.2 PCIe Slot</div>
                        <div className={styles.right_text_table}>512GB PCIe Extra M.2 PCIe Slot</div>
                    </div>

                    <hr className={styles.line}></hr>

                    <div className={styles.row}>
                        <div className={styles.os}>Memory</div>
                        <div className={styles.left_text_table}>16GB or 32GB RAM (DDR5 4800MHz)t</div>
                        <div className={styles.right_text_table}>16GB RAM (DDR4 3200MHz)</div>
                    </div>

                    <hr className={styles.line}></hr>

                    <div className={styles.row}>
                        <div className={styles.os}>Cooling</div>
                        <div className={styles.left_text_table}>Vapor Chamber</div>
                        <div className={styles.right_text_table}>Advanced Heat pipe</div>
                    </div>

                    <hr className={styles.line}></hr>

                    <div className={styles.row}>
                        <div className={styles.os}>Keyboard</div>
                        <div className={styles.left_text_table}>Per-key RGB</div>
                        <div className={styles.right_text_table}>Single-zone RGB</div>
                    </div>

                    <hr className={styles.line}></hr>
                </div>
            </div>

            <div className={styles.gamer}>

                <div className={styles.overlay}>
                    <div>
                        <h1 className={styles.intel}>12th Gen Intel® Core™ i9 Processor (14-core)</h1>
                    </div>
                    <div>
                        <p className={styles.intel_text}>More Cores, More Performance</p>
                    </div>
                    <div className={styles.intel_div}>
                        <p className={styles.intel_text}>Experience cutting-edge power with the newly released Intel® Core™ i7 processor, or upgrade it to a Core i9 for unrivalled performance to take on the most demanding gaming and creative tasks. Intel’s 12th Gen processors bring a revolutionary new design with a performance hybrid architecture that combines performance-cores with efficient-cores, offering users the freedom to chat, browse, stream, edit, record, and play. Integrated Killer® Wi-Fi 6E AX16900 (Gig+) delivers the next generation Wi-Fi technology with packet prioritization for a better gaming experience.</p>
                    </div>

                </div>

            </div>

            <div className={styles.button}>
                {buttonTag}
            </div>



        </div>
    )

}


export default Start
