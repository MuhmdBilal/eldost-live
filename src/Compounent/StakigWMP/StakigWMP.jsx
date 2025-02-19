import React from "react";

function StakigWMP() {
  return (
    <div className="container ha hero-section2 ">
      <div className="  card bg_black mt-5   p-3" style={{marginBottom:"15%"}}>
        <div className="  card-body  d-lg-flex flex-wrap align-items-center justify-content-between gap-3">
          <h2 className="">Booking process</h2>
          <p className="pt-  fw-light justify_text">
            In case you would like to use the purchased WMP for travel, send
            your details to our email. The data we need: What dates you would
            like to use the WMP on. The name of the WMP owner or the name of the
            person using it for travel. The wallet address holding the given
            WMP. Also a screenshot of the WMP in the wallet so that we can be
            sure that it is the real owner! Everyone should send the data to
           <a href=""> contact@weldost.com</a> After this, we will notify all bookers whether
            the booking dates are available or not. Our booking interface will
            be implemented shortly!
          </p>
        </div>
      </div>
    </div>
  );
}

export default StakigWMP;
