import {useState, useEffect} from 'react';
import axios from 'axios';

// 封装的钩子函数，根据 type 参数执行不同的请求逻辑
const useGetData = (type, name) => {
    const [data, setData] = useState(null); // 存储响应数据
    useEffect(() => {
        if (!name) return; // 如果没有提供 name 参数，直接返回
        const getData = async () => {
            const baseurl='http://aru244.natappfree.cc'//定义基础路径在这里方便统一修改
            try {
                let response;
                // 根据 type 选择不同的请求逻辑
                if (type === 'image') {
                    response = await axios.get(`${baseurl}/api/img/${name}`, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        timeout: 3000,
                    });
                    setData(response.data.data)//储存图片路径
                } else if (type === 'text') {
                    response = await axios.get(`${baseurl}/api/json/${name}`, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        timeout: 3000,//设置三秒超时
                    });
                    setData(JSON.parse(response.data.data))//将返回的json数据转成对象存储
                } else {
                    throw new Error('未知的请求类型');
                }

            } catch (err) {
                console.log(err.message || '请求失败，请检查网络或接口')//处理错误
            } finally {
                console.log("好难写啊，小林学长能不能救救我  o(╥﹏╥)o  ")
            }
        };

        getData();
    }, [type, name]); // 依赖项：type 或 name 变化时重新请求


    return data
};

export default useGetData;
