import { Category, Site } from "../../types/types"

interface Props {
    title: string;
    list: Array<Category | Site>;
    item: Category | Site;
    changeFunction: (item:Category | Site) => void;
}

export const SelectDataList: React.FC<Props>= ({title, list, item: itemP, changeFunction}) => {

    return (
        <>
            <h1>{title}</h1>
            <div className="select-data_container_options">
                {
                    list.map((item:Category | Site) => (
                        <button 
                            key={item.id} 
                            onClick={() => changeFunction(item)}
                            className={`${(item.id === itemP.id) ? "select-data_button-active" : ""}`}
                        >
                            {item.name}
                        </button>
                    ))
                }
            </div>
        </>
    )
}
