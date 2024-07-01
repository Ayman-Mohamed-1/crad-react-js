interface IProps{
 src: string;
 alt: string;
className: string;
}
// eslint-disable-next-line no-empty-pattern
const Image = ({src, alt, className}: IProps) => {
    return <img src={src} alt={alt} className={className} />

}
export default Image;