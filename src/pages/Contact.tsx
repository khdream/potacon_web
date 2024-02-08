import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoBackBtn from '../components/GoBackBtn';
import Navbar from '../layouts/Navbar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CHECK_IMAGE, EDIT_IMAGE } from '../utils/constants';

const Contact: React.FC = () => {

    return (
        <div className="bg-[#eee]">
            <div className='h-screen w-full ml-auto mr-auto bg-white shadow sm:w-[50%] lg:w-[35%]'>
                <GoBackBtn />
                <div className='p-[10px] mb-[5px]'>
                </div>
                <div className='mb-[3px] p-[5px] ml-auto mr-auto text-center'>
                    <button className='w-[200px] h-[36px] px-[2rem] text-[20px] text-white font-bold inline-block leading-[36px] align-middle rounded-[11px] text-center bg-[#26a69a] tracking-[.5px] transition-all duration-200 shadow-sm hover:shadow-md'>無料通話</button>
                </div>
                <div className='max-w-[300px] m-auto bg-[#fafafa] w-[90%] max-h-[70%] shadow-[0_8px_10px_1px_rgba(0,0,0,0.14),0_3px_14px_2px_rgba(0,0,0,0.12),0_5px_5px_-3px_rgba(0,0,0,0.3)]'>
                    <div className='p-[13px] pb-[17px] text-center'>
                        <h5 className='my-[10px] text-[1.64rem] leading-[110%] text-center'>データがありません</h5>
                        <hr className='border-[1px] border-[#1cb8ee]'></hr>
                        <h5 className='my-[10px] text-[1.64rem] leading-[110%] text-center'>メインに戻ります</h5>
                        <button className=''><img src={CHECK_IMAGE} alt="" /></button>
                        
                    </div>
                </div>
                <div className='relative bg-[#d3cdce] flex p-[10px] mt-[322px]'>
                    <p className='my-[15px]'>個人用・会社用の区分が出来ます
                        名前を押すとボタンで区分出来ます</p>
                </div>
            </div>
        </div>
    )
}
export default Contact;
