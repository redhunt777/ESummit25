import React from "react"
import PastSpeakersmain from "./components/past speakers/Pastspeakermain"
import FeaturedSpeakers from "./components/FeaturedSpeaker/FS"
import SponsorshipSection from "./components/SponsorshipSection"
import Faq from "./components/FAQ/Faq"
import AboutUs from "./components/AboutUs/AboutUs";


function App() {
  return (
    <>
    <AboutUs />
    <FeaturedSpeakers/>
    <PastSpeakersmain/>
    <SponsorshipSection/>
    <Faq/>
    </>
  );
}

export default App;
