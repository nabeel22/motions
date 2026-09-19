import type {AnchorHTMLAttributes} from 'react';
/** Native navigation keeps every destination usable before hydration. */
export default function Link(props:AnchorHTMLAttributes<HTMLAnchorElement>){return <a {...props}/>}
