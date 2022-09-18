import { Project } from "./project";

export const categories = {
  NFT: "nft",
  INFRASTRUCTURE: "infrastructure",
  DEFI: "defi",
  MARKETPLACE: "marketplace",
  BRIDGE: "bridge",
  DEX : "dex",
  CEX : "cex"
 
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
  
  {
    title: "Saddle Finance",
    url: "https://saddle.finance/",
    description: "Saddle is a decentralized automated market maker on the Ethereum blockchain, optimized for pegged value crypto assets such as stablecoins and wrapped BTC. ",
    image: "/Saddle finance.png",
    categories: [categories.DEFI, categories.DEX,],

  },
  {
    title: "AutoFarm(AUTO)",
    url: "https://autofarm.network/",
    description: "The Autofarm ecosystem is a one-stop DeFi suite for all users. Autofarm aggregate yield opportunities using vaults and best swap rates using a DEX aggregator (AutoSwap). In addition, other products such as AutoAnalytics, AutoTrade & AutoPortfolio are set to go live later in 2021. The platform is currently live on BSC, HECO, Polygon, Avalanche, Fantom & Moonriver, with more chains to be introduced soon. ",
    image: "/AutoFarm.jpeg",
    categories: [categories.DEFI, categories.DEX,],

  },
  {
    title: "PhotonSwap Finance",
    url: "https://photonswap.finance/",
    description: "AMM styled decentralized exchange (DEX) on Cronos ",
    image: "photonswap.png",
    categories: [categories.DEFI, categories.DEX,categories.BRIDGE],

  },
  {
    title: "Aave",
    url: "https://aave.com/",
    description: "Aave is an open source and non-custodial liquidity protocol for earning interest on deposits and borrowing assets. Evmos will also enable cross-chain applications to leverage AAVE’s liquidity while being deployed to other Cosmos chains such as Terra. ",
    image: "Aave.png",
    categories: [categories.DEFI,],

  },
  {
    title: "Dex Screener",
    url: "https://dexscreener.com/evmos",
    description: "Tracking and charting Evmos ",
    image: "Dex Screener.jpeg",
    categories: [categories.INFRASTRUCTURE,],

  },
  {
    title: "Restake App",
    url: "https://restake.app/evmos",
    description: "REStake allows validators to auto-compound your staking rewards. ",
    image: "Restake App.jpeg",
    categories: [categories.INFRASTRUCTURE,],

  },
  {
    title: "FRAX",
    url: "https://evmos.blog/frax-is-coming-to-evmos-61837abb2fa9",
    description: "FRAX provide users with greater accessibility to the DeFi ecosystem as stablecoins are pegged to fiat currencies but exist natively as cryptocurrency allowing for easy interaction with decentralized protocols. Evmos DeFi protocols will be able to integrate the FRAX stablecoin, offering users stability, reliability, and liquidity. ",
    image: "FRAX.png",
    categories: [categories.DEFI,],

  },
  {
    title: "DefiLlama",
    url: "https://defillama.com/chain/Evmos",
    description: "Open and transparent DeFi TVL and analytics. ",
    image: "DefiLlama.png",
    categories: [categories.INFRASTRUCTURE,],

  },
  {
    title: "NovaDAO",
    url: "https://medium.com/@Nova_DAO",
    description: "NovaDAO is a reserve currency protocol and community built on the Cosmos Ecosystem. NovaDAO recognizes the early success of OlympusDAO in creating a decentralized reserve currency, and we have decided to bring this concept to Cosmos. ",
    image: "NovaDAO.jpeg",
    categories: [categories.DEFI,],

  },
  {
    title: "Commonwealth",
    url: "https://commonwealth.im/evmos",
    description: "Platform to discuss, organize, and grow the Evmos decentralized community ",
    image: "Commonwealth.png",
    categories: [categories.INFRASTRUCTURE,],

  },
  {
    title: "Fireblocks",
    url: "https://www.fireblocks.com/",
    description: "Fireblocks is a digital asset custody, transfer and settlement platform. MPC-CMP wallet technology. 24/7 access. ",
    image: "Fireblocks.png",
    categories: [categories.INFRASTRUCTURE,],

  },
  {
    title: "Osmosis",
    url: "https://app.osmosis.zone/",
    description: "Osmosis is a fair-launched, customizable automated market maker for interchain assets that allows the creation and management of non-custodial, self-balancing, interchain token index similar to one of Balancer.",
    image: "Osmosis.jpeg",
    categories: [categories.DEFI,],

  },
  {
    title: "Huobi Global",
    url: "https://www.huobi.com/support/en-us/detail/34912377216980",
    description: "Huobi Global is scheduled to list EVMOS (Evmos) on July 19, 2022. ",
    image: "Huobi Global.jpeg",
    categories: [categories.CEX,],

  },
  {
    title: "Demex",
    url: "https://app.dem.exchange/trade/EVMOS_SWTH",
    description: "The Order Book DEX for the Cosmos and Ethereum Ecosystem. ",
    image: "Demex.jpeg",
    categories: [categories.DEFI,],

  },
  {
    title: "Digifinex",
    url: "https://www.digifinex.com/",
    description: "First CEX to list Evmos with the following trading pairs: EVMOS/USDT, EVMOS/ETH and EVMOS/BTC ",
    image: "Digifinex.jpeg",
    categories: [categories.CEX,],

  },
  {
    title: "MEXC",
    url: "https://www.mexc.com/exchange/EVMOS_USDT",
    description: "Centralized exchange for Evmos. ",
    image: "MEXC.jpeg",
    categories: [categories.CEX,],

  },
  {
    title: "Gnosis Safe",
    url: "https://gnosis-safe.io/",
    description: "A fully customizable trusted multisig. ",
    image: "Gnosis Safe.jpeg",
    categories: [categories.INFRASTRUCTURE,],

  },
  {
    title: "Cronus Finance",
    url: "https://medium.com/@cronusfinance/announcing-cronus-finance-aa5579889060",
    description: "Cronus Finance is a fully permissionless and composable AMM built on Evmos. ",
    image: "Cronus Finance.jpeg",
    categories: [categories.DEFI,],

  },
  {
    title: "Exswap",
    url: "https://medium.com/@exswap.xyz",
    description: "Exswap is a community-focused Uniswap v2 fork launching on Evmos. Our goal is to be the #1 AMM and the go-to protocol for the Evmos ecosystem. ",
    image: "Exswap.jpeg",
    categories: [categories.DEFI,],

  },
  {
    title: "tofuNFT",
    url: "https://tofunft.com/",
    description: "tofuNFT is the largest multichain NFT marketplace for GameFi, DeFi and Collectibles. tofuNFT supports 25+ multiple chains, BNB, Ethereum, Avalanche, Polygon, Fantom, Arbitrum, Optimism and so on. We are not only BNB, Harmony, Arbitrum, Moonbeam and Astar’s No. 1 with a trading volume NFT Marketplace, but also top rank volume on several chains. ",
    image: "tofuNFT.jpeg",
    categories: [categories.NFT,],

  },
  {
    title: "Orbital Apes",
    url: "https://www.orbitalapes.com/",
    description: "10,000 Orbital Apes exploring the Cosmos Ecosystem. ",
    image: "Orbital Apes.jpeg",
    categories: [categories.NFT,],

  },
  {
    title: "Treasureland",
    url: "https://treasureland.market/",
    description: "Treasureland is a cross-chain NFT platform for NFT issuance, NFT trading, NFT collections and tailored in-shop services. ",
    image: "Treasureland.jpeg",
    categories: [categories.NFT,],

  },
  {
    title: "Avelin Protocol",
    url: "https://twitter.com/AvelinProtocol",
    description: "Decentralised Orderbook Exchange and Perps ",
    image: "Avelin Protocol.jpeg",
    categories: [categories.DEFI,],

  },
  {
    title: "4T2",
    url: "https://twitter.com/4T2_finance",
    description: "Stake Liquidity. Earn Enhanced Rewards. ",
    image: "4T2.jpeg",
    categories: [categories.DEFI,],

  },
  {
    title: "Revest",
    url: "https://revest.finance/",
    description: "Mint Smart Vaults, earn rewards by staking RVST tokens and NFTs, and much more!xx",
    image: "Revest.jpeg",
    categories: [categories.DEFI,],

  },
  {
    title: "Thorus",
    url: "https://thorus.fi/",
    description: "Thorus is an all in one cross-chain DeFi Platform with an adaptable treasury system, a Token Holder First approach, and one of the lowest swap fee (0.1%). ",
    image: "Thorus.jpeg",
    categories: [categories.DEFI,],

  },
  {
    title: "Evmos Explorers",
    url: "https://evmosexplorers.com/",
    description: "10000 Evmos Explorers doing their own thing on Evmos! ",
    image: "Evmos Explorers.jpeg",
    categories: [categories.NFT,],

  },
  {
    title: "Evmos Domains",
    url: "https://evmos.domains/",
    description: "Evmos Domains is a decentralized name service for linking .evmos names to data like addresses.. ",
    image: "Evmos Domains.jpeg",
    categories: [categories.DEFI,],

  },
  {
    title: "GamyFi Platform",
    url: "https://gamyfi.org/home",
    description: "GamyFi platform is a fantasy sports platform & open, multi-chain NFT marketplace supporting all ERC721 NFT tokens. ",
    image: "GamyFi Platform.jpeg",
    categories: [categories.NFT,],

  },
  {
    title: "Expanding space",
    url: "https://expanding.space/",
    description: "Expanding space is the first NFT marketplace created from scratch on Evmos. It gives you the opportunity to freely interact with your NFT, while leaving the lowest possible commissions. ",
    image: "Expanding space.jpeg",
    categories: [categories.NFT,],

  },
  {
    title: "Chain Monitor",
    url: "https://chain-monitor.cros-nest.com/d/Cros-nest/block-chains?orgId=1&var-chain_id=evmos_9001-1",
    description: "Chain monitor allows users to inspect all relevant blockchain information. ",
    image: "Chain Monitor.jpeg",
    categories: [categories.INFRASTRUCTURE,],

  },
  {
    title: "Basin Protocol",
    url: "https://twitter.com/BasinProtocol",
    description: "Liquid Staking for Evmos ",
    image: "Basin Protocol.jpeg",
    categories: [categories.DEFI,],

  },
  {
    title: "DForce",
    url: "https://dforce.network/",
    description: "decentralized finance protocols covering assets, lending, and trading. ",
    image: "DForce.jpeg",
    categories: [categories.DEFI,],

  },
  {
    title: "Coslend",
    url: "https://coslend.com/",
    description: "Coslend lending protocol is the first money market on Evmos Ecosystem based on Compound, one of the largest DeFi protocols. We are aiming to create a safe, open and transparent decentralized financial money market. ",
    image: "Coslend.jpeg",
    categories: [categories.DEFI,],

  },
  {
    title: "Asteroids Money",
    url: "https://twitter.com/Asteroidsmoney/",
    description: "First @tombfinance fork pegged to the price of 1 EVMOS floating in the cosmos. Comming soon. ",
    image: "Asteroids Money.jpeg",
    categories: [categories.DEFI,],

  },
  {
    title: "Asteroids Money",
    url: "https://www.evmosians.com/",
    description: "Evmosians NFTs collections will consist of many races and creatures. Each collection will have its own meaning and value. ",
    image: "Evmosians.jpeg",
    categories: [categories.NFT,],

  },
  {
    title: "Midas Capita1",
    url: "https://evmos.space/x",
    description: "Rari Fork for Lending, borrowing & yield for DeFi ",
    image: "Midas Capita1.jpeg",
    categories: [categories.DEFI,],

  },
  {
    title: "DEXPAD",
    url: "https://dexpad.io/",
    description: "DexPad.IO is multichain launchpad with many tools for new projects such as Token Minting, Token Launch, Lockers (LP & Token) and Airdroppers ",
    image: "DEXPAD.jpeg",
    categories: [categories.DEFI,],

  },
  {
    title: "Evmos Stats",
    url: "https://evmostats.io/",
    description: "Evmos blockchain stats about validators, inflation, bonded tokens and many more parameters. ",
    image: "Evmos Stats.jpeg",
    categories: [categories.INFRASTRUCTURE,],

  },
  {
    title: "Perci Finance",
    url: "https://twitter.com/PerciFinance",
    description: "The First Borrowing Protocol on Evmos. ",
    image: "Perci Finance.jpeg",
    categories: [categories.DEFI,],

  },
  {
    title: "Orbit Market",
    url: "https://www.orbitmarket.io/",
    description: "First NFT Marketplace on EvmosOrg ",
    image: "Orbit Market.jpeg",
    categories: [categories.NFT,],

  },
  {
    title: "UMA",
    url: "https://umaproject.org/",
    description: "UMA’s optimistic oracle service will equip Evmos developers with decentralized and battle tested optimistic oracles to integrate within decentralized applications. ",
    image: "UMA.jpeg",
    categories: [categories.DEFI,],

  },
  {
    title: "Pocket Network",
    url: "https://evmos.blog/introducing-cevmos-an-open-scalable-and-modular-stack-for-evm-based-applications-72930ce6b85c",
    description: "Pocket Network is an RPC relay protocol that incentivizes Full-Node operators to provide accurate data and abundant bandwidth to decentralized applications. ",
    image: "Pocket Network.jpeg",
    categories: [categories.INFRASTRUCTURE,],

  },
];
