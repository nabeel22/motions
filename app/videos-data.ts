export type PortfolioVideo = { id:string; title:string; category:string; description:string; sourceUrl:string; poster?:string };
// Add published YouTube, Vimeo, or direct MP4 URLs here. No demo videos are presented as client work.
export const portfolioVideos: PortfolioVideo[] = [];
export function videoSource(raw:string): {type:'embed'|'file';src:string}|null {
 try{const u=new URL(raw);if(u.protocol!=='https:')return null;const host=u.hostname.replace(/^www\./,'');
 if(host==='youtu.be'||host==='youtube.com'){const id=host==='youtu.be'?u.pathname.slice(1):u.searchParams.get('v')||u.pathname.split('/').filter(Boolean).pop();if(id&&/^[A-Za-z0-9_-]{11}$/.test(id))return {type:'embed',src:`https://www.youtube-nocookie.com/embed/${id}`};}
 if(host==='vimeo.com'){const id=u.pathname.split('/').filter(Boolean).pop();if(id&&/^\d+$/.test(id))return {type:'embed',src:`https://player.vimeo.com/video/${id}`};}
 if(/\.mp4$/i.test(u.pathname))return {type:'file',src:u.href};return null;
 }catch{return null;}
}
