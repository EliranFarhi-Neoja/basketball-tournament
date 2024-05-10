import { Avatar, AvatarGroup, Button, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Standings = () => {
  const [rankings, setRankings] = useState();
  const [loader, setLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center">
        <img src="/neoja.png" className="w-[150px] mt-5" />
      </div>

      {!loader ? (
        <div className="lg:px-[100px]">
          {errorMsg && <div>{errorMsg}</div>}

          <div className="flex justify-end">
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
                navigate("/home");
              }}
            >
              Go back
            </Button>
          </div>

          <div className="bg-white  overflow-auto lg:w-full px-4 my-8  ">
            {/* <div className="text-center lg:text-[40px] text-[22px] font-[600] text-[#06B3D2] my-4 lg:my-0">
              Standings
            </div> */}

            <div className="flex justify-center w-full">
              <div className=" grid lg:grid-cols-11 grid-cols-6 w-full my-3 lg:px-10 px-1">
                <div className="col-span-1 text-[18px] text-[#06B3D2] font-semibold ">
                  #
                </div>
                <div className="col-span-2 text-[18px] text-[#06B3D2] font-semibold ">
                  Player
                </div>
                <div className="col-span-2 text-[18px] text-[#06B3D2] font-semibold ">
                  Team
                </div>
                <div className="col-span-1 text-[18px] text-[#06B3D2] font-semibold  hidden lg:block">
                  Game 1
                </div>
                <div className="col-span-1 text-[18px] text-[#06B3D2] font-semibold  hidden lg:block">
                  Game 2
                </div>
                <div className="col-span-1 text-[18px] text-[#06B3D2] font-semibold  hidden lg:block">
                  Game 3
                </div>
                <div className="col-span-1 text-[18px] text-[#06B3D2] font-semibold  hidden lg:block">
                  Game 4
                </div>

                <div className="col-span-1 text-[18px] text-[#06B3D2] font-semibold hidden lg:block">
                  Highest Game
                </div>
                <div className="col-span-1 text-[18px] text-[#06B3D2] font-semibold ">
                  Score
                </div>
              </div>
            </div>
            <Divider sx={{ my: 1 }} />

            <div className="px-2 grid lg:grid-cols-11 grid-cols-6 w-full my-3 lg:px-10 ">
              <div className="col-span-1 text-[18px] text-black font-[400]">
                1
              </div>
              <div className="col-span-2 text-[18px] text-black font-[400]">
                Emil Khan
              </div>
              <div className="col-span-2 text-[18px] text-black font-[400]">
                The Greats
              </div>
              <div className="col-span-1 text-[18px] text-black font-[400] hidden lg:block">
                11
              </div>
              <div className="col-span-1 text-[18px] text-black font-[400] hidden lg:block">
                11
              </div>
              <div className="col-span-1 text-[18px] text-black font-[400] hidden lg:block">
                22
              </div>
              <div className="col-span-1 text-[18px] text-black font-[400] hidden lg:block">
                0
              </div>

              <div className="col-span-1 text-[18px] text-black font-[400] hidden lg:block">
                Game 3
              </div>
              <div className="col-span-1 text-[18px] text-black font-[400]">
                44
              </div>
            </div>
            <Divider sx={{ my: 1 }} />
          </div>
        </div>
      ) : (
        <div className="mt-4">
          <Loader />
        </div>
      )}
    </>
  );
};

export default Standings;
