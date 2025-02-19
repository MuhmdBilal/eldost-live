import { useContext, useEffect } from 'react';
import {
    useWeb3ModalAccount,
    createWeb3Modal,
    defaultConfig,
} from "@web3modal/ethers/react";
import { AuthUserContext } from './context/context';

const projectId = "795245f829a8803b1c7f21e45bb2c796";

const chains = [
    {
        chainId: 137, // Polygon Mainnet chain ID
        name: "Polygon Mainnet",
        currency: "POL",
        explorerUrl: "https://polygonscan.com",
        rpcUrl: "https://polygon-mainnet.4everland.org/v1/37fa9972c1b1cd5fab542c7bdd4cde2f",
    },
];

const ethersConfig = defaultConfig({
    metadata: {
        name: "Web3Modal",
        description: "Web3Modal Laboratory",
        url: "https://web3modal.com",
        icons: ["https://avatars.githubusercontent.com/u/37784886"],
    },
    defaultChainId: 137, // Default to Polygon Mainnet
    rpcUrl: "https://polygon-mainnet.4everland.org/v1/37fa9972c1b1cd5fab542c7bdd4cde2f", // Default RPC for Polygon Mainnet
});

createWeb3Modal({
    ethersConfig,
    chains,
    projectId,
    enableAnalytics: true,
    themeMode: "dark",
    themeVariables: {
        "--w3m-accent": "rgba(255, 255, 255, 0)",
    },
});

const WalletConnection = () => {
    const {setWalletAddress} = useContext(AuthUserContext)
    const { address } = useWeb3ModalAccount()
    useEffect(()=>{
        if(address){
            setWalletAddress(address)
        }
    },[address])
    return (
        <div className="d-flex justify-content-center">
            <div
                className="p-0"
                style={{ backgroundColor: "rgba(255, 255, 255, 0)", color: "black" }}
            >
                {/* Ensure w3m-button is recognized and works correctly */}
                <w3m-button />
            </div>
           
        </div>
    );
};

export default WalletConnection;
