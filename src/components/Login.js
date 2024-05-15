import { CatchingPokemonSharp } from "@mui/icons-material";
import { Button, InputBase } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  let urlParams = new URLSearchParams(window.location.search);
  let token = urlParams.get("token");
  let auth_code = 4321
  // const { token } = useParams();
  const [code, setCode] = useState();
  const [verificationCode, setVerificationCode] = useState();

  const navigate = useNavigate()


  const [step, setStep] = useState(1);
  const [isLoading, setLoader] = useState(true);
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  

 



  //login user
  const login = async()=> {
    if(code == auth_code){
        navigate('/home')
        localStorage.setItem('user', JSON.stringify({
            code
        }))
    }else{
        setMsg('Authentification code incorrect')
    }
  }



  useEffect(() => {
    setTimeout(() => {
        if(!user || user.code !== auth_code ){
            setLoader(false)
        }else {
            navigate('/home')
        }
    }, 2000);
  }, [])
  
  

  return (
   <div>
     <div className="flex justify-center">
    <img src="/neoja.png" className="w-[150px] mt-5" />
  </div>

    <div className="flex justify-center">
      <div className="lg:w-[300px] w-full px-10 lg:px-0">
       

        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <div className="mb-[45px]">
              <div className="text-center text-[22px] font-[600]  text-[#244F62]">
                Welcome to Basketball
              </div>
              <div className="text-center text-[22px] font-[600]  text-[#244F62]">
                Players League
              </div>
            </div>

            {step === 1 && (
              <div>
                <div className="text-left  text-[16px] font-[400]  text-[#244F62] mb-[10px]">
                  Enter your code to login
                </div>

                <div className="">
                  <InputBase
                    sx={{
                      width: "100%",
                      border: "1px solid #12AFC2",
                      bgcolor: "rgba(18,175,194,0.02)",
                      borderRadius: "5px",
                      pl: 2,
                      py: "1px",
                    }}
                    value={code}
                    onChange={(e) => {
                      setCode(e.target.value);
                    }}
                  />
                </div>
                {msg && (
                  <div className="text-red-900 text-[14px] text-center mt-3">
                    {msg}
                  </div>
                )}
              </div>
            )}

            <div className=" flex justify-center mt-[50px]">
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
                onClick={() => {
                 
                  login()
                }}
              >
                Next
              </Button>
            </div>

            <div className="mt-[35px]">
              <div className="text-center text-[16px] font-[400]  text-[#244F62] mb-[10px]">
                For support, please reach out via email to
              </div>
              <div className="text-center underline relative bottom-3 text-[16px] font-[400]  text-[#44A093] mb-[10px]"
              onClick={()=> {
                window.location.href =  `mailto:hello@paddleparty.com`
              }}
              >
                hello@basketball.com
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

   </div>
  );
};

export default Login;
