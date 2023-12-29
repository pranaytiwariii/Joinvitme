// import Analytics from "./Components/Analytics"
// import Footer from "./Components/Footer"
// import Instapics from "./Components/Instapics"
// import Navbar from "./Components/Navbar"
// import TestLayout from "./Components/Testimonial/TestLayout"
// import Travelerspy from "./Components/Travelerspy"

import MainRouter from "./Router"
// import { SpeedInsights } from '@vercel/speed-insights/react';
import { SpeedInsights } from "@vercel/speed-insights/react"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;800&display=swap');
</style>

function App() {
  // font-spline
  return (
    <div className=" bg-grad">
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
