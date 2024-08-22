import Link from "next/link";
import { heroes } from "./heroes";
import type { Hero } from "./heroes";
import Modal from "./modal";

export default function Home() {
  const tanks = heroes.filter((hero) => hero.role === "tank");
  const dps = heroes.filter((hero) => hero.role === "dps");
  const support = heroes.filter((hero) => hero.role === "support");

  return (
    <main className="max-h-dvh max-w-dvw bg-ow-grey-950 h-dvh w-dvw box-border px-16 py-12 flex flex-col select-none">
      <div className="flex flex-row items-center justify-between">
        <h1 className="font-bold text-4xl">Overwatch Hero Counters</h1>
        <p>Last updated: {new Date("2024-08-20").toLocaleDateString()}</p>
      </div>
      <div className="grid grid-cols-3 w-full flex-1 mt-4 gap-6">
        {/* TANKS */}
        <div className="flex flex-col w-full h-full">
          <div className="flex flex-row items-center gap-2">
            <div className="flex items-center justify-center bg-white rounded-full h-8 w-8 p-1">
              <img
                src="https://images.blz-contentstack.com/v3/assets/blt9c12f249ac15c7ec/bltcb94e9203be4088a/dark_circle_tank.svg"
                alt="Tank role icon"
              />
            </div>
            <h2 className="font-medium text-xl">Tanks</h2>
          </div>
          <div className="w-full grid grid-cols-4 mt-3 gap-2">
            {tanks.map((hero) => (
              <Hero key={hero.id} {...hero} />
            ))}
          </div>
        </div>
        {/* DPS */}
        <div className="flex flex-col w-full h-full">
          <div className="flex flex-row items-center gap-2">
            <div className="flex items-center justify-center bg-white rounded-full h-8 w-8 p-1">
              <img
                src="https://images.blz-contentstack.com/v3/assets/blt9c12f249ac15c7ec/blt052e8b02aef879b0/dark_circle_damage.svg"
                alt="Damage role icon"
              />
            </div>
            <h2 className="font-medium text-xl">Damage</h2>
          </div>
          <div className="w-full grid grid-cols-4 mt-3 gap-2">
            {dps.map((hero) => (
              <Hero key={hero.id} {...hero} />
            ))}
          </div>
        </div>
        {/* SUPPORT */}
        <div className="flex flex-col w-full h-full">
          <div className="flex flex-row items-center gap-2">
            <div className="flex items-center justify-center bg-white rounded-full h-8 w-8 p-1">
              <img
                src="https://images.blz-contentstack.com/v3/assets/blt9c12f249ac15c7ec/blt8cf279e9b3126ef8/dark_circle_support.svg"
                alt="Support role icon"
              />
            </div>
            <h2 className="font-medium text-xl">Support</h2>
          </div>
          <div className="w-full grid grid-cols-4 mt-3 gap-2">
            {support.map((hero) => (
              <Hero key={hero.id} {...hero} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function Hero(hero: Hero) {
  const { id, name, image, counteredBy } = hero;
  const countered = heroes.filter((hero) => counteredBy.includes(hero.id));

  function getColor() {
    switch (id) {
      case "dva":
        return {
          bg: "bg-dva-900",
          bghover: "hover:bg-dva-900",
          border: "border-dva-800",
          borderhover: "hover:border-dva-800",
          bordergroup: "group-hover:border-dva-800",
        };
      case "doomfist":
        return {
          bg: "bg-doomfist-900",
          bghover: "hover:bg-doomfist-900",
          border: "border-doomfist-800",
          borderhover: "hover:border-doomfist-800",
          bordergroup: "group-hover:border-doomfist-800",
        };
      case "junker-queen":
        return {
          bg: "bg-junker-queen-900",
          bghover: "hover:bg-junker-queen-900",
          border: "border-junker-queen-800",
          borderhover: "hover:border-junker-queen-800",
          bordergroup: "group-hover:border-junker-queen-800",
        };
      case "mauga":
        return {
          bg: "bg-mauga-900",
          bghover: "hover:bg-mauga-900",
          border: "border-mauga-800",
          borderhover: "hover:border-mauga-800",
          bordergroup: "group-hover:border-mauga-800",
        };
      case "orisa":
        return {
          bg: "bg-orisa-900",
          bghover: "hover:bg-orisa-900",
          border: "border-orisa-800",
          borderhover: "hover:border-orisa-800",
          bordergroup: "group-hover:border-orisa-800",
        };
      case "ramattra":
        return {
          bg: "bg-ramattra-900",
          bghover: "hover:bg-ramattra-900",
          border: "border-ramattra-800",
          borderhover: "hover:border-ramattra-800",
          bordergroup: "group-hover:border-ramattra-800",
        };
      case "reinhardt":
        return {
          bg: "bg-reinhardt-900",
          bghover: "hover:bg-reinhardt-900",
          border: "border-reinhardt-800",
          borderhover: "hover:border-reinhardt-800",
          bordergroup: "group-hover:border-reinhardt-800",
        };
      case "roadhog":
        return {
          bg: "bg-roadhog-900",
          bghover: "hover:bg-roadhog-900",
          border: "border-roadhog-800",
          borderhover: "hover:border-roadhog-800",
          bordergroup: "group-hover:border-roadhog-800",
        };
      case "sigma":
        return {
          bg: "bg-sigma-900",
          bghover: "hover:bg-sigma-900",
          border: "border-sigma-800",
          borderhover: "hover:border-sigma-800",
          bordergroup: "group-hover:border-sigma-800",
        };
      case "winston":
        return {
          bg: "bg-winston-900",
          bghover: "hover:bg-winston-900",
          border: "border-winston-800",
          borderhover: "hover:border-winston-800",
          bordergroup: "group-hover:border-winston-800",
        };
      case "wrecking-ball":
        return {
          bg: "bg-wrecking-ball-900",
          bghover: "hover:bg-wrecking-ball-900",
          border: "border-wrecking-ball-800",
          borderhover: "hover:border-wrecking-ball-800",
          bordergroup: "group-hover:border-wrecking-ball-800",
        };
      case "zarya":
        return {
          bg: "bg-zarya-900",
          bghover: "hover:bg-zarya-900",
          border: "border-zarya-800",
          borderhover: "hover:border-zarya-800",
          bordergroup: "group-hover:border-zarya-800",
        };
      case "ashe":
        return {
          bg: "bg-ashe-900",
          bghover: "hover:bg-ashe-900",
          border: "border-ashe-800",
          borderhover: "hover:border-ashe-800",
          bordergroup: "group-hover:border-ashe-800",
        };
      case "bastion":
        return {
          bg: "bg-bastion-900",
          bghover: "hover:bg-bastion-900",
          border: "border-bastion-800",
          borderhover: "hover:border-bastion-800",
          bordergroup: "group-hover:border-bastion-800",
        };
      case "cassidy":
        return {
          bg: "bg-cassidy-900",
          bghover: "hover:bg-cassidy-900",
          border: "border-cassidy-800",
          borderhover: "hover:border-cassidy-800",
          bordergroup: "group-hover:border-cassidy-800",
        };
      case "echo":
        return {
          bg: "bg-echo-900",
          bghover: "hover:bg-echo-900",
          border: "border-echo-800",
          borderhover: "hover:border-echo-800",
          bordergroup: "group-hover:border-echo-800",
        };
      case "genji":
        return {
          bg: "bg-genji-900",
          bghover: "hover:bg-genji-900",
          border: "border-genji-800",
          borderhover: "hover:border-genji-800",
          bordergroup: "group-hover:border-genji-800",
        };
      case "hanzo":
        return {
          bg: "bg-hanzo-900",
          bghover: "hover:bg-hanzo-900",
          border: "border-hanzo-800",
          borderhover: "hover:border-hanzo-800",
          bordergroup: "group-hover:border-hanzo-800",
        };
      case "junkrat":
        return {
          bg: "bg-junkrat-900",
          bghover: "hover:bg-junkrat-900",
          border: "border-junkrat-800",
          borderhover: "hover:border-junkrat-800",
          bordergroup: "group-hover:border-junkrat-800",
        };
      case "mei":
        return {
          bg: "bg-mei-900",
          bghover: "hover:bg-mei-900",
          border: "border-mei-800",
          borderhover: "hover:border-mei-800",
          bordergroup: "group-hover:border-mei-800",
        };
      case "pharah":
        return {
          bg: "bg-pharah-900",
          bghover: "hover:bg-pharah-900",
          border: "border-pharah-800",
          borderhover: "hover:border-pharah-800",
          bordergroup: "group-hover:border-pharah-800",
        };
      case "reaper":
        return {
          bg: "bg-reaper-900",
          bghover: "hover:bg-reaper-900",
          border: "border-reaper-800",
          borderhover: "hover:border-reaper-800",
          bordergroup: "group-hover:border-reaper-800",
        };
      case "sojourn":
        return {
          bg: "bg-sojourn-900",
          bghover: "hover:bg-sojourn-900",
          border: "border-sojourn-800",
          borderhover: "hover:border-sojourn-800",
          bordergroup: "group-hover:border-sojourn-800",
        };
      case "soldier-76":
        return {
          bg: "bg-soldier-76-900",
          bghover: "hover:bg-soldier-76-900",
          border: "border-soldier-76-800",
          borderhover: "hover:border-soldier-76-800",
          bordergroup: "group-hover:border-soldier-76-800",
        };
      case "sombra":
        return {
          bg: "bg-sombra-900",
          bghover: "hover:bg-sombra-900",
          border: "border-sombra-800",
          borderhover: "hover:border-sombra-800",
          bordergroup: "group-hover:border-sombra-800",
        };
      case "symmetra":
        return {
          bg: "bg-symmetra-900",
          bghover: "hover:bg-symmetra-900",
          border: "border-symmetra-800",
          borderhover: "hover:border-symmetra-800",
          bordergroup: "group-hover:border-symmetra-800",
        };
      case "torbjorn":
        return {
          bg: "bg-torbjorn-900",
          bghover: "hover:bg-torbjorn-900",
          border: "border-torbjorn-800",
          borderhover: "hover:border-torbjorn-800",
          bordergroup: "group-hover:border-torbjorn-800",
        };
      case "tracer":
        return {
          bg: "bg-tracer-900",
          bghover: "hover:bg-tracer-900",
          border: "border-tracer-800",
          borderhover: "hover:border-tracer-800",
          bordergroup: "group-hover:border-tracer-800",
        };
      case "venture":
        return {
          bg: "bg-venture-900",
          bghover: "hover:bg-venture-900",
          border: "border-venture-800",
          borderhover: "hover:border-venture-800",
          bordergroup: "group-hover:border-venture-800",
        };
      case "widowmaker":
        return {
          bg: "bg-widowmaker-900",
          bghover: "hover:bg-widowmaker-900",
          border: "border-widowmaker-800",
          borderhover: "hover:border-widowmaker-800",
          bordergroup: "group-hover:border-widowmaker-800",
        };
      case "ana":
        return {
          bg: "bg-ana-900",
          bghover: "hover:bg-ana-900",
          border: "border-ana-800",
          borderhover: "hover:border-ana-800",
          bordergroup: "group-hover:border-ana-800",
        };
      case "baptiste":
        return {
          bg: "bg-baptiste-900",
          bghover: "hover:bg-baptiste-900",
          border: "border-baptiste-800",
          borderhover: "hover:border-baptiste-800",
          bordergroup: "group-hover:border-baptiste-800",
        };
      case "brigitte":
        return {
          bg: "bg-brigitte-900",
          bghover: "hover:bg-brigitte-900",
          border: "border-brigitte-800",
          borderhover: "hover:border-brigitte-800",
          bordergroup: "group-hover:border-brigitte-800",
        };
      case "illari":
        return {
          bg: "bg-illari-900",
          bghover: "hover:bg-illari-900",
          border: "border-illari-800",
          borderhover: "hover:border-illari-800",
          bordergroup: "group-hover:border-illari-800",
        };
      case "juno":
        return {
          bg: "bg-juno-900",
          bghover: "hover:bg-juno-900",
          border: "border-juno-800",
          borderhover: "hover:border-juno-800",
          bordergroup: "group-hover:border-juno-800",
        };
      case "kiriko":
        return {
          bg: "bg-kiriko-900",
          bghover: "hover:bg-kiriko-900",
          border: "border-kiriko-800",
          borderhover: "hover:border-kiriko-800",
          bordergroup: "group-hover:border-kiriko-800",
        };
      case "lifeweaver":
        return {
          bg: "bg-lifeweaver-900",
          bghover: "hover:bg-lifeweaver-900",
          border: "border-lifeweaver-800",
          borderhover: "hover:border-lifeweaver-800",
          bordergroup: "group-hover:border-lifeweaver-800",
        };
      case "lucio":
        return {
          bg: "bg-lucio-900",
          bghover: "hover:bg-lucio-900",
          border: "border-lucio-800",
          borderhover: "hover:border-lucio-800",
          bordergroup: "group-hover:border-lucio-800",
        };
      case "mercy":
        return {
          bg: "bg-mercy-900",
          bghover: "hover:bg-mercy-900",
          border: "border-mercy-800",
          borderhover: "hover:border-mercy-800",
          bordergroup: "group-hover:border-mercy-800",
        };
      case "moira":
        return {
          bg: "bg-moira-900",
          bghover: "hover:bg-moira-900",
          border: "border-moira-800",
          borderhover: "hover:border-moira-800",
          bordergroup: "group-hover:border-moira-800",
        };
      case "zenyatta":
        return {
          bg: "bg-zenyatta-900",
          bghover: "hover:bg-zenyatta-900",
          border: "border-zenyatta-800",
          borderhover: "hover:border-zenyatta-800",
          bordergroup: "group-hover:border-zenyatta-800",
        };
      default:
        return {
          bg: "bg-ow-grey-900",
          bghover: "hover:bg-ow-grey-900",
          border: "border-ow-grey-800",
          borderhover: "hover:border-ow-grey-800",
          bordergroup: "group-hover:border-ow-grey-800",
        };
    }
  }

  const c = getColor();

  return (
    <Modal hero={hero}>
      <div
        className={`flex flex-col bg-ow-grey-900 border-ow-grey-800 overflow-hidden rounded-md border relative group ${c.bghover} ${c.borderhover} transition-colors`}
      >
        <img
          src={image}
          alt={name}
          className={`w-full aspect-square border-b border-ow-grey-800 ${c.bordergroup} transition-colors`}
        />
        <p className="text-center w-full text-medium px-2 py-1 line-clamp-1 text-sm">
          {name}
        </p>
        <div
          className={`absolute left-0 top-0 ${c.bg} h-full w-full flex flex-col overflow-y-scroll opacity-0 transition-opacity`}
        >
          {countered.map((hero) => (
            <p key={hero.id}>{hero.name}</p>
          ))}
        </div>
      </div>
    </Modal>
  );
}
