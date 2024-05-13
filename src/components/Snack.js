



import { Close } from '@mui/icons-material'
import { IconButton, Snackbar,Slide } from '@mui/material'
import React from 'react'



function TransitionRight(props){
    return <Slide {...props} direction="left"/>
}




const Snack = ({open, setOpen,msg,color}) => {
    let color_ = "#02bf62ff"
    console.log(color)
    if(color && color.length > 1    ){
        color_ = color
    }else{
        color_ = "black"
    }

    const action = (
        <React.Fragment>
            <IconButton
                size='small'
                aria-label='close'
                color='inherit'
                onClick={() => setOpen(false)}
            >
                <Close fontSize={'small'} />
            </IconButton>
        </React.Fragment>
    )
    return (
        <div>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={() => setOpen(false)}
                message={msg}
                action={action}
                TransitionComponent={TransitionRight}
                anchorOrigin={{ 
                    vertical: 'top',
                    horizontal:'right'
                 }}
                 ContentProps={{ 
                    sx:{
                        background: color_
                    }
                  }}
            />
        </div>
    )
}

export default Snack