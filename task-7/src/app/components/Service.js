import Image from "next/image";
// import computeworking from '../Images/images.jpeg';
// import carWorking from '../Images/carWorking.jpg';

export default function Service() {
    return(
        <div className="ServicesContainer w-full h-[100vh] bg-[#f8fcfd]">
        <div className="ServiceContent flex flex-col items-center justify-center w-full h-[100vh] text-center gap-40">
            <div className="ServiceText flex flex-col gap-4">
                <h1 className="text-[3.5rem] text-[#203066]">Most Popular Services</h1>
                <p>What do you need to find?</p>
            </div>
            <div className="ServiresBox flex justify-around items-center gap-8 w-[90%]">
                <div className="ServiesBoxes flex justify-center items-center w-[50%] h-[40vh] rounded-lg bg-[var(--background)] shadow-[var(--shadow-box)] border border-[rgb(219,217,217)]">
                    <div className="ServicesBoxContent flex flex-col items-center justify-center w-[80%] h-[40vh]">
                        <div className="boximg flex justify-center items-center w-[60%] h-[60%] rounded-lg">
                            <Image 
                                className="ComputerReparingIMh"
                                src="https://www.svgrepo.com/show/393242/car-repair.svg"
                                height={50}
                                width={50}
                            />
                        </div>
                        <div className="ServiceBoxText flex flex-col w-full mt-0 justify-start items-start">
                            <h2>Car Repairing</h2>
                        </div>
                        <div className="ServiceBoxText2 flex w-full mt-4 justify-between items-start">
                            <p>Mumbai, India</p>
                            <p>9343343522</p>
                        </div>
                        <div className="ServiceBoxText3 flex w-full mt-0 justify-between items-start">
                            <p>Rate 9.5</p>
                            <h3>30.00</h3>
                        </div>
                    </div>
                </div>
                <div className="ServiesBoxes flex justify-center items-center w-[50%] h-[40vh] rounded-lg bg-[var(--background)] shadow-[var(--shadow-box)] border border-[rgb(219,217,217)]">
                    <div className="ServicesBoxContent flex flex-col items-center justify-center w-[80%] h-[40vh]">
                        <div className="boximg flex justify-center items-center w-[60%] h-[60%] rounded-lg">
                            <Image 
                                className="ComputerReparingIMh"
                                src="https://www.svgrepo.com/show/48307/technical-support.svg"
                                height={50}
                                width={50}
                            />
                        </div>
                        <div className="ServiceBoxText flex flex-col w-full mt-0 justify-start items-start">
                            <h2>Service</h2>
                        </div>
                        <div className="ServiceBoxText2 flex w-full mt-4 justify-between items-start">
                            <p>Mumbai, India</p>
                            <p>9343343522</p>
                        </div>
                        <div className="ServiceBoxText3 flex w-full mt-0 justify-between items-start">
                            <p>Rate 9.5</p>
                            <h3>30.00</h3>
                        </div>
                    </div>
                </div>
                <div className="ServiesBoxes flex justify-center items-center w-[50%] h-[40vh] rounded-lg bg-[var(--background)] shadow-[var(--shadow-box)] border border-[rgb(219,217,217)]">
                    <div className="ServicesBoxContent flex flex-col items-center justify-center w-[80%] h-[40vh]">
                        <div className="boximg flex justify-center items-center w-[60%] h-[60%] rounded-lg">
                            <Image 
                                className="ComputerReparingIMh"
                                src="https://www.svgrepo.com/show/155324/computer-service.svg"
                                height={70}
                                width={60}
                            />
                        </div>
                        <div className="ServiceBoxText flex flex-col w-full mt-0 justify-start items-start">
                            <h2>Computer Repairing</h2>
                        </div>
                        <div className="ServiceBoxText2 flex w-full mt-4 justify-between items-start">
                            <p>Mumbai, India</p>
                            <p>9343343522</p>
                        </div>
                        <div className="ServiceBoxText3 flex w-full mt-0 justify-between items-start">
                            <p>Rate 9.5</p>
                            <h3>30.00</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
    
};
