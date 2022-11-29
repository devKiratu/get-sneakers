import image1 from "./images/image-product-1.jpg";
import image2 from "./images/image-product-2.jpg";
import image3 from "./images/image-product-3.jpg";
import image4 from "./images/image-product-4.jpg";
import thumbnail1 from "./images/image-product-1-thumbnail.jpg";
import thumbnail2 from "./images/image-product-2-thumbnail.jpg";
import thumbnail3 from "./images/image-product-3-thumbnail.jpg";
import thumbnail4 from "./images/image-product-4-thumbnail.jpg";

export interface ProductData {
  id: string;
  maker: string;
  title: string;
  description: string;
  price: number;
  discount?: string;
  oldPrice?: number;
  images: Image[];
}

export interface Image {
  id: string;
  imageUri: string;
  thumbnailUri?: string;
}

const sneakerData: ProductData = {
  id: "1",
  maker: "sneaker company",
  title: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 125.0,
  discount: "50%",
  oldPrice: 250,
  images: [
    {
      id: "1",
      imageUri: image1,
      thumbnailUri: thumbnail1,
    },
    {
      id: "2",
      imageUri: image2,
      thumbnailUri: thumbnail2,
    },
    {
      id: "3",
      imageUri: image3,
      thumbnailUri: thumbnail3,
    },
    {
      id: "4",
      imageUri: image4,
      thumbnailUri: thumbnail4,
    },
  ],
};

export default sneakerData;
