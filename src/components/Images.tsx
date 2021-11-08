import { useEffect, useState } from "react"
import { getImages } from "../services/getImages"
import { Image } from "../types/types"

interface Props {
    id: string | undefined;
    thumbnail: string | undefined;
}

export const Images: React.FC<Props>= ({id, thumbnail}) => {

    const [images, setImages] = useState<Image[] | null>(null)

    useEffect(() => {
        getImages(id)
        .then(res => res ? setImages(res.pictures) : setImages(null))
    }, [id])

    return (
        <>
            <img className="maingame_img" src={images ? images[0].url : thumbnail} alt={thumbnail} />
        </>
    )
}
