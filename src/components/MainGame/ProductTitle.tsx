import { Skeleton } from "../Skeleton";

export const ProductTitle = ({ title }: { title: string | undefined}) => {
  if (!title) {
    return <Skeleton height={"25"} width={"100%"} />;
  }

  return <h1 className="maingame_content_title">{title}</h1>;
};
