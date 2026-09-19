import DesignReel from '../design-reel';
import VideoPortfolio from '../video-portfolio';
import {PageHero,CTA} from '../site';
export const metadata={title:'Portfolio',description:'Explore graphic design, short-form videos, and Meta ad creative by Kiani motions.'};
export default function Page(){return <><PageHero title="Ideas Made Visible." accent="Possibilities Made Real." word="Portfolio"/><DesignReel/><VideoPortfolio/><VideoPortfolio collection="meta"/><CTA/></>}
