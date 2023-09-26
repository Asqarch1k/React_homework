const ServicesCard = ({ img, title, bio }) => {
  return (
    <div className="Boxes">
      <div className="boxs">
        <div className="Images">
          <img src={img} alt="" />
        </div>
        <h1 className="titleText">{title}</h1>
        <p className="bioTex">{bio}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
