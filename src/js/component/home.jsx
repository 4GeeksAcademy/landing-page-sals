import React from "react";
import Jumbotron from "./jumbotron.jsx";
import Card from "./carta.jsx";
import Navbar from "./nav.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Jumbotron />
        <div className="d-flex">
          <Card
            title="Vini Jr"
            content="Vinicius Junior es un talentoso extremo brasileño, conocido por su velocidad y habilidad en el regate. Juega para el Real Madrid y es considerado una de las jóvenes promesas del fútbol mundial."
            button="Leer más..."
            src="https://sportshub.cbsistatic.com/i/r/2022/05/29/f32eb42f-aaaa-44a5-887e-b3925f5c5271/thumbnail/1200x675/1b92200f888425e8881e07ba719d22b7/vini2.jpg"
          />
          <Card
            title="Mbappe"
            content="Kylian Mbappé, delantero francés del Paris Saint-Germain, es una sensación mundial. Su velocidad deslumbrante, habilidad y capacidad goleadora lo han convertido en uno de los jugadores más destacados del fútbol actual."
            button="Leer más..."
            src="https://www.aljazeera.com/wp-content/uploads/2022/12/2022-12-18T183755Z_456710523_UP1EICI1FR57N_RTRMADP_3_SOCCER-WORLDCUP-ARG-FRA-REPORT.jpg?resize=1800%2C1800"
          />
          <Card
            title="Haaland"
            content="Erling Haaland, el delantero noruego del Manchester City, es un goleador nato con una potencia excepcional. Su capacidad para marcar goles y su juventud lo hacen uno de los jugadores más codiciados."
            button="Leer más..."
            src="https://www.debate.com.mx/__export/1684716918573/sites/debate/img/2023/05/21/erling_haaland.jpg_423682103.jpg"
          />
          <Card
            title="Messi"
            content="Lionel Messi, el icónico futbolista argentino, es considerado uno de los mejores jugadores de todos los tiempos. Con una habilidad incomparable, ha cosechado numerosos títulos y récords a lo largo de su carrera."
            button="Leer más..."
            src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt12dbddde5342ce4c/648866ff21a8556da61fa167/GOAL_-_Blank_WEB_-_Facebook_-_2023-06-13T135350.847.png?auto=webp&format=pjpg&width=3840&quality=60"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
