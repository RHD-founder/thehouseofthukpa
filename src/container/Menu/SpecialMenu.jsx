import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    {/* Bordoloi’s Assamese Thali Section on top */}
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_bordoloi flex__center">
        <p className="app__specialMenu-menu_heading">Bordoloi’s Assamese Thali</p>
        <div className="app__specialMenu_menu_items">
          {data.bordoloisThalis && data.bordoloisThalis.map((item, index) => (
            <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
          ))}
        </div>
      </div>
    </div>

    {/* Authentic Naga Thali Section below Bordoloi’s */}
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_naga flex__center">
        <p className="app__specialMenu-menu_heading">Authentic Naga Thali</p>
        <div className="app__specialMenu_menu_items">
          {data.nagaThalis && data.nagaThalis.map((item, index) => (
            <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
          ))}
        </div>
      </div>
    </div>

    {/* Starters Section (placed right below Naga Thali) */}
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_starters flex__center">
        <div className="app__specialMenu-section_header">
          <p className="app__specialMenu-menu_heading">Starters</p>
        </div>
        <div className="app__specialMenu-menu_row">
          <div className="app__specialMenu-menu_column">
            <p className="app__specialMenu-subheading">Veg</p>
            <div className="app__specialMenu_menu_items">
              {data.startersVeg && data.startersVeg.map((item, index) => (
                <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
              ))}
            </div>
          </div>
          <div className="app__specialMenu-menu_column">
            <p className="app__specialMenu-subheading">Non-Veg</p>
            <div className="app__specialMenu_menu_items">
              {data.startersNonVeg && data.startersNonVeg.map((item, index) => (
                <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Breads Section */}
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_breads flex__center">
        <div className="app__specialMenu-section_header">
          <p className="app__specialMenu-menu_heading">Breads</p>
        </div>
        <div className="app__specialMenu-menu_row">
          <div className="app__specialMenu-menu_column">
            <p className="app__specialMenu-subheading">Roti</p>
            <div className="app__specialMenu_menu_items">
              {data.breadsRoti && data.breadsRoti.map((item, index) => (
                <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
              ))}
            </div>
          </div>
          <div className="app__specialMenu-menu_column">
            <p className="app__specialMenu-subheading">Naan</p>
            <div className="app__specialMenu_menu_items">
              {data.breadsNaan && data.breadsNaan.map((item, index) => (
                <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
              ))}
            </div>
          </div>
          <div className="app__specialMenu-menu_column">
            <p className="app__specialMenu-subheading">Kulcha</p>
            <div className="app__specialMenu_menu_items">
              {data.breadsKulcha && data.breadsKulcha.map((item, index) => (
                <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
              ))}
            </div>
          </div>
          <div className="app__specialMenu-menu_column">
            <p className="app__specialMenu-subheading">Paratha</p>
            <div className="app__specialMenu_menu_items">
              {data.breadsParatha && data.breadsParatha.map((item, index) => (
                <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Main Course Section */}
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_main flex__center">
        <div className="app__specialMenu-section_header">
          <p className="app__specialMenu-menu_heading">Main Course</p>
        </div>
        <div className="app__specialMenu-menu_row">
          <div className="app__specialMenu-menu_column">
            <p className="app__specialMenu-subheading">Veg</p>
            <div className="app__specialMenu_menu_items">
              {data.mainVeg && data.mainVeg.map((item, index) => (
                <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
              ))}
            </div>
          </div>
          <div className="app__specialMenu-menu_column">
            <p className="app__specialMenu-subheading">Non-Veg</p>
            <div className="app__specialMenu_menu_items">
              {data.mainNonVeg && data.mainNonVeg.map((item, index) => (
                <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
              ))}
            </div>
          </div>
          <div className="app__specialMenu-menu_column">
            <p className="app__specialMenu-subheading">Pork</p>
            <div className="app__specialMenu_menu_items">
              {data.mainPork && data.mainPork.map((item, index) => (
                <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
              ))}
            </div>
          </div>
          <div className="app__specialMenu-menu_column">
            <p className="app__specialMenu-subheading">Fish</p>
            <div className="app__specialMenu_menu_items">
              {data.mainFish && data.mainFish.map((item, index) => (
                <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
              ))}
            </div>
          </div>
          <div className="app__specialMenu-menu_column">
            <p className="app__specialMenu-subheading">Mutton</p>
            <div className="app__specialMenu_menu_items">
              {data.mainMutton && data.mainMutton.map((item, index) => (
                <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
              ))}
            </div>
          </div>
          <div className="app__specialMenu-menu_column">
            <p className="app__specialMenu-subheading">Duck</p>
            <div className="app__specialMenu_menu_items">
              {data.mainDuck && data.mainDuck.map((item, index) => (
                <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Drinks Section */}
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>
      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
