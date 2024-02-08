import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GreenButtonProps } from '../utils/interfaces';

const GreenButton: React.FC<GreenButtonProps> = ({ title, navigation }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(navigation)
    }
    return (
        <div className='w-[25%] mb-[10px] px-[3px] ml-auto left-auto right-auto relative text-center '>
            <button onClick={handleClick} className='w-[82%] inline-grid items-center h-[78px] leading-[52px] text-[50px] text-white outline-0 rounded-[6px] bg-gradient-to-t from-[#38743a] via-[#3a813b] to-[#307031] shadow-sm hover:shadow-md'>{title}</button>
        </div>
    )
}

export default GreenButton;