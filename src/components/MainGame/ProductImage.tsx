import { useEffect, useState } from "react";
import { getImages } from "../../services/getImages";
import { Skeleton } from "../Skeleton";

interface Props {
  id: string | undefined;
  thumbnail: string;
}

export const ProductImage: React.FC<Props> = ({ id, thumbnail }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    getImages(id).then((res) => {
      let url;
      res === null ? (url = res.pictures[0].url) : (url = thumbnail);
      setImageUrl(url);
    });
  }, [id, thumbnail]);

  if (!imageUrl) {
    return <Skeleton height={"220"} width={"100%"} />;
  }

  return <img className="maingame_img" src={imageUrl} alt={thumbnail} />;
};
