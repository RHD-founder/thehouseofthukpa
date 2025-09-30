import React, { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './MenuItem.css';

const MenuItem = ({ title, price, tags, onAddToOrder }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(null);
  
  // Check if price has half/full format (e.g., ₹150/₹280 or (H/F) ₹170/₹280)
  const hasHalfFullPricing = price && (/\d+\s*\/\s*\d+/.test(price) || /H\s*\/\s*F/i.test(price));
  
  // Parse prices
  const [priceState, setPriceState] = useState({
    halfPrice: null,
    fullPrice: null,
    displayPrice: price || ''
  });
  
  // Handle price parsing and state updates in a single effect
  useEffect(() => {
    if (!price) {
      setPriceState({
        halfPrice: null,
        fullPrice: null,
        displayPrice: ''
      });
      return;
    }

    let newHalfPrice = null;
    let newFullPrice = null;
    let newDisplayPrice = price;
    
    if (hasHalfFullPricing) {
      try {
        // Extract all numbers from the price string
        const numbers = price.match(/\d+/g) || [];
        
        if (numbers.length >= 2) {
          // If we have at least two numbers, assume first is half, second is full
          const parsedHalf = parseFloat(numbers[0]);
          const parsedFull = parseFloat(numbers[1]);
          
          if (!isNaN(parsedHalf) && !isNaN(parsedFull)) {
            newHalfPrice = parsedHalf;
            newFullPrice = parsedFull;
            
            // Set default selected price to full if not set
            if (selectedPrice === null) {
              setSelectedPrice(newFullPrice);
            }
            
            // Format display price based on the original price format
            if (price.includes('(H/F)')) {
              newDisplayPrice = `(H) ₹${newHalfPrice} / (F) ₹${newFullPrice}`;
            } else {
              newDisplayPrice = `Half: ₹${newHalfPrice} | Full: ₹${newFullPrice}`;
            }
          }
        }
      } catch (error) {
        console.error('Error parsing price:', error);
        newDisplayPrice = price;
      }
    } else {
      try {
        const priceNumber = parseFloat(price.replace(/[^0-9.-]+/g, ''));
        if (!isNaN(priceNumber)) {
          setSelectedPrice(priceNumber);
        }
      } catch (error) {
        console.error('Error parsing single price:', error);
      }
    }
    
    setPriceState({
      halfPrice: newHalfPrice,
      fullPrice: newFullPrice,
      displayPrice: newDisplayPrice
    });
  }, [price, hasHalfFullPricing]);
  
  const { halfPrice, fullPrice, displayPrice } = priceState;

  // Reset quantity and selected price when item changes
  useEffect(() => {
    setQuantity(1);
    if (hasHalfFullPricing && fullPrice && !isNaN(fullPrice)) {
      setSelectedPrice(fullPrice);
    }
  }, [title, price, hasHalfFullPricing, fullPrice, setSelectedPrice]);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 20) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToOrder = () => {
    if (selectedPrice === null || isNaN(selectedPrice)) return;
    
    onAddToOrder({
      title: hasHalfFullPricing && halfPrice !== null && fullPrice !== null
        ? `${title} (${selectedPrice === halfPrice ? 'Half' : 'Full'})` 
        : title,
      price: selectedPrice,
      quantity,
      total: selectedPrice * quantity,
      tags,
      id: `${title}-${selectedPrice}-${Date.now()}`
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
          <p className="p__cormorant">{displayPrice}</p>
        </div>
      </div>

      <div className="app__menuitem-sub">
        <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
      </div>

      <div className="app__menuitem-actions">
        {/* Price selection for half/full items */}
        {hasHalfFullPricing && (
          <div className="price-selection" style={{ 
            display: 'flex', 
            gap: '10px',
            marginBottom: '10px',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPrice(halfPrice);
              }}
              style={{
                padding: '5px 10px',
                borderRadius: '4px',
                border: `1px solid ${selectedPrice === halfPrice ? 'var(--color-golden)' : 'rgba(255, 255, 255, 0.2)'}`,
                background: selectedPrice === halfPrice ? 'var(--color-golden)' : 'transparent',
                color: selectedPrice === halfPrice ? 'var(--color-black)' : 'var(--color-white)',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.3s ease',
                flex: 1,
                minWidth: '80px'
              }}
            >
              Half: ₹{halfPrice}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPrice(fullPrice);
              }}
              style={{
                padding: '5px 10px',
                borderRadius: '4px',
                border: `1px solid ${selectedPrice === fullPrice ? 'var(--color-golden)' : 'rgba(255, 255, 255, 0.2)'}`,
                background: selectedPrice === fullPrice ? 'var(--color-golden)' : 'transparent',
                color: selectedPrice === fullPrice ? 'var(--color-black)' : 'var(--color-white)',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.3s ease',
                flex: 1,
                minWidth: '80px'
              }}
            >
              Full: ₹{fullPrice}
            </button>
          </div>
        )}
        
        <div className="quantity-controls">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleQuantityChange(quantity - 1);
            }}
            className="quantity-btn"
            disabled={quantity <= 1}
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
              color: quantity <= 1 ? 'rgba(255, 255, 255, 0.5)' : 'var(--color-white)',
              borderRadius: '4px',
              cursor: quantity <= 1 ? 'not-allowed' : 'pointer',
              fontSize: '16px',
              transition: 'all 0.3s ease',
              opacity: quantity <= 1 ? 0.6 : 1
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
            disabled={quantity >= 20}
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
              color: quantity >= 20 ? 'rgba(255, 255, 255, 0.5)' : 'var(--color-white)',
              borderRadius: '4px',
              cursor: quantity >= 20 ? 'not-allowed' : 'pointer',
              fontSize: '16px',
              transition: 'all 0.3s ease',
              opacity: quantity >= 20 ? 0.6 : 1
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
          disabled={!selectedPrice || isNaN(selectedPrice) || (hasHalfFullPricing && !selectedPrice)}
          className={`add-to-order-btn ${isAdded ? 'added' : ''}`}
          aria-label="Add to order"
          style={{
            flex: '1',
            minWidth: '120px',
            maxWidth: '200px',
            height: '40px',
            padding: '0 16px',
            backgroundColor: isAdded ? '#28a745' : 'var(--color-golden)',
            color: isAdded ? 'white' : 'var(--color-black)',
            border: 'none',
            borderRadius: '4px',
            fontFamily: 'var(--font-base)',
            fontSize: '16px',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            whiteSpace: 'nowrap',
            opacity: (!selectedPrice || isNaN(selectedPrice)) ? 0.6 : 1,
            cursor: (!selectedPrice || isNaN(selectedPrice)) ? 'not-allowed' : 'pointer'
          }}
        >
          {isAdded ? 'Added!' : `Add ${!isNaN(selectedPrice) ? `₹${selectedPrice * quantity}` : ''}`}
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
