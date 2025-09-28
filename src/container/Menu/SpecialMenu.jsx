import React, { useState, useEffect } from 'react';
import { SubHeading } from '../../components';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import { data, dataThukpa } from '../../constants';
import MenuItem from '../../components/Menuitem/Menuitem';
import './SpecialMenu.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SpecialMenu = () => {
  const [brand, setBrand] = useState('bordoloi'); // 'bordoloi' | 'thukpa'
  const [orderItems, setOrderItems] = useState(() => {
    // Load cart from localStorage if available
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(orderItems));
  }, [orderItems]);

  // Custom toast styles
  const toastStyle = {
    background: '#0C0B08',
    color: '#DCCA87',
    borderRadius: '4px',
    borderLeft: '4px solid #DCCA87',
    fontFamily: 'Cormorant Upright, serif',
    fontSize: '16px',
    padding: '12px 20px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
  };

  // Add item to order
  const handleAddToOrder = (newItem) => {
    setOrderItems(prevItems => {
      // Check if item already exists in order
      const existingItemIndex = prevItems.findIndex(
        item => item.title === newItem.title && item.price === newItem.price
      );
      
      if (existingItemIndex >= 0) {
        // Update quantity if item exists
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += newItem.quantity;
        updatedItems[existingItemIndex].total =
          updatedItems[existingItemIndex].price * updatedItems[existingItemIndex].quantity;
        
        // Show custom toast notification
        toast(
          <div className="custom-toast">
            <span style={{color: '#DCCA87'}}>✓</span> Updated {newItem.title} in cart
          </div>,
          {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeButton: false,
            style: toastStyle,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            className: 'custom-toast-container'
          }
        );
        
        return updatedItems;
      } else {
        // Show custom toast notification
        toast(
          <div className="custom-toast">
            <span style={{color: '#DCCA87'}}>✓</span> Added {newItem.title} to cart
          </div>,
          {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeButton: false,
            style: toastStyle,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            className: 'custom-toast-container'
          }
        );
        
        // Add new item with a unique ID
        return [...prevItems, { ...newItem, id: `${newItem.title}-${Date.now()}` }];
      }
    });
  };

  // Update item quantity in order
  const handleUpdateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    
    setOrderItems(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems[index].quantity = newQuantity;
      updatedItems[index].total = updatedItems[index].price * newQuantity;
      return updatedItems;
    });
  };

  // Remove item from order
  const handleRemoveItem = (index) => {
    setOrderItems(prevItems => prevItems.filter((_, i) => i !== index));
  };

  // Clear entire order
  const handleClearOrder = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      setOrderItems([]);
      toast.info('Cart cleared', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  };

  // Handle order placement
  const handlePlaceOrder = async (orderDetails) => {
    try {
      // Here you would typically send the order to your backend
      console.log('Order details:', orderDetails);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast.success('Order placed successfully!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      
      // Clear the cart after successful order
      setOrderItems([]);
      return Promise.resolve();
    } catch (error) {
      console.error('Order placement error:', error);
      toast.error('Failed to place order. Please try again.', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      return Promise.reject(error);
    }
  };

  // Helper function to get cart item count
  const getCartItemCount = (title, price) => {
    const item = orderItems.find(item => 
      item.title === title && item.price === price
    );
    return item ? item.quantity : 0;
  };

  const priceNumber = (priceStr) => parseFloat(String(priceStr).replace(/[^0-9.-]+/g, '') || 0);

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <ToastContainer />
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palatte" />
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>

      {/* Brand Toggle */}
      <div className="app__specialMenu-toggle">
        <button
          type="button"
          className={`toggle__btn ${brand === 'bordoloi' ? 'active' : ''}`}
          onClick={() => setBrand('bordoloi')}
        >
          Bordoloi’s
        </button>
        <button
          type="button"
          className={`toggle__btn ${brand === 'thukpa' ? 'active' : ''}`}
          onClick={() => setBrand('thukpa')}
        >
          Thukpa
        </button>
      </div>

      <div className="app__specialMenu-content">
        {brand === 'bordoloi' ? (
          <>
            {/* Bordoloi’s Assamese Thali */}
            <div className="app__specialMenu-menu">
              <div className="app__specialMenu-menu_bordoloi flex__center">
                <div className="app__specialMenu-section_header">
                  <p className="app__specialMenu-menu_heading">Bordoloi’s Assamese Thali</p>
                </div>
                <div className="app__specialMenu_menu_items">
                  {data.bordoloisThalis && data.bordoloisThalis.map((item, index) => (
                    <MenuItem 
                      key={item.title + index}
                      title={item.title}
                      price={item.price}
                      tags={item.tags}
                      onAddToOrder={handleAddToOrder}
                      cartItemCount={getCartItemCount(item.title, priceNumber(item.price))}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Authentic Naga Thali */}
            <div className="app__specialMenu-menu">
              <div className="app__specialMenu-menu_naga flex__center">
                <div className="app__specialMenu-section_header">
                  <p className="app__specialMenu-menu_heading">Authentic Naga Thali</p>
                </div>
                <div className="app__specialMenu_menu_items">
                  {data.nagaThalis && data.nagaThalis.map((item, index) => (
                    <MenuItem 
                      key={item.title + index}
                      title={item.title}
                      price={item.price}
                      tags={item.tags}
                      onAddToOrder={handleAddToOrder}
                      cartItemCount={getCartItemCount(item.title, priceNumber(item.price))}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Starters */}
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
                        <MenuItem 
                          key={item.title + index}
                          title={item.title}
                          price={item.price}
                          tags={item.tags}
                          onAddToOrder={handleAddToOrder}
                          cartItemCount={getCartItemCount(item.title, priceNumber(item.price))}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="app__specialMenu-menu_column">
                    <p className="app__specialMenu-subheading">Non-Veg</p>
                    <div className="app__specialMenu_menu_items">
                      {data.startersNonVeg && data.startersNonVeg.map((item, index) => (
                        <MenuItem 
                          key={item.title + index}
                          title={item.title}
                          price={item.price}
                          tags={item.tags}
                          onAddToOrder={handleAddToOrder}
                          cartItemCount={getCartItemCount(item.title, priceNumber(item.price))}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Breads */}
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
                        <MenuItem 
                          key={item.title + index}
                          title={item.title}
                          price={item.price}
                          tags={item.tags}
                          onAddToOrder={handleAddToOrder}
                          cartItemCount={getCartItemCount(item.title, priceNumber(item.price))}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="app__specialMenu-menu_column">
                    <p className="app__specialMenu-subheading">Naan</p>
                    <div className="app__specialMenu_menu_items">
                      {data.breadsNaan && data.breadsNaan.map((item, index) => (
                        <MenuItem 
                          key={item.title + index}
                          title={item.title}
                          price={item.price}
                          tags={item.tags}
                          onAddToOrder={handleAddToOrder}
                          cartItemCount={getCartItemCount(item.title, priceNumber(item.price))}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="app__specialMenu-menu_column">
                    <p className="app__specialMenu-subheading">Kulcha</p>
                    <div className="app__specialMenu_menu_items">
                      {data.breadsKulcha && data.breadsKulcha.map((item, index) => (
                        <MenuItem 
                          key={item.title + index}
                          title={item.title}
                          price={item.price}
                          tags={item.tags}
                          onAddToOrder={handleAddToOrder}
                          cartItemCount={getCartItemCount(item.title, priceNumber(item.price))}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="app__specialMenu-menu_column">
                    <p className="app__specialMenu-subheading">Paratha</p>
                    <div className="app__specialMenu_menu_items">
                      {data.breadsParatha && data.breadsParatha.map((item, index) => (
                        <MenuItem 
                          key={item.title + index}
                          title={item.title}
                          price={item.price}
                          tags={item.tags}
                          onAddToOrder={handleAddToOrder}
                          cartItemCount={getCartItemCount(item.title, priceNumber(item.price))}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Course */}
            <div className="app__specialMenu-menu">
              <div className="app__specialMenu-menu_main flex__center">
                <div className="app__specialMenu-section_header">
                  <p className="app__specialMenu-menu_heading">Main Course</p>
                </div>
                <div className="app__specialMenu-menu_row">
                  {[
                    { key: 'Veg', list: data.mainVeg },
                    { key: 'Non-Veg', list: data.mainNonVeg },
                    { key: 'Pork', list: data.mainPork },
                    { key: 'Fish', list: data.mainFish },
                    { key: 'Mutton', list: data.mainMutton },
                    { key: 'Duck', list: data.mainDuck },
                  ].map(({ key, list }) => (
                    <div className="app__specialMenu-menu_column" key={key}>
                      <p className="app__specialMenu-subheading">{key}</p>
                      <div className="app__specialMenu_menu_items">
                        {list && list.map((item, index) => (
                          <MenuItem 
                            key={item.title + index}
                            title={item.title}
                            price={item.price}
                            tags={item.tags}
                            onAddToOrder={handleAddToOrder}
                            cartItemCount={getCartItemCount(item.title, priceNumber(item.price))}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Rice & Noodles */}
            <div className="app__specialMenu-menu">
              <div className="app__specialMenu-menu_riceNoodles flex__center">
                <div className="app__specialMenu-section_header">
                  <p className="app__specialMenu-menu_heading">Rice & Noodles</p>
                </div>
                <div className="app__specialMenu-menu_row">
                  {[
                    { key: 'Rice', list: data.rice },
                    { key: 'Noodles', list: data.noodles },
                    { key: 'Rolls', list: data.rolls },
                    { key: 'Momo', list: data.momo },
                    { key: 'Thukpa', list: data.thukpa },
                    { key: 'Biryani', list: data.biryani },
                    { key: 'Beverages', list: data.beverages },
                  ].map(({ key, list }) => (
                    <div className="app__specialMenu-menu_column" key={key}>
                      <p className="app__specialMenu-subheading">{key}</p>
                      <div className="app__specialMenu_menu_items">
                        {list && list.map((item, index) => (
                          <MenuItem 
                            key={item.title + index}
                            title={item.title}
                            price={item.price}
                            tags={item.tags}
                            onAddToOrder={handleAddToOrder}
                            cartItemCount={getCartItemCount(item.title, priceNumber(item.price))}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Thukpa Menu - Tibetan & Chinese */}
            <div className="app__specialMenu-menu">
              <div className="app__specialMenu-menu_thukpa flex__center">
                <div className="app__specialMenu-section_header">
                  <p className="app__specialMenu-menu_heading">Thukpa Menu</p>
                </div>
                <div className="app__specialMenu-menu_row">
                  {[
                    { key: 'Momo', list: dataThukpa.momo },
                    { key: 'Thukpa', list: dataThukpa.thukpa },
                    { key: 'Special Thukpa', list: dataThukpa.specialThukpa },
                    { key: 'Chowmein', list: dataThukpa.chowmein },
                    { key: 'Special Chow', list: dataThukpa.specialChow },
                    { key: 'Schezwan Chow', list: dataThukpa.schezwanChow },
                    { key: 'Special Noodles', list: dataThukpa.specialNoodles },
                    { key: 'Gravy Chowmein', list: dataThukpa.gravyChowmein },
                    { key: 'Special Gravy Chow', list: dataThukpa.specialGravyChow },
                    { key: 'Fried Rice', list: dataThukpa.friedRice },
                    { key: 'Special Fried Rice', list: dataThukpa.specialFriedRice },
                    { key: 'Biryani', list: dataThukpa.biryani },
                    { key: 'Rolls', list: dataThukpa.rolls },
                    { key: 'Combo Set', list: dataThukpa.comboSet },
                    { key: 'Dry Fry / Gravy / Chilly', list: dataThukpa.dryFryGravyChilly },
                    { key: 'Soup', list: dataThukpa.soup },
                    { key: 'Chopsey', list: dataThukpa.chopsey },
                  ].map(({ key, list }) => (
                    <div className="app__specialMenu-menu_column" key={key}>
                      <p className="app__specialMenu-subheading">{key}</p>
                      <div className="app__specialMenu_menu_items">
                        {list && list.map((item, index) => (
                          <MenuItem 
                            key={item.title + index}
                            title={item.title}
                            price={item.price}
                            tags={item.tags}
                            onAddToOrder={handleAddToOrder}
                            cartItemCount={getCartItemCount(item.title, priceNumber(item.price))}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Thukpa Menu - Indian Cuisine */}
            <div className="app__specialMenu-menu">
              <div className="app__specialMenu-menu_thukpa flex__center">
                <div className="app__specialMenu-section_header">
                  <p className="app__specialMenu-menu_heading">Indian Cuisine</p>
                </div>
                <div className="app__specialMenu-menu_row">
                  {[
                    { key: 'Tandoori Roti', list: dataThukpa.roti },
                    { key: 'Naan', list: dataThukpa.naan },
                    { key: 'Rice', list: dataThukpa.rice },
                    { key: 'Paneer Gravy', list: dataThukpa.paneerGravy },
                    { key: 'Chicken Gravy', list: dataThukpa.chickenGravy },
                    { key: 'Tandoor', list: dataThukpa.tandoor },
                    { key: 'Pork', list: dataThukpa.pork },
                  ].map(({ key, list }) => (
                    <div className="app__specialMenu-menu_column" key={key}>
                      <p className="app__specialMenu-subheading">{key}</p>
                      <div className="app__specialMenu_menu_items">
                        {list && list.map((item, index) => (
                          <MenuItem 
                            key={item.title + index}
                            title={item.title}
                            price={item.price}
                            tags={item.tags}
                            onAddToOrder={handleAddToOrder}
                            cartItemCount={getCartItemCount(item.title, priceNumber(item.price))}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Thukpa Menu - Juice Bar */}
            <div className="app__specialMenu-menu">
              <div className="app__specialMenu-menu_thukpa flex__center">
                <div className="app__specialMenu-section_header">
                  <p className="app__specialMenu-menu_heading">Juice Bar</p>
                </div>
                <div className="app__specialMenu-menu_row">
                  <div className="app__specialMenu-menu_column">
                    <p className="app__specialMenu-subheading">Soda</p>
                    <div className="app__specialMenu_menu_items">
                      {dataThukpa.soda && dataThukpa.soda.map((item, index) => (
                        <MenuItem 
                          key={item.title + index}
                          title={item.title}
                          price={item.price}
                          tags={item.tags}
                          onAddToOrder={handleAddToOrder}
                          cartItemCount={getCartItemCount(item.title, priceNumber(item.price))}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="app__specialMenu-menu_column">
                    <p className="app__specialMenu-subheading">Fresh Juice</p>
                    <div className="app__specialMenu_menu_items">
                      {dataThukpa.freshJuice && dataThukpa.freshJuice.map((item, index) => (
                        <MenuItem 
                          key={item.title + index}
                          title={item.title}
                          price={item.price}
                          tags={item.tags}
                          onAddToOrder={handleAddToOrder}
                          cartItemCount={getCartItemCount(item.title, priceNumber(item.price))}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="app__specialMenu-menu_column">
                    <p className="app__specialMenu-subheading">Shakes</p>
                    <div className="app__specialMenu_menu_items">
                      {dataThukpa.shakes && dataThukpa.shakes.map((item, index) => (
                        <MenuItem 
                          key={item.title + index}
                          title={item.title}
                          price={item.price}
                          tags={item.tags}
                          onAddToOrder={handleAddToOrder}
                          cartItemCount={getCartItemCount(item.title, priceNumber(item.price))}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="app__specialMenu-menu_column">
                    <p className="app__specialMenu-subheading">Coffee & Lassi</p>
                    <div className="app__specialMenu_menu_items">
                      {dataThukpa.coffee && dataThukpa.coffee.map((item, index) => (
                        <MenuItem key={'coffee' + item.title + index} title={item.title} price={item.price} tags={item.tags} />
                      ))}
                      {dataThukpa.lassi && dataThukpa.lassi.map((item, index) => (
                        <MenuItem key={'lassi' + item.title + index} title={item.title} price={item.price} tags={item.tags} />
                      ))}
                    </div>
                  </div>
                  <div className="app__specialMenu-menu_column">
                    <p className="app__specialMenu-subheading">Tea & Mojito</p>
                    <div className="app__specialMenu_menu_items">
                      {dataThukpa.tea && dataThukpa.tea.map((item, index) => (
                        <MenuItem key={'tea' + item.title + index} title={item.title} price={item.price} tags={item.tags} />
                      ))}
                      {dataThukpa.mojito && dataThukpa.mojito.map((item, index) => (
                        <MenuItem key={'mojito' + item.title + index} title={item.title} price={item.price} tags={item.tags} />
                      ))}
                    </div>
                  </div>
                  <div className="app__specialMenu-menu_column">
                    <p className="app__specialMenu-subheading">Nitrogen Special</p>
                    <div className="app__specialMenu_menu_items">
                      {dataThukpa.nitrogenSpecial && dataThukpa.nitrogenSpecial.map((item, index) => (
                        <MenuItem 
                          key={item.title + index}
                          title={item.title}
                          price={item.price}
                          tags={item.tags}
                          onAddToOrder={handleAddToOrder}
                          cartItemCount={getCartItemCount(item.title, priceNumber(item.price))}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Order Summary Sidebar */}
      <div className="app__specialMenu-orderSummary">
        <OrderSummary 
          orderItems={orderItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearOrder={handleClearOrder}
          onPlaceOrder={handlePlaceOrder}
        />
      </div>
    </div>
  );
};

export default SpecialMenu;
