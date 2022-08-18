import Head from "next/head"
import styles from "../styles/Order.module.css"
import orderContract from "../blockchain/contractExport"
import { useEffect, useState } from "react"
import Web3 from 'web3'
import { useForm } from 'react-hook-form';


const Order = () => {
    const [web3, setWeb3] = useState(null)
    const [contract, setContract] = useState(null)
    const [remaining, setRemaining] = useState("")


    useEffect(() => {
        if (contract) setRemainingHandler()
    });

    const setRemainingHandler = async () => {
        const _inventory = await contract.methods.getReserve().call()
        setRemaining(_inventory)
    }

    const connectWalletHandler = async () => {
        if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
            try {
                if (contract == null || web3 == null) {
                    await window.ethereum.request({ method: "eth_requestAccounts" })
                    const _web3 = new Web3(window.ethereum)
                    setWeb3(_web3)
                    const _contract = orderContract(_web3)
                    setContract(_contract)
                    alert("Wallet Succesfully Connected")
                } else {
                    alert("Wallet Already Connected")
                }
            } catch (error) {
                console.log(error.message)
            }
        }
    }

    const orderHandler = async () => {
        if (contract == null || web3 == null) {
            alert("Cannot order until you connect your wallet")
        }
        setRemaining("nikfadfadsas")
        // setRemainingHandler()
        // console.log({ remaining })
    }

    
    const { register, handleSubmit, setErrors } = useForm();

    const errors = {
        "name": [],
        "lastName": [],
        "email": [],
        "addres": []
    }

    const onSubmit = (data) => {
        console.log(errors);
        
        validateName(data.name);
        validateLastName(data.lastName);
        validateEmail(data.email);
        validateAddress(data.address);
    
        console.log(errors);
        
    };

    function validateName (name) {

        if(name.length<4)
            errors["name"] = ["Name can not be shorter than 5 characters "]
            
        
    }

    function validateLastName(lastName){

         if(lastName.length<4)
             errors["lastName"] = ["Last name can not be shorter than 5 characters "]
       
    }

    function validateEmail(email){
        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
            errors["email"] = ["Incorrect email"]
    }

    function validateAddress(address){

        if(address.length<4)
            errors["address"] = ["Address can not be shorter than 5 characters "]
         
    }

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
                            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                <input {...register('name')} id = "name" type='text' placeholder='Enter your name:' className="field name"></input>
                                <input {...register('lastName')} id = "lastName" type='text' placeholder='Enter your last name:' className="field lastName"></input>
                                <input {...register('email')} id = "email" type='text' placeholder='Enter your e-mail:' className="field email"></input>
                                <input {...register('address')} id = "address" type='text' placeholder='Enter delivery address:' className="field address"></input>
                                <input type = "submit"></input>
                            </form>
                            <section className="section">
                                <button className="button connect" onClick={connectWalletHandler}>Connect Wallet</button>
                                <button className="button order" onClick={orderHandler}>Order</button>
                                <p className="state">Only {remaining} left</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order