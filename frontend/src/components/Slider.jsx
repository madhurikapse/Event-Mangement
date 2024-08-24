import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import "./slider.css"
function Slider() {
    const images = [
        
        { url: "https://cheetah.cherishx.com/uploads/1626351396_large.jpg" },
         { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgRsjHk5QkzWZWustrSh_TRZH-iJRE_ImXg&s" },
          { url: "https://5.imimg.com/data5/SELLER/Default/2024/2/383902200/BB/LU/IO/4494602/baby-shower-grand-decoration.png" }, 
          { url: "https://static.punjabkesari.in/multimedia/13_02_573533566colorful-decor-1.jpg" },
        {url:"https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg"},
       {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2HRNZUGpBPjjxCECmVRfj7gsbUWZ39eejQ&s"} ,
       {url:"https://www.weddingsutra.com/images/Vendor_Images/Wedding_Planners/q-events/q-events%20(11).jpg"},
       {url:"https://www.rockstarevents.in/uploads/gallery/rockstar-events-29122019015718.jpg"}

    
    ];
  return (
    <div>
      <SimpleImageSlider
        width={1296}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
       <video style={{backgroundColor:"gray"}} width="1250" height="500" loop muted autoPlay controls>
      <source src="https://v.ftcdn.net/05/97/11/51/700_F_597115192_xxt6VAZ8gVePK2JgE1P2toiqtSmjSkdR_ST.mp4" type="video/mp4"/>
     </video>
    </div>
  )
}

export default Slider
