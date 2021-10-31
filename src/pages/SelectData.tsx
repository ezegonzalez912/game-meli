import { useContext } from "react"
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext"
import { useData } from "../hooks/useData";
import { Category, Site } from "../types/types"
import { SelectDataList } from "../components/SelectDataList";
import logo from "../assets/logo.png";

export const SelectData = () => {

    const {data, setData} = useContext(DataContext);
    const {sites, categories} = useData(data);
    
    const changeSite = (site: Site) => {
        setData({site, category: {id: "", name: ""}});
    }
    const changeCategory = (category: Category) => setData({...data, category})

    const { site, category } = data;

    if(!sites) return <p>Load...</p>

    return (
        <>
            <div className="select-data_container">
                <img src={logo} alt="icon" style={{padding:"10px"}}/>
                <SelectDataList 
                    title="Selecciona tu pais"
                    list={sites}
                    item={site}
                    changeFunction={changeSite}
                />
                {
                    categories && <SelectDataList 
                        title="Selecciona una Categoria"
                        list={categories}
                        item={category}
                        changeFunction={changeCategory}
                    />
                }
                {
                    (site.id !== "" && category.id !== "") &&
                    <Link className="btn" to={`/site/${site.id}/category/${category.id}`}>Comenzar a jugar!</Link>
                }
            </div>
        </>
    )
}
