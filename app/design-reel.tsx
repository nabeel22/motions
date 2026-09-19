'use client';
import {useEffect,useState,type CSSProperties} from 'react';
import {designs} from './designs-data';
export default function DesignReel(){
 const [selection,setSelection]=useState(designs.filter((_,i)=>i%3===0).slice(0,24));
 useEffect(()=>{const mix=[...designs];for(let i=mix.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[mix[i],mix[j]]=[mix[j],mix[i]]}setSelection(mix.slice(0,24))},[]);
 return <section className="design-showcase" id="design-showcase"><div className="wrap section-heading"><div><span className="eyebrow">DESIGN PORTFOLIO</span><h2>Distinctive by design.</h2><p>Brand visuals, campaigns, and social stories.</p></div></div><div className="design-rows">{[0,1,2].map(row=>{const images=selection.slice(row*8,row*8+8);return <div className="design-row" key={row} aria-label={`Design collection ${row+1}`}><div className="design-track" style={{'--duration':`${[71,93,59][row]}s`,'--direction':row===1?'reverse':'normal','--offset':`${[-13,-37,-8][row]}s`} as CSSProperties}>{[0,1].map(copy=><div className="design-group" key={copy} aria-hidden={copy===1?true:undefined}>{images.map((item,i)=><figure className="design-tile" key={item.id}><img src={item.src} alt={copy===1?'':`Portfolio design: ${item.title}`} loading="lazy" decoding="async"/></figure>)}</div>)}</div></div>})}</div></section>
}
