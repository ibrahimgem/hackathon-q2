'use client';
import Image from "next/image";
import ad1 from "@/public/Ads 1.svg";
import ad2 from "@/public/Ads 2.svg";
import mark from "@/public//mark.svg";
import { IoSwapVertical } from "react-icons/io5";
import {Plus_Jakarta_Sans} from "next/font/google";
import { useEffect, useState } from 'react';
const font = Plus_Jakarta_Sans({
    subsets:['latin'],
    weight:['400','500','600','700','800']
})
export default function Hero(){
        const [isLargeScreen, setIsLargeScreen] = useState(false);
      
        useEffect(() => {
          const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
          };
      
          // Check screen size on load and on resize
          handleResize();
          window.addEventListener('resize', handleResize);
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
    return(
        <div className={`w-[100vw] lg:h-[550px] h-[650px] bg-[#F6F7F9] ${font.className}`}>
            <div className="flex items-center justify-center gap-[20px] h-[400px] lg:flex-row flex-col">
                <div className="lg:w-[640px] w-[90vw] h-[360px]">
                    <Image src={ad1} alt=""/>
                </div>
                <div className="lg:w-[640px] w-[90vw] h-[360px]">
                    <Image src={ad2} alt=""/>
                </div>
            </div>
            <div className="lg:h-[150px] h-[250px] flex items-center justify-center lg:flex-row flex-col lg:gap-[0px] gap-[40px] lg:mt-[0px] mt-[5%]">
                <div className="lg:w-[582px] w-[90vw] lg:h-[132px] h-auto rounded-[10px] bg-white flex flex-col lg:pl-[50px] p-[5px] pt-[30px] gap-[15px] lg:pb-[0px] pb-[15px]">
                    <div className="w-[92px] h-[20px] flex gap-[4px] items-center">
                        <Image src={mark} alt=""className="w-[16px] h-[16px]"/>
                        <p className="font-bold  text-[#1A202C]">Pick-up</p>
                    </div>
                    <div className="z-0 lg:w-[486px] w-[90vw] lg:h-[48px] h-auto flex lg:gap-[26px] justify-evenly flex-row gap-[3px]">
                        <div className="flex flex-col">
                            <p className="pl-[4px] font-bold  text-[#1A202C] lg:w-auto w-[70px] lg:text-[16px] text-[14px]">Locations</p>
                            <select name="location" id="" className="text-[#90A3BF] lg:text-[14px] text-[12px] lg:w-auto w-[90px] lg:pb-[0px] pb-[4px]">
                            {isLargeScreen ? (
                            <option value="location">Select your city</option>
                             ) : (
                            <option value="location">Semarang</option>
                            )}
                            </select>
                        </div>
                        <div className="w-[1px] lg:h-[44px] h-[40px] bg-[#90A3BF]"></div>
                        <div className="flex flex-col">
                            <p className="pl-[4px] font-bold lg:text-[16px] text-[14px] text-[#1A202C] lg:w-auto w-[70px]">Date</p>
                            <select name="date" id="" className="text-[#90A3BF] lg:text-[14px] text-[12px] lg:w-auto w-90px] lg:pb-[0px] pb-[4px]">
                            {isLargeScreen ? (
                            <option value="date">Select your date</option>
                             ) : (
                            <option value="date">20 July 2022</option>
                            )}
                            </select>
                        </div>
                        <div className="w-[1px] lg:h-[44px] h-[40px] bg-[#90A3BF]"></div>
                        <div className="flex flex-col">
                            <p className="pl-[4px] font-bold  text-[#1A202C] lg:text-[16px] text-[14px] lg:w-auto w-[70px]">Time</p>
                            <select name="time" id="" className="text-[#90A3BF] lg:text-[14px] break-words text-[12px] lg:w-auto w-[80px] lg:pb-[0px] pb-[4px]">
                            {isLargeScreen ? (
                            <option value="time">Select your time</option>
                             ) : (
                            <option value="time">07.00</option>
                            )}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="bg-[#3563E9] text-[white] rounded-[10px] mt-[0px] ml-[0px] lg:mt-[60px] lg:ml-[58px] z-50 h-[60px] w-[60px] flex justify-center items-center lg:static absolute top-[125%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-lg shadow-[#3563E9]">
                <IoSwapVertical className="text-white text-[24px]" />
                </div>
                <div className="z-0 lg:w-[582px] w-[90vw] lg:h-[132px] h-auto rounded-[10px] bg-white flex flex-col lg:pl-[50px] p-[5px] pt-[30px] gap-[15px] lg:pb-[0px] pb-[15px]">
                <div className="w-[92px] h-[20px] flex items-center gap-[4px]">
                        <Image src={mark} alt="" className="w-[16px] h-[16px]"/>
                        <p className="font-bold  text-[#1A202C]">Drop-off</p>
                    </div>
                    <div className="lg:w-[486px] w-[90vw] lg:h-[48px] h-auto flex justify-evenly lg:gap-[26px] flex-row gap-[3px]">
                        <div className="flex flex-col">
                        <p className="pl-[4px] font-bold  text-[#1A202C] lg:w-auto w-[70px] lg:text-[16px] text-[14px]">Locations</p>
                        <select name="location" id="" className="text-[#90A3BF] lg:text-[14px] text-[12px] lg:w-auto w-[90px] lg:pb-[0px] pb-[4px]">
                            {isLargeScreen ? (
                            <option value="location">Select your city</option>
                             ) : (
                            <option value="location">Semarang</option>
                            )}
                            </select>
                        </div>
                        <div className="w-[1px] lg:h-[44px] h-[40px] bg-[#90A3BF]"></div>
                        <div className="flex flex-col">
                        <p className="pl-[4px] font-bold lg:text-[16px] text-[14px] text-[#1A202C] lg:w-auto w-[70px]">Date</p>
                            <select name="date" id="" className="text-[#90A3BF] lg:text-[14px] text-[12px] lg:w-auto w-90px] lg:pb-[0px] pb-[4px]">
                            {isLargeScreen ? (
                            <option value="date">Select your date</option>
                             ) : (
                            <option value="date">20 July 2022</option>
                            )}
                            </select>
                        </div>
                        <div className="w-[1px] lg:h-[44px] h-[40px] bg-[#90A3BF]"></div>
                        <div className="flex flex-col">
                        <p className="pl-[4px] font-bold  text-[#1A202C] lg:text-[16px] text-[14px] lg:w-auto w-[70px]">Time</p>
                            <select name="time" id="" className="text-[#90A3BF] lg:text-[14px] break-words text-[12px] lg:w-auto w-[80px] lg:pb-[0px] pb-[4px]">
                            {isLargeScreen ? (
                            <option value="time">Select your time</option>
                             ) : (
                            <option value="time">07.00</option>
                            )}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}