import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SearchedBus from './SearchedBus';
import { bus } from './BusJson'
import BookingForm from './BookingForm'
import ViewBooked from './ViewBooked'

function App() {

  const [input, setinput] = useState({
    from: '',
    to: ''
  })
  const [form,setform] = useState({
    name:'',
    age:'',
    city:'',
    state:'',
    email:'',
    gender:'',
    mobile:''
  })
  const [buses,setbus] =useState('')
  const [json,setjson] = useState(bus)
  const [applied,setapplied] = useState([])


  return (
    <Routes>
      <Route path='/' element={<Home setinput={setinput} input={input}  />} />
      <Route path='/search' element={<SearchedBus input={input} setbus={setbus} json={json} setjson={setjson} setapplied={setapplied} />} />
      <Route path='/booking' element={<BookingForm bus={buses} setform={setform} json={json} form={form} setapplied={setapplied} />} />
      <Route path='/viewBooked' element={<ViewBooked applied={applied}/>} />
    </Routes>
  );
}

export default App;
