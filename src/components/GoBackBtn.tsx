import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GO_BACK_IMAGE } from '../utils/constants';

const GoBackBtn: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home')
    }
    return (
        <div className='relative p-[10px] w-full flex left-auto right-auto ml-auto float-left'>
            <button onClick={handleClick} className='absolute right-[3px] top-[4px] shadow-sm hover:shadow-md'>
                <img src={GO_BACK_IMAGE} alt="" width={"50px"} height={"50px"} />
            </button>
        </div>
    )
}

export default GoBackBtn;