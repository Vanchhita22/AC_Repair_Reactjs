import React from 'react';
import support from '../Asserts/images/support.png';
import image1 from '../Asserts/images/image-1.png';
import image2 from '../Asserts/images/image-2.png';
import acimage from '../Asserts/images/ac page.png';
import '../Asserts/styles/content.css';

function AcImage() {
  return (
    <div className="ac-image">
      <div className="Ac">
        <img src={support} alt="Support" />
        <img src={image1} alt="image1" />
        <img src={image2} alt="image2" />
      </div>
      <img src={acimage} alt="" />
    </div>
  );
}

export default AcImage;
