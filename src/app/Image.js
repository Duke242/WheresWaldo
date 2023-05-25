'use client'
import styles from './page.module.css'
import React from "react"

function Image(){
    return(
        <main className={styles.main}>
        <map name='universe'>
        <area shape='rect' coords='600,940,740,1100' onClick={() => alert("Bowser found!")} target="_blank"/>
        <area shape='rect'/>
        <area shape='rect'/>
        </map>
        <img useMap='#universe' width='1920' height='2715' className={styles.img} src='/assets/universe-113.jpg'/>
        </main>
    )
}

export default Image
