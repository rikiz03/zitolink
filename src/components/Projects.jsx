import React from 'react';

export default function Projects() {
    return(
        <div className="h-screen">
          <h2 className="text-center font-black">PROJECTS</h2>
            <div className="container">
              <div className="box">
                <img src="https://source.unsplash.com/1000x800" />
                <span>CSS</span>
              </div>

              <div className="box">
                <img src="https://source.unsplash.com/1000x802" />
                <span>Image</span>
              </div>

              <div className="box">
                <img src="https://source.unsplash.com/1000x804" />
                <span>Hover</span>
              </div>

              <div className="box">
                <img src="https://source.unsplash.com/1000x806" />
                <span>Effect</span>
              </div>
            </div>
        </div>
    )
}