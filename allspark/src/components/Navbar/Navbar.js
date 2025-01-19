import React, {useContext, useState} from 'react';
import classes from './Navbar.module.css';
import navLeftImg from '../../assets/imgs/Navbar-left.png'
import navRightImg from '../../assets/imgs/Navbar-Right.png'
import {ScrollContext} from "../ScrollContext/ScrollContext";

const Navbar = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    // 使用state管理遮罩层的显示，默认是false不显示

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
        document.body.style.overflow = !isDropdownVisible ? 'hidden' : 'auto';
        // 这个函数是禁止/允许页面滚动
    };

    const closeDropdown = () => {
        setDropdownVisible(false);
        document.body.style.overflow = 'auto';
        //     这个函数是点击遮罩层，修改
    };

    const sectionRefs = useContext(ScrollContext);//获取ref


    const handleSelectChange = (value) => {
        // 先关闭下拉框，这里调用这个函数也能修改state的值，从而关闭下拉框
        closeDropdown()
        // 然后根据传递的参数value滑动到页面指定位置
        sectionRefs[value]?.current.scrollIntoView({
            // current的作用是引用dom节点
            behavior: 'smooth',
            block: 'start'
        });
        //     设置平滑滑动
    };
    return (
        <div className={classes.navbar}>
            <div className={classes.iconLeftBox}>
                <img src={navLeftImg} className={classes.navLeftImg}/>
            </div>
            <div className={classes.iconRightBox}>
                <img src={navRightImg} className={classes.navRightImg} onClick={toggleDropdown}/>
            </div>


            {/* 下拉框 */}
            {/*下拉框的类名，由state的值控制*/}
            <div
                className={`${classes.dropdown} ${isDropdownVisible ? classes.visible1 : ''}`}

            >
                <div className={classes.dropdownItem} onClick={()=>handleSelectChange("studio")}>AllSpark工作室</div>
                <div className={classes.dropdownItem} onClick={()=>handleSelectChange("cscIntroduction")}>AllSpark工作室-CSC-小组简介</div>
                <div className={classes.dropdownItem} onClick={()=>handleSelectChange("bringtoyou")}>我们能带给你的</div>
                <div className={classes.dropdownItem} onClick={()=>handleSelectChange("direction")}>工作室方向</div>
                <div className={classes.dropdownItem} onClick={()=>handleSelectChange("work")}>工作室就业</div>
                <div className={classes.dropdownItem} onClick={()=>handleSelectChange("joinus")}>如何加入我们</div>
                <div className={classes.dropdownItem} onClick={()=>handleSelectChange("register")}>报名入口</div>
            {/*   注意这里，因为react使用了事件委托机制，如果想要传递参数并且直接调用函数的话，必须要使用箭头函数，向上面这样，否则
                就会默认传递的参数是包装后的事件对象，会覆盖传递过去的参数
            */}
            </div>
            {/* 遮罩层 */}
            {isDropdownVisible && (
                <div className={`${classes.overlay} ${isDropdownVisible ? classes.visible2 : ''}`}
                     onClick={closeDropdown}></div>
            )}
        </div>
    );
};

export default Navbar;
