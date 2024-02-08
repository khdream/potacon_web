import React, { useState } from 'react';
import GoBackBtn from '../components/GoBackBtn';
import 'react-toastify/dist/ReactToastify.css';

const AddContact: React.FC = () => {

    return (
        <>
            <div className='w-full p-[10px] ml-auto mr-auto bg-[#f1eded] sm:w-[50%] lg:w-[35%]'>
                <div className='ml-auto mr-auto flex'>
                    <div className='text-[20px] font-bold my-[.5rem] '>
                        相手の名前と電話番号と【個人用】か【会社用】かを決めて下さい。
                    </div>
                    <GoBackBtn />
                </div>
            </div>
            <div className='h-screen w-full ml-auto mr-auto px-[0.75rem] bg-[#ceccca] sm:w-[50%] lg:w-[35%]'>
            </div>
        </>
    )
}
export default AddContact;
