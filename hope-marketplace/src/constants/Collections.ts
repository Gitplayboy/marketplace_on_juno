import { TokenType } from "../types/tokens";
import { MintLogicItemInterface, MintLogics } from "./mintLogic";

export interface SocialLinks {
  discord: string;
  website: string;
  twitter: string;
}

export type FloorPriceType = Record<`${TokenType}FloorPrice`, number>;
export interface VolumePriceType extends Record<`${TokenType}Volume`, number> {
  totalVolumeInJuno: number;
}

export interface StatisticSettings extends FloorPriceType, VolumePriceType {
  total: string;
  owner: string;
  itemsOnSale: string;
}

export type StatisticOption = { [key in keyof StatisticSettings]?: boolean };

export interface MarketplaceBasicInfo {
  imageUrl: string;
  backgroundUrl: string;
  logoUrl?: string;
  title: string;
  creator: string;
  collectionId: CollectionIds;
  description: string;
  nftContract: string;
  mintContract: string;
  marketplaceContract: string[];
  socialLinks: SocialLinks;
  statisticOption?: StatisticOption; // invisible status for statistic items. if true, invisible
  customTokenId?: string; // if this value exists token_id will be replaced. e.g. Hoper.1916 -> MintPass I.1916 when this value is "MintPass I"
  metaDataUrl?: string;
  isLaunched: boolean;
}
export interface MarketplaceMintInfo {
  totalNfts: number;
  royalties: string;
  price: string;
  mintImage: string;
  mintDate?: string;
  mintUrl?: string;
  mintLogic?: MintLogicItemInterface;
}

export interface MarketplaceInfo extends MarketplaceBasicInfo {
  mintInfo?: MarketplaceMintInfo;
}

export enum CollectionIds {
  HOPEGALAXYI = "hopegalaxy1",
  MINTPASSI = "mintpass1",
  MINTPASSII = "mintpass2",
  JUNOPUNKS = "junopunks",
  NETANOTS = "netanots",
  SUNNYSIDE = "sunnyside",
  JUNOFARMING = "junofarming",
  BORED = "bored",
  CRYPTOGIRLS = "cryptogirls",
  GOBLIN = "goblin",
  WITCHES = "witches",
  ROMANS = "romans",
}

const Collections: MarketplaceInfo[] = [
  {
    title: "Hope Galaxy NFT - Collection 1",
    customTokenId: "HopeGalaxyI",
    creator: "Hope Galaxy NFT",
    imageUrl: "/backgrounds/HopeGalaxy.png",
    backgroundUrl: "/marketplace-backgrounds/hopeBackground.png",
    collectionId: CollectionIds.HOPEGALAXYI,
    metaDataUrl:
      "https://hopegalaxy.mypinata.cloud/ipfs/QmRnRFS19fbs8Bo9VxSKxR3DAJfBqmYNiXPapQKhDTDku6/_metadata.json",
    nftContract:
      "juno1lqtavuw24dnnu56w79k7mefn8fhuz2w247dks2fes6hwd4rhpu2sumhhap",
    mintContract: "",
    marketplaceContract: [
      "juno1y0phl9303vjfdlsgnqpyl2vxwt3h2gxekn276ls36qvrwd9faxjqvezgmh",
      "juno1m9rrvcdjatkvvdmly6pxq3yvxkp8ufaf23qkqvjcgzjgaxsef3ns6xe994",
    ],
    socialLinks: {
      discord: "https://discord.gg/BfKPacc5jF",
      website: "https://hopegalaxy.io",
      twitter: "https://twitter.com/HopeGalaxyNFT",
    },
    statisticOption: {
      total: true,
    },
    description:
      "HOPE GALAXY NFT holders will be able to access the HopeGalaxy dapp which will enable them to stake their NFT and receive monthly passive income generated by NFT trades which are paid out once a month.",
    isLaunched: true,
  },
  {
    title: "Hope Galaxy Mint Pass 1",
    customTokenId: "MintPassI",
    creator: "Hope Galaxy NFT",
    imageUrl: "/backgrounds/Collection.png",
    backgroundUrl: "/marketplace-backgrounds/background.png",
    collectionId: CollectionIds.MINTPASSI,
    nftContract:
      "juno1ccl3kw74hl3ez4ljhx0qzwe7hl8egqcsc2mcjkgga3af86jjek0q9645r8",
    mintContract: "",
    marketplaceContract: [
      "juno1adn5atr89yp8pmurtem882u3rwk0ug7p7d3pwp7g83glqyhfua8sq56z80",
    ],
    socialLinks: {
      discord: "https://discord.gg/BfKPacc5jF",
      website: "https://hopegalaxy.io",
      twitter: "https://twitter.com/HopeGalaxyNFT",
    },
    statisticOption: {
      total: true,
    },
    description:
      "This mint pass is the ticket for the minting of the Hope Galaxy NFT collection once it is launched",
    isLaunched: true,
  },
  {
    title: "Hope Galaxy Mint Pass 2",
    customTokenId: "MintPassII",
    creator: "Hope Galaxy NFT",
    imageUrl: "/backgrounds/MintPass2.png",
    backgroundUrl: "/marketplace-backgrounds/MintPass2.png",
    logoUrl: "/logos/mintPass2.png",
    collectionId: CollectionIds.MINTPASSII,
    nftContract:
      "juno1x5kqvep2fq5sgvwwjn9uctzn0ts8vxnrtalxjucs5juu07hxxsvqgseuhr",
    mintContract: "",
    marketplaceContract: [
      "juno14jvup0unhnn9377t49vqducyvrv0ader2ekc9z4teq6wepyt9mls3lw0wq",
    ],
    socialLinks: {
      discord: "https://discord.gg/BfKPacc5jF",
      website: "https://hopegalaxy.io",
      twitter: "https://twitter.com/HopeGalaxyNFT",
    },
    statisticOption: {
      total: true,
    },
    description:
      "This is mint pass is the ticket for the minting of the Hope Galaxy NFT collection once it is launched",
    isLaunched: true,
  },
  {
    title: "Juno Punks NFT",
    creator: "Juno Punks",
    imageUrl: "/backgrounds/juno_punks.png",
    backgroundUrl: "/marketplace-backgrounds/JunoPunks.png",
    logoUrl: "/logos/JunoPunks.gif",
    collectionId: CollectionIds.JUNOPUNKS,
    metaDataUrl:
      "https://hopegalaxy.mypinata.cloud/ipfs/QmTxetzZAqvhFrVVf1wQBx8hFrE8AnN85G5WvB489d81wV/_metadata.json",
    nftContract:
      "juno1e229el8t4lu4rx7xeekc77zspxa2gz732ld0e6a5q0sr0l3gm78stuvc5g",
    mintContract:
      "juno10rjm83ng8v667hn3cpn7ga46u50qqnuyh9j2h9tm6famwj96scmszqgt24",
    marketplaceContract: [
      "juno1smf3u3qd4dc20cgsu7hsh95awxea0usw0q0jj2f3vmrykpk3ua4qn738hz",
    ],
    socialLinks: {
      discord: "https://discord.gg/BfKPacc5jF",
      website: "https://dashboard-junopunks.app/",
      twitter: "https://twitter.com/JunoPunksNFT",
    },
    description:
      "Unique collectible PFP characters exclusively for the $JUNO community living on the #Cosmos | Free mint!",
    mintInfo: {
      totalNfts: 500,
      royalties: "7% + 3%",
      price: "FREE MINT • Max 1 x wallet",
      mintImage: "/mint-images/JunoPunks.gif",
    },
    isLaunched: true,
  },
  {
    title: "Neta NOTs",
    creator: "NOTs",
    imageUrl: "/backgrounds/neta_nots.png",
    backgroundUrl: "/marketplace-backgrounds/nots.png",
    logoUrl: "/logos/nots.jpg",
    collectionId: CollectionIds.NETANOTS,
    metaDataUrl:
      "https://hopegalaxy.mypinata.cloud/ipfs/QmZMiSthAoW2qikg5LNz2TeWbf79Coyd1RtMbSGLSMEyhD",
    nftContract:
      "juno1pu5k9965hcxx670gzxmlxqsy90pvfd8muef3lttux95gal5vsecqlf9x7h",
    mintContract: "",
    marketplaceContract: [""],
    socialLinks: {
      discord: "https://t.co/6sfjxZD6U6",
      website: "https://t.co/eohk7QllPb",
      twitter: "https://twitter.com/NotsNfts",
    },
    description: "NetaNOTs are Space Warriors in the NOTs Universe",
    mintInfo: {
      totalNfts: 200,
      royalties: "5% + 3%",
      price: "4 JUNO",
      mintImage: "/mint-images/NetaNOTs.png",
      mintDate: "2022-06-28",
    },
    isLaunched: true,
  },
  {
    title: "Sunnyside Nightlife",
    creator: "Sunnyside Reapers",
    imageUrl: "/backgrounds/Sunnyside.png",
    backgroundUrl: "/marketplace-backgrounds/Sunnyside.png",
    logoUrl: "/logos/SunnysideNightlife.gif",
    collectionId: CollectionIds.SUNNYSIDE,
    nftContract:
      "juno199k5526srh0l845tt5dsyk8up22q729hc8n6w9njnqvyfwp7sjrskvvm3e",
    mintContract:
      "juno1ynhl64ejsgc83v74tmsqrxzt398f4jhew9kw9pawmv5cqr5sd6ssy5qluw",
    marketplaceContract: [
      "juno1kzakykpp7n852mfgcl4sl5ey5hy4uk207gadwppx0yatq274lntqmtvlmj",
    ],
    socialLinks: {
      discord: "https://discord.gg/GFYrJEsYpm",
      website: "https://ssr.rip/",
      twitter: "https://twitter.com/SunnysideReaper",
    },
    mintInfo: {
      totalNfts: 66,
      royalties: "6% +3%",
      price: "4.2 JUNO",
      mintImage: "/mint-images/SunnysideNightlife.gif",
      mintDate: "",
    },
    description: "Part of the Sunnyside Reaper NFT Collection.",
    isLaunched: true,
  },
  {
    title: "Juno Farming",
    customTokenId: "JunoFarming",
    creator: "Juno Farming",
    imageUrl: "/backgrounds/juno_farming.png",
    backgroundUrl: "/marketplace-backgrounds/JunoFarming.png",
    logoUrl: "/logos/JunoFarming.png",
    collectionId: CollectionIds.JUNOFARMING,
    metaDataUrl:
      "https://hopegalaxy.mypinata.cloud/ipfs/QmW9347NYmMus1GWyw8jCRYmfw8nzV4ntPJ5WShkRvhyao/_metadata.json",
    nftContract:
      "juno1smtyfg7036ds982x94l543gwj7f0fky73hjtvxdpf83m0t0f86sstr3pal",
    mintContract:
      "juno1724gaheqp34h25ul8n7vl7rur8krdd02hyn5p4hlt065x7yuuwnsxjqqe5",
    marketplaceContract: [
      "juno17vess7spu37zqc86flweg5jkpwmvcc6g5ltkytst5tzlrrxr3j0qccalzx",
    ],
    socialLinks: {
      discord: "https://discord.gg/BfKPacc5jF",
      website: "https://hopers.io/",
      twitter: "https://twitter.com/JunoFarming",
    },
    description:
      "JUNO Farming is the first NFT collection on JUNO that rewards its stakers with 50% from the value of all the transaction done within its ecosystem including the MINT and trades",
    mintInfo: {
      totalNfts: 2500,
      royalties: "50% + 3%",
      price: "8 JUNO",
      mintImage: "/mint-images/JunoFarming.png",
      mintDate: "2022-06-20",
      mintUrl: "https://junofarming.web.app",
    },
    isLaunched: true,
  },
  {
    title: "Bored Ape Ibc Club",
    creator: "Bored Ape Ibc Club",
    imageUrl: "/backgrounds/bored.png",
    backgroundUrl: "/marketplace-backgrounds/bored.png",
    logoUrl: "/logos/bored.gif",
    collectionId: CollectionIds.BORED,
    metaDataUrl:
      "https://hopegalaxy.mypinata.cloud/ipfs/QmekySg1tU6GHCRKrtey2G7N6Q9cKxUomrzHxU5HQS5hnz/_metadata.json",
    nftContract:
      "juno1xcnjcqes5qdyys0ewr99w6salalaa6st4w3sqcephp6f9uh9qhdsnnarsw",
    mintContract: "",
    marketplaceContract: [],
    socialLinks: {
      discord: "https://discord.gg/BfKPacc5jF",
      website: "https://launchpad.hopers.io/bored-ape-ibc-club",
      twitter: "https://twitter.com/BoredApeIbcClub",
    },
    description:
      "Bored Ape IBC Club/ community driven project/ in honour of the #BAYC 🙌 for the #COSMOS #IBC ⚛️",
    mintInfo: {
      totalNfts: 500,
      royalties: "7% + 3%",
      price: "1.69 JUNO",
      mintImage: "/mint-images/bored.gif",
      mintDate: "2022-07-01",
    },
    isLaunched: true,
  },
  {
    title: "Cute Crypto Girls",
    creator: "GIRI",
    imageUrl: "/backgrounds/cryptogirls.png",
    backgroundUrl: "/marketplace-backgrounds/cryptogirls.png",
    logoUrl: "/logos/cryptogirls.png",
    collectionId: CollectionIds.CRYPTOGIRLS,
    metaDataUrl:
      "https://hopegalaxy.mypinata.cloud/ipfs/QmYVs4Y4kTz7B8rXtocgnitc5msBPqD3U6yh33cxafELDj/_metadata.json",
    nftContract:
      "juno1zj2zy5zny2y8atnpp3l6gq72ka29xp3v2t00u7cfct4jgtkdye7qgvwfsp",
    mintContract: "",
    marketplaceContract: [],
    socialLinks: {
      discord: "https://discord.gg/BfKPacc5jF",
      website: "https://www.hopers.io/",
      twitter: "https://twitter.com/CuteCryptoGirls",
    },
    description:
      "Cute Crypto Girls is all about being curious & exploring and enjoying the crypto life to have fun. First of a kind PFPs for Cosmonauts. Gift an NFT to your partner or girl in your life to onboard them to crypto/web3.",
    mintInfo: {
      totalNfts: 333,
      royalties: "7% + 3%",
      price: "2 JUNO",
      mintImage: "/mint-images/cryptogirls.png",
      mintDate: "2022-07-04",
    },
    isLaunched: true,
  },
  {
    title: "Juno Goblin Town",
    creator: "Juno Goblin",
    imageUrl: "/backgrounds/goblin.png",
    backgroundUrl: "/marketplace-backgrounds/goblin.png",
    logoUrl: "/logos/goblin.gif",
    collectionId: CollectionIds.GOBLIN,
    metaDataUrl:
      "https://hopegalaxy.mypinata.cloud/ipfs/QmaLapkMZTmRpRtcCZAGedipMdiZxLaCy4pRS56RQ9wffW/_metadata.json",
    nftContract:
      "juno1lxvlu538vs3dl7jquhjh00p4gadkr8ql7uwyjxn2rkjfqrxnwqxqq84ead",
    mintContract:
      "juno1rrgql8w83k37y8vsxl6supey4dgtp9avwedyxjljjaq3httzxd5qlt77rr",
    marketplaceContract: [],
    socialLinks: {
      discord: "https://discord.gg/BfKPacc5jF",
      website: "https://hopers.io/",
      twitter: "https://twitter.com/JunoGoblinTown",
    },
    description:
      "ₐₐₐₐₐₐₐᵤᵤᵤᵤᵤGGGₕₕₕₕₕ ₙₒ ₑₑₙₛₜₐgᵣᵤₘ ₙₒ dₑₛcᵤᵣd | ⱼᵤₙₒ Bₗₒcₖcₕₐᵢₙ",
    mintInfo: {
      totalNfts: 500,
      royalties: "10% + 3%",
      price: "FREE",
      mintImage: "/mint-images/goblin.gif",
      mintDate: "2022-07-05",
    },
    isLaunched: true,
  },
  {
    title: "Wizards & Witches of Cosmos",
    creator: "Juno Farming",
    imageUrl: "/backgrounds/witches.jpg",
    backgroundUrl: "/marketplace-backgrounds/witches.jpg",
    logoUrl: "/logos/witches.jpg",
    collectionId: CollectionIds.WITCHES,
    metaDataUrl:
      "https://hopegalaxy.mypinata.cloud/ipfs/QmVqucWUnQTAu5V3V4ubZGs7zhiiT28PQ797zmYzEh5C4w/_metadata.json",
    nftContract:
      "juno1yta5dreyjsphprfd0unt7edhhu8jfx2c74z8l9c8p9294a8wz5qs8ls20e",
    mintContract:
      "juno1svuh44h5jd29vljvy4vuszx97dwt640589m0fuaagpsv3hc4g02q4c8ner",
    marketplaceContract: [],
    socialLinks: {
      discord: "https://discord.gg/BfKPacc5jF",
      website: "https://www.hopers.io/",
      twitter: "https://twitter.com/JunoFarming",
    },
    description:
      "2nd collection of JunoFarming NFT, which will allow to generate rewards for Junofarming stakers through minting and trading. Furthermore, anyone who buys 1 NFT of the 2nd collection will have exclusive access to the White List for the 3rd collection.",
    mintInfo: {
      totalNfts: 348,
      royalties: "7% + 3%",
      price: "8 $JUNO",
      mintImage: "/mint-images/witches.jpg",
      mintDate: "2022-07-13",
    },
    isLaunched: true,
  },
  {
    title: "The Romans NFT",
    creator: "The Rmomans NFT",
    imageUrl: "/backgrounds/romans.png",
    backgroundUrl: "/marketplace-backgrounds/romans.png",
    logoUrl: "/logos/romans.gif",
    collectionId: CollectionIds.ROMANS,
    metaDataUrl:
      "https://hopegalaxy.mypinata.cloud/ipfs/Qmf1hmTfjwtv1LynEvGUpXRQdterufhBNm2pEmhubDYkb9/_metadata.json",
    nftContract:
      "juno1vuvesdre2w8k0e0t5z584qsm8w3dfpafg8c0rkc08w7ea2zsexzq4u63kd",
    mintContract:
      "juno164sk3xk9ql84l350n446lzu5vef7vnupcmpwd54296zheslq3p9sdrqu79",
    marketplaceContract: [],
    socialLinks: {
      discord: "https://discord.gg/VEQtM2Hc",
      website: "http://hopers.io/",
      twitter: "https://twitter.com/RomansNFTs",
    },
    description:
      "555 Romans Citizens #NFT on #JUNO The Romans have neither oil nor kebabs we have the sword 🗡",
    mintInfo: {
      totalNfts: 555,
      royalties: "10%",
      price: "1.55 $JUNO",
      mintImage: "/mint-images/romans.gif",
      mintDate: "2022-07-19",
      mintLogic: MintLogics.logic1,
    },
    isLaunched: true,
  },
];

export const getCollectionById = (id: string): MarketplaceInfo => {
  return Collections.filter(
    (collection: MarketplaceInfo) => collection.collectionId === id
  )[0];
};

export const MarketplaceContracts: string[] = [
  "juno1vmj8fa943t8pz4ezpfrzl330caevlshq8r4pz9cwa6ey27wcxfpsa5fnwk",
];

export const MintContracts: string[] = [
  "juno1c9dr05cryh2fn5hwr4aa9rhzfy5vxdmq3uc3xfrku9e5cs8sqcrq5r5g6d",
];

export default Collections;

// !Sample Object
// {
//   title: "",
//   creator: "",
//   imageUrl: "",
//   backgroundUrl: "",
//   collectionId: "",
//   nftContract: "",
//   marketplaceContract: [""],
//   socialLinks: {
//     discord: "",
//     website: "",
//     twitter: "",
//   },
//   mintInfo: {
//     totalNfts: 1950,
//     royalties: "",
//     price: "",
//     mintImage: "",
//     mintDate: "",
//   },
//   description: "",
// },
