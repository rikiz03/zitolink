import React from "react";
import { Carousel } from "flowbite-react";
import hairstylechangerai from "../../assets/hairstylechangerai.png";
import quantumdoctor from "../../assets/quantumdoctor.png";
import wikiapi from "../../assets/wikiapi.png";

export default function Projects() {
  return (
    <div className="mb-10 md:pt-14 pt-32 md:h-screen" id="projects">
      <h2 className="text-center font-black mb-8">PROJECTS</h2>
 
        <div className="h-72 sm:h-64 md:h-96 lg:h-96 xl:h-5/6 2xl:h-96 md:w-5/6 flex items-center justify-center md:ml-28">
        <Carousel>
            <img src="../../assets/hairstylechangerai.png" alt="..." />
            <img src="../../assets/quantumdoctor.png" alt="..." />
            <img src="../../assets/wikiapi.png" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
        </Carousel>
        </div>

    </div>
  );
}

// https://source.unsplash.com/1000x800
// https://source.unsplash.com/1000x802
// https://source.unsplash.com/1000x804

// https://i.postimg.cc/W3bTYcDd/Screenshot-12.png
// https://i.postimg.cc/2y9yJMZy/Screenshot-14.png
// https://i.postimg.cc/fS4CXrKn/Screenshot-15.png
