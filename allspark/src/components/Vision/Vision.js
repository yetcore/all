import React from 'react';
import classes from './Vision.module.css';
import useGetData from "../hooks/useGetData";
import imgs from "../../assets/imgs/ditu.png"

const Vision = () => {


    return (
        <div className={classes.visionContainer}>

            <div className={classes.upImg}>
                <img src={useGetData('image', 'vision.png')}/>
            </div>

            <div className={classes.text1}>
                <p className={classes.visionTitle}>VISION</p>
                <h2>{useGetData('text', 'vision.json')?.title}</h2>
                <p className={classes.desc1}>{useGetData('text', 'vision.json')?.text}</p>
            </div>


            <div className={classes.text2}>
                <p className={classes.missionTitle}>MISSION</p>
                <h2>{useGetData('text', 'mission.json')?.title}</h2>
                <p className={classes.desc2}>{useGetData('text', 'mission.json')?.text}</p>
            </div>

            <div className={classes.downImg}>
                <img src={useGetData('image', 'mission.png')}/>
            </div>

        </div>
    );
};

export default Vision;
