'use client'
import styles from './page.module.css'
import React, { useEffect, useState } from "react"

function Image(){
    const [found, setFound] = useState([])
    
    useEffect(() => {
        if (found.includes('Bowser') && found.includes('Courage') && found.includes('Bill')) {
          window.alert("Congrats!")
          setFound([])
        }
      }, [found])
    
    return(
        <main className={styles.main}>
        <map name='universe'>
            <area 
            shape='rect' 
            coords='600,940,740,1100' 
            onClick={() => {
                alert("Bowser found!");
                setFound([...found, 'Bowser'])   
                console.log(found)            
            }}
            />
            <area 
            shape='rect' 
            coords='1000,1740,1050,1800' 
            onClick={() => {
                alert("Bill Cipher found!");
                setFound([...found, 'Bill'])
                console.log(found)            
            }}
            />
            <area 
            shape='rect' 
            coords='420,1380,460,1440' 
            onClick={() => {           
                alert("Courage found!");
                setFound([...found, 'Courage'])
                console.log(found)            
            }}
            />

        </map>
        <img useMap='#universe' width='1920' height='2715' className={styles.img} src='/assets/universe-113.jpg'/>
        </main>
    )
}

export default Image
