import { Button, InputBase } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const SubmitScore = () => {
  const navigate = useNavigate()
  return (
    <div className="">
      <div className="flex justify-center">
        <img src="/neoja.png" className="w-[150px] mt-5" />
      </div>
      <div className="flex justify-center">
        <div className="lg:w-[300px] w-full px-10 lg:px-0">
          <div className=" lg:mt-[20px] mt-[40px] mb-[5px] relative"></div>
          <div>Team name </div>
          <div className=" mt-2 mb-4 ">
            <InputBase
              sx={{
                width: "100%",
                border: "2px solid #12AFC2",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",
              }}
            />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 lg:gap-9 gap-4 lg:px-[300px] px-10">
        <div className="col-span-1 hidden lg:block">
          <div></div>
          <div className=" mt-12 ">Game 1</div>
          <div className=" mt-6 ">Game 2</div>
          <div className=" mt-6 ">Game 3</div>
          <div className=" mt-6 ">Game 4</div>
        </div>

        <div className="col-span-1">
          <div className="text-green-900 font-bold">Player 1</div>

          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
              sx={{
                width: "100%",
                border: "2px solid green",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",
                
              }}
             
            />
          </div>
          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
              sx={{
                width: "100%",
                border: "2px solid green",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",
              }}
             
            />
          </div>
          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
              sx={{
                width: "100%",
                border: "2px solid green",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",
                
              }}
             
            />
          </div>
          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
              sx={{
                width: "100%",
                border: "2px solid green",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",
                
              }}
             
            />
          </div>
        </div>

        <div className="col-span-1">
          <div className="font-bold text-blue-900">Player 2</div>

          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
              sx={{
                width: "100%",
                border: "2px solid blue",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",
                
              }}
             
            />
          </div>

          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
              sx={{
                width: "100%",
                border: "2px solid blue",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",
                
              }}
             
            />
          </div>
          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
              sx={{
                width: "100%",
                border: "2px solid blue",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",
                
              }}
             
            />
          </div>
          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
              sx={{
                width: "100%",
                border: "2px solid blue",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",
                
              }}
             
            />
          </div>
        </div>

        <div className="col-span-1">
          <div className="text-red-900 font-bold">Player 3</div>

          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
              sx={{
                width: "100%",
                border: "2px solid red",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",
                
              }}
             
            />
          </div>

          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
              sx={{
                width: "100%",
                border: "2px solid red",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",
                
              }}
             
            />
          </div>
          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
              sx={{
                width: "100%",
                border: "2px solid red",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",
                
              }}
             
            />
          </div>
          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
              sx={{
                width: "100%",
                border: "2px solid red",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",

              }}
              
            />
          </div>
        </div>

        <div className="col-span-1">
          <div className="font-bold text-yellow-500">Player 4</div>

          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
              sx={{
                width: "100%",
                border: "2px solid yellow",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",

              }}
              
            />
          </div>

          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
              sx={{
                width: "100%",
                border: "2px solid yellow",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",

              }}
              
            />
          </div>
          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
              sx={{
                width: "100%",
                border: "2px solid yellow",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",

              }}
              
            />
          </div>
          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
              sx={{
                width: "100%",
                border: "2px solid yellow",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",

              }}
              
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between  space-x-4  px-10    lg:px-[300px] mt-5  ">
        <Button
          sx={{
            bgcolor: "#44A093",
            color: "white",
            width: "150px",
            textTransform: "none",
            borderRadius: "5px",
            fontSize: "15px",
            marginLeft: {lg:"170px",xs:0},
            ":hover": {
              bgcolor: "#44A093",
            },
          }}
        >
          Submit
        </Button>

        <Button
          sx={{
            bgcolor: "#44A093",
            color: "white",
            width: "150px",
            textTransform: "none",
            borderRadius: "5px",
            fontSize: "15px",
            ":hover": {
              bgcolor: "#44A093",
            },
          }}

          onClick={()=> {
            navigate('/home')
          }}
        >
          Go back
        </Button>
      </div>


    </div>
  );
};

export default SubmitScore;
