import React from "react";

function FAQ() {
  return (
    <section className="container pt-5 mt-5" id="faq">
      <h2 className="h3 ">Frequently Asked Questions</h2>
      <div className="accordion" id="accordionExample">
        <div className=" accordion-item border-0 pt-4">
          <h2 className="accordion-header">
            <button
              className="accordion-button custom-bg-light ps-5 fw-normal"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              1. Why this project unique?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body px-0 py-4 fw-light">
              <p>
                This project is unique in that it uses blockchain technology to
                connect offline and online products. In this way, a product like
                WMPs can be used for travel offline and generate passive income
                online.
              </p>
            </div>
          </div>
        </div>
        <div className=" accordion-item border-0 pt-4">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed custom-bg-light ps-5 fw-normal"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              2. How does staking my WMP works?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body px-0 py-4 fw-light">
              <p>
                WMP owners can stake them for 2 years and the passive income is
                credited monthly. This means that the total income is divided
                into 24 months
              </p>
            </div>
          </div>
        </div>
        <div className=" accordion-item border-0 pt-4">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed custom-bg-light ps-5 fw-normal"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              3. What will happen to WMP after 2 years of staking?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body px-0 py-4 fw-light">
              <p>
                It can be used for various options for examples games and
                tournaments and your WMP s also tradable.
              </p>
            </div>
          </div>
        </div>
        <div className=" accordion-item border-0 pt-4">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed custom-bg-light ps-5 fw-normal"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              4. How much is affiliate compensated?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body px-0 py-4 fw-light">
              <p>
                After someone has successfully purchased a WMP from your
                registration link, you will receive 10% of the purchase price
                each time. These amounts will arrive in your cryptocurrency
                account in USDT.
              </p>
            </div>
          </div>
        </div>
        <div className=" accordion-item border-0 pt-4">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed custom-bg-light ps-5 fw-normal"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              5. How long in advance do I need to book your property?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body px-0 py-4 fw-light">
              <p>The earlier the better but at least 3 months.</p>
            </div>
          </div>
        </div>
        <div className=" accordion-item border-0 pt-4">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed custom-bg-light ps-5 fw-normal"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              6. In case I cant travel but bought WMP pass, what is your policy?
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body px-0 py-4 fw-light">
              <p>
                No problem, WMP can be transferred to another person. It is up
                to everyone to decide at what price.
              </p>
            </div>
          </div>
        </div>
        <div className=" accordion-item border-0 pt-4">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed custom-bg-light ps-5 fw-normal"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              7. What cryptocurrency wallet is used to buy and store WMP?
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body px-0 py-4 fw-light">
              <p>We recommend Metamask wallet. https://metamask.io/download/</p>
            </div>
          </div>
        </div>
        <div className="text-center " style={{marginTop:"8%"}}>
          <h2>Didn’t find an answer to your question?</h2>
          <div className="row">
            <div className="col-12 col-md-6  p-5 justify_text">
              We strive to provide comprehensive information and address the
              most common queries in our Frequently Asked Questions (FAQ)
              section. However, we understand that there may be instances where
              your specific question hasn't been covered.
            </div>
            <div className="col-12 col-md-6  p-5 justify_text">
              Don't worry, though! Our dedicated support team is here to assist
              you. Please feel free to reach out to us via email at 
              <a href=""> contact@weldost.com</a>. We will respond to your inquiry as quickly as
              possible and provide the information you need.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
