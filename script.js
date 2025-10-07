// Toggle drawer
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeDrawer');

function openDrawer(){ drawer.classList.add('open'); overlay.classList.add('show'); }
function closeDrawer(){ drawer.classList.remove('open'); overlay.classList.remove('show'); }

menuBtn.addEventListener('click', openDrawer);
closeBtn.addEventListener('click', closeDrawer);
overlay.addEventListener('click', closeDrawer);

// Slider dots (visual only for demo)
document.querySelectorAll('.dot').forEach((d,i)=>{
  d.addEventListener('click', ()=>{
    document.querySelectorAll('.dot').forEach(x=>x.classList.remove('active'));
    d.classList.add('active');
  });
});
