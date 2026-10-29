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
const STAND=[
 {n:"THE WORLD",c:"DEKAT",why:"Sepuh paling senior. Tenang, dominan, dan seolah punya waktu lebih lama dari kita semua."},
 {n:"GOLD EXPERIENCE",c:"DEKAT",why:"Suka menggambar dan ngoding: mengubah ide jadi sesuatu yang hidup. Dan yang memimpin, bukan dipimpin."},
 {n:"STAR PLATINUM",c:"DEKAT",why:"Master koding dengan presisi nyaris tak terkejar. Fokus mengejar cita-cita."},
 {n:"CRAZY DIAMOND",c:"DEKAT",why:"Banyak yang berubah, tapi dia masih di sini: sosok yang memulihkan dan bertahan."},
 {n:"HERMIT PURPLE",c:"JAUH",why:"Founding Father: yang pertama membuka jalan dan selalu mencari cara jadi lebih baik."},
 {n:"SILVER CHARIOT",c:"DEKAT",why:"Menyederhanakan hal rumit dengan tebasan bersih. Presisi ala Master Koding #2."},
 {n:"MAGICIAN'S RED",c:"JAUH",why:"Sedikit bicara, banyak aksi. Semangat panas ala futsal dan gym."},
 {n:"KILLER QUEEN",c:"CERDIK",why:"Rapi, penuh intensi, selalu menyempurnakan. Deadline pun diledakkan tepat waktu."},
 {n:"KING CRIMSON",c:"CERDIK",why:"404: hilang dari alur waktu dan tak ditemukan, lalu tiba-tiba hasilnya muncul."}];
const TYC={DEKAT:["DEKAT","#7b2cbf"],JAUH:["JAUH","#f77f00"],CERDIK:["CERDIK","#e0287f"]};
const ty=m=>m.boss?["BOSS","#ffb703"]:TYC[STAND[members.indexOf(m)].c];
/* SFX sintetis (tanpa file). Ganti dengan file sendiri lewat SFX_FILES kalau mau. */
const SFX_FILES={};   // contoh: {hit:"assets/audio/hit.mp3"}
let AC,mute=false;
function tone(f,d,t="square",v=.07,at=0,to){if(mute)return;AC=AC||new(window.AudioContext||window.webkitAudioContext)();const o=AC.createOscillator(),g=AC.createGain(),s=AC.currentTime+at;o.type=t;o.frequency.setValueAtTime(f,s);if(to)o.frequency.exponentialRampToValueAtTime(to,s+d);g.gain.setValueAtTime(v,s);g.gain.exponentialRampToValueAtTime(.001,s+d);o.connect(g).connect(AC.destination);o.start(s);o.stop(s+d)}
function noise(d,v=.1){if(mute)return;AC=AC||new(window.AudioContext||window.webkitAudioContext)();const b=AC.createBuffer(1,AC.sampleRate*d,AC.sampleRate),a=b.getChannelData(0);for(let i=0;i<a.length;i++)a[i]=(Math.random()*2-1)*(1-i/a.length);const s=AC.createBufferSource(),g=AC.createGain();g.gain.value=v;s.buffer=b;s.connect(g).connect(AC.destination);s.start()}
const SFX={
 blip:()=>tone(880+R(400),.08,"square",.05),
 pick:()=>{tone(660,.08);tone(990,.12,"square",.06,.07)},
 hit:()=>[0,.07,.14,.21].forEach(t=>{noise(.08,.1);tone(170-t*250,.1,"sawtooth",.06,t)}),
 menace:()=>{tone(80,1.2,"sawtooth",.07,0,45);noise(.5,.05)},
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
const KEY="solidarity_jojo_v1",FRESH={name:"Pengguna",p:0,xp:0,coins:20,wins:0,caught:[],pot:2,badges:[]};
let G=Object.assign({},FRESH),had=false;
try{const s=JSON.parse(localStorage.getItem(KEY));if(s&&s.name){G=Object.assign({},FRESH,s);had=true}}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(G))}catch(e){}};
const lv=()=>1+Math.floor(G.xp/50),partner=()=>members[G.p]||members[0];
const BAD=[["PEMULA","Menang 1x",()=>G.wins>=1],["JAGOAN","Menang 5x",()=>G.wins>=5],["PEMBURU","Rekrut 3 anggota",()=>G.caught.length>=3],["KOLEKTOR","Rekrut semua",()=>G.caught.length>=members.length],["LEGENDA","Capai Lv 5",()=>lv()>=5],["RAJA JESTER","Kalahkan Boss",()=>(G.bossWin||0)>=1]];
const ADV={DEKAT:"JAUH",JAUH:"CERDIK",CERDIK:"DEKAT"};
function toast(t){const e=$("toast");e.textContent=t;e.classList.remove("on");void e.offsetWidth;e.classList.add("on")}
function hud(){$("hl").textContent="LV "+lv();$("hx").style.width=(G.xp%50)*2+"%";$("hc").textContent=G.coins;$("ha").src=partner().photo;$("hn").textContent=G.name;members.forEach((m,i)=>m._b&&m._b.classList.toggle("cg",G.caught.includes(i)))}
function gain(x,c=0){const a=lv();G.xp+=x;G.coins+=c;if(lv()>a){toast("LEVEL UP! Lv "+lv());sfx("win")}BAD.forEach(b=>{if(b[2]()&&!G.badges.includes(b[0])){G.badges.push(b[0]);setTimeout(()=>{toast("BADGE: "+b[0]);sfx("catch")},1600)}});save();hud()}

members.forEach((m,i)=>{const b=document.createElement("button");b.className="it";b.innerHTML=`<img src="${m.photo}" alt=""><span>${m.name.split(" ")[0]}<small>#${String(i+1).padStart(3,"0")} · ${ty(m)[0]}</small></span>`;b.onclick=()=>{show(m);sfx("pick")};m._b=b;$("list").append(b)});
const GR=v=>v>=85?"A":v>=72?"B":v>=60?"C":v>=50?"D":"E",AX=["POWER","SPEED","RANGE","DURABILITY","PRECISION","POTENTIAL"];
const six=m=>{const s=stat(m);return[s.ATK,s.SPD,Math.min(100,30+m.langs.length*18),s.DEF,40+(m.name.length*7)%50,Math.round(s.HP*.7)]};
function radar(v){const c=100,r=76,an=i=>-Math.PI/2+i*Math.PI/3,ring=f=>AX.map((_,i)=>(c+r*f*Math.cos(an(i)))+","+(c+r*f*Math.sin(an(i)))).join(" "),pts=v.map((x,i)=>{const k=Math.min(1,x/100)*r;return(c+k*Math.cos(an(i)))+","+(c+k*Math.sin(an(i)))}).join(" "),lb=v.map((x,i)=>`<text x="${c+(r+15)*Math.cos(an(i))}" y="${c+(r+15)*Math.sin(an(i))+4}" text-anchor="middle" font-size="11" font-weight="800">${GR(x)}</text>`).join("");
 return `<svg class="rd" viewBox="0 0 200 200"><polygon points="${ring(1)}" fill="#fff" stroke="#14061f" stroke-width="2"/><polygon points="${ring(.5)}" fill="none" stroke="#14061f66"/><polygon points="${pts}" style="fill:var(--tc);fill-opacity:.75" stroke="#14061f" stroke-width="2.5"/>${lb}</svg>`}
function show(m){cur=m;const i=members.indexOf(m),S=STAND[i],[tn,tc]=ty(m),v=six(m);members.forEach(x=>x._b.classList.toggle("on",x===m));
 $("scr").innerHTML=`<div class="ph pop" style="--tc:${tc}"><img src="${m.photo}" alt="${m.name}"><span class="gz">ゴゴゴ</span></div><div style="--tc:${tc}"><span class="ty">${tn}</span><h3 class="nm">${S.n}</h3><p class="bg" style="font-size:.66rem">PENGGUNA: ${m.name} · ${m.role}</p><p class="bio">"${m.bio}"</p><p class="why">${S.why}</p><p class="spl">★ SPECIAL ${SP[i].n}: ${SP[i].d}</p><div class="rw">${radar(v)}<div class="gl">${AX.map((n,k)=>`<span>${n[0]+n.slice(1).toLowerCase()} <b>${GR(v[k])}</b></span>`).join("")}</div></div><p class="bg" style="font-size:.62rem;margin:6px 0 0">KEMAMPUAN</p><div class="mv">${m.langs.map(l=>`<b>${l}</b>`).join("")}</div><div class="mv">${m.hobbies.map(h=>`<b style="background:#fff;color:#14061f;border:2px solid #14061f">${h}</b>`).join("")}</div>${m.song?`<button class="btn b" id="pl" style="font-size:.7rem">♪ ${m.title||"Lagu"}</button>`:""}</div>`;
 const p=$("pl");if(p)p.onclick=()=>{if(audio&&!audio.paused){audio.pause();return}audio=new Audio(m.song);audio.play().catch(()=>{})};
 fighter("fp",partner());const bb=document.createElement("button");bb.className="btn r";bb.style.cssText="font-size:.7rem;margin-left:6px";bb.textContent="JADIKAN PARTNER";bb.onclick=()=>{G.p=members.indexOf(m);save();hud();fighter("fp",partner());sfx("pick");toast("Partner: "+S.n)};$("scr").lastElementChild.append(bb)}
/* arena */
const SP=[{n:"Time Stop",t:"stun",d:"Lawan melewatkan 2 giliran"},{n:"Life Burst",t:"heal",d:"Pulihkan 40% HP"},{n:"Barrage",t:"big",d:"Serangan beruntun x2"},{n:"Restore",t:"guard",d:"Serangan berikutnya dikurangi 50% + pulih 15%"},{n:"Scout",t:"crit",d:"Serangan berikutnya x1.8"},{n:"Rapier Rush",t:"big2",d:"Tusukan cepat x1.7"},{n:"Flame Burn",t:"burn",d:"Bakar lawan selama 3 giliran"},{n:"Primed Bomb",t:"bomb",d:"Bom meledak 2 giliran lagi (60 dmg)"},{n:"Epitaph",t:"evade",d:"Hindari serangan berikutnya"}];
const LOGO="assets/images/jesterT.jpeg";
const BOSS={boss:1,name:"The Joker",photo:LOGO,langs:["PYTHON","SQL","HTML","JAVASCRIPT"],hobbies:["Kartu","Teka-teki","Tawa","Taruhan"],card:{}};
let P,E,php,ehp,maxP,maxE,busy=false,lastFx="",cd=0,isBoss=false,S={};
const snm=m=>m.boss?"JOKER'S GAMBIT":STAND[members.indexOf(m)].n,spx=()=>SP[members.indexOf(P)];
function fighter(id,m){$(id).classList.toggle("boss",!!m.boss);$(id).innerHTML=`<img src="${m.photo}" alt=""><b class="bg" style="display:block;font-size:.85rem;margin-top:6px">${m.name.split(" ")[0]}</b><small class="sn">${snm(m)}</small><div class="hpb"><i></i></div>`}
function hp(id,v,max){const i=$(id).querySelector(".hpb i");i.style.width=Math.max(0,v/max*100)+"%";i.style.background=v/max>.5?"#2ec45a":v/max>.2?"#ffb703":"#e63946"}
function begin(bs){if(bs&&lv()<3){toast("Boss terkunci: capai Lv 3 dulu");sfx("flee");return}
 isBoss=bs;P=partner();E=bs?BOSS:pick(members.filter(m=>m!==P));maxP=php=stat(P).HP+lv()*6;maxE=ehp=bs?220+lv()*10:stat(E).HP+(lv()-1)*4;busy=false;cd=0;S={stun:0,guard:0,crit:0,burn:0,bomb:0,evade:0,et:0};
 fighter("fp",P);fighter("fe",E);$("fp").classList.remove("dead");$("fe").classList.remove("dead");$("log").textContent=bs?"BOSS! The Joker membuka kartu terakhirnya!":`${E.name.split(" ")[0]} menantangmu bertarung Stand!`;sfx("menace");
 $("moves").innerHTML="";P.langs.slice(0,4).forEach(l=>{const b=document.createElement("button");b.className="btn";b.textContent=l;b.onclick=()=>turn(l);$("moves").append(b)});
 const sp=document.createElement("button");sp.className="btn sp";sp.id="sp";sp.onclick=special;$("moves").append(sp);
 const pb=document.createElement("button");pb.className="btn b";pb.id="pot";pb.onclick=potion;$("moves").append(pb);potLbl();spLbl();stt()}
$("start").onclick=()=>begin(false);$("boss").onclick=()=>begin(true);
function stt(){const a=[];if(S.stun)a.push("Lawan terhenti x"+S.stun);if(S.burn)a.push("Terbakar x"+S.burn);if(S.bomb)a.push("Bom: "+S.bomb);if(S.guard)a.push("Pelindung");if(S.crit)a.push("Siap CRIT");if(S.evade)a.push("Siap menghindar");$("stt").textContent=P?`SPECIAL ${spx().n}: ${spx().d}`+(a.length?" | "+a.join(", "):""):""}
function spLbl(){const s=$("sp");if(!s)return;s.disabled=cd>0;s.textContent=cd>0?`${spx().n} (${cd})`:"★ "+spx().n}
function atk(from,to,move,isP){const tf=ty(from)[0],tt=ty(to)[0];let mu=1;lastFx="";if(ADV[tf]===tt){mu=1.5;lastFx=" Efektif banget!"}else if(ADV[tt]===tf){mu=.7;lastFx=" Kurang efektif..."}const d=Math.round((14+R(16)+Math.floor(stat(from).ATK/8)+(isP?lv()*2:0))*mu),el=$(isP?"fe":"fp");el.classList.remove("hit");void el.offsetWidth;el.classList.add("hit");sfx("hit");pop(el);return d}
function pop(el){const s=document.createElement("b");s.className="fxt";s.textContent=pick(["ドドド","ゴゴゴ","バキッ","ズドン","WHAM!","BOOM!"]);el.append(s);setTimeout(()=>s.remove(),700)}
const nm=m=>m.name.split(" ")[0];
function dmgE(d){ehp-=d;hp("fe",ehp,maxE)}
function after(){stt();spLbl();if(ehp<=0)return end(1);setTimeout(enemy,900)}
function enemy(){let t="";
 if(S.burn>0){S.burn--;dmgE(12);t+="Terbakar -12. "}
 if(S.bomb>0&&--S.bomb===0){dmgE(60);pop($("fe"));sfx("hit");t+="BOM meledak -60! "}
 if(ehp<=0){$("log").textContent=t;return end(1)}
 if(S.stun>0){S.stun--;$("log").textContent=t+nm(E)+" terhenti!";busy=false;stt();return}
 if(S.evade){S.evade=0;$("log").textContent=t+"Serangan dihindari!";busy=false;stt();return}
 S.et++;const m=pick(E.langs);let d2=atk(E,P,m,0),fx=lastFx,sp="";
 if(isBoss){d2=Math.round(d2*.8);if(S.et%3===0){d2=Math.round(d2*1.7);sp=" GAMBIT!";sfx("menace")}}
 if(S.guard){d2=Math.round(d2/2);S.guard=0;fx+=" (Terlindungi)"}
 php-=d2;hp("fp",php,maxP);$("log").textContent=`${t}${nm(E)} ${m}!${sp} -${d2}.${fx}`;stt();if(php<=0)return end(0);busy=false}
function turn(l){if(busy||!P)return;busy=true;cd=Math.max(0,cd-1);let d=atk(P,E,l,1),fx=lastFx;if(S.crit){d=Math.round(d*1.8);S.crit=0;fx+=" CRIT!"}
 dmgE(d);$("log").textContent=`${nm(P)} pakai ${l}! -${d}.${fx}`;after()}
function special(){if(busy||!P||cd>0)return;busy=true;const s=spx(),t=s.t;cd=3;sfx("menace");let msg=`${nm(P)}: ${s.n}!`;
 if(t==="heal"){php=Math.min(maxP,php+Math.round(maxP*.4));hp("fp",php,maxP)}
 else if(t==="guard"){S.guard=1;php=Math.min(maxP,php+Math.round(maxP*.15));hp("fp",php,maxP)}
 else if(t==="big"||t==="big2"){const d=Math.round(atk(P,E,"",1)*(t==="big"?2:1.7));dmgE(d);msg+=` -${d}`}
 else if(t==="stun")S.stun=2;else if(t==="crit")S.crit=1;else if(t==="burn")S.burn=3;else if(t==="bomb")S.bomb=2;else if(t==="evade")S.evade=1;
 $("log").textContent=msg;after()}
function potLbl(){const p=$("pot");if(p)p.textContent=G.pot>0?"POTION x"+G.pot:"BELI POTION (10 KOIN)";save()}
function potion(){if(busy||!P)return;if(G.pot<1){if(G.coins<10){toast("Koin kurang!");return}G.coins-=10;G.pot++;hud();potLbl();sfx("pick");return}
 busy=true;cd=Math.max(0,cd-1);G.pot--;potLbl();php=Math.min(maxP,php+Math.round(maxP*.4));hp("fp",php,maxP);sfx("catch");$("log").textContent="Potion dipakai! HP pulih.";after()}
function end(w){busy=true;if(w){G.wins++;const c=isBoss?60:15+R(10),x=isBoss?100:30;if(isBoss)G.bossWin=(G.bossWin||0)+1;gain(x,c);toast(`MENANG! +${x} XP, +${c} koin`)}else gain(8,2);const lo=$(w?"fe":"fp");lo.classList.add("dead");setTimeout(()=>sfx("faint"),300);setTimeout(()=>{sfx(w?"win":"flee");$("log").textContent=w?"MENANG! Tekan MULAI BATTLE untuk lawan baru.":"Kalah... coba lagi!"},900);$("moves").innerHTML="";stt()}

/* tangkap */
const party=[];let wild,lock=false;
function spawn(){wild=pick(members);lock=false;$("wild").classList.remove("rev");$("wild").firstElementChild.src=wild.photo;$("cm").textContent="Pengguna Stand misterius muncul!";$("ball").className="ball"}
$("ball").onclick=()=>{if(lock)return;lock=true;const b=$("ball");sfx("throw");b.classList.add("go");
 setTimeout(()=>{b.classList.remove("go");b.classList.add("sh");sfx("shake");setTimeout(()=>sfx("shake"),500);setTimeout(()=>sfx("shake"),1000)},550);
 setTimeout(()=>{b.classList.remove("sh");if(Math.random()<.65){$("wild").classList.add("rev");sfx("catch");$("cm").textContent=`BERGABUNG! ${wild.name.split(" ")[0]} menerima panah, Stand-nya bangkit!`;{const wi=members.indexOf(wild);if(!G.caught.includes(wi)){G.caught.push(wi);gain(20,10)}else gain(5,3)}if(!party.includes(wild)){party.push(wild);const i=new Image();i.src=wild.photo;$("party").append(i)}}else{sfx("flee");$("cm").textContent="Ia menolak panah! Coba lagi.";lock=false}},2200)};
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
$("go").onclick=()=>{G=Object.assign({},FRESH,{name:$("tn").value.trim().slice(0,12)||"Pengguna",p:sel,caught:[],badges:[]});party.length=0;$("party").innerHTML="";save();enter()};
document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>{sfx("blip");$(b.dataset.go).scrollIntoView({behavior:"smooth"})});
$("tr").onclick=()=>{sfx("pick");$("tb").innerHTML=`<p>Nama: ${G.name}</p><p>Level ${lv()} · ${G.xp} XP · ${G.coins} koin</p><p>Menang: ${G.wins}x · Bergabung: ${G.caught.length}/${members.length}</p><div>${BAD.map(b=>`<span class="bd ${G.badges.includes(b[0])?"":"lk"}" title="${b[1]}">${b[0]}</span>`).join("")}</div><p style="font-size:.75rem;opacity:.7">Badge terkunci: arahkan kursor untuk melihat syaratnya.</p>`;$("tm").classList.add("on")};
$("tc").onclick=()=>$("tm").classList.remove("on");
$("rs").onclick=()=>{if(confirm("Hapus semua progres?")){try{localStorage.removeItem(KEY)}catch(e){}location.reload()}};
