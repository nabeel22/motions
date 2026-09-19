export type Short = {id:string;share:string;title:string;poster:string;aspect?:number};
const rows = [
['uerppboenl','ned142l9fkvix6f','Predicting profitable growth','e9ef8d838d3cf532fb7e635e69a5770ea7e08919'],
['d17pz4kq49','llfmoi7smvemawc','Successful entrepreneurs','2357c0f12925580c6d15461f4fb18be343e58be3'],
['6rdq8sagtg','a3h12k0iuu01eph','Short film 03','04e5e0149dff38afcf83617845fce3d3ea12ce5c'],
['jbmc7l4lge','dev3hu6giexxo1h','Emiliano','2c47026c84e9e4185274b79ca69989104b2c1aec'],
['6fh9n5vfhv','3d38l3omz94sjqy','Autologous cell therapy','d4f82441636a397a77d854259f6abe3640ce2533'],
['t05088xxtk','grrfgucwh2jp0he','Client shorts','efe0f22ee6235d5410dfd6ba70b68b97c316e831'],
['beuc93qfs0','q7lmde0vuz1cw6z','Alex','e94133041306f36bf76da6246c385bd21d1a6f75'],
['t55g9jdt3l','mhcaxzb5qsh9mhh','Short film 08','4744f6670f54cb970840f818dbab507917cba0d9'],
['qt4wfql4hm','460i1mujqi7cjwa','Short film 09','f8350eecc56e1bedad7b174e923d7d98ad6a50c3'],
['btgingwyuw','2n7lag14jpdcuuq','Short film 10','87e026bf49002def4f0491ac4199a7edc3bf8f94'],
['rqxah2liyc','s4loouo4aijnulp','Short film 11','a180a970e4fd94adce0d031d2e43eacf27ca613a'],
['gt4yyu1ynb','umnsxuobtjtq4i3','Short film 12','ad10d958316f905948c4728c7758b123ceaa9f2c'],
['m4wysrx497','bc90u084862fqon','Short film 13','db8d1bf362ea43157abfe13b64612efcef02b295'],
['jreew55cn1','q5haxhlvjr1f4sw','Short film 14','eadf4477ad4493af37c8e4b4a95207111378ed98'],
['3a8btzcr5l','521szulvy0zt7m3','Living your best life','2eb2be9814afd6a512a01f025d079b2d128cb79e'],
['1sd2tuz51p','oz01dqjqqj6amvn','Your desperation had a scent','e3730a02f093ede4d5223bc1ed6c77ed2280d3e2'],
['z576pcpft1','hsh6sx4ode3nrhq','AM campaign','12708d7da97a7015e821883809b3503bf94c4d7c']
];
export const shorts:Short[]=rows.map(([id,share,title,poster])=>({id,share,title,poster:`https://embed-ssl.wistia.com/deliveries/${poster}.webp?image_crop_resized=640x1138`}));

export const metaAds:Short[]=[
 {id:'hh5hdf2pml',share:'so8s4iwbq7k2tpo',title:'Meta ad 01',poster:'7d8287c8f53d2c1c30b28a62ba40b3ba0276bc3d'},
 {id:'c3n3lp0pxj',share:'cyr2j192qg8cpoc',title:'Meta ad 02',poster:'04e866338426680fa0f13c4a6641c215592cf06e'},
 {id:'kisaxjojdf',share:'gdrrhrrf4a8x0ei',title:'Meta ad 03',poster:'091809c17a6a93d27c023a5931ef4e2b0f0f5239'},
 {id:'k2j982uz9q',share:'tj7g4v3s8nc2g9k',title:'Meta ad 04',poster:'8e3607dfb111143395cfddf2929278d88d51df5a'},
 {id:'kvl0leg3va',share:'9615jdbzr053rv7',title:'Meta ad 05',poster:'c34aaec096a1831c79941d87c6b496e27405c723'},
 {id:'yp8dvi9kmj',share:'7i8g4z9wsjlzhb8',title:'Meta ad 06',poster:'a98a60f09fb62f0980173e6016018d6c4e4a2c53'}
].map(v=>({...v,aspect:1,poster:`https://embed-ssl.wistia.com/deliveries/${v.poster}.webp?image_crop_resized=640x640`}));
