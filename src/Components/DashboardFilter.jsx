import React, { useEffect, useState } from "react";
import './DashboardFilter.css'
import DashboardCard from './DashboardCard'

const DashboardFilter = ({filter, setFilter}) => {
  const imageFiltering = {
    Tech: "https://cdn.ces.tech/ces/media/articles/2022/october/innovation.jpg",
    Gaming: 'https://media.citizen.co.za/wp-content/uploads/2023/08/gaming-calendar-august-september-2023.png',
    Art: "https://d3hocxeqwpeppp.cloudfront.net/templates/yootheme/cache/41/Art-today-6-18-41b28df1.jpeg",
    Cooking:
    "https://esmmweighless.com/wp-content/uploads/2019/12/Carolyn-Cooking-Blog.jpg",
  };
  let imageKeys = Object.keys(imageFiltering);

  return (
    <div className='FilterPage'>
      <div className='mainFilter' onClick={()=>setFilter('Cooking')}>
        <div>
          <div>
            <img
              src={imageFiltering["Cooking"]}
              alt=""
            />
            <div>
              {/* <span>6 min ago</span> */}
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              {/* <h3>
                Facere ipsa nulla corrupti praesentium pariatur architecto
              </h3> */}
            </a>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Repellat, excepturi.
            </p> */}
          </div>
        </div>
      </div>
      <div className='minorFilter'>
       {imageKeys.map((key, index)=>{
        if(index < 3){
         return <DashboardCard image={imageFiltering[key]} imageKey={key} key={key} setFilter={setFilter}/>
        }
       })}
       </div>
    </div>
  );
};
export default DashboardFilter;
