import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./routes/About";
import Category from "./routes/Category";
import Home from "./routes/Home";
import FruitSando from './routes/FruitSando';
import Oyakodon from './routes/Oyakodon';
import SoufflePancakes from './routes/SoufflePancakes';
import JapaneseCurry from "./routes/JapaneseCurry";

const AppLayout = () => (
    <>
      <Navbar />
      <Outlet />
    </>
  );
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/category" element={<Category />} />
        <Route path='/fruitsando' element={<FruitSando/>} />
        <Route path='/oyakodon' element={<Oyakodon/>} />
        <Route path='/soufflepancakes' element={<SoufflePancakes/>} />
        <Route path='/japanesecurry' element={<JapaneseCurry/>} />
      </Route>
    )
  );

  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );