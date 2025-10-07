import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">At House of Thukpa, we believe food is more than just taste — it’s a journey of culture, comfort, and connection. Our mission is to bring the authentic flavors of Tibetan cuisine to Guwahati, blending tradition with local inspiration.</p>
        
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.meat} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">The House of Thukpa was born out of a simple idea — to bring the authentic taste of Tibetan comfort food to the heart of Guwahati. What began as a small neighborhood eatery in Chandmari, Krishna Nagar, quickly grew into a popular spot loved by students, families, and working professionals alike.</p>
        
      </div>
    </div>
  </div>
);

export default AboutUs;
