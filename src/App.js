import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from "react-image-gallery";
/*import cat from './imgs/cat.jpg';
import kitten from './imgs/kitten.jpg';
import thecat from './imgs/thecat.jpg';*/

 
const importAll=(r)=>r.keys().map(r);
const images=importAll(require.context('./imgs',false,/\.(jpg)$/));


function App() {
  const imageItems=images.map((image,index)=>({
    original:image,
    thumbnail:image,
  }))
  /*const images = [
    {
      original: cat,
      thumbnail: cat,
    },
    {
      original: kitten,
      thumbnail:kitten,
    },
    {
      original: thecat,
      thumbnail: thecat
    }
  ];*/


  return (
   <>
      {/*<ImageGallery items={images} />;*/}
      <ImageGallery items={imageItems} />;
   </>
  );
}

export default App;
