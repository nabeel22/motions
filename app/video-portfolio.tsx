'use client';
import {useEffect,useRef,useState} from 'react';
import {ArrowLeft,ArrowRight,Pause,Play,Shuffle,Volume2,VolumeX} from 'lucide-react';
import {Button} from '@/components/ui/button';
import Link from './link';
import {shorts,metaAds, type Short} from './shorts-data';
type Player=HTMLElement & {play:()=>Promise<void>|void;pause:()=>void;muted:boolean};
function shuffle(source:Short[]){const a=[...source];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function ShortCard({video,instance,audible,onSound,playing}:{video:Short;instance:string;audible:boolean;onSound:(id:string|null)=>void;playing:boolean}){
 const card=useRef<HTMLElement>(null),host=useRef<HTMLDivElement>(null),player=useRef<Player|null>(null);const [visible,setVisible]=useState(false),[ready,setReady]=useState(false);
 useEffect(()=>{const observer=new IntersectionObserver(([entry])=>setVisible(entry.isIntersecting),{threshold:.08});if(card.current)observer.observe(card.current);return()=>observer.disconnect()},[]);
 useEffect(()=>{if(!visible||!host.current)return;const el=document.createElement('wistia-player') as Player;player.current=el;
 const attrs={'media-id':video.id,'aspect':String(video.aspect||.5625),'player-color':'#d90d21','muted':'true','autoplay':String(playing),'silent-autoplay':'true','end-video-behavior':'loop','controls-visible-on-load':'false','big-play-button':'false','play-pause-control':'false','play-pause-notifier':'false','play-bar-control':'false','fullscreen-control':'false','settings-control':'false','quality-control':'false','playback-rate-control':'false','volume-control':'false','quality-max':'720','do-not-track':'true','preload':'metadata','poster':video.poster};Object.entries(attrs).forEach(([key,value])=>el.setAttribute(key,value));
 const onReady=()=>{setReady(true);el.muted=!audible;if(playing)Promise.resolve(el.play()).catch(()=>{})};el.addEventListener('api-ready',onReady);host.current.appendChild(el);
 return()=>{el.removeEventListener('api-ready',onReady);el.pause?.();el.remove();player.current=null;setReady(false)};
 // Media is created only while its card is visible; subsequent controls update its API.
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[visible,video.id]);
 useEffect(()=>{const p=player.current;if(!ready||!p)return;p.muted=!audible;if(playing)Promise.resolve(p.play()).catch(()=>{});else p.pause?.()},[playing,audible,ready]);
 return <article className="short-card" style={{aspectRatio:video.aspect||9/16}} ref={card} aria-label={video.title}>
 <img className="short-poster" src={video.poster} alt="" loading="lazy"/>
 <div className="short-player" ref={host}/>
 <Button className="video-sound-surface" variant="ghost" disabled={!ready} aria-label={`${audible?'Mute':'Enable sound for'} ${video.title}`} aria-pressed={audible} onClick={()=>{onSound(audible?null:instance);const p=player.current;if(p){p.muted=audible;Promise.resolve(p.play()).catch(()=>{})}}}><span className="video-sound-indicator" aria-hidden="true">{audible?<Volume2 size={18}/>:<VolumeX size={18}/>}</span></Button>

 </article>
}
export default function VideoPortfolio({preview=false,collection="shorts"}:{preview?:boolean;collection?:"shorts"|"meta"}){
 const isMeta=collection==="meta",source=isMeta?metaAds:shorts;
 const [videos,setVideos]=useState(source),[paused,setPaused]=useState(false),[hover,setHover]=useState(false),[sound,setSound]=useState<string|null>(null),[loaded,setLoaded]=useState(false);const rail=useRef<HTMLDivElement>(null),group=useRef<HTMLDivElement>(null);
 useEffect(()=>{setVideos(shuffle(source));setLoaded(true);const media=window.matchMedia('(prefers-reduced-motion: reduce)');setPaused(media.matches);const changed=()=>setPaused(media.matches);media.addEventListener('change',changed);if(!document.querySelector('script[data-wistia-player]')){const s=document.createElement('script');s.src='https://fast.wistia.com/player.js';s.async=true;s.dataset.wistiaPlayer='true';document.head.appendChild(s)}return()=>media.removeEventListener('change',changed)},[]);
 useEffect(()=>{const el=rail.current;if(!el||paused||hover)return;let frame=0,last=0,position=el.scrollLeft;const tick=(now:number)=>{if(last&&!document.hidden){if(Math.abs(el.scrollLeft-position)>2)position=el.scrollLeft;position+=Math.min(now-last,80)*.035;const width=group.current?.offsetWidth||0;if(width&&position>=width)position-=width;el.scrollLeft=position}last=now;frame=requestAnimationFrame(tick)};frame=requestAnimationFrame(tick);return()=>cancelAnimationFrame(frame)},[paused,hover,videos]);
 function move(direction:number){const el=rail.current;if(el)el.scrollLeft+=direction*300}
 useEffect(()=>{const silence=()=>setSound(null);window.addEventListener('kiani-mute-reels',silence);return()=>window.removeEventListener('kiani-mute-reels',silence)},[]);
 function chooseSound(id:string|null){document.querySelectorAll<Player>('wistia-player').forEach(p=>{p.muted=true});window.dispatchEvent(new Event('kiani-mute-reels'));setSound(id)}
 function remix(){setSound(null);setVideos(shuffle(source));if(rail.current)rail.current.scrollLeft=0}
 return <section className={`shorts-section ${preview?'shorts-preview':''} ${isMeta?'meta-reel':''}`} id={isMeta?'meta-ads':'shorts'}><div className="wrap shorts-heading"><div><span className="eyebrow">{isMeta?'FACEBOOK & INSTAGRAM':'SHORT FORM. LASTING IMPACT.'}</span><h2>{isMeta?'Facebook Meta ads.':'Small screen.'}<br/><em>{isMeta?'Made to connect.':'Big energy.'}</em></h2></div><div className="shorts-intro"><p>{isMeta?'Creative video ads for the social feed.':'A collection of cuts, stories, and scroll-stopping moments.'}</p>{preview&&<Link href={isMeta?"/portfolio#meta-ads":"/portfolio#shorts"} className="text-link">Explore the video portfolio <ArrowRight size={18}/></Link>}</div></div>
 <div className="shorts-rail" ref={rail} aria-label={isMeta?"Meta ads portfolio":"Short video portfolio"} onPointerOver={e=>{if(e.pointerType==='mouse'&&(e.target as HTMLElement).closest('.short-card'))setHover(true)}} onPointerOut={e=>{if(e.pointerType==='mouse'&&!(e.relatedTarget as HTMLElement|null)?.closest?.('.short-card'))setHover(false)}}>
 <div className="shorts-group" ref={group}>{videos.map(video=><ShortCard key={video.id} video={video} instance={video.id} audible={sound===video.id} onSound={chooseSound} playing={loaded&&(!paused||sound===video.id)}/>)}</div>
 <div className="shorts-group">{videos.slice(0,6).map(video=><ShortCard key={video.id} video={video} instance={`${video.id}-copy`} audible={sound===`${video.id}-copy`} onSound={chooseSound} playing={loaded&&!paused}/>)}</div>
 </div>
 <div className="wrap shorts-bottom"><div className="shorts-caption"><span className="red-line"/>{source.length} {isMeta?'META ADS':'SHORTS'} <span className="caption-detail">/ Kiani motions</span></div><div className="shorts-controls"><Button variant="ghost" className="rail-button" disabled={!loaded} onClick={()=>{setPaused(!paused);setSound(null)}} aria-label={paused?'Play motion':'Pause motion'}>{paused?<Play size={16}/>:<Pause size={16}/>}<span>{paused?'Play':'Pause'}</span></Button><Button variant="ghost" className="rail-button" disabled={!loaded} onClick={remix} aria-label={isMeta?"Shuffle Meta ads":"Shuffle shorts"}><Shuffle size={16}/><span>Shuffle</span></Button><Button variant="ghost" className="rail-button" size="icon" onClick={()=>move(-1)} aria-label={isMeta?"Previous Meta ads":"Previous shorts"}><ArrowLeft size={20}/></Button><Button variant="ghost" className="rail-button" size="icon" onClick={()=>move(1)} aria-label={isMeta?"Next Meta ads":"Next shorts"}><ArrowRight size={20}/></Button></div></div><p className="wrap shorts-hint">Hover to hold the row. Tap a video for sound. Swipe to explore.</p>
 </section>
}
