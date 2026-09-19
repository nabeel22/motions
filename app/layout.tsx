import type { Metadata } from 'next';
import './globals.css';
import { Shell } from './site';
export const metadata:Metadata={title:{default:'Kiani motions — Turning Ideas Into Digital Reality',template:'%s | Kiani motions'},description:'Creative design, web development, and brand strategy. Explore the Kiani motions digital agency.',icons:{icon:'/favicon.svg',shortcut:'/favicon.svg'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><Shell>{children}</Shell></body></html>}
