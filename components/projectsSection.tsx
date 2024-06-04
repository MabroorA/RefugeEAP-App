import React from 'react'

import Link from 'next/link'

import Image from "next/image";
import humanizePic from "../public/humanize-updated-home.png"
import StocksPic from "../public/stocks-updated.jpg"
import refugePic from "../public/refugeap-home.jpg"
import whiteboardPic from "../public/Cloud-app-home.jpg"

export default function ProjectsSection() {
  return (

      <div className="flex flex-col">
        <div className="text-white border-b-2 py-2">Projects</div>
        {/* CARDS */}
        <div className="flex flex-row space-x-3 py-5 ">
          {/* CARD */}
          <div className=" flex flex-col p-3 bg-gray-800 lg:min-w-72 lg:min-h-72 rounded-2xl transform transition-transform duration-300 hover:scale-110 hover:border-white hover:border">
            {/* PIC */}
            <div className=" bg-inherit ">
              <div className="rounded-2xl"> 
                <Link href="https://humanize-text.com/">
                  <Image
                    className=" lg:min-w-60 lg:min-h-60 border-1 object-contain rounded-2xl "
                    src={humanizePic}
                    alt="pfp picture"
                    
                    />
                </Link>
              </div>
              
            </div>
            {/* Project Title */}
              <div className="bg-inherit text-2xl text-white py-2 ">
                Humanize
              </div>
            
          </div>
          {/* CARD */}
          <div className=" flex flex-col p-3 bg-gray-800 lg:min-w-72 lg:min-h-72 rounded-2xl transform transition-transform duration-300 hover:scale-110 hover:border-white hover:border ">
            {/* PIC */}
            <div className=" bg-inherit ">
            <div className=" bg-inherit ">
              <div className="rounded-2xl">
                <Link href="https://stocks-prediction-app.pages.dev">
                  <Image
                    className=" border-black lg:min-w-60 lg:min-h-60 border object-fill rounded-2xl  "
                    src={StocksPic}
                    alt="pfp picture"
                    
                    />
                </Link>    
              </div>
              
            </div>
              
            </div>
            {/* Project Title */}
              <div className="bg-inherit text-2xl text-white py-2 ">
                Finstimulate
              </div>
            
          </div>
          {/* CARD */}
          <div className=" flex flex-col p-3 bg-gray-800 lg:min-w-72 lg:min-h-72 rounded-2xl transform transition-transform duration-300 hover:scale-110 hover:border-white hover:border">
            {/* PIC */}
            <div className=" bg-inherit ">
              <div className="rounded-2xl"> 
                <Link href="https://github.com/MabroorA/refugeEAP-app">
                  <Image
                    className="border-black lg:min-w-60 lg:min-h-60 border object-fill rounded-2xl  "
                    src={refugePic}
                    alt="pfp picture"
                    
                    />
                </Link>
              </div>
              
            </div>
            {/* Project Title */}
              <div className="bg-inherit text-2xl text-white py-2 ">
                Refugee Aid 
              </div>
            
          </div>

          {/* CARD */}
          {/* CARD */}
          <div className=" flex flex-col p-3 bg-gray-800 lg:min-w-72 lg:min-h-72 rounded-2xl transform transition-transform duration-300 hover:scale-110 hover:border-white hover:border">
            {/* PIC */}
            <div className=" bg-inherit ">
              <div className="rounded-2xl"> 
                <Image
                  className="border-black lg:min-w-60 lg:min-h-60 border object-fill rounded-2xl  "
                  src={whiteboardPic}
                  alt="pfp picture"
                  
                  />
              </div>
              
            </div>
            {/* Project Title */}
              <div className="bg-inherit text-2xl text-white py-2 ">
                Private Cloud
              </div>
            
          </div>

        </div>
      </div>
  )
}
