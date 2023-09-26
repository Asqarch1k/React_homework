import ServicesCard from "./services";
import ServicesData from "../data/services";

const Services = () => {
  return (
    <div className="serviseSection">
      {ServicesData.map((servis, idx) => (
        <ServicesCard key={idx} {...servis} />
      ))}
    </div>
  );
};

export default Services;
