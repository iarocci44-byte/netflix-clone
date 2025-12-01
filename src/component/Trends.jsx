import React, { useRef } from "react";
import trend1 from "../assets/StrangerThings.webp";
import trend2 from "../assets/Frankenstein.webp";
import trend3 from "../assets/MonsterEdGein.webp";
import trend4 from "../assets/TheWitcher.webp";
import trend5 from "../assets/Wednesday.webp";

function Trends() {
  
  const movies = [
    {
      id: 1,
      url: trend1,
    },
    {
      id: 2,
      url: trend2,
    },
    {
      id: 3,
      url: trend3,
    },
    {
      id: 4,
      url: trend4,
    },
    {
      id: 5,
      url: trend5,
    },
    {
      id: 6,
      url: trend5,
    },
    {
      id: 7,
      url: trend5,
    },
    {
      id: 8,
      url: trend5,
    },
  ];
  
  return (
    <div className="pt-5 h-auto">
      <div className="font-bold text-2xl pb-5 h-auto">Trending Now</div>
      <div className="relative pl-4 flex gap-10 overflow-scroll hide-scrollbar overflow-y-auto h-[340px]">
        {movies.map((movie, index) => {
          return (
            <div key={index} className="relative h-fit pt-7">
              <img
                className="hover:scale-110 transition-transform duration-300 rounded-2xl min-w-[200px] h-auto"
                src={movie.url}
                alt=""
              />
              <div className="text-8xl font-bold absolute bottom-0 left-[-25px] text-stroke-white h-auto">
                {movie.id}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

}

export default Trends;
