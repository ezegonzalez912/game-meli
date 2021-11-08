import { Link } from "react-router-dom";
import { Site } from "../types/types";
import logo from '../assets/logo.png'
import { useSite } from "../hooks/useSite";

export const SelectCountry = () => {

    const sites = useSite();

    if(!sites) return null;

    return (
        <div className="select-data_container">
            <img src={logo} alt="icon" style={{padding:"10px"}}/>
            <h1>Selecciona tu país</h1>
            <div className="select-data_container_options">
                {
                    sites.map((site:Site) => (
                        <Link key={site.id} to={`/${site.id}`}>
                            {site.name}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
