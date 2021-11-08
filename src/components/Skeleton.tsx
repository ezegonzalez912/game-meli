import ContentLoader from 'react-content-loader';

interface Props {
    width: string;
    height: string;
}

export const Skeleton:React.FC<Props> = ({width, height}) => {
    return (
        <ContentLoader height={height} width={width}>
            <rect x="0" y="5" rx="4" ry="4" width="100%" height="100%" />
        </ContentLoader>
    )
}