const productsData = [
  {
    id: 1,
    name: "boAt Airdopes 141",
    price: 1299,
    rating: 4.3,
    image: "https://m.media-amazon.com/images/I/51HBom8xz7L.jpg",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Samsung Galaxy M14 5G",
    price: 10490,
    rating: 4.2,
    image: "https://cdn.gadgetbytenepal.com/wp-content/uploads/2023/10/Samsung-Galaxy-M44-Design.jpg",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Fastrack Reflex Vox Smartwatch",
    price: 1999,
    rating: 4.1,
    image: "https://th.bing.com/th/id/OPAC.reQGUcEwe7cmPQ474C474?w=592&h=550&o=5&dpr=1.5&pid=21.1",
    category: "Electronics",
  },
  
  
  
  
  
  
  
  
  
  
  {
    id: 4,
    name: "Fastrack Smartwatch",
    price: 1999,
    category: "Electronics",
    rating: 4.1,
    image: "https://th.bing.com/th/id/OPAC.WKWhbKP2ZfoVQw474C474?w=220&h=210&c=17&o=5&dpr=1.5&pid=21.1"
  },
  {
    id: 5,
    name: "Canon DSLR Camera",
    price: 42990,
    category: "Electronics",
    rating: 4.6,
    image: "https://th.bing.com/th?id=OPAC.IvOZfaFt0%2b7xpg474C474&w=220&h=220&c=17&o=5&dpr=1.5&pid=21.1"
  },
  {
    id: 6,
    name: "Mi Power Bank 20000mAh",
    price: 1799,
    category: "Electronics",
    rating: 4.4,
    image: "https://th.bing.com/th/id/OPAC.Y1h59SgI6Of5rA474C474?w=220&h=210&c=17&o=5&dpr=1.5&pid=21.1"
  },
  {
    id: 7,
    name: "Sony Bluetooth Speaker",
    price: 3499,
    category: "Electronics",
    rating: 4.5,
    image: "https://th.bing.com/th/id/OPAC.FL9lL2cb7igRag474C474?w=220&h=220&c=17&o=5&dpr=1.5&pid=21.1"
  },
  {
    id: 8,
    name: "Realme Buds Wireless",
    price: 1399,
    category: "Electronics",
    rating: 4.3,
    image: "https://th.bing.com/th/id/OPAC.TkRiz8oOnBZmkQ474C474?w=220&h=220&c=17&o=5&dpr=1.5&pid=21.1"
  },
  {
    id: 9,
    name: "Lenovo Tab M10",
    price: 12990,
    category: "Electronics",
    rating: 4.0,
    image: "https://th.bing.com/th?id=OPAC.544P1ll3n%2foxrQ474C474&w=220&h=220&c=17&o=5&dpr=1.5&pid=21.1"
  },
  {
    id: 10,
    name: "Fire-Boltt Ring 3",
    price: 1899,
    category: "Electronics",
    rating: 4.3,
    image: "https://th.bing.com/th/id/OPAC.0lSMK9foFUFkcA474C474?w=220&h=210&c=17&o=5&dpr=1.5&pid=21.1"
  },
  {
    id: 11,
    name: "HP DeskJet 2331 Printer",
    price: 3999,
    category: "Electronics",
    rating: 4.1,
    image: "https://th.bing.com/th/id/OPAC.vMQCSH8NvV6jjA474C474?w=220&h=220&c=17&o=5&dpr=1.5&pid=21.1"
  },
  {
    id: 12,
    name: "Zebronics Web Camera",
    price: 949,
    category: "Electronics",
    rating: 4.0,
    image: "https://th.bing.com/th/id/OPAC.GQjM30W1itGn6w474C474?w=220&h=220&c=17&o=5&dpr=1.5&pid=21.1"
  },
  {
    id: 13,
    name: "Boat Rockerz 450",
    price: 1299,
    category: "Electronics",
    rating: 4.3,
    image: "https://th.bing.com/th/id/OPAC.EK5gKq6Xpz7nNA474C474?w=220&h=220&c=17&o=5&dpr=1.5&pid=21.1"
  },
  {
    id: 14,
    name: "Logitech Mouse M235",
    price: 645,
    category: "Electronics",
    rating: 4.6,
    image: "https://th.bing.com/th/id/OPAC.zhCc08t9rgSOlQ474C474?w=200&h=150&c=17&dpr=1.5&pid=21.1"
  },
  {
    id: 15,
    name: "Sandisk 64GB Pendrive",
    price: 529,
    category: "Electronics",
    rating: 4.5,
    image: "https://th.bing.com/th/id/OPAC.sUWAgQjRmpwWXg474C474?w=200&h=150&c=17&dpr=1.5&pid=21.1"
  },
  {
    id: 16,
    name: "OnePlus Y1 32-inch TV",
    price: 12999,
    category: "Electronics",
    rating: 4.4,
    image: "https://th.bing.com/th/id/OPAC.mliSj5rNDOFe8w474C474?w=220&h=220&c=17&o=5&dpr=1.5&pid=21.1"
  },
  {
    id: 17,
    name: "JBL C100SI Wired Headset",
    price: 699,
    category: "Electronics",
    rating: 4.1,
    image: "https://th.bing.com/th/id/OPAC.E56xQpZ3HzZctg474C474?w=220&h=220&c=17&o=5&dpr=1.5&pid=21.1"
  },
  {
    id: 18,
    name: "Echo Dot 3rd Gen",
    price: 2499,
    category: "Electronics",
    rating: 4.5,
    image: "https://th.bing.com/th/id/OPAC.XMTKsyEgcC4vAg474C474?w=220&h=220&c=17&o=5&dpr=1.5&pid=21.1"
  },
  {
    id: 19,
    name: "Philips Trimmer",
    price: 1099,
    category: "Electronics",
    rating: 4.2,
    image: "https://th.bing.com/th?id=OPAC.c97E7RN%2bmJRS0A474C474&w=160&h=220&c=17&dpr=1.5&pid=21.1"
  },
  {
    id: 20,
    name: "USB Type C Cable",
    price: 349,
    category: "Electronics",
    rating: 4.3,
    image: "https://th.bing.com/th/id/OPAC.z9Rmm9vzd4TXvQ474C474?w=190&h=150&c=17&dpr=1.5&pid=21.1"
  },

  // 20 Fashion
  {
    id: 21,
    name: "Men's Leather Jacket",
    price: 2499,
    category: "Fashion",
    rating: 4.2,
    image: "https://th.bing.com/th?id=OPAC.lDNMl%2f185YIVKQ474C474&w=193&h=196&c=17&dpr=1.5&pid=21.1"
  },
  {
    id: 22,
    name: "Campus Men's Shoes",
    price: 1199,
    category: "Fashion",
    rating: 4.1,
    image: "https://th.bing.com/th/id/OPAC.UcAJ1LzQ1LXfoA474C474?w=220&h=220&c=17&o=5&dpr=1.5&pid=21.1"
  },
  {
    id: 23,
    name: "Women's Saree",
    price: 899,
    category: "Fashion",
    rating: 4.4,
    image: "https://th.bing.com/th/id/OPAC.fZpcm8NUGWy8aw474C474?w=220&h=210&c=17&o=5&dpr=1.5&pid=21.1"
  },
  {
    id: 24,
    name: "Wrist Watch",
    price: 1499,
    category: "Fashion",
    rating: 4.5,
    image: "https://th.bing.com/th/id/OPAC.5Ton7TaRqH7y5A474C474?w=181&h=220&c=17&dpr=1.5&pid=21.1"
  },
  // Add 16 more products like this in Fashion

  // 10 Home Appliances
  {
    id: 25,
    name: "Prestige Electric Kettle",
    price: 1299,
    category: "Electronics",
    rating: 4.4,
    image: "https://th.bing.com/th?id=OPAC.1CCscGH%2bRrV2aQ474C474&w=220&h=220&c=17&o=5&dpr=1.5&pid=21.1"
  },
  {
    id: 26,
    name: "LG 6.5 kg Washing Machine",
    price: 15499,
    category: "Electronics",
    rating: 4.3,
    image: "https://th.bing.com/th/id/OPAC.CbMVjDOX3Mkg2w474C474?w=220&h=210&c=17&o=5&dpr=1.5&pid=21.1"
  },
  {
    id: 27,
    name: "Havells 1200mm Fan",
    price: 2099,
    category: "Electronics",
    rating: 4.2,
    image: "https://th.bing.com/th?id=OPAC.b%2b9EzlLCQzpPeA474C474&w=220&h=220&c=17&o=5&dpr=1.5&pid=21.1"
  }

];

export default productsData;
