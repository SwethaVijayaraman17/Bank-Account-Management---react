/* eslint-disable array-callback-return */
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = (props) => {

    const { bus,setform,form,setapplied,json } = props
    const navigate = useNavigate()
    const [success,setsuccess] = useState(false)

    const handleTab=()=>{
        navigate('/search')
    }
    const handleChange = (e) =>{
        setform({...form,[e.target.name]:e.target.value})
    }
    const handlegender=(e) =>{
        setform({...form,gender:e.target.nextSibling.nodeValue})
    }
    const HandleSubmit = () =>{
        
        json.map((obj)=>{
            if(bus.busName===obj.busName){
               setapplied(current=>[...current,{
                    ...obj,
                    name:form.name,
                    age:form.age,
                    gender:form.gender,
                    mobile:form.mobile
                }])
            }

        })
        setsuccess(true)
        // setapplied(current=>[...current,book])
    }

    return (
        <>
            <h1 id='booking_head'>Booking Details</h1>
            <form>
                <h2>Passenger Information</h2>
                <span>{bus.busName}</span>
                <span>{bus.from} to {bus.to}</span>
                <label>Name</label>
                <input type="text" name="name" onChange={(e)=>handleChange(e)}/>
                <label>Age</label>
                <input type="text" name='age' onChange={(e)=>handleChange(e)} />
                <label>City of Residence</label>
                <input type="text" name='city' onChange={(e)=>handleChange(e)} />
                <label>State of Residence</label>
                <input type="text" name='state' onChange={(e)=>handleChange(e)} />
                <label>Gender</label>
                <input type="radio" name='gender' onChange={(e)=>handlegender(e)}/>Male
                <input type="radio" name='gender' onChange={(e)=>handlegender(e)} />Female
                <h2>Contact Information</h2>
                <label>Email</label>
                <input type="text" name='email' onChange={(e)=>handleChange(e)} />
                <label>Phone Number</label>
                <input type="text" name='mobile' onChange={(e)=>handleChange(e)}/><br /><br />
                {success ? <span id="success">Booked successfully !! Happy Journey !!</span> : null}<button id='proceed' type="button" onClick={HandleSubmit}>Book</button>
            </form>
           <button id='back' onClick={handleTab} type='button'>Back</button>
        </>
    )
}

export default BookingForm;