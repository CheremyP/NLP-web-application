import React, { useState } from "react";
import LanguageSelector from "../components/Languages";

function Feature2() {
  const [audioFile, setAudioFile] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState("");

  function handleLanguageChange(language) {
    setSelectedLanguage(language);
  }

  const handleFileChange = (event) => {
    setAudioFile(event.target.files[0]);
    setFileUploaded(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('language', selectedLanguage);
    formData.append('audio', audioFile);
    setLoading(true);   

    fetch('http://localhost:5000/transcribe', {
      method: 'POST',
      body: formData,

    })
      .then(response => response.json())
      .then(data => {
        setResult(data);
        setLoading(false);

      })
      .catch(error => console.error(error));
  };

return (
<section className="text-gray-600 body-font relative">
  <div className="absolute inset-0 bg-gradient-to-tr from-green-500 via-lime-100 to-sky-400 flex justify-center items-center flex-col h-screen"></div>
    <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Transcription & Speech-to-Text</h2>
    <p className="leading-relaxed mb-5 text-gray-600">Easily transcribe or convert audio to text using our app.</p>
                    <div className="grid grid-cols-1 space-y-2">
                      <label className="text-sm font-bold text-gray-500 tracking-wide">Attach Document</label>
                    <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                            <div className="h-full w-full text-center flex flex-col justify-center items-center  ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                                <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                                <img className="has-mask h-36 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="freepik image"/>
                                </div>
                                {fileUploaded ? (
                                  <p className="pointer-none text-gray-500"><span className="text-sm">Your audio file is uploaded</span></p>
                                ) : (
                                  <p className="pointer-none text-gray-500"><span className="text-sm">Drag and drop</span> files here <br /> or <a id="" className="text-blue-600 hover:underline">select a file</a> from your computer</p>
                                )}
                                </div>
                            <input type="file" id="audio" onChange={handleFileChange} accept="audio/*" required />
                        </label>
                    </div>
                </div>
                  <p className="text-sm text-gray-300">
                      <span>File type: MP3, MP4, WAV, M4A</span>
                  </p>
                <div>
                  </div>
                  <div> <LanguageSelector onLanguageChange={handleLanguageChange} /></div>
                  <span style={{ marginBottom: '20px' }}></span>
            <div className="flex justify-between">
            {loading ? (<button disabled type="button" className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
              </svg>
              Loading...
              </button>):(
            <button onClick={handleSubmit} className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Translate</button>
            )}
            </div>          
{result && (<div className="mt-5">
        <h3 className="text-gray-900 text-md mb-1 font-medium title-font">Transcription</h3>
        <p className="leading-relaxed text-gray-600">{result.Transcript}</p>
        <h3 className="text-gray-900 text-md mb-1 font-medium title-font">Translation</h3>
        <p className="leading-relaxed text-gray-600">{result.Translation}</p>
        <span style={{ marginBottom: '10px' }}></span>
        <audio controls><source src={result.Audio} type="audio/mp3" /></audio>      
        </div>
      )}
    </div>
  </div>
</section>
);
}

export default Feature2;