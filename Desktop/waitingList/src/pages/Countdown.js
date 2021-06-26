import React, {useState} from 'react'
import countdown from "../assets/countdown.png"
import "../styles/countdown.css"
import {useStateContext} from '../context/stateContext'
import {useHistory} from 'react-router-dom';
import {baseUrl} from '../constants'
import {ImSpinner2} from 'react-icons/im'

function Countdown() {
    const [firstname, setFirstname] = useState('')
    const [email, setEmail] = useState('')
    const [firstnameError, setFirstnameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [isChecked, setIsChecked] = useState(false);
    const history = useHistory();

    const {submitField, dbError, isLoading} = useStateContext()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!firstname || firstname.length < 3){
            return setFirstnameError('username must be more than 3 chars')
        }
        if(!email || email.length < 3) {
            return setEmailError('email field is required')
        }
        await submitField(baseUrl, {firstname, email}, history)
    }

    const handleCheck = () => {
        setIsChecked(!isChecked)
    }

    return (
        <>
        <section>
                <div className="countdown-info ">
                    <h2>Get early access to the next generation of Millionaires</h2> 
                    <p>
                        Join the Waiting list for the Pertinence Wealth Community and get updated the moment we go live 
                    </p>
                    <img src={countdown} alt="" />
                </div>
                <div className="countdown-input" >
                    <div className="form-control">  
                        <p>Fill in your information</p>       
                        <form onSubmit={handleSubmit} >   
                            {dbError && <p className="error">{dbError}</p>}
                            {firstnameError && <p className="error">{firstnameError}</p>}
                            <label htmlFor="first Name">First Name</label>
                            <input 
                                type="text" 
                                value={firstname}
                                className="name"
                                onChange={e => setFirstname(e.target.value)}
                                />

                            {emailError && <p className="error">{emailError}</p>}
                            <label htmlFor="email">Email Address</label>
                            <input 
                                type="email" 
                                value={email}
                                className="name"
                                onChange={e => setEmail(e.target.value)}
                            />  

                            <div className="check-flex">
                                <input 
                                type="checkbox"
                                value={isChecked}
                                className="checkbox"
                                onChange={handleCheck}
                                />
                                <label >
                                    <span className="checkbox-p">
                                        You want to receive email updates on Pertinence Wealth Community
                                    </span> 
                                </label>
                            </div>
                            
                            
                            {isLoading ? <div className="spinner"><ImSpinner2/></div> : (
                                <input 
                                disabled={!isChecked}
                                type="submit" 
                                value="submit" 
                                className={!isChecked ? "btn-submit-2" : "btn-submit" }
                            />
                            )}
                        </form>
                    </div>
                    
                </div>
                </section>
        </>
    )
}

export default Countdown
