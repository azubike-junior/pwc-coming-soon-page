import React from 'react';
import styled from "styled-components"
import vault from "../images/vault.jpg"
import wealth from '../images/wealth-cat.jpg'
import backk from "../images/backk.jpg"

const Home = () => {
    return (
        <Wrapper>
            <div className="container-1">
             <span className="heading">Welcome to pertinence wealth community</span>
                <div className="container">
                    <div className="div-1">
                    <h4>coming soon !!!</h4>
                    <h1>we are building something awesome!!!</h1>
                    <form action="https://formspree.io/f/xjvjraek"
                        method="POST">
                        <input
                            type="email"
                            className="form-input"
                            placeholder='enter email'
                            name="_replyto"
                        />
                        <button type='submit' className="submit-btn">
                            subscribe
                        </button>
                    </form>
                </div>

                    <div className="div-2">
                        <img src={wealth} alt="" className="construct" />
                    </div>
                </div>
                 
            </div>
           
        </Wrapper> 
    );
}

const Wrapper = styled.div`
    background:  url(${backk});
    background-repeat: no-repeat;
    background-size: cover;  
    min-height: 100vh;
    
    .heading {
        color: #fff;
        font-size: 50px;
        font-weight: 900;
        margin: 1rem;
    }

    .container-1{
        padding: 2rem;
    }

    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
        margin-right: auto;
        margin-left: auto;
        padding: 20px;
        width: 80vw;
        padding-top: 5rem;

        h4 {
            color: #ffffff;
            font-size: 15px;
            text-align: left;
        }

        h1 {
            color: #fff;
            font-size: 30px;
            text-align: left;
            padding-bottom: 1rem;
        }

        form {
            display: flex;
            align-items: left;

            input {
                padding: 1rem;
                margin-right: 0.5rem;
                width: 300px;
                border-radius: 20px;
                outline: none;
                font-size: 15px;
                border: none;
                box-shadow: 2px 2px 5px #6e6e6e;
            }
            button {
                padding: 1rem;
                cursor:pointer;
                width:120px;
                border-radius: 20px;
                border: none;
                outline: none;
                box-shadow: 2px 2px 5px #6e6e6e;
            }
        }
    }

    .div-2 {
        background:linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)),
        url(${vault});
        background-repeat: no-repeat;
        background-size: cover; 
        height:350px;
    }

    .construct {
        padding-top:2rem;
        width: 300px;
        height: 200px;
        opacity: 0.6;
    }

    @media screen and (max-width: 600px) {
        .container {
            display: block;

            form {
            display: block;
            padding-bottom: 2rem;

            input{
                width: 200px;
                margin-bottom: 1rem;
            }
        }
        }
        .heading {
            font-size: 40px;
            font-weight: 900;
        }
         .construct {
            padding-top:2rem;
            width: 200px;
            height: 200px;
            opacity: 0.7;
        }
    }
`

export default Home;
