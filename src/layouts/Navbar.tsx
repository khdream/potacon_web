import React from "react";



const Navbar: React.FC = () => {
    const goToLast=()=>{
        if (window.confirm('Are you sure you want to close this window?')) {
            window.close();
          }
    }

    return (
        <nav className="bg-[#29b6f6] h-[64px] leading-[64px]">
            <a className="text-[2.1rem] inline-block absolute p-0 no-underline text-white max-md:text-[24px]">ジャコス無料通話</a>
            <ul className="float-right" >
                <li className="float-left p-0 list-item"><button className="cursor-pointer inline-block h-[36px] leading-[36px] border-0 rounded-[2px] shadow-sm py-0 px-[1rem] mt-[-2px] ml-[15px] mr-[15px] no-underline bg-[#26a69a] text-white text-[1rem] text-center tracking-[.5px]  transition-all duration-300 shadow] hover:bg-[#2bbbad]" onClick={goToLast}>戻る</button></li>
            </ul>
        </nav>
    )
}

export default Navbar;