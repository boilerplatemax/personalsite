import React from 'react'
import ProjectsPage from "../pages/Projects";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Loading from "./Loading";
import ContactPage from "../pages/ContactPage";

import {AnimatePresence} from 'framer-motion'

import {Routes, Route, useLocation} from 'react-router-dom'
const LazyProjects = React.lazy(()=>import("../pages/Projects"))

export default function AnimatedRoutes() {
    const location = useLocation()
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/projects" element={<ProjectsPage/>} />
    <Route path="/contact" element={<ContactPage/>} />

  </Routes>
  </AnimatePresence>
  )
}
