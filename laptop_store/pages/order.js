import Head from "next/head"
import styles from "../styles/Order.module.css"
import orderContract from "../blockchain/contractExport"
import { useEffect, useState } from "react"
import Web3 from 'web3'
import emailjs from '@emailjs/browser';


const Order = () => {
    const [web3, setWeb3] = useState(null)
    const [contract, setContract] = useState(null)
    const [remaining, setRemaining] = useState("")

    const [nameErrorMessage, setNameErrorMessage] = useState("")
    const [lastNameErrorMessage, setLastNameErrorMessage] = useState("")
    const [emailErrorMessage, setEmailErrorMessage] = useState("")
    const [addressErrorMessage, setAddressErrorMessage] = useState("")

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")

    const updateName = event => {
        setName(event.target.value)
    }
    const updateLastName = event => {
        setLastName(event.target.value)
    }
    const updateEmail = event => {
        setEmail(event.target.value)
    }
    const updateAddress = event => {
        setAddress(event.target.value)
    }

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
                await window.ethereum.request({ method: "eth_requestAccounts" })
                const _web3 = new Web3(window.ethereum)
                setWeb3(_web3)
                const _contract = orderContract(_web3)
                setContract(_contract)
                alert("Wallet Connected")
            } catch (error) {
                console.log(error.message)
            }
        } else {
            alert("You must have Metamask plugin installed!")
        }
    }


    const orderHandler = async () => {
        if (contract == null || web3 == null) {
            alert("Cannot order until you connect your wallet")
            return
        }
        if (!valid()) {
            setErrorMessages()
            return
        }
        setErrorMessages()

        const accounts = await web3.eth.getAccounts()
        try {
            await contract.methods.order(name, lastName, email, address).send({
                from: accounts[0],
                value: web3.utils.toWei('0.3', 'ether')
            })
        } catch (error) {
            console.log(error.message)
        }

        setRemainingHandler()
        sendEmails()
        alert("Successfully Ordered")
    }

    function sendEmails() {
        var templateParams = {
            name: name,
            lastName: lastName,
            email: email,
            address: address
        }

        emailjs.send(process.env.NEXT_PUBLIC_SERVICE, process.env.NEXT_PUBLIC_TEMPLATE_CUSTOMER, templateParams, process.env.NEXT_PUBLIC_KEY)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text)
            }, function (error) {
                console.log('FAILED...', error)
            })

        emailjs.send(process.env.NEXT_PUBLIC_SERVICE, process.env.NEXT_PUBLIC_TEMPLATE_OWNER, templateParams, process.env.NEXT_PUBLIC_KEY)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text)
            }, function (error) {
                console.log('FAILED...', error)
            })
    }

    const errors = {
        "name": [],
        "lastName": [],
        "email": [],
        "address": []
    }

    function submitForm() {
        validateName(name)
        validateLastName(lastName)
        validateEmail(email)
        validateAddress(address)
    }

    function validateName(name) {

        if (name.length < 4) {
            errors["name"] = ["Name can not be shorter than 5 characters "]
        } else {
            errors["name"] = []
        }
    }

    function validateLastName(lastName) {

        if (lastName.length < 4) {
            errors["lastName"] = ["Last name can not be shorter than 5 characters "]
        } else {
            errors["lastName"] = []
        }
    }

    function validateEmail(email) {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            errors["email"] = ["Incorrect email"]
        } else {
            errors["email"] = []
        }
    }

    function validateAddress(address) {

        if (address.length < 4) {
            errors["address"] = ["Address can not be shorter than 5 characters "]
        } else {
            errors["address"] = []
        }
    }

    function valid() {
        submitForm()
        var bool = true
        Object.values(errors).forEach(element => {
            if (element.length > 0) bool = false
        })
        return bool
    }

    function setErrorMessages() {
        if (errors["name"][0] != "undefined") setNameErrorMessage(errors["name"][0])
        if (errors["lastName"][0] != "undefined") setLastNameErrorMessage(errors["lastName"][0])
        if (errors["email"][0] != "undefined") setEmailErrorMessage(errors["email"][0])
        if (errors["address"][0] != "undefined") setAddressErrorMessage(errors["address"][0])
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
                            <p className="priceText">Price: 0.3 eth</p>
                        </div>
                    </div>


                    <div className="right">
                        <div className="container">
                            <img src="razer_logo.svg" className="logo"></img>
                            <form className="form">
                                <input id="name" type='text' placeholder='Enter your name:' className="field name" onChange={updateName}></input>
                                <span className="errMessage">{nameErrorMessage}</span>
                                <input id="lastName" type='text' placeholder='Enter your last name:' className="field lastName" onChange={updateLastName}></input>
                                <span className="errMessage">{lastNameErrorMessage}</span>
                                <input id="email" type='text' placeholder='Enter your e-mail:' className="field email" onChange={updateEmail}></input>
                                <span className="errMessage">{emailErrorMessage}</span>
                                <input id="address" type='text' placeholder='Enter delivery address:' className="field address" onChange={updateAddress}></input>
                                <span className="errMessage">{addressErrorMessage}</span>
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