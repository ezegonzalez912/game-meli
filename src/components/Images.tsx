import { useEffect, useState } from "react"
import { Image } from "../types/types"

interface Props {
    id: string | undefined;
    thumbnail: string | undefined;
}

export const Images: React.FC<Props>= ({id, thumbnail}) => {

    const [images, setImages] = useState<Image[] | null>(null)

    useEffect(() => {
        fetch(`https://api.mercadolibre.com/products/${id}`)
        .then(res => res.json())
        .then(res => setImages(res.pictures))
    }, [id])

    return (
        <>
            <img className="maingame_img" src={images ? images[0].url : thumbnail} alt={thumbnail} />
        </>
    )
}
