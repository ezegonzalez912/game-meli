import { useContext, useState } from "react";
import { firebaseContext } from "../../context/firebase/firebaseContext";
import { modalContext } from "../../context/modal/modalContext";
import { Product } from "../../types/types";
import userIMG from '../../assets/user.png';

interface Props {
  setProducts: (products: Product[]) => void;
}

const namespace = "scoreboard";

export const HeaderScoreboard: React.FC<Props> = ({ setProducts }) => {
  const { user, logoutUser } = useContext(firebaseContext);
  const { handleOpenModal } = useContext(modalContext);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleLogout = () => {
    logoutUser();
    setProducts([]);
  };

  return (
    <header className={`${namespace}-header`}>
      <h1>Puntuaciones</h1>
      <section>
        {user ? (
          <>
            <p>{user.displayName}</p>
            <img
              onClick={() => setShowMenu(!showMenu)}
              src={user.photoURL || userIMG}
              alt={`Foto de ${user.displayName}`}
              style={{ borderBottomRightRadius: showMenu ? "3px" : "50%" }}
            />
            {showMenu && (
              <div>
                <button onClick={handleLogout}>Cerrar sesión</button>
              </div>
            )}
          </>
        ) : (
          <button onClick={() => handleOpenModal()} className="btn">Inicia sesión</button>
        )}
      </section>
    </header>
  );
};
