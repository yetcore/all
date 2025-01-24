import React, {useContext, useState} from 'react';
import classes from './Navbar.module.css';
import navLeftImg from '../../assets/imgs/Navbar-left.png'
import navRightImg from '../../assets/imgs/Navbar-Right.png'
import {ScrollContext} from "../ScrollContext/ScrollContext";

const Navbar = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
        document.body.style.overflow = !isDropdownVisible ? 'hidden' : 'auto';
    };

    const closeDropdown = () => {
        setDropdownVisible(false);
        document.body.style.overflow = 'auto';
    };

    const sectionRefs = useContext(ScrollContext);


    const handleSelectChange = (value) => {
        closeDropdown()
        sectionRefs[value]?.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };
    return (
        <div className={classes.navbar}>
            <div className={classes.iconLeftBox}>
                <img src={navLeftImg} className={classes.navLeftImg}/>
            </div>
            <div className={classes.iconRightBox}>
                <img src={navRightImg} className={classes.navRightImg} onClick={toggleDropdown}/>
            </div>

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
            </div>
            
            {isDropdownVisible && (
                <div className={`${classes.overlay} ${isDropdownVisible ? classes.visible2 : ''}`}
                     onClick={closeDropdown}></div>
            )}
        </div>
    );
};

export default Navbar;
