import { Project } from "./project";

export const categories = {
  NFT: "nft",
  INFRASTRUCTURE: "infrastructure",
  DEFI: "defi",
  MARKETPLACE: "marketplace",
  BRIDGE: "bridge",
  DEX : "dex"
 
};
export const allProjects: Project[] = [
  {
    title: "Diffusion Finance",
    url: "hhttps://diffusion.fi/",
    description: "Diffusion is an Automated Market Maker (AMM) protocol and liquidity pool designed for efficient trading between crypto-assets. The trading activity on Diffusion captures fees as revenue for liquidity providers, resulting in a decentralized market and trading experience. ",
    image: "/diffusion.png",
    categories: [categories.DEFI],

  },
  {
    title: "Connext",
    url: "https://bridge.connext.network/",
    description:
      "Connext is an interoperability protocol that empowers developers to build fully expressive cross domain apps (xApps) with a strong focus on security.",
    image: "/connext.png",
    categories: [categories.BRIDGE],
  },
  {
    title: "Evmoswap",
    url: "https://app.evmoswap.org/",
    description:
      "EvmoSwap is a Decentralized Autonomous Organization (DAO) that offers a full suite of tools to explore and engage with decentralized finance opportunities.",
    image: "/evmoswap.png",
    categories: [categories.DEFI, categories.BRIDGE, categories.DEX, ],

  },
  {
    title: "Earnmos ",
    url: "https://app.earnmos.fi/",
    description: "Earnmos is the ALL IN ONE yield optimizer and booster on Evmos blockchain, which is dedicated to facilitating the investment experience and earning the best yield for users across all the blockchains.",
    image: "/earnmos.jpeg",
    categories: [categories.DEFI],

  },
  {
    title: "Kinesis Lab ",
    url: "https://app.kinesislabs.co/",
    description: "Kinesis Labs is the native stableswap on Evmos that is designed to become the stablecoin hub for all of Cosmos through low slippage and a unique multi-bridge base pool system.",
    image: "/kinesis.jpeg",
    categories: [categories.DEFI, categories.DEX, categories.BRIDGE],

  },
  {
    title: "SpaceFi",
    url: "https://spacefi.io/",
    description: "SpaceFi is a cross-chain web3.0 platform, with DEX+Farm+NFT+Starter+Spacebase.",
    image: "/spacefi.png",
    categories: [categories.DEFI, categories.DEX, categories.NFT],

  },
  
  
];
