import { useContext, useEffect, useState } from "react";
import Web3 from "web3";
import {
  WMPNFTStakingAbi,
  WMPNFTStakingAddress,
} from "../../contract/WMPNFTStaking";
import { AuthUserContext } from "../../context/context";
import moment from "moment";
import { toast } from "react-toastify";

const Staking = () => {
  const { walletAddress } = useContext(AuthUserContext);
  const web3 = new Web3(window.ethereum);
  const [isLoading, setIsLoading] = useState(true);
  const [userStakeDetails, setUserStakeDetails] = useState([]);
  const [processingStakeId, setProcessingStakeId] = useState(null);
  const [isClaimRewardLoading, setIsClaimRewardLoading] = useState(false);
  const [totalReward, setTotalReward] = useState(0);
  const stakingIntegrateContract = () => {
    const staking_Contract = new web3.eth.Contract(
      WMPNFTStakingAbi,
      WMPNFTStakingAddress
    );
    return staking_Contract;
  };

  const getUserStake = async () => {
    try {
      setIsLoading(true);
      const array = [];
      if (walletAddress) {
        const stakingContract = stakingIntegrateContract();
        const calculateRewards = await stakingContract.methods
          .calculateRewards(walletAddress)
          .call();
        setTotalReward(Number(calculateRewards).toFixed(2));
        const getUserStakes = await stakingContract.methods
          .getUserStakes(walletAddress)
          .call();

        getUserStakes?.forEach((element) => {
          const stakeStartTime = moment
            .unix(Number(element?.startTime))
            .format("YYYY-MM-DD hh:mm A");
          const lastClaimedTime = moment
            .unix(Number(element?.lastClaimedTime))
            .format("YYYY-MM-DD hh:mm A");
          const object = {
            stakingId: Number(element?.tokenId),
            collection: Number(element?.collection),
            startTime: stakeStartTime,
            lastClaimedTime: lastClaimedTime,
          };
          array.push(object);
        });
        setUserStakeDetails(array);
      }
    } catch (e) {
      console.log("e", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserStake();
  }, [walletAddress]);

  const handleUnstake = async (stakeId) => {
    try {
      if (walletAddress) {
        setProcessingStakeId(stakeId);
        const stakingContract = stakingIntegrateContract();
        await stakingContract.methods
          .unstake(stakeId)
          .send({ from: walletAddress });
        toast.success("Unstaked Successfully.");
        getUserStake();
      } else {
        toast.error("Please connect MetaMask first!");
      }
    } catch (e) {
      console.log("e", e);
      toast.error("Failed to unstake. Please try again.");
      setProcessingStakeId(null);
    } finally {
      setProcessingStakeId(null);
    }
  };
  const handleClaim = async () => {
    try {
      if (walletAddress) {
        if (totalReward > 0) {
          setIsClaimRewardLoading(true);
          const stakingContract = stakingIntegrateContract();
          await stakingContract.methods
            .claimRewards()
            .send({ from: walletAddress });
          toast.success("Reward claimed successfully!");
        } else {
          toast.error("Insufficient balance to claim the reward.");
        }
      } else {
        toast.error("Please connect MetaMask first!");
      }
    } catch (e) {
      console.log("e", e);
      toast.error("Failed to unstake. Please try again.");
    } finally {
      setIsClaimRewardLoading(false);
    }
  };
  return (
    <div className="container">
      <div className="hero-section custom-bg-dark pb-5">
        <h2>Staking Details</h2>
        <div className="dashwidt2 m-auto mt-5">
          {isLoading ? (
            <div className="d-flex justify-content-center">
              <div id="loading"></div>
            </div>
          ) : (
            <>
              <div className="reward-box p-4 mb-4 d-flex align-items-center justify-content-between">
                <div>
                  <h4>Total Reward</h4>
                  <span className="reward-token">{totalReward}</span>
                </div>
                <button
                  className="btn btn-success"
                  onClick={handleClaim}
                  disabled={isClaimRewardLoading}
                >
                  {isClaimRewardLoading ? "Loading..." : "Claim Reward"}
                </button>
              </div>
              <table>
                <thead>
                  <tr>
                    <th className="to">Sr No</th>
                    <th>Stake ID</th>
                    <th>Collection Name</th>
                    <th>Stake Time</th>
                    <th>Last Claim Time</th>
                    <th className="end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userStakeDetails?.length > 0 ? (
                    userStakeDetails.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.stakingId}</td>
                        <td>
                          {item.collection === 0
                            ? "Bronze"
                            : item.collection === 1
                            ? "Silver"
                            : item.collection === 2
                            ? "Gold"
                            : item.collection === 3
                            ? "Platinum"
                            : "Diamond"}
                        </td>
                        <td>{item.startTime}</td>
                        <td>{item.lastClaimedTime}</td>
                        <td className="d-flex justify-content-evenly">
                          <button
                            className="btn-unstake"
                            onClick={() => handleUnstake(item.stakingId)}
                            disabled={processingStakeId !== null} // Disable other buttons
                          >
                            {processingStakeId === item.stakingId
                              ? "loading..."
                              : "Unstake"}
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="6"
                        style={{ height: "240px", textAlign: "center" }}
                      >
                        No Record Found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Staking;
