export const usdtAddress = "0xc2132D05D31c914a87C6611C10748AEb04B58e8F";
export const usdtAbi = [
  {
    inputs: [{ internalType: "address", name: "_proxyTo", type: "address" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_new",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_old",
        type: "address",
      },
    ],
    name: "ProxyOwnerUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "_new", type: "address" },
      { indexed: true, internalType: "address", name: "_old", type: "address" },
    ],
    name: "ProxyUpdated",
    type: "event",
  },
  { stateMutability: "payable", type: "fallback" },
  {
    inputs: [],
    name: "implementation",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxyOwner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxyType",
    outputs: [
      { internalType: "uint256", name: "proxyTypeId", type: "uint256" },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferProxyOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_newProxyTo", type: "address" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "updateAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_newProxyTo", type: "address" }],
    name: "updateImplementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  { stateMutability: "payable", type: "receive" },
];
