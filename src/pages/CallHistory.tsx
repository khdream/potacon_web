import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import GoBackBtn from '../components/GoBackBtn';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CallHistory: React.FC = () => {

    return (
        <div className='h-screen w-full ml-auto mr-auto px-[0.75rem] bg-[#ceccca] sm:w-[50%] lg:w-[35%]'>
            <div className='w-full pt-[10px] pb-[20px] mb-[5px]'>
                <div className='mb-[15px] ml-auto mr-auto'>
                    <GoBackBtn />
                </div>
            </div>
        </div>
    )
}
export default CallHistory;
