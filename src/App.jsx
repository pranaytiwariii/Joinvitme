// import Analytics from "./Components/Analytics"
// import Footer from "./Components/Footer"
// import Instapics from "./Components/Instapics"
// import Navbar from "./Components/Navbar"
// import TestLayout from "./Components/Testimonial/TestLayout"
// import Travelerspy from "./Components/Travelerspy"

import MainRouter from "./Router"
// import { SpeedInsights } from '@vercel/speed-insights/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {

  return (
    <div className="font-spline bg-grad">
    {/* <Navbar />
    <Travelerspy />
    <Analytics />
    <Instapics />
    <TestLayout />
    <Footer /> */}
    <MainRouter />
    <SpeedInsights />
    </div>
  )
}

export default App
