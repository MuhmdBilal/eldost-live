import React from "react";
import "./styple.css"
import Calendar from "../Calendar/Calendar"
import img11 from "../../../public/images/11.jpg"
import img12 from "../../../public/images/12.jpg"
import img13 from "../../../public/images/13.jpg"
import img14 from "../../../public/images/14.jpg"
import img15 from "../../../public/images/15.jpg"
import img16 from "../../../public/images/16.jpg"
import img17 from "../../../public/images/17.jpg"
import img18 from "../../../public/images/18.jpg"
const imageData = [
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    
    
  ];
function Properties() {
  return (
    <div className="hero-section container text-white">
      {/* <Calendar/> */}
      <div
        className="  card bg_black mt-5 mb-5   p-3"
        style={{ backgroundColor: "#0090f8" }}
      >
        <div className="  card-body  d-lg-flex flex-wrap align-items-center justify-content-between gap-3">
          <h2 className="text-white">Properties</h2>
          <p className="pt- text-white  fw-light justify_text">
            Our accommodation is located in Mayrhofen, Austria, which is also
            the location of the first collection of WMP. Several rooms, equipped
            kitchen, bathroom and large terrace. Here we welcome everyone who
            wants to relax in nature and choose different programs and events
            that Mayrhofen has to offer. The town sits between the Penken and
            the Ahorn mountains which provide ski runs in the winter and
            mountain biking, hiking and paragliding in the summer. The Ahorn
            Cable car or Ahornbahn, which has a capacity of 160 passengers is
            the largest cable car in Austria, is situated at the southern end of
            the town. Mayrhofen is a snowboard-minded village with a fun park
            sponsored by Vans. The town also provides an excellent base for
            walkers, as Mayrhofen is home to many trails touring the mountains
            and nearby Ziller valley. Our accommodation is situated on the
            mountain side overlooking the town. You can enjoy your morning
            coffee from terrace at the same time take pleasure of the beautiful
            view.
          </p>
        </div>
      </div>
      <div>
   {/* <Calendar/> */}
  
      <ul className="grid p-0 m-0 mt-5">
        {imageData.map((src, index) => (
          <li key={index} >
            <figure>
              <img src={src}  />
            </figure>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Properties;
