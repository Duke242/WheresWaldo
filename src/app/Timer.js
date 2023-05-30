"use client"
import { useState, useEffect } from "react"

export const Timer = ({ start }) => {
    const [time, setTime] = useState(Math.round((new Date().getTime() - start) / 1000))

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((time) => time + 1)
        },1000)
        return () => clearInterval(interval)
    }) 
    const minutes = Math.floor(time / 60);
    const seconds = `0${Math.round(time % 60)}`.slice(-2);

    return (
        <>
           {minutes}:{seconds}
            
        </>
    )
}

// const totalSeconds = 1234;
// const minutes = Math.floor(totalSeconds / 60);
// const seconds = totalSeconds % 60;

export default Timer