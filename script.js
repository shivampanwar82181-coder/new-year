let unlocked=0;
let nameVerified=false;
let storedName='';

function startSurprise(){
document.querySelector('.overlay').style.display='none';
document.getElementById('hero').classList.remove('hidden');
document.getElementById('nameSection').classList.remove('hidden');
document.getElementById('bgMusic').play();
}

function checkName(){
const input=document.getElementById('nameInput');
const value=input.value.trim();

if(value.toLowerCase()==='kajal'){
nameVerified=true;
storedName=value; // store original casing
input.value='';
document.getElementById('nameSection').classList.add('hidden');

// NOW reveal name intentionally
document.getElementById('heroTitle').innerText=`Happy New Year, ${storedName} ❤️`;
document.getElementById('heroSub').innerText='This surprise was always meant for you ✨';

document.getElementById('gallery').classList.remove('hidden');
bindPhotos();
}else{
document.getElementById('error').innerText='This surprise is not for you 💔';
}
}

function bindPhotos(){
document.querySelectorAll('.photo').forEach(p=>{
p.style.cursor='pointer';
p.style.opacity='1';
p.onclick=()=>unlockPhoto(p,p.dataset.id);
});
}

function unlockPhoto(el,n){
if(!nameVerified)return;
if(el.classList.contains('unlocked')){
openLightbox(`photos/pic${n}.jpg`);
return;
}
unlocked++;
el.classList.add('unlocked');
el.style.backgroundImage=`url(photos/pic${n}.jpg)`;
if(unlocked===6){
setTimeout(showLetter,800);
}
}

function openLightbox(src){
document.getElementById('lightboxImg').src=src;
document.getElementById('lightbox').style.display='flex';
}

function closeLightbox(){
document.getElementById('lightbox').style.display='none';
}

function showLetter(){
document.getElementById('letter').classList.remove('hidden');
document.getElementById('letterTitle').innerText=`For You, ${storedName} ❤️`;
typeWriter();
}

const baseText=`If you are reading this,
it means you unlocked every memory.

You are my peace, my laughter, my safe place.
No matter where life takes us,
I want every year to begin with you.

Happy New Year ❤️`;

let i=0;
function typeWriter(){
if(i<baseText.length){
document.getElementById('letterText').innerHTML+=baseText.charAt(i);
i++;
setTimeout(typeWriter,45);
}
}
