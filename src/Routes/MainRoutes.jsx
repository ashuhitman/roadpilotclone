import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import AboutPage from "../pages/AboutPage/AboutPage";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import PlanPage from "../pages/PlanPage/PlanPage";
import BlogPage from "../pages/BlogPage/BlogPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import Login from "../pages/Auth/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import BlogContent from "../pages/BlogContent/BlogContent";
import CookiePolicy from "../pages/CookiePolicy/CookiePolicy";

function MainRoutes() {
  const routes = [
    {
      path: "/",
      element: <Home />,
      requiresAuth: false,
    },
    {
      path: "/about",
      element: <AboutPage />,
      requiresAuth: false,
    },
    {
      path: "/services",
      element: <ServicesPage />,
      requiresAuth: false,
    },
    {
      path: "/plan",
      element: <PlanPage />,
      requiresAuth: false,
    },
    {
      path: "/blog",
      element: <BlogPage />,
      requiresAuth: false,
    },
    {
      path: "/contact",
      element: <ContactPage />,
      requiresAuth: false,
    },
    {
      path: "/user/login",
      element: <Login />,
      requiresAuth: false,
    },
    {
      path: "/user/password/reset",
      element: <ResetPassword />,
      requiresAuth: false,
    },
    {
      path: "/blog/:title/:id",
      element: <BlogContent />,
      requiresAuth: false,
    },
    {
      path: "/cookie-policy",
      element: <CookiePolicy />,
      requiresAuth: false,
    },
  ];
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default MainRoutes;
