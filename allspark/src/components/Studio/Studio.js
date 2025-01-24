import React, {forwardRef} from 'react';
import classes from './Studio.module.css';
import useGetData from "../hooks/useGetData";

const Studio = forwardRef(
    (props, ref) => {


        const getItemClass = (index) => {
            switch (index) {
                case 0:
                    return classes.groupCard_0;
                case 1:
                    return classes.groupCard_1;
                case 2:
                    return classes.groupCard_2;
                default:
                    return '';
            }
        }


        const texts =useGetData('text','groupDivision.json')
        const groupData = [
            {
                id: 1,
                title: 'CSC小组',
                subtitle: '校园学习社区',
                description: texts?.csc,
                imageUrl: useGetData('image','csc.png'),
            },
            {
                id: 2,
                title: 'CCS小组',
                subtitle: '校园公益服务',
                description: texts?.ccs,
                imageUrl: useGetData('image','ccs.png'),
            },
            {
                id: 3,
                title: 'CSS小组',
                subtitle: '企业软件服务',
                description: texts?.css,
                imageUrl: useGetData('image','css.png'),
            },
        ];

        return (
            <div className={classes.groupSection} ref={ref}>
                <div className={classes.groupTitle}>
                    <h1>AllSpark工作室</h1>
                    <span></span>
                </div>

             
                <div className={classes.groupContainer}>
                    {groupData.map((item, index) => (
                        <div
                            key={item.id}
                            className={`${classes.groupCard} ${getItemClass(index)}`}
                            style={{backgroundImage: `url(${item.imageUrl})`}}
                        >
                            <div className={classes.cardContent}>
                                <h2>{item.title}</h2>
                                <h3>{item.subtitle}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    });

export default Studio;
