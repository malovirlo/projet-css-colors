const colorChange = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const colorDivs = document.querySelectorAll(".color");
        const images = document.querySelectorAll(".imagekibouge"); // Correction ici

        const colorClasses = ["black", "red", "green", "blue", "orange"];

        colorDivs.forEach((div) => {
            div.onclick = () => {
                // Masquer toutes les images au début
                images.forEach((image) => {
                    image.style.display = "none";
                });

                // Obtenir la couleur à partir de la classe de l'élément cliqué
                const color = div.classList[1];

                // Retirer toutes les classes de couleur du body
                document.body.classList.remove(...colorClasses);

                // Ajouter la nouvelle classe de couleur au body
                document.body.classList.add(color);
                switch (color) {
                    case "black":
                        document.querySelector(".soucoupe").style.display =
                            "block";
                        break;

                    case "red":
                        document.querySelector(".soucoupe").style.display =
                            "block";
                        break;

                    case "green":
                        document.querySelector(".soucoupe").style.display =
                            "block";
                        break;

                    case "blue":
                        document.querySelector(".bateau").style.display =
                            "block";
                        break;

                    case "orange":
                        document.querySelector(".voiture").style.display =
                            "block";
                        break;
                }
            };
        });
    });
};

export { colorChange };
