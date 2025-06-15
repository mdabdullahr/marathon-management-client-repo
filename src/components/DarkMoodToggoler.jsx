import React from 'react';
import { MdSunny } from 'react-icons/md';
import { FaMoon } from "react-icons/fa";
import { useDarkMode } from '../ThemeContext/ThemeContext.jsx';

const DarkMoodToggoler = () => {
    const {darkMode, setDarkMode} = useDarkMode();
    return (
        <button
        onClick={() => setDarkMode(!darkMode)}
        >
           {darkMode ? <MdSunny size={25}  className='text-gray-200 cursor-pointer mr-3 lg:mr-0 '/> : <FaMoon size={25} className='text-gray-800 cursor-pointer mr-3 lg:mr-0'/>}
        </button>
    );
};

export default DarkMoodToggoler;