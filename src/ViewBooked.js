import React from "react";
import { useNavigate } from "react-router-dom";

const ViewBooked = (props) => {
    const { applied } = props
    const navigate = useNavigate()

    const handleTab = () =>{
        navigate('/')
    }
    return (
        <div id='view'>
            
                  {(applied.length > 0) ? <><h1>Passenger Details</h1>  <table id='table'>
                        <thead>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Bus Name</th>
                            <th>Departure Time</th>
                            <th>Arrival Time</th>
                            <th>Route</th>
                        </thead>
                        <tbody>
                            {applied.map((obj,index) => {
                                return (
                                    <tr id={`row${index+1}`}>
                                        <td>{index+1}</td>
                                        <td>{obj.name}</td>
                                        <td>{obj.age}</td>
                                        <td>{obj.gender}</td>
                                        <td>{obj.busName}</td>
                                        <td>{obj.departure}</td>
                                        <td>{obj.arrival}</td>
                                        <td>{obj.from} to {obj.to}</td>
                                    </tr>
                                 )
                            })}
                        </tbody>
                <button id='viewbook' className="viewback" onClick={handleTab}>Back</button>

                    </table></> : <div className="empty"><div id='empty_view'>No Bookings yet</div><button className="viewback" onClick={handleTab}>Back</button></div>}
                
            
        </div>
    )
}

export default ViewBooked