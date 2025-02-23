import React from "react";
import { Link } from "react-router-dom";
import Gold from "../../../public/images/gold.jpeg";
import brozon from "../../../public/images/brozon.jpeg";
import daimond from "../../../public/images/daimond.jpeg";
import platnum from "../../../public/images/platnum.jpeg";
import silver from "../../../public/images/silver.jpeg";
import b from "../../../public/images/b.png";
import { TiShoppingCart } from "react-icons/ti";
function BuyWVP() {
  return (
    <div>
      <div className="container pb-5" style={{ paddingTop: "8%" }}>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mt-5">
            <div>
              <div className="p-3 brozon mb-2">
                <img src={brozon} className="w-100 rounded-3 " />
              </div>
            </div>{" "}
            <Link to="/Bronze" className="text-decoration-none">
            <div
                className="d-flex justify-content-center align-items-center bg-black m-auto gap-3 pe-4 text-white"
                style={{ width: "fit-content", borderRadius: "50pc" }}
              >
                <div
                  className="gol  p-1 "
                  style={{
                    borderRadius: "50pc",
                    backgroundColor: "rgb(219 138 5)",
                  }}
                >
                  <div className="border p-2" style={{ borderRadius: "50pc" }}>
                    <TiShoppingCart className="fs-3 text-black" />
                  </div>
                </div>
                Bronze
              </div>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-5">
            <div>
              <div className="p-3 silvers mb-2">
                <img src={silver} className="w-100 rounded-3 " />
              </div>
            </div>
            <Link to="/Silver" className="text-decoration-none">
            <div
                className="d-flex justify-content-center align-items-center bg-black m-auto gap-3 pe-4 text-white"
                style={{ width: "fit-content", borderRadius: "50pc" }}
              >
                <div
                  className="gol  p-1 "
                  style={{
                    borderRadius: "50pc",
                    backgroundColor: "rgb(185 181 180)",
                  }}
                >
                  <div className="border p-2" style={{ borderRadius: "50pc" }}>
                    <TiShoppingCart className="fs-3 text-black" />
                  </div>
                </div>
                Silver
              </div>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-5">
            <div>
              <div className="p-3 gold mb-2">
                <img src={Gold} className="w-100 rounded-3 " />
              </div>
            </div>
            <Link to="/Gold" className="text-decoration-none">
            <div
                className="d-flex justify-content-center align-items-center bg-black m-auto gap-3 pe-5 text-white"
                style={{ width: "fit-content", borderRadius: "50pc" }}
              >
                <div
                  className="gol  p-1 "
                  style={{
                    borderRadius: "50pc",
                    backgroundColor: "rgb(240 166 77)",
                  }}
                >
                  <div className="border p-2" style={{ borderRadius: "50pc" }}>
                    <TiShoppingCart className="fs-3 text-black" />
                  </div>
                </div>
                Gold
              </div>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-5">
            <div>
              <div className="p-3 platinums mb-2">
                <img src={platnum} className="w-100 rounded-3 " />
              </div>
            </div>
            <Link to="/Platinum" className="text-decoration-none">
            <div
                className="d-flex justify-content-center align-items-center bg-black m-auto gap-3 pe-3 text-white"
                style={{ width: "fit-content", borderRadius: "50pc" }}
              >
                <div
                  className="gol  p-1 "
                  style={{
                    borderRadius: "50pc",
                    backgroundColor: "rgb(3, 167, 255)",
                  }}
                >
                  <div className="border p-2" style={{ borderRadius: "50pc" }}>
                    <TiShoppingCart className="fs-3 text-black" />
                  </div>
                </div>
                Platinum
              </div>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-5">
            <div>
              <div className="p-3 dimand mb-2">
                <img src={daimond} className="w-100 rounded-3 " />
              </div>
            </div>
            <Link to="/Diamond" className="text-decoration-none">
              <div
                className="d-flex justify-content-center align-items-center bg-black m-auto gap-3 pe-3 text-white"
                style={{ width: "fit-content", borderRadius: "50pc" }}
              >
                <div
                  className="gol  p-1 "
                  style={{
                    borderRadius: "50pc",
                    backgroundColor: "rgb(1, 125, 192)",
                  }}
                >
                  <div className="border p-2" style={{ borderRadius: "50pc" }}>
                    <TiShoppingCart className="fs-3 text-black" />
                  </div>
                </div>
                Diamond
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyWVP;
