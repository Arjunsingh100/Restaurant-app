import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './assets/components/Navbar';
import './assets/stylesheet/style.css'
import Home from './assets/components/home';
import About from './assets/components/about';
import Menu from './assets/components/menu';
import Product from './assets/components/product';
import Customer from './assets/components/customer';
import ContactUs from './assets/components/contactUs';
import Blog from './assets/components/blog';
import Footer from './assets/components/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Menu></Menu>
    <Product></Product>
    <Customer></Customer>
    <ContactUs></ContactUs>
    <Blog></Blog>
    <Footer></Footer>
    </>
  )
}

export default App
