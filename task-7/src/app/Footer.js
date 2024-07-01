
import Image from "next/image";

export default function Footer() {  
    return(
      <div className="FooterContainer w-full flex h-[70vh] bg-[#252525]">
      <div className="FooterContent w-full flex flex-col h-[70vh] justify-center items-center">
        <div className="MainContent w-[90%] h-[50vh] flex justify-around gap-8 text-[var(--base-text-clr-opp)]">
          <div className="FooterCont flex flex-col gap-8 w-full">
            <Image
              src="https://truelysell.dreamstechnologies.com/html/template/assets/img/logo-02.svg"
              width={200}
              height={50}
            />
            <p>We are a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <h3>Newsletter Signup</h3>
          </div>
          <div className="FooterCont flex flex-col gap-8 w-full">
            <h2>Support</h2>
            <p>Account</p>
            <p>Book Appointment</p>
            <p>Order</p>
            <p>Payments</p>
            <p>Return</p>
            <p>Privacy Policy</p>
          </div>
          <div className="FooterCont flex flex-col gap-8 w-full">
            <h2>Support</h2>
            <p>Account</p>
            <p>Book Appointment</p>
            <p>Order</p>
            <p>Payments</p>
            <p>Return</p>
            <p>Privacy Policy</p>
          </div>
          <div className="FooterCont flex flex-col gap-8 w-full">
            <h2>Support</h2>
            <p>Account</p>
            <p>Book Appointment</p>
            <p>Order</p>
            <p>Payments</p>
            <p>Return</p>
            <p>Privacy Policy</p>
          </div>
          <div className="FooterCont flex flex-col gap-8 w-full">
            <h2>Contact</h2>
            <p>Order</p>
            <p>Payments</p>
            <p>Return</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="AllRight text-xl text-[var(--base-text-clr-opp)] mt-12">
          <p>Copyright 2023 © Company Name. All right reserved.</p>
        </div>
      </div>
    </div>
    
    );
};
