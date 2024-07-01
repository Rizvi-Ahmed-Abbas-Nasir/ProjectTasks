import Image from "next/image";

export default function Plans() {
    return(
        <div className="PlanContainer flex flex-wrap justify-center items-center w-full bg-[#f8fcfd] min-h-screen">
        <div className="PlanContent flex flex-col w-full justify-center items-center">
          <div className="PlanText flex flex-col items-center justify-center text-center gap-4 mt-12">
            <h2 className="text-3xl text-[#203066]">Pricing Plan</h2>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h4>
            <label className="toggle-switch relative inline-block w-20 h-10 cursor-pointer">
              <input type="checkbox" className="hidden" />
              <div className="toggle-switch-background absolute top-0 left-0 w-full h-full bg-gray-200 rounded-full shadow-inner"></div>
              <div className="toggle-switch-handle absolute top-1.5 left-1.5 w-7.5 h-7.5 bg-white rounded-full shadow-md transition-transform duration-300"></div>
            </label>
          </div>
          <div className="PlanPricingBoxs flex justify-center items-center mt-32 gap-8 w-[90%]">
            <div className="PlanPricingBox flex flex-col justify-center w-[70%] bg-white shadow-lg border border-gray-300 rounded-lg box-border">
              <div className="PlanBox2 flex flex-col gap-4 w-full m-4">
                <div className="PlaneIMg2">
                  <Image src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/pricing-seven-3.svg" width={55} height={55} />
                </div>
                <div className="TextAndOptions flex flex-col gap-4 mt-4">
                  <h3 className="text-blue-500 text-xl">Basic</h3>
                  <h2 className="text-3xl">$ 70.00</h2>
                </div>
                <div className="checkBoxPlans flex flex-col justify-around gap-4 text-lg">
                  <div className="checkbox-wrapper-13 bluePlan">
                    <input id="c1-13" type="checkbox" checked />
                    <label for="c1-13" className="ml-2">1 Bathroom cleaning </label>
                  </div>
                  <div className="checkbox-wrapper-13 bluePlan">
                    <input id="c1-13" type="checkbox" checked />
                    <label for="c1-13" className="ml-2">Up to 3 bedrooms cleaning</label>
                  </div>
                  <div className="checkbox-wrapper-13 onePlanBox bluePlan">
                    <input id="c1-13" type="checkbox" checked />
                    <label for="c1-13" className="ml-2">1 Livingroom cleaning</label>
                  </div>
                  <div className="checkbox-wrapper-13 onePlanBox bluePlan">
                    <input id="c1-13" type="checkbox" checked />
                    <label for="c1-13" className="ml-2">Small kitchen (0 - 150 ft2)</label>
                  </div>
                  <div className="checkbox-wrapper-13 onePlanBox bluePlan">
                    <input id="c1-13" type="checkbox" checked />
                    <label for="c1-13" className="ml-2">Up to 2 additional rooms cleaning</label>
                  </div>
                </div>
                <div className="PlanLastBTN2 mt-8">
                  <button className="px-8 py-2 bg-blue-500 text-white rounded-full">Choose Plan</button>
                </div>
              </div>
            </div>
            <div className="PlanPricingBox flex flex-col justify-center w-[70%] bg-blue-500 text-white shadow-lg border border-gray-300 rounded-lg mt-[-3rem] min-h-[75vh] box-border">
              <div className="PlanBox1 flex flex-col gap-4 w-full m-4">
                <div className='PlanoneBtn'>
                  <button className="px-8 py-2 bg-white text-blue-500 rounded-full">Most Popular</button>
                </div>
                <div className="PlaneIMg">
                  <Image src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/pricing-seven-2.svg" width={55} height={55} />
                </div>
                <div className="TextAndOptions flex flex-col gap-4 mt-4">
                  <h3 className="text-blue-500 text-xl">Basic</h3>
                  <h2 className="text-3xl">$ 70.00</h2>
                </div>
                <div className="checkBoxPlans flex flex-col justify-around gap-4 text-lg">
                  <div className="checkbox-wrapper-13">
                    <input id="c1-13" type="checkbox" checked />
                    <label for="c1-13" className="ml-2">1 Bathroom cleaning </label>
                  </div>
                  <div className="checkbox-wrapper-13">
                    <input id="c1-13" type="checkbox" checked />
                    <label for="c1-13" className="ml-2">Up to 3 bedrooms cleaning</label>
                  </div>
                  <div className="checkbox-wrapper-13">
                    <input id="c1-13" type="checkbox" checked />
                    <label for="c1-13" className="ml-2">1 Livingroom cleaning</label>
                  </div>
                  <div className="checkbox-wrapper-13">
                    <input id="c1-13" type="checkbox" checked />
                    <label for="c1-13" className="ml-2">Small kitchen (0 - 150 ft2)</label>
                  </div>
                  <div className="checkbox-wrapper-13">
                    <input id="c1-13" type="checkbox" checked />
                    <label for="c1-13" className="ml-2">Up to 2 additional rooms cleaning</label>
                  </div>
                </div>
                <div className="PlanLastBTN mt-8">
                  <button className="px-8 py-2 bg-green-500 text-white rounded-full">Choose Plan</button>
                </div>
              </div>
            </div>
            <div className="PlanPricingBox flex flex-col justify-center w-[70%] bg-white shadow-lg border border-gray-300 rounded-lg box-border">
              <div className="PlanBox2 flex flex-col gap-4 w-full m-4">
                <div className="PlaneIMg2">
                  <Image src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/pricing-seven-1.svg" width={55} height={55} />
                </div>
                <div className="TextAndOptions flex flex-col gap-4 mt-4">
                  <h3 className="text-blue-500 text-xl">Basic</h3>
                  <h2 className="text-3xl">$ 70.00</h2>
                </div>
                <div className="checkBoxPlans flex flex-col justify-around gap-4 text-lg">
                  <div className="checkbox-wrapper-13 bluePlan">
                    <input id="c1-13" type="checkbox" checked />
                    <label for="c1-13" className="ml-2">1 Bathroom cleaning </label>
                  </div>
                  <div className="checkbox-wrapper-13 bluePlan">
                    <input id="c1-13" type="checkbox" checked />
                    <label for="c1-13" className="ml-2">Up to 3 bedrooms cleaning</label>
                  </div>
                  <div className="checkbox-wrapper-13 onePlanBox bluePlan">
                    <input id="c1-13" type="checkbox" checked />
                    <label for="c1-13" className="ml-2">1 Livingroom cleaning</label>
                  </div>
                  <div className="checkbox-wrapper-13 onePlanBox bluePlan">
                    <input id="c1-13" type="checkbox" checked />
                    <label for="c1-13" className="ml-2">Small kitchen (0 - 150 ft2)</label>
                  </div>
                  <div className="checkbox-wrapper-13 onePlanBox bluePlan">
                    <input id="c1-13" type="checkbox" checked />
                    <label for="c1-13" className="ml-2">Up to 2 additional rooms cleaning</label>
                  </div>
                </div>
                <div className="PlanLastBTN2 mt-8">
                  <button className="px-8 py-2 bg-blue-500 text-white rounded-full">Choose Plan</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
    
};
