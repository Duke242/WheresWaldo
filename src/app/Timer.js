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
    return (
        <>
        {time}
        </>
    )
}

export default Timer