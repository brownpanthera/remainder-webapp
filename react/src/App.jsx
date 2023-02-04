import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const App = ()=>{

  return(
    <main>
    <h2>Get notified and don't ever miss your reminders.</h2>
      <form className='form'>
        <input className='form-input' type='text' placeholder='your remainder!' />
        <div className='calender'>
      <Calendar/>
      </div>
      </form>
      <div className='button-div'>
      <button className='form-button'>ADD</button>
      </div>
    </main>
  )
}

export default App;