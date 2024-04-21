import React from 'react'
import './DashboardCard.css'

function DashboardCard({image, key, setFilter}) {
    const handleFilter = () =>{
        setFilter(key)
    }
  return (
    <div className='DashboardCard'>
        {/* <div>
        
        </div> */}
            <img
              src={image}
              alt={key}
              onClick={handleFilter}
            />
        
      </div>

  )
}

export default DashboardCard