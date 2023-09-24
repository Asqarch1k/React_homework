import React from "react";
import ReactDOM from "react-dom/client";

// const heading = (
//   <div className="wrapper">
//     {products.map(({ title, img, bio, stars }, idx) => (
//       <h1>{salom}</h1>
//     ))}
//   </div>
// );

const products = [
  {
    img: "https://evergreenlandscapes.ca/wp-content/uploads/2018/06/grass.jpg.webp",
    title: "Lorem Ipsum",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },

  {
    img: "https://www.chicagobotanic.org/sites/default/files/images/lawn_care_summer.jpg",
    title: "Lorem Ipsum",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    img: "https://img.freepik.com/free-photo/man-cutting-grass-with-lawn-mover-back-yard_1303-22794.jpg?w=2000",
    title: "Lorem Ipsum",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
];

const informPeople = [
  {
    imgs: "https://img.freepik.com/free-photo/positive-carefree-woman-with-curly-hair-dressed-hoodie-smiles-happily-makes-peace-gesture-takes-selfie-urban-place-being-good-mood-after-sport-training-people-emotions-sporty-lifestyle_273609-59906.jpg",
    name: "Courtney Henry",
    bios: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    start: "⭐⭐⭐⭐⭐⭐",
  },
  {
    imgs: "https://img.freepik.com/free-photo/positive-carefree-woman-with-curly-hair-dressed-hoodie-smiles-happily-makes-peace-gesture-takes-selfie-urban-place-being-good-mood-after-sport-training-people-emotions-sporty-lifestyle_273609-59906.jpg",
    name: "Courtney Henry",
    bios: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    start: "⭐⭐⭐⭐⭐⭐",
  },
  {
    imgs: "https://img.freepik.com/free-photo/positive-carefree-woman-with-curly-hair-dressed-hoodie-smiles-happily-makes-peace-gesture-takes-selfie-urban-place-being-good-mood-after-sport-training-people-emotions-sporty-lifestyle_273609-59906.jpg",
    name: "Courtney Henry",
    bios: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    start: "⭐⭐⭐⭐⭐⭐",
  },
  {
    imgs: "https://img.freepik.com/free-photo/positive-carefree-woman-with-curly-hair-dressed-hoodie-smiles-happily-makes-peace-gesture-takes-selfie-urban-place-being-good-mood-after-sport-training-people-emotions-sporty-lifestyle_273609-59906.jpg",
    name: "Courtney Henry",
    bios: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    start: "⭐⭐⭐⭐⭐⭐",
  },
];

const heading = (
  <div className="wrapper">
    <div className="wrappers">
      <h1 className="RoundText">
        Round Rock <br></br> Yard Maintenance
      </h1>
      <div className="transparentText">
        <p>Lorem Ipsum is simply dummy</p>
      </div>
      <h1 className="BolderTex">
        Lorem ipsum <br></br> Lorem
      </h1>
      <button className="helpMeBtm">Help Me</button>
    </div>

    <div className="mainTwo">
      <h1 className="ServicesText">Services</h1>

      <div className="Boxes">
        {products.map(({ title, img, bio }, idx) => (
          <div className="boxs">
            <div className="Images">
              <img src={img} alt="" />
            </div>
            <h1 className="titleText">{title}</h1>
            <p className="bioTex">{bio}</p>
          </div>
        ))}
      </div>
      <button className="helpMeBtm">Help Me</button>
      <h1 className="AboutUsTex">About Us</h1>
    </div>

    <div className="mainThree">
      <p className="longPTex">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p className="longPTex">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p className="longPTex">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>

    <div className="Services">
      <h1 className="ServicesText">Testymonials</h1>
      <div className="Services1">
        {informPeople.map(({ name, bios, start, imgs }, idx) => (
          <div className="ServicesBox">
            <img src={imgs} alt="" />

            <div>
              <h1 className="nameTExt">{name}</h1>
              <p className="biosTExt">{bios}</p>
              <p>{start}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h1 className="ServicesText">Contact Us</h1>
      <div className="footerSec footerSec1">
        <div className="btns"></div>
        <p>test@gmail.com</p>
      </div>
      <div className="footerSec">
        <div className="btns"></div>
        <p>(303) 555-0105</p>
      </div>
      <div className="footerSec">
        <div className="btns"></div>
        <p>
          2715 Ash Dr. San Jose,<br></br> South Dakota 83475
        </p>
      </div>
    </div>
    <div className="footer"></div>
  </div>
);

ReactDOM.createRoot(document.querySelector("#root")).render(heading);
