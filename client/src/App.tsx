import FeedCarousel from "./ui/FeedCarousel";
import GoogleReviews from "./ui/GoogleReviews";
import HeroCarousel from "./ui/HeroCarousel"
import Perks from "./ui/Perks"
import  Highlights from "./ui/highlights/Highlights"
function App() {

  return (
   <main>
    <HeroCarousel />
    <Perks/>
    <Highlights/>
    <FeedCarousel/>
    <GoogleReviews />
   </main>
  )
}

export default App;
