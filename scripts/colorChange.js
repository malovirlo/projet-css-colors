const colorChange = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const colorDivs = document.querySelectorAll(".color");
    document.body.style.transition = "background-image 5s ease-in-out";
    document.body.style.backgroundImage = "linear-gradient(black, grey)";

    colorDivs.forEach((div) => {
      div.addEventListener("click", () => {
        let gradient;
        switch (div.classList[1]) {
          case "black":
            gradient = "linear-gradient(black, grey)";
            break;

          case "red":
            gradient = "linear-gradient(black, red)";
            break;

          case "green":
            gradient = "linear-gradient(black, green)";
            break;

          case "blue":
            gradient = "linear-gradient(black, blue)";
            break;

          case "orange":
            gradient = "linear-gradient(black, orange)";
            break;
        }
        document.body.style.backgroundImage = gradient;
      });
    });
  });
};

export { colorChange };
