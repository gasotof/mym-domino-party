const colorVars = [
  "--red_MM",
  "--yellow_MM",
  "--blue_MM",
  "--green_MM",
  "--orange_MM",
  "--pink_MM"
];

const generateDots = (number) => {
  if (number === 0) return "";
  let dots = "";
  for (let i = 0; i < number; i++) {
    dots += `<div class='dot dot_${i}' style="--level: var(${colorVars[i]}">m</div>`;
  }
  return dots;
};

const renderDomino = (player, side, prefix) => {
  player.forEach((domino, index) => {
    const dominoContainer = document.createElement("div");
    dominoContainer.className = `domino_container_${prefix}`;

    for (let cara in domino) {
      const caraContainer = document.createElement("div");
      caraContainer.className = `face number_${domino[cara]}`;
      caraContainer.innerHTML = generateDots(domino[cara]);
      dominoContainer.appendChild(caraContainer);
    }

    if (prefix === "PLAYER") {
      dominoContainer.setAttribute("draggable", true);
    }

    side.appendChild(dominoContainer);

    setTimeout(() => {
      dominoContainer.classList.add("bounce-in");
    }, 100 * index);
  });
};

export const renderDominoes = (hands) => {
  const { PLAYER, CPU1, CPU2, CPU3 } = hands;

  const PLAYER_HAND = document.querySelector(".PLAYER");
  const CPU1_HAND = document.querySelector(".CPU1");
  const CPU2_HAND = document.querySelector(".CPU2");
  const CPU3_HAND = document.querySelector(".CPU3");

  renderDomino(PLAYER, PLAYER_HAND, "PLAYER");
  renderDomino(CPU1, CPU1_HAND, "CPU1");
  renderDomino(CPU2, CPU2_HAND, "CPU2");
  renderDomino(CPU3, CPU3_HAND, "CPU3");
};
