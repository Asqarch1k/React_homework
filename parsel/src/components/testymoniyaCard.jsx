import TestymoniyaCard from "./testymoniya.jsx";
import informPeople from "../data/testymonial.js";

const Testymonya = () => {
  return (
    <div className="testimonialSection">
      {informPeople.map((testymon, idx) => (
        <TestymoniyaCard key={idx} {...testymon} />
      ))}
    </div>
  );
};

export default Testymonya;
