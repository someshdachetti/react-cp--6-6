// Write your code here
import './index.css'
const allImages = props => {
  const {imagesNames} = props
  const {imgUrl, name} = imagesNames
  return (
    <div className="images ">
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </div>
  )
}
export default allImages
