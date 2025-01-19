import React, {forwardRef} from 'react';
import classes from './Bringtoyou.module.css';
import useGetData from "../hooks/useGetData";


const Bringtoyou = forwardRef((props, ref) => {

    // 发送请求获取数据，并且重构数据到数组里面使用map渲染
    const contents = useGetData('text', 'benefits.json')
    const bringData = [
        {
            title: contents?.[0].title,
            content: contents?.[0].text,
            imageUrl: useGetData('image', '1.png'),
        },
        {
            title: contents?.[1].title,
            content: contents?.[1].text,
            imageUrl: useGetData('image', '2.png'),
        },
        {
            title: contents?.[2].title,
            content: contents?.[2].text,
            imageUrl: useGetData('image', '3.png'),
        },
        {
            title: contents?.[3].title,
            content: contents?.[3].text,
            imageUrl: useGetData('image', '4.png'),
        },
        {
            title: contents?.[4].title,
            content: contents?.[4].text,
            imageUrl: useGetData('image', '5.png'),
        },
        {
            title: contents?.[5].title,
            content: contents?.[5].text,
            imageUrl: useGetData('image', '6.png'),
        },
    ];

    return (
        <div className={classes.container} ref={ref}>
            <div className={classes.bringTitle}>
                <h1>我们能带给你的</h1>
                <span></span>
            </div>
            <div className={classes.bringItemList}>
                {bringData.map((item, index) => (
                    <div key={index} className={classes.bringItem}>
                        {/* 替换为实际图片 */}
                        <div className={classes.imageBox}>
                            <img src={item.imageUrl}/>
                        </div>
                        <div className={classes.textBox}>
                            <h2 className={classes.textTitle}>{item.title}</h2>
                            {/*<p className={classes.text}>{item.content}</p>*/}
                            <p className={classes.text}>
                                {item.content?.split(/(\*[^*]+\*)/g).map((part, index) => (
                                    // 如果部分被*包围，则给它加上蓝色样式
                                    part.startsWith('*') && part.endsWith('*') ? (
                                        <span key={index} style={{color: '#3682ef'}}>
                                                {part.slice(1, -1)}
                                                {/* 去掉前后的* */}
                                        </span>
                                    ) : (
                                        part
                                    )
                                ))}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default Bringtoyou;
