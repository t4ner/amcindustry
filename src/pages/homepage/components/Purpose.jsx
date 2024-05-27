import whoweare from "/whoweare/firstwhoweare.png";
function Purpose() {
  return (
    <div className="mt-10">
      <div className="px-4 md:px-20">
        <h2 className="text-2xl md:text-4xl uppercase">Who we are</h2>
      </div>

      <div className="bg-gray-100  flex-col   items-center">
        <div className="basis-1/2 p-3 md:p-20">
          <div className="text-lg mt-2 tracking-wide space-y-2">
            <p>
              {" "}
              <span className="font-semibold">AMC</span> is a joint venture
              company who is dedicated to the Cement Building Material and
              Environment Protection business, including the Cement Industry,
              Lime, and AAC Blocks, Waste Incineration Treatment,
              Desulfurization and Denitrification for Heavy Industry. She
              provides the EP (Engineering and Procurement) Service, EPS
              (Engineering, Procurement & Service), Consulting, Spare Parts
              Supply, Upgrading, Operation & Maintenance Service all over the
              world. <br></br>{" "}
            </p>
            <p>
              <span className="font-semibold">AMC </span>
              has already supplied the spare parts for many customers in Middle
              East, Turkey, Africa, and South East of Asian. Our partners
              including the best suppliers in the above areas, our consulting
              projects are also distributed in the above places.
            </p>
          </div>
        </div>
        <div className="basis-2/3 h-full">
          <img
            src={whoweare}
            alt="Who We Are"
            className="h-[350px] md:h-[500px] w-full object-cover "
          />
        </div>
      </div>
    </div>
  );
}

export default Purpose;
