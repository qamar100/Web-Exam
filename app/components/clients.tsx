import Image from "next/image";
import v1 from "../../public/v1.svg"
import v2 from "../../public/v2.svg"
import v3 from "../../public/v3.svg"
import v4 from "../../public/v4.svg"
import v5 from "../../public/v5.svg"
import v6 from "../../public/v6.svg"
import l1 from "../../public/l1.svg"

export function Client(){
    return(
        <div className="flex w-full bg-white flex-col items-center justify-center">
              <p className="font-medium pb-[5.57px] text-[25.06px] leading-[30.63px] text-[#4D4D4D]">
                Our Clients
              </p>
              <p className="font-medium pb-[11.14px] text-[11.14px] leading-[16.71px] text-[#717171]">
              We have been working with some Fortune 500+ clients
              </p>
            <div className="flex w-full  mr-[200px] justify-between flex-row gap-[20px] justify-space-between">
                <span>
                    <Image src={v1} alt=""/>
                </span>
                <span>
                    <Image src={v2} alt=""/>
                </span>
                <span>
                    <Image src={v3} alt=""/>
                </span>
                <span>
                    <Image src={v4} alt=""/>
                </span>
                <span>
                    <Image src={v5} alt=""/>
                </span>
                <span>
                    <Image src={v6} alt=""/>
                </span>

            </div>
            <div  className=" pt-[27.84px] flex w-full flex-col items-center justify-center">
              <p className="font-medium pb-[5.57px] text-[25.06px] leading-[30.63px] text-[#4D4D4D]">
              Manage your entire community in a single system
              </p>
              <p className="font-medium pb-[11.14px] text-[11.14px] leading-[16.71px] text-[#717171]">
              Who is Nextcent suitable for?

              </p>
            </div>

            <Image src={l1} alt=""/>
        </div>
    );
}