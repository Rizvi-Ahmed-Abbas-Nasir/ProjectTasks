import Image from "next/image";
export default function TopProviders() {
    return(
        <div className="ProvidersContainer w-full h-[100vh]">
        <div className="ProvidersContent flex flex-col gap-40 my-24 m-10">
            <div className="ProvidersText flex flex-col gap-4">
                <h1 className="text-[3.5rem] text-[#203066]">Top Providers</h1>
                <p>What do you need to find?</p>
            </div>
            <div className="ProvidersBox flex justify-around items-center gap-8">
                <div className="ProvidersBoxes flex justify-center items-center w-[50%] h-[25vh] rounded-lg bg-[var(--background)] shadow-[var(--shadow-box)] border border-[rgb(219,217,217)]">
                    <div className="ServicesBoxContent flex flex-col items-center justify-center">
                        <div className="boximg w-full h-[50%] flex justify-center items-center">
                            <Image 
                                className="ComputerReparingIMh"
                                src="https://www.svgrepo.com/show/228333/businesswoman-woman.svg"
                                height={50}
                                width={50}
                            />
                        </div>
                    </div>
                </div>
                <div className="ProvidersBoxes flex justify-center items-center w-[50%] h-[25vh] rounded-lg bg-[var(--background)] shadow-[var(--shadow-box)] border border-[rgb(219,217,217)]">
                    <Image 
                        className="ComputerReparingIMh"
                        src="https://www.svgrepo.com/show/228377/businessman.svg"
                        height={50}
                        width={50}
                    />
                </div>
                <div className="ProvidersBoxes flex justify-center items-center w-[50%] h-[25vh] rounded-lg bg-[var(--background)] shadow-[var(--shadow-box)] border border-[rgb(219,217,217)]">
                    <Image 
                        className="ComputerReparingIMh"
                        src="https://www.svgrepo.com/show/228334/teamwork-team.svg"
                        height={50}
                        width={50}
                    />
                </div>
                <div className="ProvidersBoxes flex justify-center items-center w-[50%] h-[25vh] rounded-lg bg-[var(--background)] shadow-[var(--shadow-box)] border border-[rgb(219,217,217)]">
                    <Image 
                        className="ComputerReparingIMh"
                        src="https://www.svgrepo.com/show/228349/businessmen-trade.svg"
                        height={50}
                        width={50}
                    />
                </div>
            </div>
        </div>
    </div>
    );
    
};
