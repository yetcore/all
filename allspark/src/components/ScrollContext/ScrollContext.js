// ScrollContext.js
import React, {createContext, useRef} from 'react';
// 这个钩子是批量创建ref
export const ScrollContext = createContext();
// 创建context 用来确保ref可以垮组件树传递，无需props层层传递
export const ScrollProvider = ({children}) => {
    // 为每一个组件创建ref，而且通过context传递和共享
    const sectionRefs = {
        studio: useRef(null),
        cscIntroduction: useRef(null),
        bringtoyou: useRef(null),
        direction: useRef(null),
        work: useRef(null),
        joinus: useRef(null),
        register: useRef(null),
    //     ref 实际上就是一个可以在组件间共享的对象
    };

    return (
        <ScrollContext.Provider value={sectionRefs}>
            {/*这样写就是为了将ref传递给每一个子组件 通过ref就可以获取对应的元素（组件）*/}
            {children}
        </ScrollContext.Provider>
    );
};

// export default ScrollProvider
