import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Footer from "../../components/footer/Footer";
import ContactNavbar from "./ContactNavbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Fragment } from "react";

import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";

import pin5 from "./bluepin.svg";
import Navbar from "../../components/navbar/Navbar";

const markers = [
  {
    id: 5,
    name: "MOSCOW",
    position: { lat: 55.755825, lng: 37.617298 },
    icon: pin5,
  },
  {
    id: 6,
    name: "BEIJING",
    position: { lat: 40.190632, lng: 116.412144 },
    icon: pin5,
  },
  {
    id: 7,
    name: "ATHENS",
    position: { lat: 37.9755648, lng: 23.7348324 },
    icon: pin5,
  },
  {
    id: 8,
    name: "DUBAI",
    position: { lat: 25.2653471, lng: 55.2924914 },
    icon: pin5,
  },
  {
    id: 9,
    name: "ISTANBUL",
    position: { lat: 41.006381, lng: 28.9758715 },
    icon: pin5,
  },
  {
    id: 10,
    name: "ISTANBUL",
    position: { lat: 41.068501, lng: 29.005855 },
    icon: pin5,
  },
];
function Contact() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [selectedTab, setSelectedTab] = useState("offices");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const tabs = {
    offices: {
      label: "OUR OFFICES",
      content: <OfficesContent />,
      borderColor: "black",
    },
  };
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_46ikwls",
        "template_yri41sa",
        form.current,
        "eH_Rf6GYH5NogdNfx"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!"); // Uyarı mesajı gösterme
          form.current.reset(); // Formu temizleme
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again."); // Uyarı mesajı gösterme
        }
      );
  };

  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12032.365840604098!2d29.0155549!3d41.0669934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab64f5d340001%3A0xa9d5a3c5df59f675!2zTEVPTiBEScWeIFTEsENBUkVUIEVORMOcU1RSxLAgVkUgTUFERU5DxLBMxLBLIEEuxZ4u!5e0!3m2!1str!2str!4v1711139735280!5m2!1str!2str";
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
    <>
      <Navbar />
      <div className="overflow-hidden">
        <div className="mt-5 md:mt-40">
          <div className="container px-4 md:px-0">
            <h3 className="text-lg md:text-xl">
              More about our regional offices and assets around the world
            </h3>
            <p className="text-3xl md:text-5xl mt-2">Contact us</p>
            <p className="text-lg md:text-xl mt-2">
              Find our contact details, and get in touch.
            </p>
          </div>
          <div className=" flex-col lg:flex-row lg:flex justify-around container mt-10 md:mt-20">
            <div className="basis-1/3 bg-[#016ea5] text-white p-4">
              <h1 className="font-semibold">
                LEON FOREIGN TRADE INDUSTRY AND MINING INC.
              </h1>
              <p className="mt-7">
                <span>HEAD OFFICE - </span>
                MOSCOW - Address: 115114, Moscow, st. Letnikovskaya, 10,
                building 4, floor 5, room I, rooms No. 34,40
              </p>
              <div className="mt-7">
                {" "}
                <p>Tel: +7(915)206-05-63</p>
                <p>Tel: +7(926)072-15-50</p>
              </div>
              <p className="mt-7 border-b-2 border-transparent hover:border-white duration-500">
                mozturk@leonindustry.com
              </p>
              <p className="mt-7">
                <span>BRANCH OFFICE - </span>Esentepe Mh. Büyükdere Cd. Astoria
                Blok No:127 A Istanbul/Turkey
              </p>
              <p className="mt-7">Tel: 0212 215 25 35</p>
            </div>
            <div className="basis-2/3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2246.935090527548!2d37.64013567615933!3d55.72488019414227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b2248185b75%3A0x541d3739c571ae41!2zVWxpdHNhIExldG5pa292c2theWEsIDEwINGB0YLRgNC-0LXQvdC40LUgNCwgTW9za3ZhLCBSdXN5YSwgMTE1MTE0!5e0!3m2!1str!2str!4v1716471730011!5m2!1str!2str"
                className="h-[350px] md:h-[450px] w-full "
                style={{ border: 0 }}
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div
          className="flex-col lg:flex lg:flex-row  container gap-10"
          data-aos="fade-left"
        >
          <div className="w-full lg:w-2/3">
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
            <div className="container mt-10 md:mt-20">
              <div>
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
                          <InfoWindow
                            onCloseClick={() => setActiveMarker(null)}
                          >
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
        <div
          className="bg-gray-100 w-full  md:w-1/2  container mt-10 md:mt-20"
          data-aos="fade-right"
        >
          <div className="basis-2/3 text-black py-8 lg:py-16 px-10 mx-auto">
            <h2 className="mb-4 text-3xl md:text-5xl tracking-tight text-center">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </p>
            <form onSubmit={sendEmail} ref={form}>
              <label className="block  font-medium ">Full name</label>
              <input
                type="text"
                name="user_name"
                className="shadow-sm border mb-4  text-sm rounded-lg  block w-full p-2.5"
              />
              <label className="block  font-medium ">Phone</label>
              <input
                type="text"
                name="phone"
                className="shadow-sm border mb-4   text-sm rounded-lg  block w-full p-2.5"
              />
              <label className="block  font-medium ">Company</label>
              <input
                type="text"
                name="company"
                className="shadow-sm border mb-4  text-sm rounded-lg  block w-full p-2.5"
              />
              <label className="block font-medium ">Email</label>
              <input
                type="email"
                name="user_email"
                className="shadow-sm border  text-sm rounded-lg  block w-full p-2.5"
              />
              <label className="block mt-4  font-medium ">Message</label>
              <textarea
                name="message"
                className="shadow-sm border mb-4  text-sm rounded-lg  block w-full p-2.5"
              ></textarea>
              <input
                type="submit"
                value="Send"
                className="shadow-sm border mb-4 bg-[#016ea5] cursor-pointer  text-sm rounded-lg  block  px-5 py-2 text-white font-bold"
              />
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
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
function OfficesContent() {
  return (
    <div className="p-4 md:p-8">
      <h4 className="font-semibold mb-3 text-lg">OUR OFFICES</h4>
      <ul className="space-y-2">
        <li>
          Zorlu Center R2 Blok T029 Levazim Mh. Vadi Sk. 34340 Beşiktaş /
          İstanbul
        </li>
        <li>
          MOSCOW - Address: 115114, Moscow, st. Letnikovskaya, 10, building 4,
          floor 5, room I, rooms No. 34,40
        </li>
        <li>
          BEIJING - Address: Room No. 805 Beijing ONE Tower No. 59 Zhongshan
          St.,TongZhou Dist., Beijing 101100, P.R.China
        </li>
        <li>ATHENS</li>
        <li>
          DUBAI - Address: Business Center, Dubai Word Central, PO BOX 390667,
          Dubai, United Arab Emirates
        </li>
        <li>
          ISTANBUL - Address: Esentepe Mh. Büyükdere Cd. Astoria Blok No:127 A
          İç Kapı No:33 Şişli İSTANBUL
        </li>
      </ul>
    </div>
  );
}
