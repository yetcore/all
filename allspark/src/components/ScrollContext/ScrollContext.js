import React, {createContext, useRef} from 'react';
export const ScrollContext = createContext();
export const ScrollProvider = ({children}) => {
    const sectionRefs = {
        studio: useRef(null),
        cscIntroduction: useRef(null),
        bringtoyou: useRef(null),
        direction: useRef(null),
        work: useRef(null),
        joinus: useRef(null),
        register: useRef(null),
    };

    return (
        <ScrollContext.Provider value={sectionRefs}>
            {children}
        </ScrollContext.Provider>
    );
};


