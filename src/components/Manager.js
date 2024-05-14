import { Avatar, AvatarGroup, Button, Divider } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Manager = () => {
  const [rankings, setRankings] = useState();
  const [loader, setLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scores, setScores] = useState();

  const navigate = useNavigate();

  const getScores = async () => {
    await axios
      .get("https://basketball-8c6403ba5b9d.herokuapp.com/get-scores")
      .then((res) => {
        console.log(res.data.scores.slice(0, 10));
         // Define a custom sorting function
         function sortByHighestScore(a, b) {
            console.log(a)
            const highestScoreA = Math.max(a.game1, a.game2, a.game3,a.game4);
            const highestScoreB = Math.max(b.game1, b.game2, b.game3,b.game4);
            return highestScoreB - highestScoreA;
        }
        
          // Sort the scores array
          const sortedScores = res.data.scores.sort(sortByHighestScore);
          setScores(sortedScores.slice(0, 10));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteScores = async () => {
    window.confirm('Are you sure you want to reset database?')
    await axios
      .get("https://basketball-8c6403ba5b9d.herokuapp.com/delete-scores")
      .then((res) => {
        setScores();
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getScores();
    setInterval(() => {
      getScores();
    }, 15000);
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <img src="/neoja.png" className="w-[150px] mt-5" />
      </div>

      {!loader ? (
        <div className="lg:px-[100px]">
          {errorMsg && <div>{errorMsg}</div>}

          <div className="flex justify-end space-x-2">
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
                deleteScores();
              }}
            >
              Reset
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

            {scores &&
              scores.map((item, index) => (
                <>
                  <div className="px-2 grid lg:grid-cols-11 grid-cols-6 w-full my-3 lg:px-10 ">
                    <div
                      className={
                        index < 4
                          ? "col-span-1 text-[20px] font-bold text-black "
                          : "col-span-1 text-[18px] text-black font-[400]"
                      }
                    >
                      {index + 1}
                    </div>
                    <div
                      className={
                        index < 4
                          ? "col-span-2 text-[20px] font-bold text-black "
                          : "col-span-2 text-[18px] text-black font-[400]"
                      }
                    >
                      {item.player}
                    </div>
                    <div
                      className={
                        index < 4
                          ? "col-span-2 text-[20px] font-bold text-black "
                          : "col-span-2 text-[18px] text-black font-[400]"
                      }
                    >
                      {item.team}
                    </div>
                    <div
                      className={
                        index < 4
                          ? "col-span-1 text-[20px] font-bold text-black  hidden lg:block"
                          : "col-span-1 text-[18px] text-black font-[400] hidden lg:block"
                      }
                    >
                      {item.game1}
                    </div>
                    <div
                      className={
                        index < 4
                          ? "col-span-1 text-[20px] font-bold text-black  hidden lg:block"
                          : "col-span-1 text-[18px] text-black font-[400] hidden lg:block"
                      }
                    >
                      {item.game2}
                    </div>
                    <div
                      className={
                        index < 4
                          ? "col-span-1 text-[20px] font-bold text-black  hidden lg:block"
                          : "col-span-1 text-[18px] text-black font-[400] hidden lg:block"
                      }
                    >
                      {item.game3}
                    </div>
                    <div
                      className={
                        index < 4
                          ? "col-span-1 text-[20px] font-bold text-black  hidden lg:block"
                          : "col-span-1 text-[18px] text-black font-[400] hidden lg:block"
                      }
                    >
                      {item.game4}
                    </div>

                    <div
                      className={
                        index < 4
                          ? "col-span-1 text-[20px] font-bold text-black  hidden text-center lg:block"
                          : "col-span-1 text-[18px] text-black font-[400] hidden lg:block"
                      }
                    >
                      {Math.max(
                        item.game1,
                        item.game2,
                        item.game3,
                        item.game4
                      ) == item.game1 && (
                        <span className="text-green-900 font-bold"> 1 </span>
                      )}{" "}
                      {Math.max(
                        item.game1,
                        item.game2,
                        item.game3,
                        item.game4
                      ) == item.game2 && (
                        <span className="text-blue-900 font-bold"> 2 </span>
                      )}{" "}
                      {Math.max(
                        item.game1,
                        item.game2,
                        item.game3,
                        item.game4
                      ) == item.game3 && (
                        <span className="text-red-900 font-bold"> 3 </span>
                      )}{" "}
                      {Math.max(
                        item.game1,
                        item.game2,
                        item.game3,
                        item.game4
                      ) == item.game4 && (
                        <span className="text-yellow-500 font-bold"> 4 </span>
                      )}{" "}
                    </div>
                    <div
                      className={
                        index < 4
                          ? "col-span-1 text-[20px] font-bold text-black text-center "
                          : "col-span-1 text-[18px] text-black font-[400] text-center"
                      }
                    >
                      {Number(item.game1) +
                        Number(item.game2) +
                        Number(item.game3) +
                        Number(item.game4)}
                    </div>
                  </div>
                  {index + 1 != scores.length && <Divider sx={{ my: 1 }} />}
                </>
              ))}
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

export default Manager;
