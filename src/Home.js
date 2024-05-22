import React from "react";
import { useNavigate } from "react-router-dom";


const Home = (props) => {

    const {setinput,input} = props
    const navigate = useNavigate()

    const handleInput = (e) =>{
        setinput({...input,[e.target.name] : e.target.value})
    }
    const handleTab = () =>{
        if(input.from!=='' && input.to!==''){
            navigate('/search')
        }
    }
    const handlebooked = () =>{
            navigate('/viewBooked')
    }
 
    return (
        <div className="home">
            
            <h1>Bus Booking App</h1>
            <div className="homeFields">
                <div>
                    <p>From</p>
                    <input onChange={(e)=>handleInput(e)} name='from' />
                </div>
                <div>
                    <p>To</p>
                    <input onChange={(e)=>handleInput(e)} name='to' />
                </div>
                <div id="searchDiv" onClick={handleTab}>
                    <p id='search'>Search</p>
                </div>
            </div>
            <button id='viewbook' onClick={handlebooked}>View Booked details</button>
        </div>
    )
}

export default Home