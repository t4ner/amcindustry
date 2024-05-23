import React, { useState } from "react";
import leader1 from "/leadership/leader1.jpg";
import industry from "/whoweare/industryicon.svg";
import marketing from "/whoweare/marketingicon.svg";
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

function BoardContent() {
  return (
    <div className=" bg-gray-100">
      <div className="flex flex-wrap gap-10 container  justify-between p-10">
        <div className="space-y-3 flex flex-col justify-between  ">
          <div className="rounded-full">
            <img
              src={leader1}
              alt=""
              className="w-52 h-52 object-cover rounded-full "
            />
          </div>
          <h5 className="text-lg">Gill Marcus</h5>
          <p>Senior Independent Director</p>
        </div>
        <div className="space-y-3 ">
          <div className="rounded-full">
            <img
              src={leader1}
              alt=""
              className="w-52 h-52 object-cover rounded-full "
            />
          </div>
          <h5 className="text-lg">Gill Marcus</h5>
          <p>Senior Independent Director</p>
        </div>
        <div className="space-y-3 ">
          <div className="rounded-full">
            <img
              src={leader1}
              alt=""
              className="w-52 h-52 object-cover rounded-full "
            />
          </div>
          <h5 className="text-lg">Gill Marcus</h5>
          <p>Senior Independent Director</p>
        </div>
        <div className="space-y-3 ">
          <div className="rounded-full">
            <img
              src={leader1}
              alt=""
              className="w-52 h-52 object-cover rounded-full "
            />
          </div>
          <h5 className="text-lg">Gill Marcus</h5>
          <p>Senior Independent Director</p>
        </div>
        <div className="space-y-3 ">
          <div className="rounded-full">
            <img
              src={leader1}
              alt=""
              className="w-52 h-52 object-cover rounded-full "
            />
          </div>
          <h5 className="text-lg">Gill Marcus</h5>
          <p>Senior Independent Director</p>
        </div>
        <div className="space-y-3 ">
          <div className="rounded-full">
            <img
              src={leader1}
              alt=""
              className="w-52 h-52 object-cover rounded-full "
            />
          </div>
          <h5 className="text-lg">Gill Marcus</h5>
          <p>Senior Independent Director</p>
        </div>
        <div className="space-y-3 ">
          <div className="rounded-full">
            <img
              src={leader1}
              alt=""
              className="w-52 h-52 object-cover rounded-full "
            />
          </div>
          <h5 className="text-lg">Gill Marcus</h5>
          <p>Senior Independent Director</p>
        </div>
        <div className="space-y-3 ">
          <div className="rounded-full">
            <img
              src={leader1}
              alt=""
              className="w-52 h-52 object-cover rounded-full "
            />
          </div>
          <h5 className="text-lg">Gill Marcus</h5>
          <p>Senior Independent Director</p>
        </div>
      </div>
    </div>
  );
}

function ManagementContent() {
  return (
    <div className="bg-gray-100">
      <div className="container w-2/3">
        <div className=" py-10 mx-auto">
          <p>
            Glencore’s CEO, Gary Nagle, is supported by members of our Group and
            Departmental Leadership.
          </p>
          <h3 className="text-4xl my-10">Group leadership</h3>
          <hr className="border-1 border-black" />
        </div>
        <div className="flex flex-wrap justify-between gap-y-10">
          <div>
            <h3 className="font-semibold text-lg">Chief Financial Officer</h3>
            <p>Steven Kalmin</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Chief Financial Officer</h3>
            <p>Steven Kalmin</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Chief Financial Officer</h3>
            <p>Steven Kalmin</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Chief Financial Officer</h3>
            <p>Steven Kalmin</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Chief Financial Officer</h3>
            <p>Steven Kalmin</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Chief Financial Officer</h3>
            <p>Steven Kalmin</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Chief Financial Officer</h3>
            <p>Steven Kalmin</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Chief Financial Officer</h3>
            <p>Steven Kalmin</p>
          </div>
        </div>
        <div className="">
          <h3 className="my-10 text-4xl">Departmental leadership</h3>
          <hr className="border-1 border-black" />
          <div className="mt-10">
            <div className="flex items-center space-x-4">
              <img src={industry} alt="" className="h-20" />
              <p className="text-xl">
                Marketing - Heads of marketing report to Gary Nagle
              </p>
            </div>
            <div className="flex flex-wrap my-10 justify-between gap-10">
              <div className="basis-1/4">
                <h3 className="font-semibold text-lg">Copper</h3>
                <p>Jyothish George</p>
              </div>
              <div className="basis-1/4">
                <h3 className="font-semibold text-lg">Jyothish George Zinc</h3>
                <p>Inigo Segura (concentrates)</p>
              </div>
              <div className="basis-1/4">
                <h3 className="font-semibold text-lg">
                  Chief Financial Officer
                </h3>
                <p>Steven Kalmin</p>
              </div>
              <div className="basis-1/4">
                <h3 className="font-semibold text-lg">
                  Ferroalloys and Nickel
                </h3>
                <p>Steven Kalmin</p>
              </div>
              <div className="basis-1/4">
                <h3 className="font-semibold text-lg">Jyothish George Zinc</h3>
                <p>Steven Kalmin</p>
              </div>
              <div className="basis-1/4">
                <h3 className="font-semibold text-lg">
                  Chief Financial Officer
                </h3>
                <p>Steven Kalmin</p>
              </div>
            </div>
            <hr className="border-1 border-black" />
            <div className="flex items-center space-x-4 mt-10">
              <img src={marketing} alt="" className="h-20" />
              <p className="text-xl">
                Marketing - Heads of marketing report to Gary Nagle
              </p>
            </div>
            <div className="flex flex-wrap my-10 justify-between gap-10 pb-10">
              <div className="basis-1/4">
                <h3 className="font-semibold text-lg">Ferroalloys</h3>
                <p>Jyothish George</p>
              </div>
              <div className="basis-1/4">
                <h3 className="font-semibold text-lg">Jyothish George Zinc</h3>
                <p>Inigo Segura (concentrates)</p>
              </div>
              <div className="basis-1/4">
                <h3 className="font-semibold text-lg">Nickel</h3>
                <p>Steven Kalmin</p>
              </div>
              <div className="basis-1/4">
                <h3 className="font-semibold text-lg">
                  Ferroalloys and Nickel
                </h3>
                <p>Steven Kalmin</p>
              </div>
              <div className="basis-1/4">
                <h3 className="font-semibold text-lg">Coal</h3>
                <p>Steven Kalmin</p>
              </div>
              <div className="basis-1/4">
                <h3 className="font-semibold text-lg">
                  Chief Financial Officer
                </h3>
                <p>Steven Kalmin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Leadership() {
  useEffect(() => {
    AOS.init({duration:2000})
   }, [])
  const [isBoardSelected, setIsBoardSelected] = useState(true);

  return (
    <div data-aos="fade-left"  style={{ overflowY: 'hidden', pointerEvents: 'auto' }}>
      <div   className="bg-green-100 mt-10 md:mt-20">
        <div className="container" >
          <button
            className={`p-4 hover:bg-white ${
              isBoardSelected ? "bg-white border-t-2 border-t-blue-200" : ""
            }`}
            onClick={() => setIsBoardSelected(true)}
          >
            Our Board
          </button>
          <button
            className={`p-4 hover:bg-white ${
              !isBoardSelected ? "bg-white border-t-2 border-t-blue-200" : ""
            }`}
            onClick={() => setIsBoardSelected(false)}
          >
            Our Management
          </button>
        </div>
      </div>
      <div>{isBoardSelected ? <BoardContent /> : <ManagementContent />}</div>
    </div>
  );
}

export default Leadership;
