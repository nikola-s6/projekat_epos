import Head from "next/head"
import styles from "../styles/Start.module.css"
import React, {useState, useEffect} from "react"


const Start = () => {

    const [text, setText] = useState('Welcome to our online store!!!')
    const [textTag, setTag] = useState(<h1>{text}</h1>);

    function Animation(){
        setTag(<h1 className={styles.fadeMove}>{text}</h1>)
    }

    return (
        <div>
            <Head>
                <title>Razer</title>
                <link rel="icon" href="/razer_logo.svg" />
            </Head>
            <div className={styles.body}>
                <button><a>CLICK ME!!!</a></button>
                 <div className = {styles.section}>

		             {textTag}
	             </div>
            </div>
        </div>
    )

}


export default Start
