
import Image from "next/image";

export default function Featured() {
    return(
        <div className="FeaturedContainer w-full h-[150%] my-20 ">
            <div className="FeatureContent flex  flex-col gap-10  m-6     ">
                <div className="FeatureText flex flex-col gap-1 ">
                    <h1 class=" text-[#203066] text-5xl "> Featured Categories</h1>
                    <p>What do you need to find?</p>
                </div>
                <div className="FeaturedBox  flex justify-around align-center gap-2  rounded-[10px] bg-[var(--background)] shadow-[var(--showdow-box)] border-[1px solid rgb(219, 217, 217)] ">
                    <div className="FeaturedBoxes flex justify-center align-center  w-[50%] height-[25vh] ">
                        <div>
                            <Image 
                                src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/computer.svg"
                                width={100}
                                height={100}
                            />

                        </div>
                    </div>
                    <div className="FeaturedBoxes flex justify-center align-center  w-[50%] height-[25vh] ">
                    <Image 
                                src=" https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/construction.svg"
                                width={100}
                                height={100}
                            />
                   
                    </div>
                    <div className="FeaturedBoxes flex justify-center align-center  w-[50%] height-[25vh] ">
                    <Image 
                                src="  https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/painting.svg"
                                width={100}
                                height={100}
                            />
                   
                    </div>
                    <div className="FeaturedBoxes flex justify-center align-center  w-[50%] height-[25vh]  ">
                    <Image 
                                src=" https://www.svgrepo.com/show/67430/paint-brush.svg"
                                width={100}
                                height={100}
                            />
                    </div>
                </div>
            </div>

        </div>
    );
    
};
