const members = [
    {
        name: "Zen Auladi", role: "Sepuh",
        bio: "Bukan orang bener, tapi beneran orang.",
        langs: ["PYTHON", "PHP"],
        hobbies: ["Ngoding", "Mobil", "Musik"],
        photo: "assets/images/Zen.jpeg",
        card: { rank: "A", suit: "♠" },
        song: "assets/audio/zenxi.mp3", title: "Bintang 5", artist: "Tenxi"
    },
    {
        name: "Billy Jonas Wijaya", role: "Fineshyt",
        bio: "Aku bukan dipimpin, aku yang memimpin.",
        langs: ["HTML", "PYTHON", "SQL", "JAVASCRIPT"],
        hobbies: ["Game", "Menggambar", "Baca Buku", "Tidur", "Musik"],
        photo: "assets/images/billy.jpeg",
        card: { rank: "JK", suit: "★" },
        song: "assets/audio/billy.mp3", title: "Know me", artist: "GEMINI"
    },
    {
        name: "Pandu Satrio", role: "Master koding jir",
        bio: "Kejarlah cita-cita, jangan dia yang ngga cinta.",
        langs: ["HTML", "PYTHON"],
        hobbies: ["Ngoding", "Mobil"],
        photo: "assets/images/ndu.jpeg",
        card: { rank: "Q", suit: "♦" },
        song: "assets/audio/pandu.mp3", title: "Soulmate", artist: "Kahitna"
    },
    {
        name: "M. Naufal Ariadiansyah", role: "Ambasius",
        bio: "A lot has changed, but I'm still here.",
        langs: ["HTML", "PYTHON"],
        hobbies: ["Musik", "Game"],
        photo: "assets/images/naufal.jpeg",
        card: { rank: "J", suit: "♣" },
        song: "assets/audio/naufall.mp3", title: "Can't Take My Eyes Off You", artist: "Lula Band"
    },
    {
        name: "M. Faris Nur Rizqi", role: "Founding Father",
        bio: "Try To Be Better.",
        langs: ["PYTHON", "HTML"],
        hobbies: ["Game", "Musik"],
        photo: "assets/images/faris.jpeg",
        card: { rank: "10", suit: "♠" },
        song: "assets/audio/faris.mp3", title: "Whatever", artist: "Oasis"
    },
    {
        name: "Althafian Rizqullah Susilo", role: "Master Koding #2",
        bio: "Hidup itu sederhana, kita yang membuatnya rumit.",
        langs: ["HTML", "C", "PYTHON"],
        hobbies: ["Game", "Ngoding"],
        photo: "assets/images/althaf.jpeg",
        card: { rank: "9", suit: "♥" },
        song: "assets/audio/althaf.mp3", title: "Haruka", artist: "Yoasobi"
    },
    {
        name: "Muhamad Kiram Albara", role: "Tuan Rumah",
        bio: "Ga perlu kata-kata, yang penting aksi nyata.",
        langs: ["PYTHON"],
        hobbies: ["Gaming", "Futsal", "Gym"],
        photo: "assets/images/kiram.jpeg",
        card: { rank: "8", suit: "♦" },
        song: "assets/audio/kiram.mp3", title: "Mimpi Yang Sempurna", artist: "Peterpan"
    },
    {
        name: "Muhammad Nazmy Syarief", role: "Reminder Tugas",
        bio: "Build with intention, refined over time.",
        langs: ["PYTHON"],
        hobbies: ["Nugas", "Game", "Doom Scrolling", "Healing", "Photoshoot"],
        photo: "assets/images/nazmy.jpeg",
        card: { rank: "7", suit: "♣" },
        song: "assets/audio/nazmy.mp3", title: "Just Give Me A Reason ", artist: "Pink"
    },
    {
        name: "Syafi", role: "Lost Member",
        bio: "404",
        langs: ["PYTHON"],
        hobbies: ["404"],
        photo: "assets/images/JESTER.jpeg",
        card: { rank: "K", suit: "♥" },
        song: "songs/lagu9.mp3", title: "404", artist: "404"
    }
];
const $=i=>document.getElementById(i),R=n=>Math.floor(Math.random()*n),pick=a=>a[R(a.length)];
const TY={"♠":["GELAP","#6c4bb5"],"♥":["API","#e4572e"],"♦":["AIR","#2e86de"],"♣":["RUMPUT","#2e9e4f"],"★":["LISTRIK","#e0a800"]};
/* SFX sintetis (tanpa file). Ganti dengan file sendiri lewat SFX_FILES kalau mau. */
const SFX_FILES={};   // contoh: {hit:"assets/audio/hit.mp3"}
let AC,mute=false;
function tone(f,d,t="square",v=.07,at=0,to){if(mute)return;AC=AC||new(window.AudioContext||window.webkitAudioContext)();const o=AC.createOscillator(),g=AC.createGain(),s=AC.currentTime+at;o.type=t;o.frequency.setValueAtTime(f,s);if(to)o.frequency.exponentialRampToValueAtTime(to,s+d);g.gain.setValueAtTime(v,s);g.gain.exponentialRampToValueAtTime(.001,s+d);o.connect(g).connect(AC.destination);o.start(s);o.stop(s+d)}
function noise(d,v=.1){if(mute)return;AC=AC||new(window.AudioContext||window.webkitAudioContext)();const b=AC.createBuffer(1,AC.sampleRate*d,AC.sampleRate),a=b.getChannelData(0);for(let i=0;i<a.length;i++)a[i]=(Math.random()*2-1)*(1-i/a.length);const s=AC.createBufferSource(),g=AC.createGain();g.gain.value=v;s.buffer=b;s.connect(g).connect(AC.destination);s.start()}
const SFX={
 blip:()=>tone(880+R(400),.08,"square",.05),
 pick:()=>{tone(660,.08);tone(990,.12,"square",.06,.07)},
 hit:()=>{noise(.18,.12);tone(180,.2,"sawtooth",.08,0,60)},
 faint:()=>tone(500,.7,"triangle",.1,0,60),
 throw:()=>tone(300,.4,"sine",.08,0,900),
 shake:()=>{tone(200,.1,"square",.06);noise(.05,.05)},
 catch:()=>[523,659,784,1047,784,1047].forEach((f,i)=>tone(f,.14,"square",.07,i*.11)),
 flee:()=>tone(700,.4,"triangle",.07,0,200),
 win:()=>[784,988,1175,1568].forEach((f,i)=>tone(f,.16,"square",.07,i*.12))};
function sfx(n){if(SFX_FILES[n]&&!mute){new Audio(SFX_FILES[n]).play().catch(()=>SFX[n]());return}SFX[n]()}
$("snd").onclick=e=>{mute=!mute;e.target.textContent="SFX: "+(mute?"OFF":"ON");if(!mute)sfx("pick")};
/* hero */
$("ttl").innerHTML=[..."SOLIDARITY"].map(c=>`<span>${c}</span>`).join("");
$("ttl").onpointerover=e=>{if(e.target.tagName==="SPAN")sfx("blip")};
document.querySelectorAll("#ttl span").forEach((s,i)=>setTimeout(()=>{s.classList.add("j");setTimeout(()=>s.classList.remove("j"),250)},300+i*70));
$("hero").onpointermove=e=>{const r=$("hero").getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;document.querySelectorAll(".orb").forEach(o=>{const d=+o.dataset.d/400;o.style.transform=`translate(${x*d}px,${y*d}px)`})};
/* dex */
const stat=m=>({HP:60+m.langs.length*15+m.hobbies.length*8,ATK:40+m.langs.length*12,DEF:40+m.hobbies.length*10,SPD:50+(m.name.length*3)%40});
let cur=members[0],audio=null;
/* ===== game state (tersimpan di browser) ===== */
const KEY="solidarity_game_v1",FRESH={name:"Trainer",p:0,xp:0,coins:20,wins:0,caught:[],pot:2,badges:[]};
let G=Object.assign({},FRESH),had=false;
try{const s=JSON.parse(localStorage.getItem(KEY));if(s&&s.name){G=Object.assign({},FRESH,s);had=true}}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(G))}catch(e){}};
const lv=()=>1+Math.floor(G.xp/50),partner=()=>members[G.p]||members[0];
const BAD=[["PEMULA","Menang 1x",()=>G.wins>=1],["JAGOAN","Menang 5x",()=>G.wins>=5],["PEMBURU","Tangkap 3 anggota",()=>G.caught.length>=3],["KOLEKTOR","Tangkap semua",()=>G.caught.length>=members.length],["LEGENDA","Capai Lv 5",()=>lv()>=5]];
const ADV={API:"RUMPUT",RUMPUT:"AIR",AIR:"API",LISTRIK:"AIR",GELAP:"LISTRIK"};
function toast(t){const e=$("toast");e.textContent=t;e.classList.remove("on");void e.offsetWidth;e.classList.add("on")}
function hud(){$("hl").textContent="LV "+lv();$("hx").style.width=(G.xp%50)*2+"%";$("hc").textContent=G.coins;$("ha").src=partner().photo;$("hn").textContent=G.name;members.forEach((m,i)=>m._b&&m._b.classList.toggle("cg",G.caught.includes(i)))}
function gain(x,c=0){const a=lv();G.xp+=x;G.coins+=c;if(lv()>a){toast("LEVEL UP! Lv "+lv());sfx("win")}BAD.forEach(b=>{if(b[2]()&&!G.badges.includes(b[0])){G.badges.push(b[0]);setTimeout(()=>{toast("BADGE: "+b[0]);sfx("catch")},1600)}});save();hud()}

members.forEach((m,i)=>{const b=document.createElement("button");b.className="it";b.innerHTML=`<img src="${m.photo}" alt=""><span>${m.name.split(" ")[0]}<small>#${String(i+1).padStart(3,"0")} · ${TY[m.card.suit][0]}</small></span>`;b.onclick=()=>{show(m);sfx("pick")};m._b=b;$("list").append(b)});
function show(m){cur=m;members.forEach(x=>x._b.classList.toggle("on",x===m));const [tn,tc]=TY[m.card.suit],s=stat(m),C=["#e63946","#ff9f1c","#3a86ff","#2ec4b6"];
 $("scr").innerHTML=`<div class="ph pop" style="--tc:${tc}"><img src="${m.photo}" alt="${m.name}"></div><div><span class="ty" style="--tc:${tc}">${tn}</span><h3 class="nm">${m.name}</h3><p class="bg" style="font-size:.7rem">${m.role}</p><p class="bio">"${m.bio}"</p>${Object.entries(s).map(([k,v],i)=>`<div class="st"><span>${k}</span><div class="bar"><i data-w="${Math.min(100,v/1.6)}" style="--c:${C[i]}"></i></div><span>${v}</span></div>`).join("")}<div class="mv">${m.langs.map(l=>`<b>${l}</b>`).join("")}</div><div class="mv">${m.hobbies.map(h=>`<b style="background:#fff;color:#14110F;border:2px solid #14110F">${h}</b>`).join("")}</div>${m.song?`<button class="btn b" id="pl" style="font-size:.7rem">♪ ${m.title||"Lagu"}</button>`:""}</div>`;
 requestAnimationFrame(()=>requestAnimationFrame(()=>document.querySelectorAll(".bar i").forEach(i=>i.style.width=i.dataset.w+"%")));
 const p=$("pl");if(p)p.onclick=()=>{if(audio&&!audio.paused){audio.pause();return}audio=new Audio(m.song);audio.play().catch(()=>{})};
 fighter("fp",partner());const bb=document.createElement("button");bb.className="btn r";bb.style.cssText="font-size:.7rem;margin-left:6px";bb.textContent="JADIKAN PARTNER";bb.onclick=()=>{G.p=members.indexOf(m);save();hud();fighter("fp",partner());sfx("pick");toast("Partner: "+m.name.split(" ")[0])};$("scr").lastElementChild.append(bb)}
/* arena */
let P,E,php,ehp,maxP,maxE,busy=false,lastFx="";
function fighter(id,m,full){$(id).innerHTML=`<img src="${m.photo}" alt=""><b class="bg" style="display:block;font-size:.85rem;margin-top:6px">${m.name.split(" ")[0]}</b><div class="hpb"><i></i></div>`;}
function hp(id,v,max){const i=$(id).querySelector(".hpb i");i.style.width=Math.max(0,v/max*100)+"%";i.style.background=v/max>.5?"#2ec45a":v/max>.2?"#ffb703":"#e63946"}
$("start").onclick=()=>{P=partner();E=pick(members.filter(m=>m!==P));maxP=php=stat(P).HP+lv()*6;maxE=ehp=stat(E).HP+(lv()-1)*4;busy=false;fighter("fp",P);fighter("fe",E);$("fp").classList.remove("dead");$("fe").classList.remove("dead");$("log").textContent=`${E.name.split(" ")[0]} liar menantangmu!`;sfx("pick");
 $("moves").innerHTML="";P.langs.slice(0,4).forEach(l=>{const b=document.createElement("button");b.className="btn";b.textContent=l;b.onclick=()=>turn(l);$("moves").append(b)});const pb=document.createElement("button");pb.className="btn b";pb.id="pot";pb.onclick=potion;$("moves").append(pb);potLbl()};
function atk(from,to,move,isP){const tf=TY[from.card.suit][0],tt=TY[to.card.suit][0];let mu=1;lastFx="";if(ADV[tf]===tt){mu=1.5;lastFx=" Efektif banget!"}else if(ADV[tt]===tf){mu=.7;lastFx=" Kurang efektif..."}const d=Math.round((14+R(16)+Math.floor(stat(from).ATK/8)+(isP?lv()*2:0))*mu),el=$(isP?"fe":"fp");el.classList.remove("hit");void el.offsetWidth;el.classList.add("hit");sfx("hit");return d}
function turn(l){if(busy||!P)return;busy=true;const d=atk(P,E,l,1);ehp-=d;hp("fe",ehp,maxE);$("log").textContent=`${P.name.split(" ")[0]} pakai ${l}! -${d}.${lastFx}`;
 if(ehp<=0)return end(1);
 setTimeout(()=>{const m=pick(E.langs),d2=atk(E,P,m,0);php-=d2;hp("fp",php,maxP);$("log").textContent=`${E.name.split(" ")[0]} balas ${m}! -${d2}.${lastFx}`;if(php<=0)return end(0);busy=false},900)}
function potLbl(){const p=$("pot");if(p)p.textContent=G.pot>0?"POTION x"+G.pot:"BELI POTION (10 KOIN)";save()}
function potion(){if(busy||!P)return;if(G.pot<1){if(G.coins<10){toast("Koin kurang!");return}G.coins-=10;G.pot++;hud();potLbl();sfx("pick");return}
 busy=true;G.pot--;potLbl();php=Math.min(maxP,php+Math.round(maxP*.4));hp("fp",php,maxP);sfx("catch");$("log").textContent="Potion dipakai! HP pulih.";
 setTimeout(()=>{const m=pick(E.langs),d2=atk(E,P,m,0);php-=d2;hp("fp",php,maxP);$("log").textContent=`${E.name.split(" ")[0]} balas ${m}! -${d2}.${lastFx}`;if(php<=0)return end(0);busy=false},900)}
function end(w){busy=true;if(w){G.wins++;const c=15+R(10);gain(30,c);toast("MENANG! +30 XP, +"+c+" koin")}else gain(8,2);const lo=$(w?"fe":"fp");lo.classList.add("dead");setTimeout(()=>sfx("faint"),300);setTimeout(()=>{sfx(w?"win":"flee");$("log").textContent=w?"MENANG! Tekan MULAI BATTLE untuk lawan baru.":"Kalah... coba lagi!"},900);$("moves").innerHTML=""}
/* tangkap */
const party=[];let wild,lock=false;
function spawn(){wild=pick(members);lock=false;$("wild").classList.remove("rev");$("wild").firstElementChild.src=wild.photo;$("cm").textContent="Ada anggota liar muncul!";$("ball").className="ball"}
$("ball").onclick=()=>{if(lock)return;lock=true;const b=$("ball");sfx("throw");b.classList.add("go");
 setTimeout(()=>{b.classList.remove("go");b.classList.add("sh");sfx("shake");setTimeout(()=>sfx("shake"),500);setTimeout(()=>sfx("shake"),1000)},550);
 setTimeout(()=>{b.classList.remove("sh");if(Math.random()<.65){$("wild").classList.add("rev");sfx("catch");$("cm").textContent=`GOTCHA! ${wild.name.split(" ")[0]} tertangkap!`;{const wi=members.indexOf(wild);if(!G.caught.includes(wi)){G.caught.push(wi);gain(20,10)}else gain(5,3)}if(!party.includes(wild)){party.push(wild);const i=new Image();i.src=wild.photo;$("party").append(i)}}else{sfx("flee");$("cm").textContent="Yah, lepas! Coba lagi.";lock=false}},2200)};
$("nx").onclick=()=>{sfx("blip");spawn()};
/* ===== layar judul & HUD ===== */
G.caught.forEach(i=>{party.push(members[i]);const im=new Image();im.src=members[i].photo;$("party").append(im)});
show(partner());spawn();hud();
document.body.classList.add("lock");let sel=G.p;
if(had)$("cont").hidden=false;
members.forEach((m,i)=>{const b=document.createElement("button");b.innerHTML=`<img src="${m.photo}" alt="${m.name}">`;b.title=m.name;b.onclick=()=>{sel=i;[...$("sg").children].forEach((x,k)=>x.classList.toggle("on",k===i));sfx("pick")};if(i===sel)b.className="on";$("sg").append(b)});
function enter(){sfx("win");$("title").classList.add("out");document.body.classList.remove("lock");setTimeout(()=>$("title").remove(),800);show(partner());hud();setTimeout(()=>toast("Selamat datang, "+G.name+"!"),700)}
$("st").onclick=()=>{sfx("pick");$("s1").hidden=true;$("s2").hidden=false};
$("cont").onclick=enter;
$("go").onclick=()=>{G=Object.assign({},FRESH,{name:$("tn").value.trim().slice(0,12)||"Trainer",p:sel,caught:[],badges:[]});party.length=0;$("party").innerHTML="";save();enter()};
document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>{sfx("blip");$(b.dataset.go).scrollIntoView({behavior:"smooth"})});
$("tr").onclick=()=>{sfx("pick");$("tb").innerHTML=`<p>Nama: ${G.name}</p><p>Level ${lv()} · ${G.xp} XP · ${G.coins} koin</p><p>Menang: ${G.wins}x · Tertangkap: ${G.caught.length}/${members.length}</p><div>${BAD.map(b=>`<span class="bd ${G.badges.includes(b[0])?"":"lk"}" title="${b[1]}">${b[0]}</span>`).join("")}</div><p style="font-size:.75rem;opacity:.7">Badge terkunci: arahkan kursor untuk melihat syaratnya.</p>`;$("tm").classList.add("on")};
$("tc").onclick=()=>$("tm").classList.remove("on");
$("rs").onclick=()=>{if(confirm("Hapus semua progres?")){try{localStorage.removeItem(KEY)}catch(e){}location.reload()}};
