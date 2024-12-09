import Image from "next/image";
import gas from "@/public/gas-station.svg";
import manual from "@/public/Manual.svg";
import user from "@/public/profile-2user.svg";
import {Popular} from "../constants/catalog";
import { Recommendation } from "../constants/catalog";
import Link from "next/link";
export default function Catalog(){
    return(
        <div className="bg-[#F6F7F9] w-[100vw] lg:h-[1500px] h-[3460px]">
            <div className="w-[100vw] lg:h-[452px] h-auto">
                <div className="flex flex-row justify-between items-center">
                    <p className="p-[40px] text-[#90A3BF] text-[16px]">Popular Car</p>
                    <p className="text-[14px] text-[#3563E9] pr-[20px]">View All</p>
                </div>
                <div className="flex justify-around lg:flex-row w-[100vw] flex-col lg:h-[388px] h-auto lg:gap-[0px] gap-[15px]">
                {
                    Popular.map((e,index)=>(
                        <div key={index} className="bg-white lg:w-[304px] lg:m-[0px] m-[8px] lg:h-[388px] w-[96%] h-[240px] rounded-[10px] flex flex-col p-[15px] justify-evenly">
                            <div className="flex justify-between">
                                <div className="w-[128px] h-[48px] flex flex-col">
                                    <p className="text-black text-[20px] font-bold w-[128px]">{e.name}</p>
                                    <p className="text-[12px]">{e.title}</p>
                                </div>
                                <div><Image src={e.icon} alt=""/></div>
                            </div>
                            <div className="flex lg:flex-col flex-row items-center">
                                <div className="lg:mt-[45px] lg:mb-[45px]"><Link href={'/detail-page'}><Image src={e.image} alt={e.name}/></Link></div>
                                <div className="flex lg:flex-row flex-col lg:gap-[16px] gap-[4px] lg:w-[256px] lg:h-[24px] w-[130px] h-[74px]">
                                    <div className="flex gap-[4px]">
                                        <div className="w-[24px] h-[24px]">
                                            <Image src={gas} alt=""/>
                                        </div>
                                        <p className="text-[#90A3BF] text-[14px]">{e.gasoline}</p>
                                    </div>
                                    <div className="flex  gap-[4px]">
                                        <div className="w-[24px] h-[24px]">
                                        <Image src={manual} alt=""/>
                                        </div>
                                        <p className="text-[#90A3BF] text-[14px]">{e.car}</p>
                                    </div>
                                    <div className="flex  gap-[4px]">
                                        <div className="w-[24px] h-[24px]">
                                        <Image src={user} alt=""/>
                                        </div>
                                        <p className="text-[#90A3BF] text-[14px]">{e.capacity}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row w-[100%] justify-between">
                                <div className="flex w-[128px] h-[44px] flex-col">
                                    <div className="flex flex-row items-center">
                                       <div className="font-bold text-[22px] text-black">{e.dPrice}</div>
                                       <div className="text-[#90A3BF] text-[14px]">days</div>
                                    </div>
                                    <div className="line-through text-[14px] text-[#90A3BF]">{e.oPrice}</div>
                                </div>
                                <div className="w-[116px] h-[44px] bg-[#3563E9] text-white pt-[10px] pl-[20px] rounded-[4px]">
                                    <Link href={'/payment'}>Rent Now</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
               </div>
            </div>
            <div className="w-[100vw] h-[452px]">
            <div className="flex flex-row justify-between mt-[50px] items-center">
                    <p className="p-[40px] text-[#90A3BF] text-[16px]">Recommendation Car</p>
                    <p className="text-[14px] text-[#3563E9] pr-[20px]">View All</p>
                </div>
                <div className="flex justify-evenly flex-wrap lg:h-[808px] h-auto gap-[15px]">
                {
                    Recommendation.map((e,index)=>(
                        <div key={index} className="bg-white lg:w-[304px] lg:m-[0px] m-[8px] lg:h-[388px] w-[96%] h-[240px] rounded-[10px] flex flex-col p-[15px] justify-evenly">
                            <div className="flex justify-between">
                                <div className="w-[128px] h-[48px] flex flex-col">
                                    <p className="text-black text-[20px] font-bold w-[160px]">{e.name}</p>
                                    <p className="text-[12px]">{e.title}</p>
                                </div>
                                <div><Image src={e.icon} alt=""/></div>
                            </div>
                            <div className="flex lg:flex-col flex-row items-center">
                            <div className="lg:mt-[45px] lg:mb-[45px]"><Link href={'/detail-page'}><Image src={e.image} alt={e.name}/></Link></div>
                                <div className="flex lg:flex-row flex-col lg:gap-[16px] gap-[4px] lg:w-[256px] lg:h-[24px] w-[130px] h-[74px]">
                                    <div className="flex gap-[4px]">
                                        <div className="w-[24px] h-[24px]">
                                            <Image src={gas} alt=""/>
                                        </div>
                                        <p className="text-[#90A3BF] text-[14px]">{e.gasoline}</p>
                                    </div>
                                    <div className="flex gap-[4px]">
                                        <div className="w-[24px] h-[24px]">
                                        <Image src={manual} alt=""/>
                                        </div>
                                        <p className="text-[#90A3BF] text-[14px]">{e.car}</p>
                                    </div>
                                    <div className="flex  gap-[4px]">
                                        <div className="w-[24px] h-[24px]">
                                        <Image src={user} alt=""/>
                                        </div>
                                        <p className="text-[#90A3BF] text-[14px]">{e.capacity}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row w-[100%] justify-between">
                                <div className="flex w-[128px] h-[44px] flex-col">
                                <div className="flex flex-row items-center">
                                    <div className="font-bold text-[22px] text-black">{e.dPrice}</div>
                                    <div className="text-[#90A3BF] text-[14px]">days</div>
                                </div>
                                <div className="line-through text-[14px] text-[#90A3BF]">{e.oPrice}</div>
                                </div>
                                <div className="w-[116px] h-[44px] bg-[#3563E9] text-white pt-[10px] pl-[20px] rounded-[4px]">
                                <Link href={'/payment'}>Rent Now</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}