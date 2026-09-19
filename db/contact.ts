import {env} from 'cloudflare:workers';
export function contactDb(){if(!env.DB)throw new Error('Contact database unavailable');return env.DB;}
