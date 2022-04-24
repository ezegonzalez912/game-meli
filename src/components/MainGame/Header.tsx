import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

interface Props {
   points: number;
   productNumber: number;
}

export const Header:React.FC<Props> = ({points, productNumber}) => {
  return (
   <nav className="navbar_container">
      <Link to="/">
         <img src={logo} alt="MercadoLibre-Logo" />
      </Link>
      <p>
      <span className="navbar_container__data">
         {productNumber}/10
      </span>
      Puntos: <b>{points} </b>
      </p>
   </nav>
  )
}
