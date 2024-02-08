import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Clock from '../components/Clock';
import GreenButton from '../components/GreenButton';
import { GreenButtonList } from '../utils/ButtonList';
import 'react-toastify/dist/ReactToastify.css';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const back = () => {
        navigate('/');
    }
    return (
        <div className='h-screen w-full ml-auto mr-auto px-[0.75rem] bg-gradient-to-r from-[#7c6b6e] via-[#ad9f9f] to-[#7c6b6e] sm:w-[50%] lg:w-[35%]'>
            <div className='w-full pt-[10px] pb-[20px] mb-[15px]'>
                <div className='mb-[15px] flex'>
                    <Clock />
                    <div className='w-[25%] ml-auto px-[.75rem] text-right'>
                        <button onClick={back} className='w-[70px] h-[66px] mt-[10px] leading-[52px] tracking-[.5px] bg-[#ed9505] inline-grid items-center text-[50px] rounded-[6px] text-center uppercase font-hkgy transition-all duration-200 cursor-pointer text-white shadow hover:bg-[#2bbbad]'>初</button>
                    </div>
                </div>
                <div className='mb-[20px]'>
                    <div className='w-[75%] ml-auto mr-auto md:w-[55%]'>
                        <button className='w-full h-[56px] text-[44px] text-white font-hkgy inline-grid items-center leading-[52px] rounded-[6px] bg-gradient-to-t from-[#38743a] via-[#3a813b] to-[#307031] transition-all duration-200 shadow-sm hover:shadow-md'>無料通話</button>
                    </div>
                </div>
                <div className='relative font-hkgy flex flex-wrap'>
                    {
                        GreenButtonList.map((item, key) => {
                            return (
                                <GreenButton title={item.title} navigation={item.navigation} key={key} />
                            )
                        })
                    }
                </div>
                <div className='mb-[25px]'>
                    <div className='w-full mt-[5px] px-[.75rem] text-center '>
                        <button className='h-[90px] p-[15px] mt-[20px] text-center text-lg w-[90%] text-black fo bg-[#d7e4bd] rounded-[25px] border-[3px] border-[#008000]'>各ボタンを長押しし<br />するとナビを表示します</button>
                    </div>
                </div>
                <div className='ml-auto mr-auto mb-[10px] flex flex-wrap'>
                    <div className='w-1/3 mb-[5px] px-[3px] ml-auto text-center'>
                        <button className='w-full inline-grid items-center h-[78px] relative leading-[52px] text-[20px] text-white outline-0 rounded-[6px] bg-[#80B4C2] shadow-sm hover:shadow-md'>留守</button>
                    </div>
                    <div className='w-1/3 mb-[5px] px-[3px] ml-auto text-center'>
                        <button className='w-full inline-grid items-center h-[78px] relative leading-[52px] text-[20px] text-white outline-0 rounded-[6px] bg-[#80B4C2] shadow-sm hover:shadow-md'>不在</button>
                    </div>
                    <div className='w-1/3 mb-[5px] px-[3px] ml-auto text-center'>
                        <button className='w-full inline-grid items-center h-[78px] relative leading-[52px] text-[20px] text-white outline-0 rounded-[6px] bg-[#80B4C2] shadow-sm hover:shadow-md'>終了</button>
                    </div>
                </div>
                {/* <div className='ml-auto mr-auto mb-[20px]'>
                        <div className='px-[3px] w-1/3 ml-auto text-right'>
                            <button className='w-[80%] inline-grid items-center rounded-[6px] text-[16px] bg-[#3a4aa6] leading-normal h-[60px] px-[10px]'>待ち受け画面</button>
                        </div>
                        <div className='px-[10px] w-1/3 ml-auto text-right float-left'>
                            <button className='w-full inline-grid relative items-center rounded-[6px] text-[16px] bg-[#3a4aa6] leading-normal h-[60px] px-[10px]'>アプリ一覧</button>
                        </div>
                    </div> */}
            </div>
        </div>
    )
}
export default Home;