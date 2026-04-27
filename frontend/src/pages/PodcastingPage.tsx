import FAQSection from '@/components/FAQ'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ServicesStack from '@/sections/brandingSection/Stack'
import MediaCarousel from '@/sections/podcastSection/Hero'
// import PodcastHero from '@/sections/podcastSection/HeroSection'
// import MusicPortfolio from '@/sections/podcastSection/MusicPortfolio'
// import RecentPodcasts from '@/sections/podcastSection/RecentPodcasts'
// import VideoFeed from '@/sections/podcastSection/RecentPodcasts'
import PremiumPortfolio from '@/sections/podcastSection/Services'
// import Services from '@/sections/podcastSection/Services'
// import VideoListFeed from '@/sections/podcastSection/VideoListFeed'
// import MatchedPodcastFeed from '@/sections/uniqueDesign/design'
// import HorizontalVideoFeed from '@/sections/uniqueDesign/hori'


export default function PodcastingPage() {
  return (
    <><Navbar />
      <MediaCarousel />
      <PremiumPortfolio />
      {/* <MusicPortfolio /> */}
      <ServicesStack />
      {/* <HorizontalVideoFeed/> */}
      {/* <VideoFeed /> */}
{/* <VideoListFeed/> */}
      {/* <MatchedPodcastFeed /> */}
      <FAQSection/>
      <Footer/>
    </>
    
  )
}
