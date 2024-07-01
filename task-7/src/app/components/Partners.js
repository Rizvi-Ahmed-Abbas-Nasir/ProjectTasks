import Image from "next/image"

export default function Partners() {
    return(
        <div className="PartnersContainer w-full h-[50vh]">
        <div className="PartnersContent w-full h-[50vh] flex justify-center text-center flex-col">
          <div className="PartnerTexts">
            <div className="TextsOFPartners">
              <h1 className="text-3xl text-[#2c3550]">Our Partners</h1>
              <p className="mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
          </div>
          <div className="PartnersIMGs w-full h-inherit gap-8 flex justify-center">
            <Image
              className="PartnerBox p-0.5 px-8 border-[0.3px] border-gray-400 rounded-2xl mt-20"
              src="https://truelysell.dreamstechnologies.com/html/template/assets/img/partner/partner6.svg"
              width={200}
              height={90}
            />
            <Image
              className="PartnerBox p-0.5 px-8 border-[0.3px] border-gray-400 rounded-2xl mt-20"
              src="https://truelysell.dreamstechnologies.com/html/template/assets/img/partner/partner1.svg"
              width={200}
              height={90}
            />
            <Image
              className="PartnerBox p-0.5 px-8 border-[0.3px] border-gray-400 rounded-2xl mt-20"
              src="https://truelysell.dreamstechnologies.com/html/template/assets/img/partner/partner2.svg"
              width={200}
              height={90}
            />
            <Image
              className="PartnerBox p-0.5 px-8 border-[0.3px] border-gray-400 rounded-2xl mt-20"
              src="https://truelysell.dreamstechnologies.com/html/template/assets/img/partner/partner3.svg"
              width={200}
              height={90}
            />
            <Image
              className="PartnerBox p-0.5 px-8 border-[0.3px] border-gray-400 rounded-2xl mt-20"
              src="https://truelysell.dreamstechnologies.com/html/template/assets/img/partner/partner4.svg"
              width={200}
              height={90}
            />
          </div>
        </div>
      </div>
      
    )
};
