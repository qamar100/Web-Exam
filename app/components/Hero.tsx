import Image from "next/image"
import image1 from "../../public/image1.svg"
import dot from "../../public/dot.svg"

export function Hero() {
    return(
    <div className="flex  pt-[72.39px] gap-x-[20px] w-full h-full pl-[25px]  bg-white items-center pt-[11.14px] mr-[200px] justify-between">
        <div className="flex  gap-x-[20px]">
            <span>
                <p className="flex flex-col font-medium leading-[52.9px] text-[44.5px] text-[#4D4D4D]">
            Lessons and insights
            </p>
            <p className="flex flex-col gap y-[11.14px] font-medium leading-[52.9px] text-[44.5px] text-[#4CAF4F]">
                From 8 years now
            </p>
            <p className=" flex pb-[22.27px] gap y-[11.14px] text-[11.14px] leading-[16.71px] text-[#717171] ">
            Where to grow your business as a photographer: site or social media? </p>
            <button className="bg-[#4CAF4F] gap-x[22.27px] pl-[20px] rounded-[2.78px] mr-[100px]">
        <p className="font-medium text-[11.14px] leading-[16.71px] py-[9.74px] px-[22.27px] pr-[22px] text-[#FFFFFF] ">Register Now</p> 
            
        </button>
            </span>
         <div className="flex flex-col pl-[800px] ">
            <Image src={image1} alt=""/>
          </div>
            
         
            
        </div>
       
    </div>

    );
}