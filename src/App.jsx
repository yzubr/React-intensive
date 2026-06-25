import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from "react"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import SignUp from "./Pages/Signup"
import Categories from './Pages/Categories'
import Category from "./Pages/Category"
import Product from "./Pages/Product"
import NotFound from "./Pages/NotFound"
import Layout from "./components/Layout"


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="categories" element={<Categories />} />
          <Route path="/categories/:categoryName">
            <Route index element={<Category />} />
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}