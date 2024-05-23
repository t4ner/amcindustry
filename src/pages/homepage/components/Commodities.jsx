import commoditiesimage from "/homepageimg/www.png";
function Commodities() {
  return (
    <div className="mt-10">
      <div className="px-4 md:px-20 mb-2">
        <h2 className="text-2xl md:text-4xl">Our commodities</h2>
      </div>

      <div className="bg-gray-100  flex-col lg:flex lg:flex-row items-center">
        <div className="basis-2/3 h-full">
          <img
            src={commoditiesimage}
            alt="Who We Are"
            className="h-[350px] md:h-[500px] w-full object-cover"
          />
        </div>
        <div className="basis-1/2 p-3 md:p-20">
          <p className="text-lg mt-2 tracking-wide">
            <h2 className="text-2xl md:text-4xl uppercase">
              {" "}
              WHR Plants (Waste Heat Recovery Plants)
            </h2>{" "}
            <br /> Our company specializes in the design and sizing of heat
            boilers (heat exchangers) for waste heat recovery systems. We
            provide all the necessary features and detailed engineering to
            achieve full integration of both mechanical and electrical scopes
          </p>
        </div>
      </div>
      <div className="bg-gray-100 text-lg p-3 md:p-20 tracking-wide">
        <h2 className="text-2xl md:text-4xl mb-5"> DUST SUPPRESSION SYSTEMS</h2>{" "}
        With a zero-emission target in mind, protect your environment with our
        high-efficiency filters capable of handling massive capacities up to 6
        million cubic meters per hour, reducing dust emissions to ≤ 5 mg/Nm3
        with our bag filters. Each filter is customized to the unique conditions
        of your operation, durable, and efficient. Designed to adapt to every
        feature of the dust to be captured, from its chemical composition to
        moisture and temperature tolerance, our zero-emission and DP guaranteed
        filter bags ensure maximum performance. And thanks to our fully
        automatic PLC control unit and advanced ∆P cleaning system, we provide
        energy savings by minimizing the use of compressed air
      </div>
    </div>
  );
}

export default Commodities;
