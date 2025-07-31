
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/**
 * Project Overview - Vista Showcase
 * 
 * This project is a virtual 3D product showcase platform where users can explore 
 * products in an immersive, interactive way. The key features include:
 * 
 * 1. Interactive 3D Product Models:
 *    - Users can rotate, zoom, and examine products from every angle
 *    - Real-time 3D rendering using Three.js through React Three Fiber
 *    - Detailed product views with customization options
 * 
 * 2. Modern React Architecture:
 *    - Built with React and JavaScript
 *    - Component-based design for maintainability and reusability
 *    - Responsive layouts using Tailwind CSS for all screen sizes
 * 
 * 3. Animated User Interface:
 *    - Smooth animations using Framer Motion
 *    - Engaging user experience with motion effects
 *    - Custom animated text and section transitions
 * 
 * 4. User Experience Features:
 *    - Product filtering and categorization
 *    - Featured collections and product highlights
 *    - Interactive product cards with information display
 * 
 * 5. Multiple Pages:
 *    - Home page with featured products and showcase sections
 *    - Products page with full catalog browsing
 *    - About page with company information
 *    - Contact page with form and location details
 * 
 * The application uses a variety of technologies including:
 * - React Three Fiber and Drei for 3D visualization
 * - Framer Motion for animations
 * - Tailwind CSS for styling
 * - Lucide for icons
 * - React Router for navigation
 * 
 * The app is focused on showcasing technology products with a modern,
 * dark-themed interface that highlights the 3D models and creates an
 * immersive shopping experience.
 */
