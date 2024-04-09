import React from "react";

export default function Home() {
  return (
    <div className="h-screen bg-blue-700 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1655000278839-b7d7b11251c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjk2fHxmcmVlJTIwaW1hZ2VzJTIwdGVhY2hpbmclMjBQaWFub3xlbnwwfHwwfHx8MA%3D%3D')"}}>
      <div className="flex items-center justify-center h-full px-6 text-center text-white md:px-12">
        {/* <div>
          <h1 className="mb-6 text-5xl font-bold">Where Those Who Know</h1>
          <h3 className="mb-8 text-3xl font-bold">Go to Grow</h3>
          <button
            type="button"
            className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
            data-twe-ripple-init
            data-twe-ripple-color="light">
            Start Here!
          </button>
        </div> */}
      </div>
    </div>
  );
}
