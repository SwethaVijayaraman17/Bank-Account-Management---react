/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchedBus = (props) => {

    const { input: { from, to }, setbus, json, setjson } = props
    const navigate = useNavigate()
    const [nobus, setnobus] = useState(true)
    const [id, setid] = useState(0)

    const handleTab = (bus, i) => {
        setbus(bus)
        setjson(json.map((obj, index) => {
            if (i === index) {
                return ({
                    ...obj, seats: obj.seats - 1
                })
            }
            return obj
        }))
        navigate(`/booking`)
    }
    useEffect(() => {
        json.map((obj, i) => {
            if (from.toUpperCase() === obj.from.toUpperCase() && to.toUpperCase() === obj.to.toUpperCase()) {
                setnobus(false)
                // setid(current=>[...current,id+1])
            }
        })
    },[])
    const handleBack = () => {
        navigate('/')
    }
    
    return (
        <div className="search">
            <h1 id='search_head'>{from.toUpperCase()} ----- {to.toUpperCase()}</h1>
            {json.map((obj, i) => {
                if (from.toUpperCase() === obj.from.toUpperCase() && to.toUpperCase() === obj.to.toUpperCase()) {
                    return (
                        <>
                            <div id={id} className="cards">
                                <h2>{obj.busName}</h2>
                                <span>Departure : {obj.departure} </span>
                                <span>Arrival : {obj.arrival} </span>
                                <span>Seats available : {obj.seats} </span>
                                <button id='proceed' onClick={() => handleTab(obj, i)}>Proceed to book</button>
                            </div>
                        </>
                    )
                }
            })}
            {nobus ? <div><h3>No Buses available right now</h3></div> : null}
            <button id='searchback' onClick={() => handleBack()} >Back</button>

        </div>
    )
}

export default SearchedBus