import { Menu as MenuBars } from "@mui/icons-material";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import SideBar from "../components/SideBar";

const Layout = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    console.log(user);
    if (user) {
      setLoader(false);
    } else {
      setTimeout(() => {
        window.location.pathname = "/";
      }, 2000);
    }
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

  return (
    <>
      {loader ? (
        <div className="mt-32">
          <Loader />
        </div>
      ) : (
        <div className="bg-[#e9ecf1] min-h-[100vh]">
          <SideBar open={open} setOpen={setOpen} />
          <div className="bg-white rounded-b-[20px]  lg:rounded-b-none py-2 flex lg:justify-between items-center justify-center px-5 shadow-lg shadow-bg-gray absolute top-0 w-full z-50  h-[80px] ">
            <div className="absolute left-5 top-5 md:top-10 lg:hidden">
              <MenuBars
                sx={{ color: "#FFCC00", fontSize: "30px" }}
                onClick={() => {
                  setOpen(true);
                }}
              />
            </div>
            <img src="/logo.png" className="w-[106px] h-[53px]" />
            <div className="hidden lg:flex  justify-center items-center space-x-2" onMouseEnter={handleMenuOpen} onMouseLeave={handleMenuClose}>
              <div className="text-[18px] text-[#244F62] font-[300]">
               {user.first_name+' '+user.last_name}
              </div>
              <Avatar
              src= {user.avatar || '/generic.jpeg'}
                sx={{
                  width: "30px",
                  height: "30px",
                }}
              />
               <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                  style: {
                      '.hover': {
                        background:'white'
                      }
                  },
              }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                getContentAnchorEl={null}
            >
                {/* Add menu items here */}
                <MenuItem onClick={handleMenuClose}  sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
                <div className=" flex justify-center   ">
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
                    localStorage.removeItem("user");
                    window.location.pathname = "/";
                  }}
                >
                  Log Out
                </Button>
              </div>
                </MenuItem>
            </Menu>
            </div> 
          </div>

          <div className="grid grid-cols-7    min-h-[100vh]  ">
            <div className="lg:col-span-1 hidden  bg-white px-2  space-y-4 z-0  pt-24 md:pt-24 lg:pt-24 xl:pt-24     lg:flex flex-col pb-4 ">
              {window.location.pathname === "/dashboard/my-matches" ? (
                <div
                  onClick={() => {
                    navigate("/dashboard/my-matches");
                  }}
                  className={
                    "text-[20px] text-[#12AFC2] hover:bg-[rgba(18,175,194,0.08)] flex items-center space-x-2  px-4 py-2 cursor-pointer"
                  }
                >
                  <img src="/icon1b.png" className="w-[34px] h-[34px]" />{" "}
                  <div>My Matches</div>
                </div>
              ) : (
                <div
                  onClick={() => {
                    navigate("/dashboard/my-matches");
                  }}
                  className={
                    "text-[20px] text-[#B1B1B1] hover:bg-[rgba(18,175,194,0.08)] flex items-center space-x-2  px-4 py-2 cursor-pointer"
                  }
                >
                  <img src="/icon1a.png" className="w-[34px] h-[34px]" />{" "}
                  <div>My Matches</div>
                </div>
              )}

              {window.location.pathname === "/dashboard/submit-scores" ? (
                <div
                  onClick={() => {
                    navigate("/dashboard/submit-scores");
                  }}
                  className={
                    "text-[20px] text-[#12AFC2] hover:bg-[rgba(18,175,194,0.08)] flex items-center space-x-2  px-4 py-2 cursor-pointer"
                  }
                >
                  <img src="/icon2b.png" className="w-[19px] h-[24px]" />{" "}
                  <div>Submit Scores</div>
                </div>
              ) : (
                <div
                  onClick={() => {
                    navigate("/dashboard/submit-scores");
                  }}
                  className="text-[20px] text-[#B1B1B1] hover:bg-[rgba(18,175,194,0.08)] flex items-center space-x-2  px-4 py-2 cursor-pointer"
                >
                  <img src="/icon2a.png" className="w-[19px] h-[24px]" />{" "}
                  <div>Submit Scores</div>
                </div>
              )}

              {window.location.pathname === "/dashboard/standings" ? (
                <div
                  onClick={() => {
                    navigate("/dashboard/standings");
                  }}
                  className={
                    "text-[20px] text-[#12AFC2] hover:bg-[rgba(18,175,194,0.08)] flex items-center space-x-2  px-4 py-2 cursor-pointer"
                  }
                >
                  <img src="/icon3b.png" className="w-[19px] h-[24px]" />{" "}
                  <div> Standings</div>
                </div>
              ) : (
                <div
                  onClick={() => {
                    navigate("/dashboard/standings");
                  }}
                  className="text-[20px]  text-[#B1B1B1] hover:bg-[rgba(18,175,194,0.08)] flex items-center space-x-2  px-4 py-2 cursor-pointer"
                >
                  <img src="/icon3a.png" className="w-[19px] h-[24px]" />{" "}
                  <div> Standings</div>
                </div>
              )}

              <div className="flex-1"></div>

              {/* <div className=" flex justify-center   ">
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
                    localStorage.removeItem("user");
                    window.location.pathname = "/";
                  }}
                >
                  Log Out
                </Button>
              </div> */}
            </div>

            <div className="lg:col-span-6 col-span-7 flex justify-center px-4 lg:px-0 pt-24 ">
             
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
