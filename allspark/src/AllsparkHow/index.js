import React, { forwardRef, useEffect, useState } from 'react';
import { Tabs, Card, Spin } from 'antd';
import styles from './Common.module.scss'
import axios from 'axios';

const AllsparkHow = forwardRef((props, ref) => {
  const [dataSpringImg, setDataSpringImg] = useState(null)
  const [dataAutumnImg, setDataAutumnImg] = useState(null)
  const [dataChallengeImg, setDataChallengeImg] = useState(null)
  const [dataStr, setDataStr] = useState(null)
  const [imgSpringLoading, setimgSpringLoading] = useState(true)
  const [imgAutumnLoading, setimgAutumnLoading] = useState(true)
  const [imgChallengeLoading, setimgChallengeLoading] = useState(true)
  const [strLoading, setstrLoading] = useState(true)

  useEffect(() => {
    const ajax = async() => {
      try {
        const response1 = await axios.get('http://101.200.218.130:8721/api/json/join.json',{
          params: {
              data: 'join.json'  
            }
      })

      if (response1 && response1.data) {
        setDataStr(JSON.parse(response1.data.data)); 
        setstrLoading(false)
      } else {
        console.error('响应1无效：', response1);
      }
        
  
  
      const spring = await axios.get('http://101.200.218.130:8721/api/img/spring.png',{
        params: {
            data: 'spring.png'  
          }
    })
  
    const autumn = await axios.get('http://101.200.218.130:8721/api/img/autumn.png',{
      params: {
          data: 'autumn.png'  
        }
  })

  const challenge = await axios.get('http://101.200.218.130:8721/api/img/challenge.png',{
    params: {
        data: 'challenge.png'  
      }
})

      if(spring && spring.data) {
        setDataSpringImg(spring.data.data)
        setimgSpringLoading(false)
      }else {
        console.error('springImg无图片', spring);
      } 
      if(autumn && autumn.data) {
        setDataAutumnImg(autumn.data.data)
        setimgAutumnLoading(false)
      }else {
        console.error('antumnImg无图片', autumn);
      } 
      if(challenge && challenge.data) {
        setDataChallengeImg(challenge.data.data)
        setimgChallengeLoading(false)
      }else {
        console.error('challengeImg无图片', challenge);
      } 
    }
      catch(error){
        console.error('获取数据时发生错误：', error);
      }
     
       
    } 
    ajax()

   }, []);

  
  const CustomTabBar = (props) => {
    const { DefaultTabBar } = props; 
    return (
      <div className={styles['tab-head']}>
        <DefaultTabBar {...props} />
      </div>
    );
  };
  const tabItems = [
    {
      label: "秋季纳新",
      key: '1',
      children: (
        <Card className={styles.content}>
          <div className={styles.card}>
              <img 
                 src={!imgAutumnLoading && dataAutumnImg }
                alt="秋季纳新" 
                className={styles.img}
              />
              <div className={styles.incontent}>
                <p className={styles.p}> <img src='/time.png' className={styles['small-img']}/> <span className={styles.solid}>时间：</span>{ !strLoading && dataStr.autumn.time }</p>
                <p className={styles.p}> <img src='/require.png' className={styles['small-img']}/> <span className={styles.solid}>要求：</span>{ !strLoading && dataStr.autumn.requirement }</p>
                <p className={styles.p}> <img src='/process.png' className={styles['small-img']}/> <span className={styles.solid}>流程：</span>{ !strLoading && dataStr.autumn.flow }</p>
              </div>
          </div>
        </Card>
      )
    },
    
    {
      label: '春季纳新',
      key: '2',
      children: (
        <Card className={styles.content}>
          <div className={styles.card}>
              <img 
                src={!imgSpringLoading && dataSpringImg }
                alt="春季纳新" 
                className={styles.img}
              />
              <div className={styles.incontent}>
                <p className={styles.p}> <img src='/time.png' className={styles['small-img']}/> <span className={styles.solid}>时间：</span>{ !strLoading && dataStr.spring.time }</p>
                <p className={styles.p}> <img src='/require.png' className={styles['small-img']}/> <span className={styles.solid}>要求：</span>{ !strLoading && dataStr.spring.requirement }</p>
                <p className={styles.p}> <img src='/process.png' className={styles['small-img']}/> <span className={styles.solid}>流程：</span>{ !strLoading && dataStr.spring.flow }</p>
              </div>
          </div>
        </Card>
      )
    },
    {
      label: '日常霸面',
      key: '3',
      children: (
        <Card className={styles.content}>
          <div className={styles.card}>
              <img 
                src={!imgChallengeLoading && dataChallengeImg }
                alt="日常霸面" 
                className={styles.img}
              />
              <div className={styles.incontent}>
                <p className={styles.p}> <img src='/time.png' className={styles['small-img']}/> <span className={styles.solid}>时间：</span>{ !strLoading && dataStr.challenge.time }</p>
                <p className={styles.p}> <img src='/require.png' className={styles['small-img']}/> <span className={styles.solid}>要求：</span>{ !strLoading && dataStr.challenge.requirement }</p>
                <p className={styles.p}> <img src='/process.png' className={styles['small-img']}/> <span className={styles.solid}>流程：</span>{ !strLoading && dataStr.challenge.flow }</p>
              </div>
          </div>
        </Card>
      )
    },
  ];
  
  if(!dataStr) return <div className={styles.loading}>
    <Spin />
  </div>

  return (
    <div className={styles.wrapper} ref={ref}>
      <div className={styles.bringTitle}>
        <h1>如何加入我们</h1>
        <span></span>
      </div>
    <Tabs 
    defaultActiveKey="1" items={tabItems}  
    className={styles.tab} 
    centered  
    tabBarGutter
    size='large'
    renderTabBar={(props, DefaultTabBar) => (
          <CustomTabBar {...props} DefaultTabBar={DefaultTabBar} />
        )}/>
    </div>
  );
});


export default AllsparkHow;
