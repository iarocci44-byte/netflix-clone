import bgimg from '../assets/banner-bg.jpg'
import nflogo from '../assets/Netflix_logo_PNG1.png'
const Nav = () =>{
    return(
        <>
            <div className="px-10 py-2 text-white">
               <div className='top-0 left-0 right-0 h-[550px] absolute bg-cover bg-center opacity-30' style={{backgroundImage: `url(${bgimg})`}}></div>
               <div className='relative z-0'>
               <div className="flex justify-between items-center h-20">
               <div className="w-40 font-bold text-red-600">
                 <img src={nflogo} alt="" />
               </div>
               <div className="flex items-center">
                <div>
                    <select className="pr-25 border p-1 mr-2 border-gray-500 rounded" name="" id="">
                        <option className="text-black" value="English">English</option>
                        <option className="text-black" value="Spanish">Spanish</option>
                    </select>
                </div>
                <button className="bg-red-600 px-5 py-1 rounded">Sign In</button>
               </div>
            </div>
            <div className="py-20 flex flex-col items-center">
                <div className="text-6xl font-bold w-150 text-center">
                    Unlimited Films, series and more
                </div>
                <div className="py-5 font-bold text-[18px]">Starts at $7.99. Cancel at any time.</div>
                <p>Ready to watch?  Enter your email to create or restart your membership.</p>
                <div className="py-5">
                    <input className="border p-2 border-gray-500 pr-30 mr-5" type="text" name="" id="" placeholder="Email address..." />
                    <button className="bg-red-600 p-2 px-5 rounded">Get Started &rsaquo;</button>
                </div>
               </div>
               </div>
            </div>
        </>
    )
}

export default Nav;