import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./parsel/src/components/button";
import Services from "./parsel/src/components/servicesCard";
import Testymonya from "./parsel/src/components/testymoniyaCard.jsx";

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
      <Button btnTitle={"Help me"} />
    </div>

    <div className="mainTwo">
      <h1 className="ServicesText">Services</h1>
      <Services />
      <Button btnTitle={"Help me"} />
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
      <Testymonya />
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
