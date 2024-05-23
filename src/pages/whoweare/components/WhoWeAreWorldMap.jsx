import React, { Fragment, useState } from "react";

import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import pin1 from "../../worldmap/redpin.svg";
import pin2 from "../../worldmap/blackpin.svg";
import pin3 from "../../worldmap/bluepin.svg";
import bedeschi from "/partnerlogo/bedeschi.svg";
import chmc from "/partnerlogo/chmc.png";
import ctp from "/partnerlogo/ctp.png";
import sct from "/partnerlogo/sct.jpg";
import sinomach from "/partnerlogo/sinomach.png";
import sinotop from "/partnerlogo/sinotop.jpg";

const markers = [
  {
    id: 1,
    name: "ITALY",
    position: { lat: 41.871941, lng: 12.56738 },
    icon: pin2,
  },
  {
    id: 2,
    name: "FRANCE",
    position: { lat: 46.227638, lng: 2.213749 },
    icon: pin2,
  },
  {
    id: 3,
    name: "GERMANY",
    position: { lat: 51.165691, lng: 10.451526 },
    icon: pin2,
  },
  {
    id: 4,
    name: "CHINA",
    position: { lat: 35.86166, lng: 104.195396 },
    icon: pin2,
  },
  // {
  //   id: 5,
  //   name: "MOSCOW",
  //   position: { lat: 55.755825, lng: 37.617298 },
  //   icon: pin3,
  // },
  // {
  //   id: 6,
  //   name: "BEIJING",
  //   position: { lat: 40.190632, lng: 116.412144 },
  //   icon: pin3,
  // },
  // {
  //   id: 7,
  //   name: "ATHENS",
  //   position: { lat: 37.9755648, lng: 23.7348324 },
  //   icon: pin3,
  // },
  // {
  //   id: 8,
  //   name: "DUBAI",
  //   position: { lat: 25.2653471, lng: 55.2924914 },
  //   icon: pin3,
  // },
  // {
  //   id: 9,
  //   name: "ISTANBUL",
  //   position: { lat: 41.006381, lng: 28.9758715 },
  //   icon: pin3,
  // },
  {
    id: 10,
    name: "RUSSIA",
    position: { lat: 64.6863136, lng: 97.7453061 },
    icon: pin1,
  },
  {
    id: 11,
    name: "UZBEKISTAN",
    position: { lat: 41.32373, lng: 63.9528098 },
    icon: pin1,
  },
  {
    id: 12,
    name: "TURKMENISTAN",
    position: { lat: 39.3763807, lng: 59.3924609 },
    icon: pin1,
  },
  {
    id: 13,
    name: "ALGERIA",
    position: { lat: 28.0000272, lng: 2.9999825 },
    icon: pin1,
  },
  {
    id: 14,
    name: "TUNISIA",
    position: { lat: 33.8439408, lng: 9.400138 },
    icon: pin1,
  },
  {
    id: 15,
    name: "IRAQ",
    position: { lat: 33.0955793, lng: 44.1749775 },
    icon: pin1,
  },
  {
    id: 16,
    name: "MOROCCO",
    position: { lat: 31.1728205, lng: -7.3362482 },
    icon: pin1,
  },
  {
    id: 17,
    name: "TURKEY",
    position: { lat: 38.9597594, lng: 34.9249653 },
    icon: pin1,
  },
  {
    id: 18,
    name: "RUSSIA",
    position: { lat: 55.7505412, lng: 37.6174782 },
    icon: pin1,
  },
  {
    id: 19,
    name: "RUSSIA",
    position: { lat: 59.833753, lng: 93.793323 },
    icon: pin1,
  },
  {
    id: 20,
    name: "RUSSIA",
    position: { lat: 57.634418, lng: 73.017842 },
    icon: pin1,
  },
  {
    id: 21,
    name: "RUSSIA",
    position: { lat: 63.868259, lng: 54.193130 },
    icon: pin1,
  },
  {
    id: 22,
    name: "ADANA",
    position: { lat: 37.1438001, lng: 35.4984094 },
    icon: pin1,
  },
  {
    id: 23,
    name: "MERSIN",
    position: { lat: 36.7978381, lng: 34.6298391 },
    icon: pin1,
  },
  {
    id: 24,
    name: "SOMA",
    position: { lat: 39.185172, lng: 27.6088792 },
    icon: pin1,
  },
  {
    id: 26,
    name: "IZMIR",
    position: { lat: 38.4237433, lng: 27.1428019 },
    icon: pin1,
  },
  {
    id: 27,
    name: "ALGERIA",
    position: { lat: 36.398537, lng: 3.045493 },
    icon: pin1,
  },
  {
    id: 28,
    name: "ALGERIA",
    position: { lat: 35.424144, lng: 1.047072 },
    icon: pin1,
  },
  {
    id: 29,
    name: "ALGERIA",
    position: { lat: 36.164592, lng: 4.279813 },
    icon: pin1,
  },
  {
    id: 30,
    name: "UZBEKISTAN",
    position: { lat: 41.32373, lng: 63.9528098 },
    icon: pin1,
  },
  {
    id: 31,
    name: "UZBEKISTAN",
    position: { lat: 41.660122, lng: 60.617208 },
    icon: pin1,
  },
  

  // {
  //   id: 1,
  //   name: "Room No. 805 Beijing ONE Tower No. 59 Zhongshan St.,TongZhou Dist., Beijing 101100, P.R.China",
  //   position: { lat: 39.750335, lng: 116.562375 },
  //   icon: pin1,
  // },
  // {
  //   id: 2,
  //   name: "Esentepe Mh. Büyükdere Cd. Astoria Blok No:127",
  //   position: { lat: 41.069451, lng: 29.0119 },
  //   icon: pin2,
  // },
  // {
  //   id: 3,
  //   name: "Business Center, Dubai Word Central, PO BOX 390667, Dubai, United Arab Emirates",
  //   position: { lat: 25.168383, lng: 55.355896 },

  //   icon: pin3,
  // },

  // {
  //   id: 4,
  //   name: " Moscow, st. Letnikovskaya, 10, building 4, floor 5, room I, rooms No. 34",
  //   position: { lat: 55.724986, lng: 37.64417 },
  //   icon: pin3,
  // },

  // {
  //   id: 5,
  //   name: "Via Praimbole, 38 – 35010 Limena (PD) – Italy",
  //   position: { lat: 45.458117, lng: 11.848926 },
  //   icon: pin3,
  // },
  // {
  //   id: 6,
  //   name: "Sichuan Air Separation Plant Group Address: NO.239 Jianzhong Road, Jianyang, Sichuan",
  //   position: { lat: 30.373212, lng: 104.54968 },
  //   icon: pin1,
  // },
];


function WorldMap() {
  const [selectedTab, setSelectedTab] = useState("references");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const tabs = {
    // offices: {
    //   label: "OUR OFFICES",
    //   content: <OfficesContent />,
    //   borderColor: "black",
    // },
    references: {
      label: "OUR REFERENCES",
      content: <ReferencesContent />,
      borderColor: "teal-500",
    },
    partners: {
      label: "OUR PARTNERS",
      content: <PartnersContent />,
      borderColor: "cyan-500",
    },
  };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBAt3ty-ZbtfE9ZrT-VDgE0Q3JRgKOEMTA",
  });

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  return (
    <div className="flex-col lg:flex lg:flex-row gap-10 "  style={{ overflow: 'hidden', pointerEvents: 'auto' }}>
      <div className="w-full lg:w-2/3" >
        <div className="bg-green-100 mt-10 md:mt-20">
          <div className="container">
            {Object.keys(tabs).map((tabKey) => (
              <TabButton
                key={tabKey}
                label={tabs[tabKey].label}
                selected={selectedTab === tabKey}
                onClick={() => handleTabChange(tabKey)}
                borderColor={tabs[tabKey].borderColor}
              />
            ))}
          </div>
        </div>
        <div>{tabs[selectedTab].content}</div>
      </div>
      <Fragment>
        <div className="w-full mt-10 md:mt-20">
          <div style={{ height: "90vh", width: "100%" }}>
            {isLoaded ? (
              <GoogleMap
                center={{ lat: 41.069451, lng: 29.0119 }}
                zoom={2}
                onClick={() => setActiveMarker(null)}
                mapContainerStyle={{ width: "100%", height: "72vh" }}
                options={{
                  styles: [
                    {
                      elementType: "geometry",
                      stylers: [
                        {
                          color: "#ededed", // Arka plan rengi
                        },
                      ],
                    },
                    {
                      elementType: "labels.icon",
                      stylers: [
                        {
                          visibility: "off",
                        },
                      ],
                    },
                    {
                      elementType: "labels.text.fill",
                      stylers: [
                        {
                          color: "#616161",
                        },
                      ],
                    },
                    {
                      elementType: "labels.text.stroke",
                      stylers: [
                        {
                          color: "#ededed", // Arka plan rengi
                        },
                      ],
                    },
                    {
                      featureType: "administrative.land_parcel",
                      elementType: "labels.text.fill",
                      stylers: [
                        {
                          color: "#bdbdbd",
                        },
                      ],
                    },
                    {
                      featureType: "poi",
                      elementType: "geometry",
                      stylers: [
                        {
                          color: "#eeeeee",
                        },
                      ],
                    },
                    {
                      featureType: "road",
                      elementType: "geometry",
                      stylers: [
                        {
                          color: "#ffffff",
                        },
                      ],
                    },
                    {
                      featureType: "road.arterial",
                      elementType: "labels.text.fill",
                      stylers: [
                        {
                          color: "#757575",
                        },
                      ],
                    },
                    {
                      featureType: "road.highway",
                      elementType: "geometry",
                      stylers: [
                        {
                          color: "#dadada",
                        },
                      ],
                    },
                    {
                      featureType: "road.highway",
                      elementType: "labels.text.fill",
                      stylers: [
                        {
                          color: "#616161",
                        },
                      ],
                    },
                    {
                      featureType: "road.local",
                      elementType: "labels.text.fill",
                      stylers: [
                        {
                          color: "#9e9e9e",
                        },
                      ],
                    },
                    {
                      featureType: "transit.line",
                      elementType: "geometry",
                      stylers: [
                        {
                          color: "#e5e5e5",
                        },
                      ],
                    },
                    {
                      featureType: "transit.station",
                      elementType: "geometry",
                      stylers: [
                        {
                          color: "#eeeeee",
                        },
                      ],
                    },
                    {
                      featureType: "water",
                      elementType: "geometry",
                      stylers: [
                        {
                          color: "#c9c9c9",
                        },
                      ],
                    },
                    {
                      featureType: "water",
                      elementType: "labels.text.fill",
                      stylers: [
                        {
                          color: "#9e9e9e",
                        },
                      ],
                    },
                  ],
                }}
              >
                {markers.map(({ id, name, position, icon }) => (
                  <Marker
                    key={id}
                    position={position}
                    onClick={() => handleActiveMarker(id)}
                    icon={{
                      url: icon,
                      scaledSize: { width: 55, height: 45 },
                    }}
                  >
                    {activeMarker === id ? (
                      <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                        <div>
                          <p>{name}</p>
                        </div>
                      </InfoWindow>
                    ) : null}
                  </Marker>
                ))}
              </GoogleMap>
            ) : null}
          </div>
        </div>
      </Fragment>
    </div>
  );
}

export default WorldMap;

function TabButton({ label, selected, onClick, borderColor }) {
  return (
    <button
      className={`p-3 md:p-4 hover:bg-white ${
        selected ? `bg-white border-t-2 border-${borderColor}` : ""
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

// function OfficesContent() {
//   return (
//     <div className="p-4 md:p-8">
//       <h4 className="font-semibold mb-3 text-lg">OUR OFFICES</h4>
//       <ul className="space-y-2">
//         <li>
//           <span className="font-semibold uppercase">Head office - </span>
//           Zorlu Center R2 Blok T029 Levazim Mh. Vadi Sk. 34340 Beşiktaş /
//           İstanbul
//         </li>
//         <li>
//           MOSCOW - Address: 115114, Moscow, st. Letnikovskaya, 10, building 4,
//           floor 5, room I, rooms No. 34,40
//         </li>
//         <li>
//           BEIJING - Address: Room No. 805 Beijing ONE Tower No. 59 Zhongshan
//           St.,TongZhou Dist., Beijing 101100, P.R.China
//         </li>
//         <li>ATHENS</li>
//         <li>
//           DUBAI - Address: Business Center, Dubai Word Central, PO BOX 390667,
//           Dubai, United Arab Emirates
//         </li>
//         <li>
//           ISTANBUL - Address: Esentepe Mh. Büyükdere Cd. Astoria Blok No:127 A
//           İç Kapı No:33 Şişli İSTANBUL
//         </li>
//       </ul>
//     </div>
//   );
// }

function ReferencesContent() {
  return (
    <div className="p-4 md:py-8">
      <div className="flex gap-4 mb-5 items-center"> 
        <img src={pin1} alt="" className="w-10" />
        <p className="font-semibold">REFERENCES</p>
      </div>
      <ul className="space-y-2">
        <li>&#8226; SOMA 4000TPD Cement Plant Project</li>
        <li>&#8226; Sönmez Cement5000 TPD EP Supply</li>
        <li>&#8226; Göltas12MWWaste Heat Energy Power Plant</li>
        <li>&#8226; Kipas8MWWaste Heat Energy Power Plant</li>
        <li>&#8226; TOROS Port/TEKFEN Yumurtalık-ADANA</li>
        <li>&#8226; MEDCEM Shiploader and Conveyor Systems</li>
        <li>&#8226; SÖNMEZ Shiploader and Ports Project</li>
        <li>&#8226; BATI SÖKE Pipe Conveyor Project</li>
        <li>
          &#8226; OyakAdana 600tph Crusher with apron feeder,  Preblending
          Equipment Gokay Insaat Madencilik
        </li>
        <li>&#8226; Algerian Φ3.2X13m Ball Mill System Project</li>
        <li>&#8226; EP+S new production line</li>
        <li>&#8226; Paper Bag Production line construction</li>
        <li>&#8226; OYAKAbidjanCoal Grinding Station Consturiction</li>
        <li>&#8226; QCC4 5500TPD Clinker Production Line Project</li>
        <li>
          {" "}
          &#8226;{" "}
          <a href="https://www.eastmining.ru/en/">
            Russia - Emco port https://www.eastmining.ru/en/
          </a>
        </li>
        <li>
          {" "}
          &#8226;{" "}
          <a href="https://www.oteko.ru/en/">
            Russia - Oteko port https://www.oteko.ru/en/
          </a>
        </li>
        <li>
          {" "}
          &#8226;{" "}
          <a href="https://novotrans.com/en/main/">
            Russia - Novotrans port https://novotrans.com/en/main/
          </a>
        </li>
        <li>
          {" "}
          &#8226;{" "}
          <a href="https://arctic-energy.com/en/about/">
            Russia - Northern Star port https://arctic-energy.com/en/about/
          </a>
        </li>
      </ul>
    </div>
  );
}

function PartnersContent() {
  return (
    <div className="p-4 md:p-8">
      <div className="flex gap-4 items-center mb-5">
        <img src={pin2} alt="" className="w-10" />
        <p className="font-semibold">PARTNERS</p>
      </div>
      <ul className="space-y-8">
        <li className="flex items-center  space-x-8">
          <div>
            <img src={bedeschi} className="w-14 bg-red-600" />
          </div>
          <p>
         
            <a href="https://www.bedeschi.com/" target="_blank" className="underline">BEDESCHI</a>
            
          </p>
        </li>
        <li className="flex items-center  ">
          <div>
            <img src={sct} className=" h-10 w-36" />
          </div>
          <p>
          
            <a
              href="http://en.sinocemtech.com/"
              target="_blank"
              className="underline"
            >
              SCT
            </a>
          </p>
        </li>
        <li className="flex items-center space-x-3">
          <div>
            <img src={chmc} className=" h-10 w-36 " />
          </div>
          <p>
          <a href="https://en.chmc.cc/" target="_blank" className="underline">CHMC</a>
          </p>
        </li>
        <li className="flex items-center space-x-5">
          <div>
            <img src={sinomach} className=" h-10 w-20 " />
          </div>
          <p>
    
            <a href="http://en.sinomach-he.cn/channels/4718.html" target="_blank" className="underline">
            CHMC-SINOMACH HE
            </a>
          </p>
        </li>
        <li className="flex items-center space-x-5">
          <div>
            <img src={sinotop} className=" h-10 w-20 " />
          </div>
          <p>

            <a
              href="http://www.sd-top.com/"
              target="_blank"
              className="underline"
            >
          SINOTOP
            </a>
          </p>
        </li>
        <li className="flex items-center space-x-5">
          <div>四川空分集团</div>
          <p>
          
            <a
              href="https://www.saspg.com/en"
              target="_blank"
              className="underline"
            >
             SASPG
            </a>
          </p>
        </li>
        <li className="flex items-center space-x-5">
          <div>
            <img src={ctp} className=" h-10 w-20 " />
          </div>
          <p>
          
            <a
             target="_blank"
             href="https://www.ctn-group.com/"
             className="underline"
            >
           CTP-CTN 
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
}
/* <div className="container mt-20">
  <div className="flex-col lg:flex lg:flex-row lg:space-x-10 items-stretch mt-20">
    <div className="basis-1/2 bg-blue-100 text-sm md:text-lg p-4 md:p-10 flex justify-between space-x-10 md:space-x-0">
      <div>
        <h4 className="font-semibold border-b-2 mb-3 border-red-600">
          OUR OFFICES
        </h4>
        <ul>
          <li>MOSCOW</li>
          <li>BEIJING</li>
          <li>ATHENS</li>
          <li>DUBAI</li>
          <li>ISTANBUL</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold border-b-2 mb-3 border-blue-600">
          OUR REFERENCES
        </h4>
        <ul>
          <li>RUSSIA</li>
          <li>UZBEKISTAN</li>
          <li>TURKMENISTAN</li>
          <li>ALGERIA</li>
          <li>TUNISIA</li>
          <li>IRAQ</li>
          <li>MOROCCO</li>
          <li>TURKEY</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold border-b-2 mb-3 border-green-600">
          OUR PARTNERS
        </h4>
        <ul>
          <li>ITALY</li>
          <li>FRANCE</li>
          <li>GERMANY</li>
          <li>CHINA</li>
        </ul>
      </div>
    </div>
    <div className="basis-1/2">
      <div className="flex bg-blue-100 flex-col h-full items-center justify-center">
        <p className="text-2xl md:text-4xl text-center p-10">WORLD MAP</p>
      </div>
    </div>
  </div>
</div>; */