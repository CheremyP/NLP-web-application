import React from "react";
import landing_photo from '/src/assets/landing.avif';

function Hero(props) {
  return (
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-32 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Live Audio translation</h1>
      <ul>
      <li className="flex items-center py-3 gap-x-2"><div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-green-500 via-lime-100 to-sky-400"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="h-8 w-8 rounded-lg bg-gradient-to-br from-white/90 via-white to-white/25 p-1.5 text-black"  viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 20h16"></path><path d="M4 12h16"></path><path d="M4 4h16"></path></svg></div><span className="text-md md:text-xl font-medium"><span data-br=":Rir4m:" data-brr="1">Transcription & translation of audio content</span></span></li>
      <li className="flex items-center py-3 gap-x-2"><div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-green-500 via-lime-100 to-sky-400"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="h-8 w-8 rounded-lg bg-gradient-to-br from-white/90 via-white to-white/25 p-1.5 text-black"  viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 5h7"></path><path d="M9 3v2c0 4.418 -2.239 8 -5 8"></path>   <path d="M5 9c0 2.144 2.952 3.908 6.7 4"></path>   <path d="M12 20l4 -9l4 9"></path>   <path d="M19.1 18h-6.2"></path></svg></div><span className="text-md md:text-xl font-medium"><span data-br=":Rir4m:" data-brr="1">Supports over 80 languages</span></span></li>
      <li className="flex items-center py-3 gap-x-2"><div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-green-500 via-lime-100 to-sky-400"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="h-8 w-8 rounded-lg bg-gradient-to-br from-white/90 via-white to-white/25 p-1.5 text-black"  viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z"></path><path d="M5 10a7 7 0 0 0 14 0"></path><path d="M8 21l8 0"></path><path d="M12 17l0 4"></path></svg></div><span className="text-md md:text-xl font-medium"><span data-br=":Rir4m:" data-brr="1">Speech-to-Text for audio recording and files</span></span></li>
      </ul>
      <div className="flex justify-center">
        <button
          className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
          onClick={props.scrollToNextSection}>Get started
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-6/6">
      <img className="object-cover object-center rounded" alt="hero" src={landing_photo}/>
    </div>
  </div>
</section>);
}

export default Hero;