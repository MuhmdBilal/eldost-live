import React from "react";
import { Link } from "react-router-dom";
import Gold from "../../../public/images/gold.jpeg"
import brozon from "../../../public/images/brozon.jpeg"
import daimond from "../../../public/images/daimond.jpeg"
import platnum from "../../../public/images/platnum.jpeg"
import silver from "../../../public/images/silver.jpeg"

function BuyWVP() {
  return (
    <div>
      <div className="container pb-5"style={{paddingTop:"8%"}}>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mt-5">
            <div>
              <div className="p-3 brozon mb-2">
                <img
                  src={brozon}
                  className="w-100 rounded-3 "
                />
              </div>
            </div> <Link to="/Bronze" >
            <div className="d-flex justify-content-center">
           
              <img
                src="https://weldost.com/wp-content/uploads/2024/11/4_5859632527701973248-1024x296.png"
                className="w-50"
              />
            </div></Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-5">
            <div>
              <div className="p-3 silvers mb-2">
                <img
                  src={silver}
                  className="w-100 rounded-3 "
                />
              </div>
            </div><Link to="/Silver" >
            <div className="d-flex justify-content-center">
              <img
                src="https://weldost.com/wp-content/uploads/2024/11/4_5859632527701973249-2048x593.png"
                className="w-50"
              />
            </div></Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-5">
            <div>
              <div className="p-3 gold mb-2">
                <img
                  src={Gold}
                  className="w-100 rounded-3 "
                />
              </div>
            </div><Link to="/Gold" >
            <div className="d-flex justify-content-center">
              <img
                src="	https://weldost.com/wp-content/uploads/2024/11/4_5859632527701973250-2048x593.png"
                className="w-50"
              />
            </div></Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-5">
            <div>
              <div className="p-3 platinums mb-2">
                <img
                  src={platnum}
                  className="w-100 rounded-3 "
                />
              </div>
            </div><Link to="/Platinum" >
            <div className="d-flex justify-content-center">
              <img
                src="https://weldost.com/wp-content/uploads/2024/11/4_5859632527701973251-2048x593.png"
                className="w-50"
              />
            </div></Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-5">
            <div>
              <div className="p-3 dimand mb-2">
                <img
                  src={daimond}
                  className="w-100 rounded-3 "
                />
              </div>
            </div><Link to="/Diamond" >
            <div className="d-flex justify-content-center ">
              <img
                src="https://weldost.com/wp-content/uploads/2024/11/4_5859632527701973211.svg"
                className="w-50 "
              />
            </div></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyWVP;
