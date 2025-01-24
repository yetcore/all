import {useState, useEffect} from 'react';
import axios from 'axios';


const useGetData = (type, name) => {
    const [data, setData] = useState(null); 
    useEffect(() => {
        if (!name) return; 
        const getData = async () => {
            const baseurl='http://101.200.218.130:8721'
            try {
                let response;
                if (type === 'image') {
                    response = await axios.get(`${baseurl}/api/img/${name}`, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        timeout: 3000,
                    });
                    setData(response.data.data)
                } else if (type === 'text') {
                    response = await axios.get(`${baseurl}/api/json/${name}`, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        timeout: 3000,
                    });
                    setData(JSON.parse(response.data.data))
                } else {
                    throw new Error('未知的请求类型');
                }

            } catch (err) {
                console.log(err.message || '请求失败，请检查网络或接口')
            } finally {
                console.log("好难写啊，小林学长能不能救救我  o(╥﹏╥)o  ,当你看到这里恭喜你发现了彩蛋，如果你是大一新生并对自己的前/后端能力有一定的自信，请加Q：3509714363霸面加分")
            }
        };

        getData();
    }, [type, name]); 


    return data
};

export default useGetData;
