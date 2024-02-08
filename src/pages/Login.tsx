import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login: React.FC = () => {
    const navigate = useNavigate();

    const [number, setNumber] = useState<string>();
    const handleLogin = () => {
        if (number) {
            toast.success("サインアップ成功")
            navigate('/home')
        } else {
            toast.error("携帯電話番号を教えてください");
            return
        }
    }
    return (
        <>
            <Navbar />
            <div className="pt-[40px] ml-auto mr-auto mb-[20px]">
                <div className='w-[34%] ml-auto mr-auto px-[0.75rem] max-md:w-full '>
                    <div className='bg-[#4d84af] pb-[30px] mt-[0.5rem] mb-[1rem] rounded-[2px] shadow-sm'>
                        <div className='py-[17px] px-[60px] rounded-[2px] text-white'><span className='leading-[32px] bg-[8px] text-[24px] font-[300]'>あなたの電話番号</span></div>
                        <div className='ml-auto mr-auto mb-[20px]'>
                            <div className='bg-[#f9f9f9] px-[0.75rem] w-[84%] ml-auto mr-auto'>
                                <input name="number" onChange={(e) => setNumber(e.target.value)} placeholder='090' className='text-[1rem] border-0 h-[3rem] w-full mb-[5px] transition-colors duration-300 border-white border-b-[2px] focus:outline-0 focus:border-[#26a69a]' />
                            </div>
                        </div>
                        <div className='ml-auto mr-auto mb-[20px] text-center'>
                            <button onClick={handleLogin} className='cursor-pointer inline-block h-[36px] leading-[36px] border-0 rounded-[2px] shadow-sm py-0 px-[60px] mt-[-2px] ml-[15px] mr-[15px] no-underline bg-[#26a69a] text-white text-[1rem] text-center tracking-[.5px]  transition-all duration-300 shadow] hover:bg-[#2bbbad]'>次へ</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;
