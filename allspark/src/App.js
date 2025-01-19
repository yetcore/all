import AllsparkHow from "./AllsparkHow";
import AllsparkJoin from "./AllsparkJoin";
import AllSparWork from "./AllsparkWork";
import { useRef } from "react";
import MyCarousel from "./AllsparkCarousel";
import Direction from "./AllSparkDirection";
import styles from './App.module.scss'

import Navbar from "./components/Navbar/Navbar";
import Studio from "./components/Studio/Studio";
import CscIntroduction from "./components/CscIntroduction/CscIntroduction";
import Vision from "./components/Vision/Vision";
import Bringtoyou from "./components/Bringtoyou/Bringtoyou";
import {useContext} from "react";
import {ScrollContext} from "./components/ScrollContext/ScrollContext";
function App() {
  const joinRef = useRef(null);
  const scrollToJoin = () => {
    joinRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const sectionRefs = useContext(ScrollContext)//获取创建的Ref

  return (
      <div className={styles.content}>
        <Navbar/>
         <MyCarousel onClickBox={scrollToJoin} />
        
            {/*将每一个ref都传递过去*/}
            <Studio ref={sectionRefs.studio}/>
            <CscIntroduction ref={sectionRefs.cscIntroduction}/>
            <Vision />
            <Bringtoyou ref={sectionRefs.bringtoyou}/>
           

         <Direction ref={sectionRefs.direction}/>
        <AllSparWork  ref={sectionRefs.work}/>
        <AllsparkHow  ref={sectionRefs.joinus}/>
        
        <div ref={joinRef}>
        <AllsparkJoin ref={sectionRefs.register}/>
        </div>
      

      </div>

);
            
    
}

export default App;
