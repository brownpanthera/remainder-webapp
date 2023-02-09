import React from 'react'
import Calender from 'react-calendar';

export default function Calender() {
    const [value, onChange] = useState(new Date());
  return (
    <div className='calender'>
      <Calender onChange={onchange} value={value} />
    </div>
  )
}
