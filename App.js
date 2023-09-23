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
    img: "https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1910&q=80",
    title: "Green Apple",
    bio: "$14.99",
    stars: "⭐⭐⭐⭐",
  },
  {
    img: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVnZXRhYmxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "Chanise Cabbage",
    bio: "$14.99",
    stars: "⭐⭐⭐⭐",
  },
  {
    img: "https://images.unsplash.com/photo-1573067485648-4cb2618b5e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    title: "Green Capsicum",
    bio: "$14.99",
    stars: "⭐⭐⭐⭐",
  },
];

const heading = (
  <div className="wrapper">
    <h1>Round Rock <br></br> Yard Maintenance</h1>
    {products.map(({ title, img, bio, stars }, idx) => (
      <div className="boxs">
        <h1>jnwkwnlk</h1>
      </div>
    ))}
  </div>
);

ReactDOM.createRoot(document.querySelector("#root")).render(heading);
