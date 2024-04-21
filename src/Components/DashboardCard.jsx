import React from 'react'
import './DashboardCard.css'

function DashboardCard({image, imageKey, setFilter}) {
    const handleFilter = () => {
        setFilter(imageKey)
    }
  return (
    <div className='DashboardCard'  onClick={handleFilter}>
        {/* <div>
        
        </div> */}
            <img
              src={image}
              alt={imageKey}


              />
        
      </div>

  )
}

export default DashboardCard