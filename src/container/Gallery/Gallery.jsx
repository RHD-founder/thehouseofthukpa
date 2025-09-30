import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import house from '../../assets/house.webp';
import momo from '../../assets/momo.webp';
import thukpa from '../../assets/thukpa-.webp';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      if (direction === 'left') {
        current.scrollLeft -= 300;
      } else {
        current.scrollLeft += 300;
      }
    }
  };

  const galleryImages = [
    { src: house, alt: 'House of Thukpa' },
    { src: momo, alt: 'Delicious Momos' },
    { src: thukpa, alt: 'Authentic Thukpa' },
  ];

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Our Gallery" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>
          Experience the authentic flavors and warm ambiance of House of Thukpa through our gallery.
        </p>
        <button type="button" className="custom__button">View Menu</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <a 
                href="https://www.instagram.com/thukpa2025/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="gallery__image-link"
                aria-label="View on Instagram"
              >
                <BsInstagram className="gallery__image-icon" />
              </a>
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort 
            className="gallery__arrow-icon" 
            onClick={() => scroll('left')} 
            aria-label="Scroll left"
          />
          <BsArrowRightShort 
            className="gallery__arrow-icon" 
            onClick={() => scroll('right')} 
            aria-label="Scroll right"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
