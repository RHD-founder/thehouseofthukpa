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
            disabled={quantity <= 0}
            aria-label="Decrease quantity"
            style={{
              width: '30px',
              height: '30px',
              minWidth: '30px',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--color-golden)',
              background: 'transparent',
              color: 'var(--color-white)',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'all 0.3s ease'
            }}
          >
            <FaMinus size={12} />
          </button>
          <span className="quantity" style={{
            minWidth: '20px',
            textAlign: 'center',
            fontFamily: 'var(--font-base)',
            color: 'var(--color-white)'
          }}>{quantity}</span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleQuantityChange(quantity + 1);
            }}
            className="quantity-btn"
            aria-label="Increase quantity"
            style={{
              width: '30px',
              height: '30px',
              minWidth: '30px',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--color-golden)',
              background: 'transparent',
              color: 'var(--color-white)',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'all 0.3s ease'
            }}
          >
            <FaPlus size={12} />
          </button>
        </div>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            handleAddToOrder();
          }}
          className={`add-to-order-btn ${isAdded ? 'added' : ''}`}
          aria-label="Add to order"
          style={{
            flex: '1',
            minWidth: '120px',
            maxWidth: '200px',
            height: '40px',
            padding: '0 16px',
            margin: 0,
            border: 'none',
            borderRadius: '4px',
            fontFamily: 'var(--font-base)',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            backgroundColor: isAdded ? '#4caf50' : 'var(--color-golden)',
            color: isAdded ? 'white' : 'var(--color-black)'
          }}
        >
          {isAdded ? '✓ Added' : 'Add to Order'}
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
