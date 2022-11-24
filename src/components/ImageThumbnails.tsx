import { Image } from "../data";

interface ImageThumbnailsProps {
  images: Image[];
  currentImage: Image;
  onUpdateImage: (image: Image) => void;
}

export default function ImageThumbnails({
  images,
  currentImage,
  onUpdateImage,
}: ImageThumbnailsProps) {
  return (
    <div className="thumbnails-container">
      {images.map((image) => (
        <span
          key={image.id}
          className={`${currentImage.id === image.id ? "current" : ""}`}
          onClick={() => onUpdateImage(image)}
        >
          <img src={image.thumbnailUri} alt="" />
        </span>
      ))}
    </div>
  );
}
