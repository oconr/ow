"use client";

import { useState } from "react";
import { Hero, heroes } from "./heroes";

type ModalProps = {
  children: React.ReactNode;
  hero: Hero;
};

export default function Modal({ children, hero }: ModalProps) {
  const [open, setOpen] = useState(false);

  function getColor() {
    switch (hero.id) {
      case "dva":
        return {
          bg: "bg-dva-950",
          titleBg: "bg-dva-900",
          titleText: "text-dva-200",
          border: "border-dva-900",
        };
      case "doomfist":
        return {
          bg: "bg-doomfist-950",
          titleBg: "bg-doomfist-900",
          titleText: "text-doomfist-200",
          border: "border-doomfist-900",
        };
      case "junker-queen":
        return {
          bg: "bg-junker-queen-950",
          titleBg: "bg-junker-queen-900",
          titleText: "text-junker-queen-200",
          border: "border-junker-queen-900",
        };
      case "mauga":
        return {
          bg: "bg-mauga-950",
          titleBg: "bg-mauga-900",
          titleText: "text-mauga-200",
          border: "border-mauga-900",
        };
      case "orisa":
        return {
          bg: "bg-orisa-950",
          titleBg: "bg-orisa-900",
          titleText: "text-orisa-200",
          border: "border-orisa-900",
        };
      case "ramattra":
        return {
          bg: "bg-ramattra-950",
          titleBg: "bg-ramattra-900",
          titleText: "text-ramattra-200",
          border: "border-ramattra-900",
        };
      case "reinhardt":
        return {
          bg: "bg-reinhardt-950",
          titleBg: "bg-reinhardt-900",
          titleText: "text-reinhardt-200",
          border: "border-reinhardt-900",
        };
      case "roadhog":
        return {
          bg: "bg-roadhog-950",
          titleBg: "bg-roadhog-900",
          titleText: "text-roadhog-200",
          border: "border-roadhog-900",
        };
      case "sigma":
        return {
          bg: "bg-sigma-950",
          titleBg: "bg-sigma-900",
          titleText: "text-sigma-200",
          border: "border-sigma-900",
        };
      case "winston":
        return {
          bg: "bg-winston-950",
          titleBg: "bg-winston-900",
          titleText: "text-winston-200",
          border: "border-winston-900",
        };
      case "wrecking-ball":
        return {
          bg: "bg-wrecking-ball-950",
          titleBg: "bg-wrecking-ball-900",
          titleText: "text-wrecking-ball-200",
          border: "border-wrecking-ball-900",
        };
      case "zarya":
        return {
          bg: "bg-zarya-950",
          titleBg: "bg-zarya-900",
          titleText: "text-zarya-200",
          border: "border-zarya-900",
        };
      case "ashe":
        return {
          bg: "bg-ashe-950",
          titleBg: "bg-ashe-900",
          titleText: "text-ashe-200",
          border: "border-ashe-900",
        };
      case "bastion":
        return {
          bg: "bg-bastion-950",
          titleBg: "bg-bastion-900",
          titleText: "text-bastion-200",
          border: "border-bastion-900",
        };
      case "cassidy":
        return {
          bg: "bg-cassidy-950",
          titleBg: "bg-cassidy-900",
          titleText: "text-cassidy-200",
          border: "border-cassidy-900",
        };
      case "echo":
        return {
          bg: "bg-echo-950",
          titleBg: "bg-echo-900",
          titleText: "text-echo-200",
          border: "border-echo-900",
        };
      case "genji":
        return {
          bg: "bg-genji-950",
          titleBg: "bg-genji-900",
          titleText: "text-genji-200",
          border: "border-genji-900",
        };
      case "hanzo":
        return {
          bg: "bg-hanzo-950",
          titleBg: "bg-hanzo-900",
          titleText: "text-hanzo-200",
          border: "border-hanzo-900",
        };
      case "junkrat":
        return {
          bg: "bg-junkrat-950",
          titleBg: "bg-junkrat-900",
          titleText: "text-junkrat-200",
          border: "border-junkrat-900",
        };
      case "mei":
        return {
          bg: "bg-mei-950",
          titleBg: "bg-mei-900",
          titleText: "text-mei-200",
          border: "border-mei-900",
        };
      case "pharah":
        return {
          bg: "bg-pharah-950",
          titleBg: "bg-pharah-900",
          titleText: "text-pharah-200",
          border: "border-pharah-900",
        };
      case "reaper":
        return {
          bg: "bg-reaper-950",
          titleBg: "bg-reaper-900",
          titleText: "text-reaper-200",
          border: "border-reaper-900",
        };
      case "sojourn":
        return {
          bg: "bg-sojourn-950",
          titleBg: "bg-sojourn-900",
          titleText: "text-sojourn-200",
          border: "border-sojourn-900",
        };
      case "soldier-76":
        return {
          bg: "bg-soldier-76-950",
          titleBg: "bg-soldier-76-900",
          titleText: "text-soldier-76-200",
          border: "border-soldier-76-900",
        };
      case "sombra":
        return {
          bg: "bg-sombra-950",
          titleBg: "bg-sombra-900",
          titleText: "text-sombra-200",
          border: "border-sombra-900",
        };
      case "symmetra":
        return {
          bg: "bg-symmetra-950",
          titleBg: "bg-symmetra-900",
          titleText: "text-symmetra-200",
          border: "border-symmetra-900",
        };
      case "torbjorn":
        return {
          bg: "bg-torbjorn-950",
          titleBg: "bg-torbjorn-900",
          titleText: "text-torbjorn-200",
          border: "border-torbjorn-900",
        };
      case "tracer":
        return {
          bg: "bg-tracer-950",
          titleBg: "bg-tracer-900",
          titleText: "text-tracer-200",
          border: "border-tracer-900",
        };
      case "venture":
        return {
          bg: "bg-venture-950",
          titleBg: "bg-venture-900",
          titleText: "text-venture-200",
          border: "border-venture-900",
        };
      case "widowmaker":
        return {
          bg: "bg-widowmaker-950",
          titleBg: "bg-widowmaker-900",
          titleText: "text-widowmaker-200",
          border: "border-widowmaker-900",
        };
      case "ana":
        return {
          bg: "bg-ana-950",
          titleBg: "bg-ana-900",
          titleText: "text-ana-200",
          border: "border-ana-900",
        };
      case "baptiste":
        return {
          bg: "bg-baptiste-950",
          titleBg: "bg-baptiste-900",
          titleText: "text-baptiste-200",
          border: "border-baptiste-900",
        };
      case "brigitte":
        return {
          bg: "bg-brigitte-950",
          titleBg: "bg-brigitte-900",
          titleText: "text-brigitte-200",
          border: "border-brigitte-900",
        };
      case "illari":
        return {
          bg: "bg-illari-950",
          titleBg: "bg-illari-900",
          titleText: "text-illari-200",
          border: "border-illari-900",
        };
      case "juno":
        return {
          bg: "bg-juno-950",
          titleBg: "bg-juno-900",
          titleText: "text-juno-200",
          border: "border-juno-900",
        };
      case "kiriko":
        return {
          bg: "bg-kiriko-950",
          titleBg: "bg-kiriko-900",
          titleText: "text-kiriko-200",
          border: "border-kiriko-900",
        };
      case "lifeweaver":
        return {
          bg: "bg-lifeweaver-950",
          titleBg: "bg-lifeweaver-900",
          titleText: "text-lifeweaver-200",
          border: "border-lifeweaver-900",
        };
      case "lucio":
        return {
          bg: "bg-lucio-950",
          titleBg: "bg-lucio-900",
          titleText: "text-lucio-200",
          border: "border-lucio-900",
        };
      case "mercy":
        return {
          bg: "bg-mercy-950",
          titleBg: "bg-mercy-900",
          titleText: "text-mercy-200",
          border: "border-mercy-900",
        };
      case "moira":
        return {
          bg: "bg-moira-950",
          titleBg: "bg-moira-900",
          titleText: "text-moira-200",
          border: "border-moira-900",
        };
      case "zenyatta":
        return {
          bg: "bg-zenyatta-950",
          titleBg: "bg-zenyatta-900",
          titleText: "text-zenyatta-200",
          border: "border-zenyatta-900",
        };
      default:
        return {
          bg: "bg-ow-grey-950",
          titleBg: "bg-ow-grey-900",
          titleText: "text-ow-grey-200",
          border: "border-ow-grey-900",
        };
    }
  }

  const c = getColor();

  const allCounters = heroes.filter((h) => hero.counteredBy.includes(h.id));

  return (
    <>
      <div className="cursor-pointer" onClick={() => setOpen(true)}>
        {children}
      </div>
      <div
        className={`w-dvw h-dvh fixed top-0 left-0 bg-black bg-opacity-75 z-50 flex items-center justify-center backdrop-blur-md transition-opacity ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      >
        <div
          className={`max-h-96 w-80 ${c.bg} rounded-lg shadow-2xl overflow-hidden flex flex-col`}
        >
          <div className={`flex flex-row ${c.titleBg} items-center`}>
            <img src={hero.image} alt={hero.name} className="h-12 w-12" />
            <h1
              className={`text-xl font-semibold leading-5 ${c.titleText} px-3`}
            >
              Counters for {hero.name}
            </h1>
          </div>
          <div className={`w-full grid grid-cols-3 py-3 px-4 gap-2`}>
            {allCounters.length === 0 && (
              <p className={`text-center col-span-3 ${c.titleText} leading-5`}>
                No counters found. This data is based on community feedback and
                may not be accurate.
              </p>
            )}
            {allCounters.length > 0 &&
              allCounters.map((counter, i) => (
                <div
                  className={`flex flex-col items-center border ${c.titleBg} ${c.border} rounded-md overflow-hidden`}
                >
                  <img
                    src={counter.image}
                    alt={counter.name}
                    className="w-full aspect-square"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
