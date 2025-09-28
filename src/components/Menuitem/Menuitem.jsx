import React, { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './MenuItem.css';

const MenuItem = ({ title, price, tags, onAddToOrder }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const priceNumber = parseFloat(price.replace(/[^0-9.-]+/g, ''));

  // Reset quantity when item changes
  useEffect(() => {
    setQuantity(1);
  }, [title, price]);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 20) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToOrder = () => {
    onAddToOrder({
      title,
      price: priceNumber,
      quantity,
      total: priceNumber * quantity,
      tags,
      id: `${title}-${priceNumber}-${Date.now()}`
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="app__menuitem">
      <div className="app__menuitem-head">
        <div className="app__menuitem-name">
          <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
        </div>
        <div className="app__menuitem-dash" />
        <div className="app__menuitem-price">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>

      <div className="app__menuitem-sub">
        <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
      </div>

      <div className="app__menuitem-actions">
        <div className="quantity-controls">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleQuantityChange(quantity - 1);
            }}
            className="quantity-btn"
            aria-label="Decrease quantity"
          >
            <FaMinus />
          </button>
          <span className="quantity">{quantity}</span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleQuantityChange(quantity + 1);
            }}
            className="quantity-btn"
            aria-label="Increase quantity"
          >
            <FaPlus />
          </button>
        </div>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            handleAddToOrder();
          }}
          className={`add-to-order-btn ${isAdded ? 'added' : ''}`}
          aria-label="Add to order"
        >
          {isAdded ? '✓ Added' : 'Add to Order'}
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
