import React,{useState,useRef,useEffect} from 'react'
import waitlist from "../assets/waitlist.png"
import "../styles/landing.css"
import vector from "../assets/Vector.png"
import vector2 from "../assets/Vector2.png"
import vector4 from "../assets/vector4.png"
import {Link} from "react-router-dom"
import {motion} from "framer-motion"

const pageTransition ={
    type: "tween",
    ease: "anticipate",
    duration: 1
};

const pageVariants= {
    in: {opacity : 1,
        y: 0
},
out:{
    opacity : 0,
    y: "-100vh"
}
}


function Landing() {
const [timerDays, settimerDays] = useState('00')
const [timerHours, settimerHours] = useState('00')
const [timerMinutes, settimerMinutes] = useState('00')
const [timerSeconds, settimerSeconds] = useState('00')
  
let interval = useRef()
const startTimer = () =>{
    const countdownDate = new Date('August 30 2021 00:00:00').getTime();
    interval = setInterval(() =>{
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        const days =  Math.floor((distance /(1000* 60 * 60 * 24)))
        const hours =  Math.floor((distance % (1000* 60 * 60 * 24) /(1000 * 60 * 60)))
        const minutes =  Math.floor((distance % (1000* 60 * 60)/ (1000 * 60)))
        const seconds =  Math.floor((distance % (1000* 60 )) /(1000))

        if(distance < 0){
            clearInterval(interval.current)

        }
        else{
            settimerDays(days)
            settimerHours(hours)
            settimerMinutes(minutes)
            settimerSeconds(seconds)
        }

    },1000)
}
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current)
        }
    });
  
    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
        <Link to="/" style={{textDecoration:"none"}}>
        
        <img src={vector4} alt="" className="logo4" />
        </Link>
            <p className="first-heading">You are now officially on the waitlist- stay tuned!</p>
            <h2 className="second-heading"> We are launching in</h2>
            <div className="time-box">
                <div className="time"> <span className="time-box-digits">{timerDays}</span> <span className="time-box-letters">Days</span></div>
                <div className="time"> <span className="time-box-digits">{timerHours}</span> <span className="time-box-letters"> Hours</span></div>
                <div className="time">  <span className="time-box-digits">{timerMinutes}</span> <span className="time-box-letters">Minutes</span></div>
                <div className="time"> <span className="time-box-digits blue">{timerSeconds}</span> <span className="time-box-letters blue">Seconds</span></div>
            </div>
            <img src={waitlist} alt=""  className="waitlist-image"/>
            <img src={vector} alt=""  className="logo1"/>
            <img src={vector2} alt="" className="logo2" />
            <img src={vector2} alt="" className="logo3" />
        </motion.div>
    )
}

export default Landing
