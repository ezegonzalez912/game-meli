import { useContext, useEffect } from "react";
import { db } from "../../context/firebase/config";
import { firebaseContext } from "../../context/firebase/firebaseContext";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { scoreboardContext } from "../../context/scoreboard";
import { modalContext } from "../../context/modal/modalContext";
import { Category, Product, Site } from "../../types/types";
import { useScoreboard } from "../../hooks/useScoreboard";

interface Props {
  points: number;
  setProducts: (products: Product[]) => void;
  site: Site;
  categories: Category[];
}

const namespace = "finish-game";

export const FinishGame: React.FC<Props> = ({
  points,
  setProducts,
  site,
  categories,
}) => {
  const { user } = useContext(firebaseContext);
  const { handleOpenModal } = useContext(modalContext);
  const { scoreboard, setScoreboard } = useContext(scoreboardContext);

  const linkTwitter = `https://twitter.com/intent/tweet?text=%C2%A1Hice%20${points}%20puntos%20en%20precio%20justo!%20Juega%20en%3A&url=https%3A%2F%2Fezegonzalez912.github.io%2Fgame-meli%2F`;

  const addScore = async (data: any) => {
    addDoc(collection(db, "data"), data)
      .then(() => {
        const sortedList = [...scoreboard, data].sort((a: any, b: any) =>
          a.maxScore >= b.maxScore ? -1 : 1
        );
        setScoreboard(sortedList);
      })
      .catch((err) => console.log("todo mal", err));
  };

  const updateScore = async (points: any, userData: any) => {
    updateDoc(doc(db, "data", userData.id), {
      maxScore: points,
      country: site,
      categories: categories,
    }).then(() => {
      const newScoreboard = scoreboard.map((data: any) =>
        data.id === userData.id
          ? { ...data, maxScore: points, country: site, categories: categories }
          : data
      );
      const sortedList = newScoreboard.sort((a: any, b: any) =>
        a.maxScore >= b.maxScore ? -1 : 1
      );
      setScoreboard(sortedList);
      setScoreboard(newScoreboard);
    });
  };

  useEffect(() => {
    if (user) {
      const userData = scoreboard.find((data: any) => data.userId === user.uid);
      if (userData) {
        if (userData.maxScore < points) {
          updateScore(points, userData);
        }
      } else {
        const data = {
          maxScore: points,
          country: site,
          userId: user.uid,
          username: user.displayName,
          categories: categories,
        };
        addScore(data);
      }
    }
    // eslint-disable-next-line
  }, [user]);

  const scrollToBottom = () =>
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });

  const resetGame = () => setProducts([]);

  const { position, maxScore } = useScoreboard(scoreboard, user);

  return (
    <div className={`${namespace}__container`}>
      <h1 className={`${namespace}__title`}>Fin del juego</h1>
      <h2 className={`${namespace}__subtitle`}>
        Puntos: <b>{points}</b>
      </h2>
      <div className={`${namespace}__content`}>
        {user ? (
          <>
            <p className={`${namespace}__text-info`}>
              Maximo puntaje alcanzado: {points > maxScore ? points : maxScore}
            </p>
            <div className={`${namespace}__buttons`}>
              <button className="btn" onClick={resetGame}>
                Volver a jugar
              </button>
              <button className="btn btn-secondary" onClick={scrollToBottom}>
                Putuaciones
              </button>
            </div>
            <p className={`${namespace}__position`}>
              {position !== 0 ? `¡Estas en la posición n°${position}!` : `...`}
            </p>
            <a href={linkTwitter} target="_blank" rel="noreferrer">Compartir puntaje en twitter</a>
          </>
        ) : (
          <>
            <p className={`${namespace}__text-info`}>
              Inicia sesion para guardar tu puntaje
            </p>
            <div className={`${namespace}__buttons`}>
              <button className="btn" onClick={resetGame}>
                Volver a jugar
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => handleOpenModal()}
              >
                Iniciar sesion
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
