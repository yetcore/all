import React, { useEffect, useRef }  from 'react'
import styles from './Common.module.scss'

const AllSparWork = () => {
   
    return (<div className={styles.wrapper}>
        <div className={styles.bringTitle}>
            <h1>工作室就业</h1>
            <span></span>
        </div>
        <img src='/work.png' className={styles.img}></img>
      
    </div>)
}

export default AllSparWork