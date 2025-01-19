import React, { forwardRef, useEffect, useRef }  from 'react'
import styles from './Common.module.scss'

const AllSparWork = forwardRef((props, ref) => {
   
    return (<div className={styles.wrapper} ref={ref}>
        <div className={styles.bringTitle}>
            <h1>工作室就业</h1>
            <span></span>
        </div>
        <img src='/work.png' className={styles.img}></img>
      
    </div>)
}
)
export default AllSparWork