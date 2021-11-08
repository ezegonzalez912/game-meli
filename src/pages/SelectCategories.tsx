import { useState } from "react";
import { useHistory, useParams } from 'react-router';
import { Link } from "react-router-dom";
import { Category } from "../types/types";
import logo from '../assets/logo.png'
import { useCategories } from "../hooks/useCategories";

export const SelectCategories = () => {

    const history = useHistory();
    const { idSite }  = useParams<{idSite: string}>();

    const [myCategories, setMyCategories] = useState<Category[]>([])
    
    const categories = useCategories();    
    
    const handleClick = () => {
        let url = `/site/${idSite}/categories?`;
        myCategories.map((category:Category, index) => (
            index === 0 ? url = `${url}q=${category.id}` : url = `${url}&q=${category.id}`
        ))
        history.push(url)
    }

    const selectCategoty = (category:Category) => {
        if(myCategories.length < 3) setMyCategories([...myCategories, category])
        if(myCategories.includes(category)) setMyCategories(myCategories.filter(item => item !== category))
    }

    if(!categories) return null;

    return (
        <div className="select-data_container">
            <img src={logo} alt="icon" style={{padding:"10px"}}/>
            <h1>Selecciona un máximo de 3 categorías</h1>
            <div className="select-data_container_options">
                {
                    categories.map((category:Category) => (
                        <button 
                            key={category.id} 
                            className={`${myCategories.includes(category) ? "select-data_button-active" : ""}`}
                            onClick={() => selectCategoty(category)}
                        >
                            {category.name}
                        </button>
                    ))
                }
            </div>
            {
                myCategories.length === 0 
                ? <Link className="btn" to={`/`}>Seleccionar país</Link>
                : <button className="btn" onClick={handleClick}>¡Comenzar a jugar!</button>
            }
        </div>
    )
}

