
// Packages
import React, { useState } from 'react';

// Utils
import { BannerImage } from '../Svgs';

function Gallery(props) {

  const [showEnlargedImage, _showEnlargedImage] = useState(false);
  const [selectedImage, _selectedImage] = useState("");

  // ****** Handler functions ******
  const handleEnlargePreview = (img) => {
    _selectedImage(img);
    _showEnlargedImage(true);
  };

  const W3_CSS_MODAL = () => (
    <div
      className={`w3-modal z-100`}
      style={{ display: showEnlargedImage ? 'block' : 'none' }}
    >
      <div className={`w-fit w3-modal-content w3-animate-bottom w3-card-4 m-auto`}> {/* Class w3-animate-zoom can also be used */}
        <div className='preview-image'>
          <img src={selectedImage} width={window?.innerWidth/1.35}/>
        </div>
      </div>
    </div>
  );

  return (
    <div id='Gallery'>
      <div className='w-full flex overflow-y-auto'>
        {
          props?.imagesArray?.map((img, index) => (
            <div className='cursor-pointer w3-hover-opacity' key={index} onClick={e => handleEnlargePreview(img)} >
              <img className='thumbnail-image' src={img} />
            </div>
          ))
        }
      </div>
      {W3_CSS_MODAL()}
    </div>
  )
}

export default React.memo(Gallery);