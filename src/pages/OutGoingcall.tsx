import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import GoBackBtn from '../components/GoBackBtn';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OutGoingcall: React.FC = () => {

    return (
        <div className='h-screen w-full ml-auto mr-auto bg-gradient-to-r from-[#7c6b6e] via-[#ad9f9f] to-[#7c6b6e] sm:w-[50%] lg:w-[35%]'>
            <div className='w-full pt-[10px] pb-[20px] mb-[5px]'>
                <div className='mb-[15px] ml-auto mr-auto'>
                    <GoBackBtn />
                </div>
            </div>
            <div className='my-[25px] ml-auto mr-auto px-[.75rem]'>
                <input placeholder="電話番号入力" className='py-[.5rem] px-[1rem] text-[1.25rem] rounded-[.3rem] block w-full font-normal bg-white bg-clip-padding border-[1px] border-[#ced4da] transition-all duration-300 focus:outline-0 focus:shadow-[0_0_0_0.25rem_rgba(13,110,253,.25)]' />
            </div>
            <div className='ml-auto mr-auto p-[.5rem] flex'>
                <div className='w-1/2 pr-[.25rem] pl-[.5rem]'>
                    <img src="./images/call.png" alt="" />
                </div>
                <div className='w-1/2 pl-[.25rem] pr-[.5rem]'>
                    <img src="./images/close.png" alt="" />
                </div>
            </div>
            <div className='ml-auto mr-auto mb-[20px]'>
                <div className='w-full my-[5px] px-[1rem] text-center '>
                    <button className='h-[90px] p-[15px] text-center text-[30px] w-full text-white bg-gradient-to-r from-[#eb2060] to-[#ff3700] rounded-[9px] border-[3px] border-[#933c3e]'>無料通話</button>
                </div>
            </div>
            {/* <div className='ml-auto mr-auto mb-[10px]'>
                <div className='w-1/3 mb-[5px] px-[3px] ml-auto text-center float-left'>
                    <button className='w-full inline-grid items-center h-[78px] relative leading-[52px] text-[20px] text-white outline-0 rounded-[6px] bg-[#80B4C2] shadow-sm hover:shadow-md'>留守</button>
                </div>
                <div className='w-1/3 mb-[5px] px-[3px] ml-auto text-center float-left'>
                    <button className='w-full inline-grid items-center h-[78px] relative leading-[52px] text-[20px] text-white outline-0 rounded-[6px] bg-[#80B4C2] shadow-sm hover:shadow-md'>不在</button>
                </div>
                <div className='w-1/3 mb-[5px] px-[3px] ml-auto text-center float-left'>
                    <button className='w-full inline-grid items-center h-[78px] relative leading-[52px] text-[20px] text-white outline-0 rounded-[6px] bg-[#80B4C2] shadow-sm hover:shadow-md'>終了</button>
                </div>
            </div> */}
            {/* <div className='ml-auto mr-auto mb-[20px]'>
                <div className='px-[3px] w-1/3 ml-auto text-right'>
                    <button className='w-[80%] inline-grid items-center rounded-[6px] text-[16px] bg-[#3a4aa6] leading-normal h-[60px] px-[10px]'>待ち受け画面</button>
                </div>
                <div className='px-[10px] w-1/3 ml-auto text-right float-left'>
                    <button className='w-full inline-grid relative items-center rounded-[6px] text-[16px] bg-[#3a4aa6] leading-normal h-[60px] px-[10px]'>アプリ一覧</button>
                </div>
            </div> */}
        </div>
    )
}
export default OutGoingcall;
