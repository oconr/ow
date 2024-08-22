export type Hero = {
  id: string;
  name: string;
  role: "support" | "dps" | "tank";
  counteredBy: string[];
  image: string;
};

const tanks: Hero[] = [
  {
    id: "dva",
    name: "D.Va",
    role: "tank",
    counteredBy: [
      "zarya",
      "winston",
      "symmetra",
      "sojourn",
      "bastion",
      "moira",
    ],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ca114f72193e4d58a85c087e9409242f1a31e808cf4058678b8cbf767c2a9a0a.png",
  },
  {
    id: "doomfist",
    name: "Doomfist",
    role: "tank",
    counteredBy: ["sombra", "tracer", "bastion", "genji", "ana", "brigitte"],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/13750471c693c1a360eb19d5ace229c8599a729cd961d72ebee0e157657b7d18.png",
  },
  {
    id: "junker-queen",
    name: "Junker Queen",
    role: "tank",
    counteredBy: ["wrecking-ball", "widowmaker", "ana", "lucio", "kiriko"],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/cef2406b2244b80506f83b8fb9ebaf214f41fa8795cbeef84026cd8018561d04.png",
  },
  {
    id: "mauga",
    name: "Mauga",
    role: "tank",
    counteredBy: [
      "doomfist",
      "wrecking-ball",
      "mauga",
      "sombra",
      "zenyatta",
      "kiriko",
    ],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9ee3f5a62893091d575ec0a0d66df878597086374202c6fc7da2d63320a7d02e.png",
  },
  {
    id: "orisa",
    name: "Orisa",
    role: "tank",
    counteredBy: ["zarya", "dva", "mei", "echo", "moira"],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/71e96294617e81051d120b5d04b491bb1ea40e2933da44d6631aae149aac411d.png",
  },
  {
    id: "ramattra",
    name: "Ramattra",
    role: "tank",
    counteredBy: [
      "roadhog",
      "reaper",
      "tracer",
      "pharah",
      "genji",
      "cassidy",
      "kiriko",
    ],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3e0367155e1940a24da076c6f1f065aacede88dbc323631491aa0cd5a51e0b66.png",
  },
  {
    id: "reinhardt",
    name: "Reinhardt",
    role: "tank",
    counteredBy: ["sombra", "cassidy", "mei", "junkrat", "pharah", "zenyatta"],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/490d2f79f8547d6e364306af60c8184fb8024b8e55809e4cc501126109981a65.png",
  },
  {
    id: "roadhog",
    name: "Roadhog",
    role: "tank",
    counteredBy: [
      "wrecking-ball",
      "roadhog",
      "reaper",
      "echo",
      "junkrat",
      "ana",
    ],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/72e02e747b66b61fcbc02d35d350770b3ec7cbaabd0a7ca17c0d82743d43a7e8.png",
  },
  {
    id: "sigma",
    name: "Sigma",
    role: "tank",
    counteredBy: ["ramattra", "roadhog", "genji", "tracer", "sombra", "lucio"],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/cd7a4c0a0df8924afb2c9f6df864ed040f20250440c36ca2eb634acf6609c5e4.png",
  },
  {
    id: "winston",
    name: "Winston",
    role: "tank",
    counteredBy: ["zarya", "junkrat", "pharah", "bastion", "ana", "brigitte"],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/bd9c8e634d89488459dfc1aeb21b602fa5c39aa05601a4167682f3a3fed4e0ee.png",
  },
  {
    id: "wrecking-ball",
    name: "Wrecking Ball",
    role: "tank",
    counteredBy: ["roadhog", "doomfist", "mei", "sombra", "ana", "brigitte"],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5c18e39ce567ee8a84078f775b9f76a2ba891de601c059a3d2b46b61ae4afb42.png",
  },
  {
    id: "zarya",
    name: "Zarya",
    role: "tank",
    counteredBy: [
      "dva",
      "hanzo",
      "widowmaker",
      "cassidy",
      "tracer",
      "zenyatta",
    ],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8819ba85823136640d8eba2af6fd7b19d46b9ee8ab192a4e06f396d1e5231f7a.png",
  },
];

const dps: Hero[] = [
  {
    id: "ashe",
    name: "Ashe",
    role: "dps",
    counteredBy: ["zarya", "genji", "tracer", "widowmaker", "ana", "kiriko"],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8dc2a024c9b7d95c7141b2ef065590dbc8d9018d12ad15f76b01923986702228.png",
  },
  {
    id: "bastion",
    name: "Bastion",
    role: "dps",
    counteredBy: [
      "zarya",
      "orisa",
      "junkrat",
      "pharah",
      "genji",
      "tracer",
      "ana",
    ],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4d715f722c42215072b5dd0240904aaed7b5285df0b2b082d0a7f1865b5ea992.png",
  },
  {
    id: "cassidy",
    name: "Cassidy",
    role: "dps",
    counteredBy: ["reinhardt", "winston", "genji", "cassidy", "ana"],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6cfb48b5597b657c2eafb1277dc5eef4a07eae90c265fcd37ed798189619f0a5.png",
  },
  {
    id: "echo",
    name: "Echo",
    role: "dps",
    counteredBy: [
      "winston",
      "zarya",
      "ashe",
      "cassidy",
      "soldier-76",
      "widowmaker",
    ],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f086bf235cc6b7f138609594218a8385c8e5f6405a39eceb0deb9afb429619fe.png",
  },
  {
    id: "genji",
    name: "Genji",
    role: "dps",
    counteredBy: ["winston", "zarya", "symmetra", "mei", "moira", "ana"],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4edf5ea6d58c449a2aeb619a3fda9fff36a069dfbe4da8bc5d8ec1c758ddb8dc.png",
  },
  {
    id: "hanzo",
    name: "Hanzo",
    role: "dps",
    counteredBy: ["dva", "wrecking-ball", "widowmaker", "genji", "lucio"],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/aecd8fa677f0093344fab7ccb7c37516c764df3f5ff339a5a845a030a27ba7e0.png",
  },
  {
    id: "junkrat",
    name: "Junkrat",
    role: "dps",
    counteredBy: [
      "zarya",
      "wrecking-ball",
      "cassidy",
      "soldier-76",
      "lucio",
      "brigitte",
      "lifeweaver",
    ],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/037e3df083624e5480f8996821287479a375f62b470572a22773da0eaf9441d0.png",
  },
  {
    id: "mei",
    name: "Mei",
    role: "dps",
    counteredBy: ["dva", "sombra", "pharah", "echo", "kiriko"],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1533fcb0ee1d3f9586f84b4067c6f63eca3322c1c661f69bfb41cd9e4f4bcc11.png",
  },
  {
    id: "pharah",
    name: "Pharah",
    role: "dps",
    counteredBy: [
      "dva",
      "soldier-76",
      "cassidy",
      "ashe",
      "widowmaker",
      "baptiste",
    ],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f8261595eca3e43e3b37cadb8161902cc416e38b7e0caa855f4555001156d814.png",
  },
  {
    id: "reaper",
    name: "Reaper",
    role: "dps",
    counteredBy: ["zarya", "pharah", "echo", "junkrat", "widowmaker", "ana"],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2edb9af69d987bb503cd31f7013ae693640e692b321a73d175957b9e64394f40.png",
  },
  {
    id: "sojourn",
    name: "Sojourn",
    role: "dps",
    counteredBy: ["winston", "mauga", "genji", "tracer", "lucio"],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a53bf7ad9d2f33aaf9199a00989f86d4ba1f67c281ba550312c7d96e70fec4ea.png",
  },
  {
    id: "soldier-76",
    name: "Soldier: 76",
    role: "dps",
    counteredBy: [
      "roadhog",
      "ashe",
      "cassidy",
      "genji",
      "junkrat",
      "ana",
      "lucio",
    ],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/20b4ef00ed05d6dba75df228241ed528df7b6c9556f04c8070bad1e2f89e0ff5.png",
  },
  {
    id: "sombra",
    name: "Sombra",
    role: "dps",
    counteredBy: ["pharah", "junkrat", "hanzo", "mei", "kiriko", "ana"],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/bca8532688f01b071806063b9472f1c0f9fc9c7948e6b59e210006e69cec9022.png",
  },
  {
    id: "symmetra",
    name: "Symmetra",
    role: "dps",
    counteredBy: ["winston", "mauga", "pharah", "junkrat", "echo"],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7f2024c5387c9d76d944a5db021c2774d1e9d7cbf39e9b6a35b364d38ea250ac.png",
  },
  {
    id: "torbjorn",
    name: "Torbjorn",
    role: "dps",
    counteredBy: ["dva", "junkrat", "ashe"],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1309ab1add1cc19189a2c8bc7b1471f88efa1073e9705d2397fdb37d45707d01.png",
  },
  {
    id: "tracer",
    name: "Tracer",
    role: "dps",
    counteredBy: [
      "winston",
      "mauga",
      "symmetra",
      "torbjorn",
      "mei",
      "brigitte",
      "moira",
    ],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a66413200e934da19540afac965cfe8a2de4ada593d9a52d53108bb28e8bbc9c.png",
  },
  {
    id: "venture",
    name: "Venture",
    role: "dps",
    counteredBy: ["pharah", "soldier-76", "widowmaker", "brigitte", "moira"],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7e33dd756c8a1abca519af6c3bf26813f2f81d39885373539efcf8442c4bc647.png",
  },
  {
    id: "widowmaker",
    name: "Widowmaker",
    role: "dps",
    counteredBy: ["dva", "winston", "genji", "tracer", "sombra", "zenyatta"],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a714f1cb33cc91c6b5b3e89ffe7e325b99e7c89cc8e8feced594f81305147efe.png",
  },
];

const support: Hero[] = [
  {
    id: "ana",
    name: "Ana",
    role: "support",
    counteredBy: ["winston", "ramattra", "echo", "pharah", "tracer", "kiriko"],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3429c394716364bbef802180e9763d04812757c205e1b4568bc321772096ed86.png",
  },
  {
    id: "baptiste",
    name: "Baptiste",
    role: "support",
    counteredBy: ["cassidy", "ashe", "mei", "lucio"],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f979896f74ba22db2a92a85ae1260124ab0a26665957a624365e0f96e5ac5b5c.png",
  },
  {
    id: "brigitte",
    name: "Brigitte",
    role: "support",
    counteredBy: ["pharah", "echo", "junkrat"],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/48392820c6976ee1cd8dde13e71df85bf15560083ee5c8658fe7c298095d619a.png",
  },
  {
    id: "illari",
    name: "Illari",
    role: "support",
    counteredBy: [
      "orisa",
      "zarya",
      "dva",
      "cassidy",
      "ashe",
      "widowmaker",
      "baptiste",
      "lifeweaver",
      "lucio",
    ],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5ea986038f9d307bd4613d5e6f2c4c8e7f15f30ceeeabbdd7a06637a38f17e1f.png",
  },
  {
    id: "juno",
    name: "Juno",
    role: "support",
    counteredBy: ["roadhog", "sombra", "soldier-76", "dva"],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/585b2d60cbd3c271b6ad5ad0922537af0c6836fab6c89cb9979077f7bb0832b5.png",
  },
  {
    id: "kiriko",
    name: "Kiriko",
    role: "support",
    counteredBy: ["roadhog", "tracer", "sombra", "genji", "mei"],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/088aff2153bdfa426984b1d5c912f6af0ab313f0865a81be0edd114e9a2f79f9.png",
  },
  {
    id: "lifeweaver",
    name: "Lifeweaver",
    role: "support",
    counteredBy: ["sombra", "soldier-76", "lucio"],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/39d4514f1b858bc228035b09d5a74ed41f8eeefc9a0d1873570b216ba04334df.png",
  },
  {
    id: "lucio",
    name: "Lucio",
    role: "support",
    counteredBy: [
      "winston",
      "roadhog",
      "soldier-76",
      "cassidy",
      "symmetra",
      "torbjorn",
      "mei",
      "moira",
    ],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e2ff2527610a0fbe0c9956f80925123ef3e66c213003e29d37436de30b90e4e1.png",
  },
  {
    id: "mercy",
    name: "Mercy",
    role: "support",
    counteredBy: [
      "winston",
      "roadhog",
      "echo",
      "cassidy",
      "widowmaker",
      "genij",
      "tracer",
    ],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2508ddd39a178d5f6ae993ab43eeb3e7961e5a54a9507e6ae347381193f28943.png",
  },
  {
    id: "moira",
    name: "Moira",
    role: "support",
    counteredBy: [
      "roadhog",
      "zarya",
      "echo",
      "pharah",
      "widowmaker",
      "junkrat",
      "mei",
      "ashe",
      "ana",
    ],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/000beeb5606e01497897fa9210dd3b1e78e1159ebfd8afdc9e989047d7d3d08f.png",
  },
  {
    id: "zenyatta",
    name: "Zenyatta",
    role: "support",
    counteredBy: [
      "junkrat",
      "pharah",
      "cassidy",
      "widowmaker",
      "ashe",
      "hanzo",
      "tracer",
      "kiriko",
      "zenyatta",
    ],
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/71cabc939c577581f66b952f9c70891db779251e8e70f29de3c7bf494edacfe4.png",
  },
];

export const heroes: Hero[] = [...tanks, ...dps, ...support];
