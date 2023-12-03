// import React from 'react'
// import { useState } from 'react'


// const url = ["https://c4.wallpaperflare.com/wallpaper/86/419/788/random-green-hd-wallpaper-preview.jpg",
//             "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a7d5d4b-06c2-4bc6-a2cf-db6f575a65a2/d87vjsu-f0cfd4be-2ba1-4bd2-b8e2-38b15adc7aca.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBhN2Q1ZDRiLTA2YzItNGJjNi1hMmNmLWRiNmY1NzVhNjVhMlwvZDg3dmpzdS1mMGNmZDRiZS0yYmExLTRiZDItYjhlMi0zOGIxNWFkYzdhY2EucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.oTs5KlpemPDvkOpfP9y16IwkuZi-XGM49X0Tn0kibgo",
//             "https://img.freepik.com/premium-photo/3d-style-random-abstract-futuristic-technology-graphic-banner-background-wallpaper-generative-ai_159242-26298.jpg?w=2000",
//             "https://wallpapersmug.com/download/1024x768/56941d/random-spikes-abstract-texture.jpg"]


// function ImageSlider() {
//     const [image , setImage] = useState([1])
//     const previousImage = () => {
//         if(image === 0) setImage(url.length - 1)
//         else setImage(image - 1);
//     }
//     const nextImage = () => {
//         setImage((image + 1) % url.length);
//     };

//   return (
//     <div>
//         <button onClick={previousImage}>preview</button>
//         <img src= {url[image]} alt="wallpaper" style = {{width:"500px"}} ></img>
//         <button onClick = {nextImage}>next</button>

//     </div>
//   );
// };

// export default ImageSlider;