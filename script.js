import { gameSetUp } from './js/game_logic.js';
import { renderDominoes } from './js/render.js';

const hands = gameSetUp();
renderDominoes(hands);
