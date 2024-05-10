import { Button, InputBase } from "@mui/material";
import React, { useState } from "react";

const Loader = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="">
      <div className="text-center text-[22px] font-[600]  text-[#244F62] mb-[20px]">
        Loading
      </div>
      <div className=" flex justify-center lg:mt-[30px] mt-[10px] mb-[25px]">
        <img src="/shoot.gif" className=" w-[100px] h-[110px]     " />
      </div>

      <div className={window.location.pathname.includes('dashboard') ? 'mt-4 hidden': 'mt-4'}>
        <div className="text-center text-[16px] font-[400]  text-[#244F62] mb-[10px]">
          Stuck on this page?
        </div>
        <div className="text-center underline relative bottom-3 text-[16px] font-[400]  text-[#44A093] mb-[10px]"
        onClick={ ()=> {
          window.location.pathname = '/'
        }}
        >
          Report Error
        </div>
      </div>
    </div>
  );
};

export default Loader;
