import Head from "next/head"
import styles from "../styles/Order.module.css"


const Order = () => {
    return (
        <div>
            <Head>
                <title>Razer</title>
                <link rel="icon" href="/razer_logo.svg" />
            </Head>
            <div className={styles.body}>
                <div className="background2">
                    <div className="left">
                        <img src="laptop_sa_senkom.svg" className="picture"></img>
                        <div className="texts">
                            <p className="mainText">Razer Laptop 16'</p>
                            <p className="priceText">Price: 0.1 eth</p>
                        </div>
                    </div>


                    <div className="right">
                        <div className="container">
                            <img src="razer_logo.svg" className="logo"></img>
                            <form className="form">
                                <input type='text' placeholder='Enter your name:' className="field name"></input>
                                <input type='text' placeholder='Enter your last name:' className="field lastName"></input>
                                <input type='text' placeholder='Enter your e-mail:' className="field email"></input>
                                <input type='text' placeholder='Enter delivery address:' className="field address"></input>
                            </form>
                            <section className="section">
                                <button className="button connect">Connect Wallet</button>
                                <button className="button order">Order</button>
                                <p className="state">Only 78 left</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order