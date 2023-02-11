import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {motion} from 'framer-motion';
import {FaUserAlt} from 'react-icons/fa'

import { createClient } from '@supabase/supabase-js';

const App = ()=>{

  
  // Function for choosing current date
  const [selectedDate, setSelectedDate] = useState(new Date());
  function handleChange(date) {
    setSelectedDate(date);
    console.log("Selected date: ", date);
  }

  return(
    <main>
    <motion.h1 animate={{y: -0}} initial={{y: -300}}>Get notified and never miss your reminders.</motion.h1>
    <h3><FaUserAlt size={25}/></h3>
    
      <form className='form'>
        <input className='form-input' type='text' placeholder='Your Reminder !' />
        <div className='calender'>
      <Calendar onChange={handleChange} value={selectedDate}/>
      </div>
      <button className='form-button'>ADD</button>
      <h2>{selectedDate.toDateString()}</h2>
      </form>
      {/* <div className='button-div'>
      </div> */}
    </main>
  )
}

export default App;