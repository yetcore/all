import axios from 'axios';
import { notification } from 'antd';

const postData = async (grade,progress,qqNumber,userName,direction) => {
  if(grade === '准大一') grade = 0
  if(grade === '大一') grade = 1
  if(grade === '大二') grade = 2
  if(grade === '大三') grade = 3
    const response = await axios.post('http://101.200.218.130:8721/api/register', {
      grade , 
      progress,
      qqNumber,  
      userName,
      direction,
    });
    const code = response.data.code
    const data = response.data.message
 

    if(code == 200){
      notification.success({
        message:'报名成功'
      })
      window.location.href = 'https://qm.qq.com/q/40yrGKcC24'
    }
    if(code == 40000){
      notification.error({
        message:data
      })
    }
return {code, data}
};

export default postData
