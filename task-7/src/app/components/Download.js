import phone from "../Images/app-seven.png"
import Image from "next/image";


export default function Download() {
    return(
        <div className="DownloadContainer w-[100%] h-[100vh]">
        <div className="DownloadContent w-[100%]  h-[100vh] flex  ">
            <div className="DownloadBox w-3/5 h-80 flex items-center justify-center flex-col">
                <div className="DownloadTextAndButton w-55 h-80 flex flex-col items-left justify-center">
                    <h1 className="text-3xl">Download Our New App</h1>
                    <p className="mt-8">Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet.Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra,</p>
                    <div className="DownloadTAndBIMg w-full flex justify-center items-center">
                        <Image className="DownloadIMGG" src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/scan-six.svg" width={200} height={200} />
                        <div className="DownloadTAndBIMg2 flex flex-col justify-center items-center">
                            <Image className="DownloadIMGG" src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/googleplay-seven.svg" width={150} height={150} />
                            <Image className="DownloadIMGG" src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/googleplay-seven.svg" width={150} height={150} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="DownloadPhoneIMG w-1/2 h-80 rounded-2xl bg-blue-500 flex justify-center items-end">
                <Image className="PhoneING" src={phone} width={500} height={500} />
            </div>
        </div>
    </div>
    
    );
};
