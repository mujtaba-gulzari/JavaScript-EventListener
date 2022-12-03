/*
This is a code for playing around with Event Listeners and different Element events to explore.
The credit for the css file goes to Morten Rand-Hendriksen for an amazing JavaScript course on LinkedIn Learning.
*/
const gridContainer = document.querySelector(".grid");

gridContainer.addEventListener("mouseenter", () => {
  gridContainer.style.outline = "3px solid green";
});

gridContainer.addEventListener("mouseleave", () => {
  gridContainer.style.outline = "";
});

const gridCells = document.querySelectorAll(".cell");

const randColor = () => {
  let hexColor = Math.floor(Math.random() * 16777215).toString(16);
  return hexColor;
};

gridCells.forEach((cell) => {
  cell.addEventListener(
    "mouseenter",
    () => {
      console.log();
      cell.style.outline = "2px solid violet";
    },
    false
  );

  cell.addEventListener("mouseleave", () => {
    cell.style.outline = "";
  });

  cell.addEventListener("click", (e) => {
    if (cell.style.backgroundColor) {
      cell.style.backgroundColor = "";
    } else {
      cell.style.backgroundColor = `#${randColor()}`;
      console.log(e);
    }
  });
});
