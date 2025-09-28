import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaTimes, FaMinus, FaPlus, FaTrash, FaWhatsapp, FaCheck, FaInfoCircle } from 'react-icons/fa';
import './OrderSummary.css';

const OrderSummary = ({ orderItems, onRemoveItem, onUpdateQuantity, onClearOrder, onPlaceOrder: propOnPlaceOrder }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });

  // Calculate total amount
  const calculateTotal = () => {
    return orderItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  // Get total number of items in cart
  const getTotalItems = () => {
    return orderItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Handle input changes for customer details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle order placement
  const handlePlaceOrder = () => {
    if (orderItems.length === 0) return;
    
    // // Basic validation
    // if (!customerDetails.name || !customerDetails.phone || !customerDetails.address) {
    //   alert('Please fill in all required customer details');
    //   return;
    // }

    setIsPlacingOrder(true);
    
    // Format order details
    const orderDetails = {
      items: orderItems.map(item => ({
        title: item.title,
        quantity: item.quantity,
        price: item.price,
        total: (item.price * item.quantity).toFixed(2)
      })),
      customer: customerDetails,
      total: calculateTotal(),
      orderTime: new Date().toISOString()
    };

    // Call the prop function to handle order placement
    if (propOnPlaceOrder) {
      propOnPlaceOrder(orderDetails)
        .then(() => {
          setOrderPlaced(true);
          // Reset form after successful order
          setTimeout(() => {
            setCustomerDetails({
              name: '',
              phone: '',
              address: '',
              notes: ''
            });
            onClearOrder();
            setIsPlacingOrder(false);
            setOrderPlaced(false);
          }, 3000);
        })
        .catch(error => {
          console.error('Order placement failed:', error);
          alert('Failed to place order. Please try again.');
          setIsPlacingOrder(false);
        });
    } else {
      // Fallback to WhatsApp order if no prop function provided
      sendWhatsAppOrder(orderDetails);
    }
  };

  // Send order via WhatsApp
  const sendWhatsAppOrder = (orderDetails) => {
    const phoneNumber = '+919999999999'; // Replace with your WhatsApp number
    
    // Format order items
    const orderList = orderDetails.items.map(item => 
      `• ${item.quantity}x ${item.title} - ₹${item.total}`
    ).join('\n');

    // Format customer details
    const customerInfo = `\n\n*Customer Details*\n` +
      `👤 Name: ${customerDetails.name}\n` +
      `📱 Phone: ${customerDetails.phone}\n` +
      `🏠 Address: ${customerDetails.address}`;

    const notes = customerDetails.notes ? `\n\n📝 *Notes:* ${customerDetails.notes}` : '';
    
    const message = `*New Order*\n\n${orderList}\n\n*Total: ₹${orderDetails.total}*${customerInfo}${notes}`;
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp in a new tab
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    
    // Reset after a short delay
    setTimeout(() => {
      setOrderPlaced(true);
      setTimeout(() => {
        onClearOrder();
        setIsExpanded(false);
        setOrderPlaced(false);
        setCustomerDetails({
          name: '',
          phone: '',
          address: '',
          notes: ''
        });
      }, 2000);
    }, 500);
  };

  // Toggle cart visibility
  const toggleCart = () => {
    if (orderItems.length > 0) {
      setIsExpanded(!isExpanded);
    }
  };

  // Auto-close cart when empty
  useEffect(() => {
    if (orderItems.length === 0 && isExpanded) {
      setIsExpanded(false);
    }
  }, [orderItems.length, isExpanded]);

  // Floating cart button
  if (!isExpanded) {
    return (
      <div 
        className={`floating-cart-btn ${orderItems.length > 0 ? 'has-items' : ''}`}
        onClick={toggleCart}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          background: 'var(--color-golden)',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          zIndex: 999,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease',
          border: 'none',
          outline: 'none'
        }}
      >
        <FaShoppingCart className="cart-icon" style={{ fontSize: '24px', color: 'var(--color-black)' }} />
        {orderItems.length > 0 && (
          <span 
            className="cart-badge" 
            style={{
              position: 'absolute',
              top: '-5px',
              right: '-5px',
              background: '#DCCA87',
              color: '#0C0B08',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '14px',
              fontWeight: 'bold',
              border: '2px solid #0C0B08',
              boxSizing: 'border-box'
            }}
          >
            {getTotalItems()}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="order-summary">
      <div className="order-summary-header">
        <h3>Your Order ({getTotalItems()})</h3>
        <button className="close-cart" onClick={() => setIsExpanded(false)}>
          <FaTimes />
        </button>
      </div>
      
      <div className="order-items">
        {orderItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <p>Start adding items to your order</p>
          </div>
        ) : (
          orderItems.map((item, index) => (
            <div key={item.id || index} className="order-item">
              <div className="order-item-details">
                <span className="item-name">{item.title}</span>
                <span className="item-price">₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
              <div className="order-item-quantity">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onUpdateQuantity(index, item.quantity - 1);
                  }}
                  className="quantity-btn"
                  aria-label="Decrease quantity"
                >
                  <FaMinus size={10} />
                </button>
                <span className="quantity">{item.quantity}</span>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onUpdateQuantity(index, item.quantity + 1);
                  }}
                  className="quantity-btn"
                  aria-label="Increase quantity"
                >
                  <FaPlus size={10} />
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveItem(index);
                  }}
                  className="remove-btn"
                  aria-label="Remove item"
                >
                  <FaTrash size={14} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      
      {orderItems.length > 0 && (
        <>
          <div className="order-total">
            <span>Subtotal:</span>
            <span>₹{calculateTotal()}</span>
          </div>
          <div className="order-total">
            <span>Delivery Fee:</span>
            <span>₹{calculateTotal() > 0 ? '50.00' : '0.00'}</span>
          </div>
          <div className="order-total grand-total">
            <span>Total:</span>
            <span>₹{(parseFloat(calculateTotal()) + (calculateTotal() > 0 ? 50 : 0)).toFixed(2)}</span>
          </div>
          
          <div className="order-actions">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                if (window.confirm('Are you sure you want to clear your order?')) {
                  onClearOrder();
                }
              }}
              className="clear-btn"
              disabled={orderItems.length === 0}
            >
              Clear Order
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handlePlaceOrder();
              }}
              className="place-order-btn"
              disabled={orderItems.length === 0 || isPlacingOrder}
            >
              <FaWhatsapp /> {isPlacingOrder ? 'Opening WhatsApp...' : 'Place Order'}
            </button>
          </div>
          
          <p className="order-note">
            You'll be redirected to WhatsApp to complete your order
          </p>
        </>
      )}
    </div>
  );
};

export default OrderSummary;
