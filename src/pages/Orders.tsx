
import React from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
  // Mock orders data
  const mockOrders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 134900,
      items: [
        {
          id: 1,
          title: 'iPhone 15 Pro Max',
          image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400',
          price: 134900,
          quantity: 1
        }
      ]
    },
    {
      id: 'ORD-002',
      date: '2024-01-20',
      status: 'In Transit',
      total: 29990,
      items: [
        {
          id: 4,
          title: 'Sony WH-1000XM5',
          image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400',
          price: 29990,
          quantity: 1
        }
      ]
    }
  ];

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString()}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'text-green-600 bg-green-100';
      case 'In Transit':
        return 'text-blue-600 bg-blue-100';
      case 'Processing':
        return 'text-yellow-600 bg-yellow-100';
      case 'Cancelled':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Orders</h1>
        
        {mockOrders.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-8xl mb-4">📦</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">No orders yet</h2>
            <p className="text-gray-600 mb-8">You haven't placed any orders yet</p>
            <Link
              to="/products"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {mockOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Order #{order.id}</h3>
                    <p className="text-gray-600">Placed on {new Date(order.date).toLocaleDateString()}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                    <p className="text-lg font-bold text-gray-900 mt-2">{formatPrice(order.total)}</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 mb-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <Link
                          to={`/product/${item.id}`}
                          className="text-gray-900 hover:text-blue-600 font-medium transition-colors"
                        >
                          {item.title}
                        </Link>
                        <p className="text-gray-600 text-sm">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{formatPrice(item.price)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    View Details
                  </button>
                  {order.status === 'Delivered' && (
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Buy Again
                    </button>
                  )}
                  {order.status === 'In Transit' && (
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                      Track Order
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
