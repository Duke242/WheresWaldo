'use client'
import styles from './page.module.css'
import React, { useEffect, useState } from "react"

function Image(){
    const [found, setFound] = useState([])
    const [bowserFound, setBowserFound] = useState(false)
    const [billFound, setBillFound] = useState(false)
    const [courageFound, setCourageFound] = useState(false)

    useEffect(() => {
        alert("Courage found!");
        setFound(prevFound => [...prevFound, 'Courage']);
        console.log(found)
    }, [courageFound])

    useEffect(() => {
        alert("Bowser found!");
        setFound(prevFound => [...prevFound, 'Bowser']);
    }, [bowserFound])

    useEffect(() => {
        alert("Bill found!");
        setFound(prevFound => [...prevFound, 'Bill']);
    }, [billFound])
    
    return(
        <main className={styles.main}>
        <map name='universe'>
            <area 
            shape='rect' 
            coords='600,940,740,1100' 
            onClick={() => {
                setBowserFound(true)
            }}
            />
            <area 
            shape='rect' 
            coords='1000,1740,1050,1800' 
            onClick={() => {
                setBillFound(true)
            }}
            />
            <area 
            shape='rect' 
            coords='420,1380,460,1440' 
            onClick={() => {
                setCourageFound(true)
            }}
            />
        </map>
        <img useMap='#universe' width='1920' height='2715' className={styles.img} src='/assets/universe-113.jpg'/>
        </main>
    )
}

export default Image
