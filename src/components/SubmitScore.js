import { Button, InputBase } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Snack from "./Snack";

const SubmitScore = () => {
  const navigate = useNavigate()
  const [team, setTeam] = useState("")
  const [open, setOpen] = useState(false)
  const [msg,setMsg] = useState()
  const [color, setColor] = useState()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null)
  const [player1, setPlayer1] = useState({
    player: "",
    game1: "",
    game2: "",
    game3: "",
    game4: ""
  })

  const [player2, setPlayer2] = useState({
    player: "",
    game1: "",
    game2: "",
    game3: "",
    game4: ""
  })

  const [player3, setPlayer3] = useState({
    player: "",
    game1: "",
    game2: "",
    game3: "",
    game4: ""
  })

  const [player4, setPlayer4] = useState({
    player: "",
    game1: "",
    game2: "",
    game3: "",
    game4: ""
  })


  const submitScore = async() => {
    console.log({
      team, players: [player1, player2,player3,player4]
    })
    axios.post("https://basketball-8c6403ba5b9d.herokuapp.com/upload-score", {
      team, players: [player1, player2,player3,player4]

    })
    .then((res)=> {
      console.log(res.data)
      setOpen(true)
      setMsg('Scores saved to database')
      setColor('black')
      setPlayer1({
        player: "",
        game1: "",
        game2: "",
        game3: "",
        game4: ""
      })
      setPlayer2({
        player: "",
        game1: "",
        game2: "",
        game3: "",
        game4: ""
      })
      setPlayer3({
        player: "",
        game1: "",
        game2: "",
        game3: "",
        game4: ""
      })
      setPlayer4({
        player: "",
        game1: "",
        game2: "",
        game3: "",
        game4: ""
      })
      setTeam('')
    })
    .catch((err)=> {
      console.log(err)
    })



  }


  useEffect(() => {
    if(!user || user.code != 4321){
      navigate('/')
    }
  }, [])
  
  return (
    <div className="">
      <Snack open={open} setOpen ={setOpen } msg={msg} color={color} />
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
              value={team}
              onChange={(e)=> {
                setTeam(e.target.value)
              }}
            />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 lg:gap-9 gap-4 lg:px-[300px] px-10">
        <div className="col-span-1 hidden lg:block">
          <div></div>
          <div className=" mt-12 ">Player Name</div>
          <div className=" mt-6 ">Game 1</div>
          <div className=" mt-6 ">Game 2</div>
          <div className=" mt-6 ">Game 3</div>
          <div className=" mt-6 ">Game 4</div>
        </div>

        <div className="col-span-1">
          <div className="text-green-900 font-bold">Player 1</div>
          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>Name</div>
            <InputBase
              sx={{
                width: "100%",
                border: "2px solid green",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",
              }}

              value={player1.player}
              onChange={(e)=> {
                setPlayer1({...player1, player: e.target.value})
              }}
             
            />
          </div>

          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase

            type='Number'
              sx={{
                width: "100%",
                border: "2px solid green",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",
              }}

              value={player1.game1}
              onChange={(e)=> {
                setPlayer1({...player1, game1: e.target.value})
              }}
             
            />
          </div>
          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
            type='Number'
              sx={{
                width: "100%",
                border: "2px solid green",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",
              }}

              value={player1.game2}
              onChange={(e)=> {
                setPlayer1({...player1, game2: e.target.value})
              }}
             
            />
          </div>
          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
            type='Number'
              sx={{
                width: "100%",
                border: "2px solid green",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",
                
              }}

              value={player1.game3}
              onChange={(e)=> {
                setPlayer1({...player1, game3: e.target.value})
              }}
             
            />
          </div>
          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
            type='Number'
              sx={{
                width: "100%",
                border: "2px solid green",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",
                
              }}

              value={player1.game4}
              onChange={(e)=> {
                setPlayer1({...player1, game4: e.target.value})
              }}
             
            />
          </div>
        </div>

        <div className="col-span-1">
          <div className="font-bold text-blue-900">Player 2</div>
          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>Name</div>
            <InputBase
              sx={{
                width: "100%",
                border: "2px solid blue",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",
                
              }}
              value={player2.player}
              onChange={(e)=> {
                setPlayer2({...player2, player: e.target.value})
              }}
             
            />
          </div>

          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
            type='Number'
              sx={{
                width: "100%",
                border: "2px solid blue",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",
                
              }}
              value={player2.game1}
              onChange={(e)=> {
                setPlayer2({...player2, game1: e.target.value})
              }}
             
            />
          </div>

          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
            type='Number'
              sx={{
                width: "100%",
                border: "2px solid blue",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",
                
              }}

              value={player2.game2}
              onChange={(e)=> {
                setPlayer2({...player2, game2: e.target.value})
              }}
             
            />
          </div>
          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
            type='Number'
              sx={{
                width: "100%",
                border: "2px solid blue",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",
                
              }}

              value={player2.game3}
              onChange={(e)=> {
                setPlayer2({...player2, game3: e.target.value})
              }}
             
            />
          </div>
          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
            type='Number'
              sx={{
                width: "100%",
                border: "2px solid blue",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",
                
              }}

              value={player2.game4}
              onChange={(e)=> {
                setPlayer2({...player2, game4: e.target.value})
              }}
             
            />
          </div>
        </div>

        <div className="col-span-1">
          <div className="text-red-900 font-bold">Player 3</div>
          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>Name</div>
            <InputBase
              sx={{
                width: "100%",
                border: "2px solid red",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",
                
              }}

              value={player3.player}
              onChange={(e)=> {
                setPlayer3({...player3, player: e.target.value})
              }}
             
            />
          </div>

          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
            type='Number'
              sx={{
                width: "100%",
                border: "2px solid red",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",
                
              }}

              value={player3.game1}
              onChange={(e)=> {
                setPlayer3({...player3, game1: e.target.value})
              }}
             
            />
          </div>

          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
            type='Number'
              sx={{
                width: "100%",
                border: "2px solid red",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",
                
              }}
              value={player3.game2}
              onChange={(e)=> {
                setPlayer3({...player3, game2: e.target.value})
              }}
             
            />
          </div>
          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
            type='Number'
              sx={{
                width: "100%",
                border: "2px solid red",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",
                
              }}
              value={player3.game3}
              onChange={(e)=> {
                setPlayer3({...player3, game3: e.target.value})
              }}
             
            />
          </div>
          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
            type='Number'
              sx={{
                width: "100%",
                border: "2px solid red",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",

              }}

              value={player3.game4}
              onChange={(e)=> {
                setPlayer3({...player3, game4: e.target.value})
              }}
              
            />
          </div>
        </div>

        <div className="col-span-1">
          <div className="font-bold text-yellow-500">Player 4</div>

          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>Name</div>
            <InputBase
              sx={{
                width: "100%",
                border: "2px solid yellow",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",

              }}

              value={player4.player}
              onChange={(e)=> {
                setPlayer4({...player4, player: e.target.value})
              }}
              
            />
          </div>

          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
            type='Number'
              sx={{
                width: "100%",
                border: "2px solid yellow",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",

              }}

              value={player4.game1}
              onChange={(e)=> {
                setPlayer4({...player4, game1: e.target.value})
              }}
              
            />
          </div>

          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
            type='Number'
              sx={{
                width: "100%",
                border: "2px solid yellow",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",

              }}
              value={player4.game2}
              onChange={(e)=> {
                setPlayer4({...player4, game2: e.target.value})
              }}
              
            />
          </div>
          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
            type='Number'
              sx={{
                width: "100%",
                border: "2px solid yellow",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",

              }}

              value={player4.game3}
              onChange={(e)=> {
                setPlayer4({...player4, game3: e.target.value})
              }}
              
            />
          </div>
          <div className=" mt-4 flex justify-center items-center">
            <div className='lg:hidden mr-2'>G1</div>
            <InputBase
            type='Number'
              sx={{
                width: "100%",
                border: "2px solid yellow",
                bgcolor: "rgba(18,175,194,0.02)",
                borderRadius: "5px",
                pl: 2,
                py: "1px",

              }}

              value={player4.game4}
              onChange={(e)=> {
                setPlayer4({...player4, game4: e.target.value})
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

          onClick={()=> {
            submitScore()
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
