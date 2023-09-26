const TestymoniyaCard = ({ name, bios, start, imgs }) => {
  return (
    <div className="Services1">
      <div className="ServicesBox">
        <img src={imgs} alt="" />
        <div className="Images">
          <h1 className="titleText">{name}</h1>
          <p className="biosTExt">{bios}</p>
          <p>{start}</p>
        </div>
      </div>
    </div>
  );
};

export default TestymoniyaCard;
