import React, { useState } from 'react';
import { Calendar } from 'react-calendar';

const App = ()=>{

  return(
    <main>
    <h2>Don't ever miss your remainders.</h2>
      <form className='form'>
        <input className='form-input' type='text' placeholder='your remainder!' />
        {/* <button className='form-button'>Done</button> */}
      </form>
      <Calendar />
    </main>
  )
}

export default App;