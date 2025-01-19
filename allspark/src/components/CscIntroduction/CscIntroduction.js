import React, {forwardRef} from 'react';
import classes from './CscIntroduction.module.css';
import useGetData from "../hooks/useGetData";

const CscIntroduction = forwardRef((props, ref) => {

    // 发送请求，获取数据
    const imgdata = useGetData('image', 'profile.png');
    const textdata = useGetData('text', 'profile.json');

    return (
        <div className={classes.CscIntroductionContainer} ref={ref}>
            {/*标题*/}
            <div className={classes.titleSection}>
                <h1>AllSpark工作室-CSC小组-简介</h1>
                <span></span>
            </div>

            {/*副标题*/}
            <div className={classes.titleSection2}>
                <h2>BRIEF INTRODUCTION</h2>
            </div>

            {/*中间的介绍*/}
            <div className={classes.introText}>
                <p>{textdata?.text}</p>
            </div>

            <div
                className={classes.bottomSection}
                style={{backgroundImage: `url(${imgdata})`}}
            >
                <div className={classes.infoText}>
                    <div>
                        <p className={classes.text2}>18年5月</p>
                        <p className={classes.text3}>成立日期</p>
                    </div>
                    <div className={classes.text1}>
                        <p className={classes.text2}>{textdata?.location}</p>
                        <p className={classes.text3}>地点</p>
                    </div>
                    <div>
                        <p className={classes.text2}>{textdata?.memberNums}</p>
                        <p className={classes.text3}>成员人数</p>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default CscIntroduction;
