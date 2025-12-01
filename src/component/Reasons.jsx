import { LuMonitorPlay } from "react-icons/lu";
import { RiDownloadFill } from "react-icons/ri";
import { GiSpyglass } from "react-icons/gi";
import { FaChildren } from "react-icons/fa6";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css'

function Reasons() {
    const reasons =[
        {
            "title":"Enjoy on your TV",
            "detail":"Watch on smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
            "icon":<LuMonitorPlay />
        },
         {
            "title":"Download your shows to watch offline",
            "detail":"Save your favorites easily and always have something to watch.",
            "icon":<RiDownloadFill />
        },
        {
            "title":"Watch everywhere",
            "detail":"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
            "icon":<GiSpyglass />
        },
        {
            "title":"Create profiles for kids",
            "detail":"Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
            "icon":<FaChildren />
        }
    ]
  return (
    <div className=''>
        <div className='flex flex-col font-bold text-2xl pt-7 mb-5'>
            More reasons to join
        </div>
        <div className="flex gap-5">
        {reasons.map((reason,index)=>{
            return(
                 <div key={index} className='w-[275px] h-80 p-4 bg-gradient-to-b from-blue-950 to-gray-900 rounded-2xl relative'>
            <div>
                <div className='font-bold leading-none text-2xl'>
                    {reason.title}
                </div>
                <div className='py-5 text-gray-300 text-[16px]'>
                    {reason.detail}
                </div>
                <div className="text-6xl text-pink-300 right-5 bottom-5 absolute opacity-60">
                    {reason.icon}
                </div>
                
            </div>
        </div>
        
            )
        })}
     </div>  
    </div>
  )
}

export default Reasons