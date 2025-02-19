import React from "react";
import pic1 from "../public/images/2.png";
import pic2 from "../public/images/1 (1).png";
import pic3 from "../public/images/4.png";
import pic4 from "../public/images/3.png";
import pic5 from "../public/images/1 (5).png";
function Apple() {
  return (
    <div>
      <div className="container my-5">
        <h2>Team Members</h2>
        <div className="row ">
        <div className="col-sm-12 col-md-6 col-lg-4 ">
            <div className="box shadow-lg mt-3 p-4">
              <div className="image-wrapper mb-3">
                <img className="img-fluid" src={pic2} alt="..." />
              </div>
              <div className="box-desc">
                <h5>Leizel Gauma</h5>
                <p>CEO/FOUNDER</p>
                <p className="justify_text">
                  Weldost project idelogist. Business development in the eastern
                  region. Expansion of new business opportunities.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 ">
            <div className="box shadow-lg mt-3 p-4">
              <div className="image-wrapper mb-3">
                <img className="img-fluid" src={pic1} alt="..." />
              </div>
              <div className="box-desc">
                <h5>Bogdan Linnyik</h5>
                <p>CEO/FOUNDER</p>
                <p className="justify_text">
                  Founder of the Weldost project. Business development in the
                  Western region. Connecting new areas online and offline.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 ">
            <div className="box shadow-lg mt-3 p-4">
              <div className="image-wrapper mb-3">
                <img className="img-fluid" src={pic4} alt="..." />
              </div>
              <div className="box-desc">
                <h5>Alexandra Liubchinskaya</h5>
                <p>DESIGNER</p>
                <p className="justify_text">
                  Graphic design of the effect and content if the entire
                  project. Development of new unique graphic for the weldost
                  brand.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 ">
            <div className="box shadow-lg mt-3 p-4">
              <div className="image-wrapper mb-3">
                <img className="img-fluid" src={pic5} alt="..." />
              </div>
              <div className="box-desc">
                <h5>Margo Radysh</h5>
                <p>TRAVEL ORGANIZER</p>
                <p className="justify_text">
                  Organizing and conducting yoga and spiritual programs and
                  events. Expansion of more exotic locations.
                </p>
              </div>
            </div>
          </div>
    
          <div className="col-sm-12 col-md-6 col-lg-4 ">
            <div className="box shadow-lg mt-3 p-4">
              <div className="image-wrapper mb-3">
                <img className="img-fluid " src={pic3} alt="..." />
              </div>
              <div className="box-desc">
                <h5>Yuliia Kiurcheva</h5>
                <p>MARKETING</p>
                <p className="justify_text">
                  Social media monitoring. Continuous development and
                  distribution of new content and advertising.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apple;
