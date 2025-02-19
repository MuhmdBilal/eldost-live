import img11 from "../../../public/images/11.jpg";
import img13 from "../../../public/images/13.jpg";
import four from "../../../public/images/fourrrr.png";
import img16 from "../../../public/images/16.jpg";
import logo from "../../../public/images/ecdost.png";
import mainw from "../../../public/images/mainww.png";
import maco from "../../../public/images/maco.png";
import { FaRegCircle } from "react-icons/fa";
import Web3 from "web3";
import { TiTick } from "react-icons/ti";
import { useContext, useEffect, useState } from "react";
import { AuthUserContext } from "../../context/context";
import { WMPNFTAbi, WMPNFTAddress } from "../../contract/WMP_NFT";
import { toast } from "react-toastify";
import { usdtAbi, usdtAddress } from "../../contract/Usdt";
import Select from "react-select";
import {
  WMPNFTStakingAbi,
  WMPNFTStakingAddress,
} from "../../contract/WMPNFTStaking";

function Silver() {
  const { walletAddress } = useContext(AuthUserContext);
  const web3 = new Web3(window.ethereum);
  const [isLoading, setIsLoading] = useState(false);
  const [totalMintId, setTotalMintId] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectError, setSelectError] = useState(false);
  const [isStakingLoading, setIsStakingLoading] = useState(false);
  // Handle selection
  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };
  const wmpNftIntegrateContract = () => {
    const escrew_Contract = new web3.eth.Contract(WMPNFTAbi, WMPNFTAddress);
    return escrew_Contract;
  };
  const UsdtIntegrateContract = () => {
    const escrew_Contract = new web3.eth.Contract(usdtAbi, usdtAddress);
    return escrew_Contract;
  };
  const stakingIntegrateContract = () => {
    const staking_Contract = new web3.eth.Contract(
      WMPNFTStakingAbi,
      WMPNFTStakingAddress
    );
    return staking_Contract;
  };
  const handleMint = async () => {
    try {
      if (walletAddress) {
        setIsLoading(true);
        const wmpNftContract = wmpNftIntegrateContract();
        const usdtContract = UsdtIntegrateContract();
        const collection = await wmpNftContract.methods.collections(1).call();
        const balanceOf = await usdtContract.methods
          .balanceOf(walletAddress)
          .call();
        const calculateValue = Number(collection?.price) / 1000000;
        if (Number(balanceOf) >= calculateValue) {
          await usdtContract.methods
            .approve(WMPNFTAddress, Number(collection?.price))
            .send({
              from: walletAddress,
            });
          await wmpNftContract.methods.mint(1).send({
            from: walletAddress,
          });
          toast.success("Minting Successfully.");
          getMintingId();
        } else {
          toast.error("your balance is insufficient");
        }
      } else {
        toast.error("Please connect metamask first!");
      }
    } catch (e) {
      console.log("e", e);
    } finally {
      setIsLoading(false);
    }
  };
  const getMintingId = async () => {
    try {
      if (walletAddress) {
        const wmpNftContract = wmpNftIntegrateContract();
        const walletOfOwner = await wmpNftContract.methods
          .walletOfOwner(walletAddress)
          .call();
        const response = walletOfOwner
          .filter((value) => Number(value) >= 126 && Number(value) <= 225)
          .map((value) => ({
            value: Number(value),
            label: Number(value).toString(),
          }));
        setTotalMintId(response);
         
      }
    } catch (e) {
      console.log("e", e);
    }
  };
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isFocused ? "white" : "black",
      backgroundColor: state.isFocused ? "#007bff" : "white",
      cursor: "pointer",
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: "white",
      borderColor: "black",
      cursor: "pointer",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "black",
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#f0f0f0",
      color: "black",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "black",
    }),
  };
  useEffect(() => {
    getMintingId();
  }, [walletAddress]);
  const handleStaking = async () => {
    try {
      if (walletAddress) {
        if (selectedOptions.length <= 0) {
          setSelectError(true);
          return;
        }
        setIsStakingLoading(true);
        const wmpNftContract = wmpNftIntegrateContract();
        const stakingContract = stakingIntegrateContract();
        const value = [selectedOptions.value];
        const approve = await wmpNftContract.methods
          .approve(WMPNFTStakingAddress, selectedOptions.value)
          .send({ from: walletAddress });
        if (approve) {
          await stakingContract.methods
            .stake(value)
            .send({ from: walletAddress });
          toast.success("Staking Successfully.");
          getMintingId();
          setSelectedOptions([]);
          setSelectError(false);
        }
      } else {
        toast.error("Please connect metamask first!");
      }
    } catch (e) {
      console.log("e", e);
    } finally {
      setIsStakingLoading(false);
    }
  };
  return (
    <div className="silver" style={{ padding: "20% 0 0 0" }}>
      <div className="container py-4 ">
        {/* <div className="logoflex">
          <img src={logo} width={200} alt="" />
          <p className="fs-3"> Travel And Earn</p>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 mt-5">
            <div className="border rounded-3 p-2 mt-3">
              <img className="w-100 rounded-3" src={img11} alt="" />
            </div>
            <div className="border rounded-3 p-2 mt-3">
              <img className="w-100 rounded-3 " src={img16} alt="" />
            </div>
            <div className="border rounded-3 p-2 mt-3">
              <img className="w-100 rounded-3 " src={img13} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-9 ">
            <div className=" ">
              <div className="border rounded-3 p-4">
                <div className="row">
                  <div className="col-12 col-lg-3 mt-2 d-grid mt-5">
                    <p className="fs-4">Valid</p>
                    <p className="fs-4">Times</p>
                  </div>
                  <div className="col-12 col-lg-3 mt-2 text-center">
                    <p className="fs-4">Games</p>
                    <div className="border rounded-3 text-center py-5">
                      <div
                        className="m-auto mb-4"
                        style={{
                          border: "3px solid black",
                          borderRadius: "50pc",
                          width: "fit-content",
                        }}
                      >
                        <TiTick className="fs-3 text-black" />
                      </div>
                      <div className="">UNLIMITED</div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-3 mt-2 text-center">
                    <p className="fs-4">Program</p>
                    <div className="border rounded-3 text-center py-5">
                      <div
                        className="m-auto mb-4"
                        style={{
                          border: "3px solid black",
                          borderRadius: "50pc",
                          width: "fit-content",
                        }}
                      >
                        <TiTick className="fs-3 text-black" />
                      </div>
                      <div className="d-flex gap-1 text-black justify-content-center">
                        <FaRegCircle />
                        <FaRegCircle />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-3 mt-2 text-center">
                    <p className="fs-4">Event</p>
                    <div className="border rounded-3 text-center py-5">
                      <div
                        className="m-auto mb-4"
                        style={{
                          border: "3px solid black",
                          borderRadius: "50pc",
                          width: "fit-content",
                        }}
                      >
                        <TiTick className="fs-3 text-black" />
                      </div>
                      <div className="d-flex gap-1 text-black justify-content-center">
                        <FaRegCircle />
                        <FaRegCircle />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 border rounded-3 p-2">
                <h2 className="text-lg font-bold">Staking</h2>
                <p className="mt-2 text-black">
                  The pass can be staked on the staking platform for two years,
                  generating a monthly return of 5% on the value of the pass.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4 ">
                <img
                  src={img13}
                  alt="A house in a sunny environment"
                  className=" hei"
                />
                <img
                  src={img16}
                  alt="A house in a snowy environment"
                  className=" hei"
                />
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="d-grid d-md-flex justify-content-between gap-3 text-center mt-4">
          <div
            className="border rounded-3 p-3 d-grid pt-5"
            style={{ width: "100%" }}
          >
            <div
              className="fs-5 text-black text-center mt-2 "
              style={{
                border: "4px solid black",
                borderRadius: "12px",
                width: "100%",
                height: "fit-content",
                padding: "5px 7px",
              }}
            >
              SILVER
            </div>
            <p className="fs-2 mt-4">Pass</p>
          </div>
          <div className="border rounded-3 p-3 pt-5" style={{ width: "100%" }}>
            <img src={four} width={100} alt="" />
            <p className="fs-2">Accommodation </p>
          </div>
          <div className="border rounded-3 p-3 pt-5" style={{ width: "100%" }}>
            <div
              className="fs-2 text-white d-grid justify-content-center align-items-center fw-bold bg-black m-auto"
              style={{
                border: "4px solid black",
                borderRadius: "50pc",
                width: "80px",
                height: "80px",
                padding: "5px 7px",
              }}
            >
              5
            </div>
            <p className="fs-2 mt-2">Pass</p>
          </div>
          <div
            className="border rounded-3 p-3 pt-5 d-grid"
            style={{ width: "100%" }}
          >
            <div
              className="fs-5 text-black text-center fw-bold mt-2"
              style={{
                border: "4px solid black",
                borderRadius: "12px",
                width: "100%",
                padding: "5px 7px",
                height: "fit-content",
              }}
            >
              1000 USDT
            </div>
            <p className="fs-2 mt-4">Value</p>
          </div>
        </div>
        <p className="my-5" style={{ border: "1px solid white" }} /> */}
        <div className="row">
          <div className="col-2  mt-2">
            <button
              className=" btn btn-success rounded-2 w-100 fs-4"
              onClick={handleMint}
              disabled={isLoading}
            >
              {isLoading ? "Minting..." : "Mint"}
            </button>
          </div>
          {/* <div className="col-12 col-md-6">
            <div className="  gap-2 d-bolck d-md-flex ">
              <div className="border fs-5 rounded-2 p-3 w-100 text-center mt-2">
                <img src={mainw} width={60} alt="" /> Eldost
              </div>
              <div className="border fs-5 rounded-2 p-3 w-100 text-center mt-2">
                <img src={maco} width={40} alt="" />
              </div>
              <div className="border fs-5 rounded-2 p-3 w-100 text-center mt-2">
                Austia
              </div>
            </div>
          </div> */}
        </div>
        <div className=" col-md-12 border rounded-3 mt-3 p-3 d-grid pt-5">
          <h3 className="pb-2">Select ID For staking</h3>
          <Select
            options={totalMintId}
            // isMulti
            value={selectedOptions}
            onChange={handleChange}
            placeholder="Select options..."
            styles={customStyles}
          />
          {selectError && selectedOptions.length <= 0 && (
            <span style={{ color: "red", fontSize: "12px" }}>
              Please Select Id
            </span>
          )}
          <div className="col-3 mt-3">
            <button
              className="btn btn-success"
              onClick={handleStaking}
              disabled={isStakingLoading || isLoading}
            >
              {isStakingLoading ? "Staking..." : "Staking"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Silver;
