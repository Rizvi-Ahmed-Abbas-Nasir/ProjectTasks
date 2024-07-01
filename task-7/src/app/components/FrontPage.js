import abbas from '../Images/Rizvi Ahmed Abbas2.png';
import Image from 'next/image';
import { Raleway } from 'next/font/google'
import { Roboto } from 'next/font/google'


const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300'] 
})


export default function FrontPage() {
    return(
        <div className="  FrontPage w-full transition-all duration-100 ease-in h-[90vh] bg-[var(--background)]">
        <div className=" FrontContainer w-full h-[73vh] bg-gradient-to-r from-[var(--half-background)] to-[var(--other-half-background)] flex flex-col justify-center items-center">
            <div className=" FrontContent w-[80%] h-[80vh] flex justify-center items-center gap-32">
                <div className="animate-fade-up FrontTextcontent">
                    <div className={`${roboto.className} flex flex-col gap-2`} id="HeadingFront">
                        <h3>Search From 150 Awesome Verified Ads!</h3>
                        <h1 className="text-[3.5rem] text-[#ff008a]">Best Solution for Every</h1>
                        <h2 className="text-[3rem] text-[#203066]">House Problems</h2>
                    </div>
                    <div className=" FrontPhotoBox mt-8 p-4 rounded-lg bg-[var(--background)] flex justify-center items-center text-[var(--base-text-clr)] animate-fade-up">
                        <h4>2M+ Professionals Register</h4>
                    </div>
                </div>
                <div className=" CircularImage w-[30%] h-[65%] border border-[rgba(129,129,129,0.18)] rounded-full bg-[var(--background)] flex justify-center items-center shadow-md animate-fade-up transition-all duration-100 ease-in">
                    <Image className="CircleContent w-[80%] h-[80%] mt-8 rounded-full border-4 border-[#ff008a] bg-gradient-to-tr from-[rgba(143,143,143,0.1)] to-[rgba(139,139,139,0)]" 
                        src={abbas} 
                    />
                </div>
            </div>
            <div className="w-full h-[5vh] flex justify-center FrontSearchBar">
                <div className=" ForntearchContainer w-[70%] h-[8.6vh] bg-[var(--background)] shadow-md rounded-full flex justify-between items-center mt-1 animate-fade-up transition-all duration-100 ease-in">
                    <input className="ml-4 bg-[var(--background)] border-none focus:outline-none" placeholder="What are you Looking for" type='search' />
                    <input className="bg-[var(--background)] border-none focus:outline-none" placeholder='Your Location' type='search' />
                    <button className="px-12 py-3 rounded-full bg-[#203066] text-white transition-all duration-100 ease-in mr-4">Search</button>
                </div>
            </div>
        </div>
        <div className=" ForntearchContainer w-full h-[5vh] flex justify-center items-center text-[var(--base-text-clr)]">
            <div className="flex gap-20 mt-32 TextsAndButton">
                <h3>Popular Searches</h3>
                <button className="px-6 py-3 rounded-full bg-[#f4f4f7] transition-all duration-100 ease-in text-black">Electrical Work</button>
                <button className="px-6 py-3 rounded-full bg-[#f4f4f7] transition-all duration-100 ease-in text-black">Cleaning</button>
                <button className="px-6 py-3 rounded-full bg-[#f4f4f7] transition-all duration-100 ease-in text-black">AC Repair</button>
            </div>
        </div>
    </div>
    
    );
    
};
