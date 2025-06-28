
import { Product } from '../contexts/CartContext';

export const mockProducts: Product[] = [
  {
    id: 1,
    title: "iPhone 15 Pro Max",
    price: 134900,
    originalPrice: 159900,
    discount: 15,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400",
    category: "smartphones",
    brand: "Apple",
    description: "The ultimate iPhone with titanium design, A17 Pro chip, and professional camera system.",
    specifications: {
      "Display": "6.7-inch Super Retina XDR",
      "Chip": "A17 Pro",
      "Camera": "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
      "Storage": "256GB",
      "Battery": "Up to 29 hours video playback"
    },
    reviews: [
      { id: 1, user: "Tech Enthusiast", rating: 5, comment: "Amazing camera quality and performance!", date: "2024-01-15" }
    ]
  },
  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra",
    price: 124999,
    originalPrice: 134999,
    discount: 7,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400",
    category: "smartphones",
    brand: "Samsung",
    description: "Premium Android flagship with S Pen, AI features, and exceptional camera system.",
    specifications: {
      "Display": "6.8-inch Dynamic AMOLED 2X",
      "Processor": "Snapdragon 8 Gen 3",
      "Camera": "200MP Main + 50MP Periscope + 10MP Telephoto + 12MP Ultra Wide",
      "Storage": "256GB",
      "Battery": "5000mAh"
    },
    reviews: [
      { id: 1, user: "Android Fan", rating: 5, comment: "Best Android phone ever!", date: "2024-01-20" }
    ]
  },
  {
    id: 3,
    title: "MacBook Air M3",
    price: 114900,
    originalPrice: 124900,
    discount: 8,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400",
    category: "laptops",
    brand: "Apple",
    description: "Supercharged by M3 chip, with incredible performance and all-day battery life.",
    specifications: {
      "Chip": "Apple M3",
      "Display": "13.6-inch Liquid Retina",
      "Memory": "16GB unified memory",
      "Storage": "512GB SSD",
      "Battery": "Up to 18 hours"
    },
    reviews: [
      { id: 1, user: "Creative Pro", rating: 5, comment: "Perfect for creative work!", date: "2024-01-10" }
    ]
  },
  {
    id: 4,
    title: "Sony WH-1000XM5",
    price: 29990,
    originalPrice: 34990,
    discount: 14,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
    category: "audio",
    brand: "Sony",
    description: "Industry-leading noise canceling headphones with exceptional sound quality.",
    specifications: {
      "Driver": "30mm",
      "Frequency Response": "4Hz-40kHz",
      "Battery Life": "Up to 30 hours",
      "Connectivity": "Bluetooth 5.2, NFC",
      "Weight": "250g"
    },
    reviews: [
      { id: 1, user: "Music Lover", rating: 5, comment: "Best noise cancellation!", date: "2024-01-05" }
    ]
  },
  {
    id: 5,
    title: "Dell XPS 13 Plus",
    price: 135000,
    originalPrice: 150000,
    discount: 10,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    category: "laptops",
    brand: "Dell",
    description: "Premium ultrabook with stunning design and powerful performance.",
    specifications: {
      "Processor": "Intel Core i7-1360P",
      "Display": "13.4-inch 3.5K OLED",
      "RAM": "16GB LPDDR5",
      "Storage": "512GB SSD",
      "Graphics": "Intel Iris Xe"
    },
    reviews: [
      { id: 1, user: "Business User", rating: 4, comment: "Great for productivity!", date: "2024-01-12" }
    ]
  },
  {
    id: 6,
    title: "iPad Pro 12.9-inch",
    price: 112900,
    originalPrice: 119900,
    discount: 6,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
    category: "tablets",
    brand: "Apple",
    description: "The ultimate iPad experience with M2 chip and Liquid Retina XDR display.",
    specifications: {
      "Chip": "Apple M2",
      "Display": "12.9-inch Liquid Retina XDR",
      "Storage": "256GB",
      "Camera": "12MP Wide + 10MP Ultra Wide",
      "Battery": "Up to 10 hours"
    },
    reviews: [
      { id: 1, user: "Digital Artist", rating: 5, comment: "Perfect for drawing and design!", date: "2024-01-08" }
    ]
  }
];

export const categories = [
  { id: 'smartphones', name: 'Smartphones', icon: '📱' },
  { id: 'laptops', name: 'Laptops', icon: '💻' },
  { id: 'tablets', name: 'Tablets', icon: '📱' },
  { id: 'audio', name: 'Audio', icon: '🎧' },
  { id: 'cameras', name: 'Cameras', icon: '📷' },
  { id: 'gaming', name: 'Gaming', icon: '🎮' }
];

export const brands = ['Apple', 'Samsung', 'Dell', 'Sony', 'HP', 'Lenovo', 'OnePlus', 'Xiaomi'];
