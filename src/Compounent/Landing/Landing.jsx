import Apple from "../../Apple";
import whitepaper from "../../../public/images/Weldost.Whitepaper.December.2024.pdf";
import StakigMVP from "../../../public/images/swee.png";
import BuyMVP from "../../../public/images/buuu6.png";
import { IoLogoAppleAr } from "react-icons/io5";
import { DiTechcrunch } from "react-icons/di";
import { LiaSignalSolid } from "react-icons/lia";
import { SiTransmission } from "react-icons/si";
// import { GiEarthCrack } from "react-icons/gi";
import { TbSocial } from "react-icons/tb";
import { SiProgress } from "react-icons/si";
import FAQ from "../../FAQ";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <section className="hero-section custom-bg-dark pb-5" id="home">
        <div className="container">
          <div className="row align-items-center row-gap-5">
            <div className="  col-lg-6">
              <h1 className="text-dark fw-light">
                Unique project using blockchain combined with offline properties
                and business ventures.
              </h1>

              <p className="pt-4 text-dark fw-light justify_text">
                The Weldost project is a subsidiary of the software development
                company Inviso Consultancy Ltd., which is active both offline
                and online. We connect both worlds in an innovative way. Offline
                we focus on travel, real estate market, hospitality, agriculture
                and the development of our own products. Online WMPs,
                application, blockchain, game. Building a strong sense of
                community and trust in online projects manifesting great
                transparency with dedicated team.
              </p>
              <div className="d-flex flex-column flex-md-row gap-2 pt-5 pb-4">
                <a
                  href={whitepaper}
                  download={whitepaper}
                  className="btn btn-success"
                >
                  WHITEPAPER
                </a>
              </div>
            </div>
            <div className="  col-lg-6">
              <video width="100%" controls>
                <source src="/images/elosd.mp4" type="video/mp4"></source>
              </video>
            </div>
          </div>
        </div>
      </section>
      <section>
          <div className="container pt-5">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-12">
                <Link to="/BuyMVP">
                <img
                  src={BuyMVP}
                  className="w-100"
                  alt=""
                /></Link>
              </div>
              {/* <div className="col-lg-4 col-md-6 col-12">
                <img
                  src="	https://weldost.com/wp-content/uploads/2024/10/4_5776386372059273356-2048x758.png"
                  className="w-100"
                  alt=""
                />
              </div> */}
              <div className="col-lg-4 col-md-6 col-12 mt-2">
              <Link to="/StakigMVP">
                <img
                  src={StakigMVP}
                  className="w-100"
                  alt=""
                /></Link>
              </div>
            </div>
          </div>
        </section>
      <section
        className="why-ecofarmtech py-5"
        style={{
          backgroundImage: "",
          backgroundSize: "cover",
        }}
      >
        <div className="container pt-4">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pt-5 pb-5">
            <div className="col ">
              <div className="  card h-100 custom-bg-green   py-2 px-3">
                <div className="  card-body d-flex flex-column align-items-center gap-1">
                  <DiTechcrunch className=" icoo fs-1 sizz" />
                  <h3 className="  card-title h5">Technology</h3>
                  <p className="  card-text justify_text pt-3 ">
                    We create innovative technological solutions that are useful
                    for everyone. We do this using our own developments and
                    blockchain technology. Solutions that connect online and
                    offline activities. In the future, we want to develop an
                    application where you can buy, store, stake WMPs, and our
                    upcoming crypto asset. In addition, we want to develop a
                    play and earn game based on a working economy. And our
                    biggest idea is to create our own crypto exchange.
                  </p>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="  card h-100 py-2 px-3 custom-bg-green">
                <div className="  card-body d-flex flex-column align-items-center gap-1">
                  <LiaSignalSolid className="fs-1 icoo" />
                  <h3 className="  card-title h5">Economy</h3>
                  <p className="  card-text justify_text pt-3">
                    Strives to be transparent, the income from the various
                    activities flows into the project, which generates profit
                    and most of it is reinvested. Part of it is for the
                    development and expansion of this venture and part of
                    participants. We want to continuously connect as many
                    activities as possible to a functioning economy that is
                    profitable for everyone.
                  </p>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="  card h-100 py-2 px-3 custom-bg-green">
                <div className="  card-body  d-flex flex-column align-items-center gap-1">
                  <SiTransmission className="fs-1 icoo" />
                  <h3 className="  card-title h5">Mission</h3>
                  <p className="  card-text justify_text pt-3">
                    Building a strong brand that appears in as many areas as
                    possible. A brand that provides unique services, continuous
                    developments also expand our services and activities.
                    Continuously expanding to more locations, making it possible
                    to create more and more WMP collections. Popularization of
                    WMPs. Expansion within social media so that more people get
                    to know us and building a strong community and moving
                    together.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="  card h-100 py-2 px-3 custom-bg-green">
                <div className="  card-body d-flex flex-column align-items-center gap-1">
                  <IoLogoAppleAr className="fs-1 icoo" />
                  <h3 className="  card-title h5">Earning </h3>
                  <p className="  card-text justify_text pt-3">
                    In our constantly expanding online and offline areas, we are
                    making options for our activities that make rewards or
                    passive income available to everyone. We will be launching
                    prize games at various intervals. Currently, WMP pass owners
                    will be able to participate in these. The prizes that can be
                    won will always be announced before the prize game.
                  </p>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="  card h-100 py-2 px-3 custom-bg-green">
                <div className="  card-body d-flex flex-column align-items-center gap-1">
                  <TbSocial className="fs-1 icoo" />
                  <h3 className="  card-title h5">Socializing</h3>
                  <p className="  card-text justify_text pt-3">
                    The program and event section of our offline activities is
                    all about entertaining the community. These are currently
                    primarily contained in the WMP. WMPs marked with the program
                    designation entitle you to one or more programs. For
                    example, the first collection organizes skiing or hiking.
                    WMPs marked with the event designation entitle you to one or
                    more events. For example, dinner at a local restaurant or a
                    party. Our goal is to make our customers time as enjoyable
                    as possible.
                  </p>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="  card h-100 py-2 px-3 custom-bg-green">
                <div className="  card-body d-flex flex-column align-items-center gap-1">
                  <SiProgress className="fs-1 icoo" />
                  <h3 className="  card-title h5">Loyalty programs</h3>
                  <p className="  card-text justify_text pt-3">
                    An affiliate program that rewards every registered user
                    through whom someone chooses our service. This system will
                    be introduced first for WMP passes. For each customer you
                    bring in, they will receive 10%. This amount is 10% of the
                    purchased pass. The amount is credited in USDT. With this,
                    we would also like to motivate our community and reward them
                    for expanding our customer base. Over time, we would like to
                    use this system for other activities. We would also like to
                    highlight our invitation-based reward. If we can make a
                    joint promotional or advertising agreement with other
                    projects, companies, influencers, we will gladly invite them
                    on a completely free trip. This is currently available
                    between two locations for three days and a maximum of six
                    people.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="  card bg_black mt-5 mb-5  " style={{}}>
            <div className="  card-body  d-lg-flex flex-wrap align-items-center justify-content-between gap-3">
              <div className=" p-3 position-relative justify_text">
                <h3 className="text-light ">How to link wallets?</h3>
                <p className="fw-lighter text-light ">
                  <ol className="ps-3">
                    <li>
                      Choose a WMP which is suitable for your travel plan and
                      earning objective.
                    </li>
                    <li>
                      This transaction is possible by connecting your
                      cryptocurrency wallet and our DApp page. We recommend
                      Metamask wallet for making purchases and storing WMP.
                      <br />
                      All WMPs can be purchased in USDT on Metamask, you need to
                      join the Polygon Mainnet. Since all WMPs run on the
                      Polygon blockchain, always transfer your USDT on the
                      Polygon PoS chain.
                    </li>
                    <li>
                      Utilize our staking interface to start generating monthly
                      passive income for you. Each WMP can be staked for a
                      period of 2 years. Which generates an income of 5% of the
                      amount of the purchased pass every 30 days.
                    </li>
                    <li>
                      Approve the purchase - Once the transaction is approved,
                      WMP will be automatically added to your wallet.
                    </li>
                  </ol>
                </p>
              </div>
              {/* <a
                href="https://ith-whitepaper.gitbook.io/ith/ecofarmtech"
                target="_blank"
                className="btn btn-success mx-3"
              >
                Connect
              </a> */}
            </div>
          </div>
        </div>

        <Apple />
       
        <section className="container pt-5" id="roadmap">
          <h2 className="h3">Roadmap</h2>

          <div className="mt-3">
            <video width="100%" controls>
              <source src="/images/roadmap.mp4" type="video/mp4"></source>
            </video>
          </div>
          {/* <Work/> */}
        </section>
      </section>
      <FAQ />
    </div>
  );
}

export default Landing;
