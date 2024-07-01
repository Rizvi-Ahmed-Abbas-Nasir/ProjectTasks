import Image from "next/image";


export default function HowITWorks() {
    return(
        <div className="w-full h-[100vh] bg-white mt-32 WorksContainer">
        <div className=" WorksContent flex flex-col items-center justify-center w-full h-[80vh] text-center gap-40">
            <div className="flex flex-col gap-4">
                <h1 className=" WorksText text-[3.5rem] text-[#203066]">How It Works</h1>
                <p>Aliquam lorem ante, dapibus in, viverra quis</p>
            </div>
            <div className="WorksBox  flex justify-around items-center gap-8 w-[90%]">
                <div className=" WorksBoxes flex justify-center items-center w-[50%] h-[40vh] rounded-lg bg-[var(--background)] shadow-[var(--shadow-box)] border border-[rgb(219,217,217)]">
                    <Image 
                        src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/work-seven-3.svg"
                        width={100}
                        height={100}
                    />
                </div>
                <div className=" WorksBoxes flex justify-center items-center w-[50%] h-[40vh] rounded-lg bg-[var(--background)] shadow-[var(--shadow-box)] border border-[rgb(219,217,217)]">
                    <Image 
                        src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/work-seven-2.svg"
                        width={100}
                        height={100}
                    />
                </div>
                <div className=" WorksBoxes flex justify-center items-center w-[50%] h-[40vh] rounded-lg bg-[var(--background)] shadow-[var(--shadow-box)] border border-[rgb(219,217,217)]">
                    <Image 
                        src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/work-seven-1.svg"
                        width={100}
                        height={100}
                    />
                </div>
            </div>
        </div>
    </div>
    
    );
    
};
