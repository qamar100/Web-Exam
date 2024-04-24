import Image from "next/image";
import logo from "../../public/logo.svg"
import { log } from "console";
import logo2 from "../../public/logo2.svg"
import arrow from "../../public/arrow.svg"


const navlinks=[
    {name:'Home'},
    {name:'Features'},
    {name:'Community'},
    {name:"Blog"},
    {name:"Pricing"},
]

export function Navbar() {
    return(
      <nav className="flex w-full  bg-white items-center pt-[11.14px] mr-[200px] justify-between">
        <div className="flex mr-[200px]">
        <span className="pl-[25px]">
            <Image src={logo} alt=""/>
        </span>
        <span className="pl-[4px]">
            <Image src={logo2} alt=""/>
        </span>
        </div>
        <div className=" flex flex-row items-center gap-x-[16.71px] pl-[600px]">
          {navlinks.map((items,index)=>(
            
            <p className="flex flex-row gap-x-[16.71px] text-[#4D4D4D] text-[11.14]" key={index}> {items.name} </p>
            ))}
        
        </div>
        <button className="bg-[#4CAF4F] gap-x[22.27px] pl-[20px] rounded-[2.78px] mr-[100px]">
        <p className="font-medium text-[11.14px] leading-[16.71px] py-[9.74px] px-[22.27px] pr-[22px] text-[#FFFFFF] ">Register Now</p> 
            <span>
            
        
                <Image className="items-center"src={arrow} alt=""/>
                
            </span>
        </button>
      </nav>
    );
}