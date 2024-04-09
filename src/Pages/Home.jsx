import React from "react";

export default function Home() {
  return (
    <div className="h-screen bg-blue-700 bg-cover bg-center">
      <div className="flex items-center justify-center h-full px-6 text-center text-white md:px-12">
        <div>
          <h1 className="mb-6 text-5xl font-bold">Where Those Who Know</h1>
          <h1 className="mb-6 text-5xl font-bold">Go to Grow</h1>
          <button
            type="button"
            className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
            data-twe-ripple-init
            data-twe-ripple-color="light">
            Start Here!
          </button>
        </div>
      </div>
    </div>
  );
}
