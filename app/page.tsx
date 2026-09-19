import DesignReel from './design-reel';
import VideoPortfolio from './video-portfolio';
import { Hero, Stats, Heading, ServiceGrid, Team, Testimonials, CTA } from './site';
export default function Home(){return <><Hero/><Stats/><section className="wrap section reveal"><Heading title="Featured Services" text="From your brand’s first impression to its next big move, we connect design, strategy, and technology." href="/services"/><ServiceGrid/></section><DesignReel/><VideoPortfolio preview/><VideoPortfolio preview collection="meta"/><Team/><Testimonials/><CTA/></>}
