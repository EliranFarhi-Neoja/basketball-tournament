import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
  return (
   <div> 
     <div className="flex justify-center">
     <img src='/neoja.png' className="w-[150px] mt-5" />
     </div>
     <div className="flex items-center justify-center ">
       
      <div className="w-[300px] space-y-6 pt-[50px]">
        <div
          className="bg-white text-center py-4 cursor-pointer hover:border-green-600
         hover:border-[1px] text-[20px] rounded-sm  shadow-md "
         onClick= {()=> {
            navigate('/submit-scores')
         }}
        >
          Add Score
        </div>

        <div
          className="bg-white text-center py-4 cursor-pointer hover:border-green-600
         hover:border-[1px] text-[20px] rounded-sm  shadow-md"
         onClick= {()=> {
          navigate('/standings')
       }}
        >
          View High Score
        </div>
        <div
          className="bg-white text-center py-4 cursor-pointer hover:border-green-600
         hover:border-[1px] text-[20px] rounded-sm  shadow-md"
         onClick= {()=> {
          navigate('/manager')
       }}
        >
          Enter Manager View
        </div>
      </div>
    </div>
   </div>
  );
};

export default Home;
