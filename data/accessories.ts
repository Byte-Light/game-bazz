// data/accessories.ts

export interface Accessory {
    id: number;
    name: string;
    category: string;
    price: string;
    imageUrl: string;
  }
  
  export const accessories: Accessory[] = [
    { id: 1, name: "Gaming Headset", category: "Audio", price: "$129.99", imageUrl: "/images/gaming-headset.jpeg" },
    { id: 2, name: "Mechanical Keyboard", category: "Keyboard", price: "$89.99", imageUrl: "/images/mechanical-keyboard.jpeg" },
    { id: 3, name: "Gaming Chair", category: "Furniture", price: "$249.99", imageUrl: "/images/gaming-chair.jpeg" },
    { id: 4, name: "Gaming Mouse", category: "Mouse", price: "$59.99", imageUrl: "/images/gaming-mouse.jpeg" },
    { id: 5, name: "Webcam", category: "Camera", price: "$99.99", imageUrl: "/images/mechanical-keyboard.jpeg" },
    { id: 6, name: "USB Microphone", category: "Audio", price: "$79.99", imageUrl: "/images/gaming-chair.jpeg" },
    { id: 7, name: "VR Headset", category: "VR", price: "$299.99", imageUrl: "/images/mechanical-keyboard.jpeg" },
    { id: 8, name: "Streaming Lights", category: "Lighting", price: "$45.99", imageUrl: "/images/gaming-chair.jpeg" },
    { id: 9, name: "Mouse Pad", category: "Accessories", price: "$19.99", imageUrl: "/images/mouse-pad.jpg" },
    { id: 10, name: "External SSD", category: "Storage", price: "$129.99", imageUrl: "/images/external-ssd.jpg" },
    { id: 11, name: "HD Monitor", category: "Display", price: "$199.99", imageUrl: "/images/hd-monitor.jpg" },
    { id: 12, name: "Portable Charger", category: "Battery", price: "$29.99", imageUrl: "/images/portable-charger.jpg" },
    { id: 13, name: "Capture Card", category: "Streaming", price: "$149.99", imageUrl: "/images/capture-card.jpg" },
    { id: 14, name: "Gaming Glasses", category: "Accessories", price: "$35.99", imageUrl: "/images/gaming-glasses.jpg" },
    { id: 15, name: "Bluetooth Speaker", category: "Audio", price: "$59.99", imageUrl: "/images/bluetooth-speaker.jpg" },
    { id: 16, name: "Joystick", category: "Controller", price: "$99.99", imageUrl: "/images/joystick.jpg" },
    { id: 17, name: "Cable Organizer", category: "Accessories", price: "$12.99", imageUrl: "/images/cable-organizer.jpg" },
    { id: 18, name: "Webcam Cover", category: "Accessories", price: "$5.99", imageUrl: "/images/webcam-cover.jpg" },
    { id: 19, name: "Gamepad", category: "Controller", price: "$49.99", imageUrl: "/images/gamepad.jpg" },
    { id: 20, name: "Gaming Desk", category: "Furniture", price: "$199.99", imageUrl: "/images/gaming-desk.jpg" },
  ];
  