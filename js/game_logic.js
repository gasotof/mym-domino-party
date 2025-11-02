import { getDominoes, getShuffle, getHighestDouble } from "./utils.js";
export let TURNS = [];

export const gameSetUp = () => {
  const getShuffledDominoes = getShuffle(getDominoes());

  const PLAYER = getShuffledDominoes.slice(0, 7);
  const CPU1 = getShuffledDominoes.slice(7, 14);
  const CPU2 = getShuffledDominoes.slice(14, 21);
  const CPU3 = getShuffledDominoes.slice(21, 28);

  const gameHands = [...PLAYER, ...CPU1, ...CPU2, ...CPU3];
  const highestDouble = getHighestDouble(gameHands);

  const startingPlayer = () => {
    if (highestDouble.index > 21) return "CPU3";
    if (highestDouble.index > 14) return "CPU2";
    if (highestDouble.index > 7) return "CPU1";
    return "PLAYER";
  };

  const gameTurns = (starting) => {
    if (starting === "PLAYER") TURNS = ["PLAYER", "CPU1", "CPU2", "CPU3"];
    if (starting === "CPU1") TURNS = ["CPU1", "CPU2", "CPU3", "PLAYER"];
    if (starting === "CPU2") TURNS = ["CPU2", "CPU3", "PLAYER", "CPU1"];
    if (starting === "CPU3") TURNS = ["CPU3", "PLAYER", "CPU1", "CPU2"];
  };

  return {
    PLAYER,
    CPU1,
    CPU2,
    CPU3,
    TURNS: gameTurns(startingPlayer()),
  };
};
