import Analytics from "./Components/Analytics"
import Instapics from "./Components/Instapics"
import TestLayout from "./Components/Testimonial/TestLayout"
import Travelerspy from "./Components/Travelerspy"

export default function Home() {
  return (
    <div>
      <Travelerspy />
      <Analytics />
      <Instapics />
      <TestLayout />
    </div>
  );
}
