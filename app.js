const paths = {
  'arrow-right': '<path d="M4 12h16M14 6l6 6-6 6"/>',
  'arrow-up-right': '<path d="M6 18 18 6M6 6h12v12"/>',
  'arrow-down': '<path d="M12 4v16M6 14l6 6 6-6"/>',
  'arrow-left': '<path d="M20 12H4m6-6-6 6 6 6"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0l-1 1-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
  'mouse-pointer': '<path d="m4 3 16 9-7 2-3 7L4 3Z"/><path d="m14 15 4 5"/>',
  'book-open': '<path d="M12 6c-3-2-6-2-10-1v15c4-1 7-1 10 1 3-2 6-2 10-1V5c-4-1-7-1-10 1Zm0 0v15"/>',
  sparkles: '<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3ZM20 2v4m-2-2h4"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  layers: '<path d="m3 7 9-5 9 5-9 5-9-5Zm0 5 9 5 9-5M3 17l9 5 9-5"/>',
  play: '<path d="m8 4 12 8-12 8V4Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 1v2m0 18v2M1 12h2m18 0h2M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2"/>',
  monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 22h8m-4-5v5"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.1"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  x: '<path d="m6 6 12 12M6 18 18 6"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>'
};
const icon = name => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.eye}</svg>`;
function hydrateIcons(root = document) { root.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = icon(el.dataset.icon); }); }
hydrateIcons();
document.getElementById('year').textContent = new Date().getFullYear();
const iris = document.getElementById('iris-lines');
iris.innerHTML = Array.from({length:100}, (_,i) => {const a=i*Math.PI/50;const inner=55+(i%4)*4;return `<line x1="${280+Math.cos(a)*inner}" y1="${211+Math.sin(a)*inner}" x2="${280+Math.cos(a)*89}" y2="${211+Math.sin(a)*89}" stroke="${i%2?'#d1d9ad':'#3f7259'}" stroke-width="${i%3?'.7':'1.8'}" opacity=".46"/>`;}).join('');

const eyeArt = `<svg viewBox="0 0 380 206" aria-hidden="true"><circle cx="190" cy="106" r="84" fill="none" stroke="#b9c8ab" stroke-dasharray="2 5"/><circle cx="190" cy="106" r="65" fill="none" stroke="#cbd6bd"/><path d="M63 106Q190-8 317 106Q190 220 63 106" fill="#f8faee" stroke="#6f8b59" stroke-width="1.5"/><circle cx="190" cy="106" r="46" fill="#a2b984" stroke="#6c8b56" stroke-width="2"/><circle cx="190" cy="106" r="34" fill="none" stroke="#b9c79f" stroke-width="10" stroke-dasharray="2 3"/><circle cx="190" cy="106" r="20" fill="#315341"/><circle cx="180" cy="93" r="7" fill="#f7faec"/><path d="m221 76 29-30h40m-123 86-28 29h-35" fill="none" stroke="#779162"/><circle cx="221" cy="76" r="3" fill="#779162"/><circle cx="167" cy="132" r="3" fill="#779162"/><path d="M87 52v10m-5-5h10m190 99v10m-5-5h10" stroke="#8da177"/></svg>`;
const screenArt = `<svg viewBox="0 0 380 206" aria-hidden="true"><circle cx="193" cy="105" r="78" fill="#e4e7d8"/><rect x="107" y="45" width="167" height="110" rx="7" fill="#f9f9ef" stroke="#86917b" stroke-width="1.5"/><rect x="118" y="56" width="145" height="87" rx="3" fill="#d4ddc3"/><path d="M179 155v15h-25m48-15v15h25m-73 0h73" fill="none" stroke="#86917b" stroke-width="2"/><path d="M154 101q35-35 73 0-38 34-73 0" fill="#f8faef" stroke="#68805c"/><circle cx="190" cy="101" r="15" fill="#9bb184"/><circle cx="190" cy="101" r="7" fill="#536d4b"/><g fill="#fffdf5" stroke="#bfc6ad"><rect x="243" y="126" width="65" height="43" rx="7"/><circle cx="100" cy="67" r="22"/></g><text x="275" y="153" text-anchor="middle" fill="#6f8159" font-family="Georgia" font-size="18">20</text><path d="M100 54v13l8 5" fill="none" stroke="#7f8f68" stroke-width="1.5"/><path d="M74 136v14m-7-7h14m215-71v12m-6-6h12" stroke="#9aa887"/></svg>`;
const cataractArt = `<svg viewBox="0 0 380 206" aria-hidden="true"><defs><radialGradient id="cloud"><stop stop-color="#eef0e8"/><stop offset=".65" stop-color="#c3c6b7"/><stop offset="1" stop-color="#b0b6a1"/></radialGradient></defs><circle cx="190" cy="104" r="81" fill="none" stroke="#d8ceb9"/><path d="M71 104Q190-4 309 104Q190 211 71 104" fill="#fbf8ee" stroke="#a19577" stroke-width="1.5"/><circle cx="190" cy="104" r="46" fill="#b9bea2" stroke="#929879"/><circle cx="190" cy="104" r="35" fill="none" stroke="#d6d4b6" stroke-width="9" stroke-dasharray="2 3"/><circle cx="190" cy="104" r="24" fill="url(#cloud)"/><circle cx="176" cy="89" r="7" fill="#fffdf2" opacity=".8"/><path d="m215 110 35 38h36" fill="none" stroke="#a2987e"/><circle cx="215" cy="110" r="3" fill="#a2987e"/><path d="M93 50v12m-6-6h12m190 98v12m-6-6h12" stroke="#b2a68a"/></svg>`;
const glassesArt = `<svg viewBox="0 0 380 206" aria-hidden="true"><circle cx="190" cy="104" r="78" fill="#e3e8e2"/><g transform="rotate(-10 190 100)" fill="#f9fbf5" stroke="#6a867b" stroke-width="3"><rect x="78" y="76" width="95" height="64" rx="24"/><rect x="207" y="76" width="95" height="64" rx="24"/><path d="M173 96q17-15 34 0M78 86l-21-8m245 8 21-8" fill="none"/><path d="m98 92 13-7m119 9 13-7" stroke="#d2ddd1" stroke-width="4"/></g></svg>`;
const dropsArt = `<svg viewBox="0 0 380 206" aria-hidden="true"><circle cx="190" cy="104" r="79" fill="#dde9e4"/><g transform="rotate(16 185 110)"><rect x="160" y="80" width="62" height="91" rx="12" fill="#fbfcf5" stroke="#76978a" stroke-width="1.5"/><path d="M176 80V65h30v15m-24-15V48h18v17" fill="#8dafa0" stroke="#76978a"/><path d="M160 113h62v33h-62" fill="#ccded0"/><path d="M191 119v20m-10-10h20" stroke="#6b8e7b" stroke-width="2"/></g><path d="M250 56c-17 22-17 29 0 29s17-7 0-29" fill="#95baaa"/><path d="M115 92v14m-7-7h14" stroke="#8bab98"/></svg>`;
const sunArt = `<svg viewBox="0 0 380 206" aria-hidden="true"><circle cx="190" cy="104" r="80" fill="#f1e8ce"/><g stroke="#bd9c57" stroke-width="2" fill="none"><circle cx="190" cy="91" r="30" fill="#e4ca86"/><path d="M190 44V31m0 120v-13m47-47h13M130 91h13m80-33 10-10m-86 86 10-10m66 0 10 10m-86-86 10 10"/></g><path d="M99 157q91-38 182 0" fill="#dedfc4" stroke="#a5ad80"/><path d="M109 176q81-30 162 0" fill="none" stroke="#b3bb95"/></svg>`;

const materials = [
  {id:'anatomy',category:'dasar',label:'MENGENAL MATA',title:'Mengenal pupil dan cahaya',desc:'Geser cahaya dan lihat bagaimana pupil merespons terang dan redup.',type:'Interaktif',time:'3 menit eksplorasi',bg:'#e5ecda',art:eyeArt,slides:[['Cahaya masuk ke mata','Cahaya melewati kornea, lalu masuk melalui pupil. Besar kecilnya pupil diatur oleh iris.','eye'],['Lensa membantu memfokuskan','Lensa membantu memfokuskan cahaya ke retina di bagian belakang mata.','eye'],['Otak membentuk gambaran','Retina mengubah cahaya menjadi sinyal. Sinyal diteruskan melalui saraf optik ke otak.','sparkles']]},
  {id:'screen',category:'kebiasaan',label:'KEBIASAAN SEHAT',title:'Mata nyaman di depan layar',desc:'Kenali kebiasaan sederhana untuk memberi jeda pada mata saat beraktivitas.',type:'Carousel',time:'4 slide · 2 menit baca',bg:'#eef0e6',art:screenArt,slides:[['Berikan jeda untuk matamu','Menatap layar dalam waktu lama dapat membuat mata terasa lelah atau kering. Jeda teratur membantu kenyamanan mata.','monitor'],['Kenali aturan 20–20–20','Setiap sekitar 20 menit, alihkan pandangan ke objek berjarak sekitar 6 meter selama 20 detik. Ini pengingat untuk beristirahat.','clock'],['Jangan lupa berkedip','Saat fokus ke layar, kita cenderung lebih jarang berkedip. Berkediplah dengan wajar agar permukaan mata tetap lembap.','eye'],['Atur ruang kerjamu','Sesuaikan pencahayaan, kurangi pantulan di layar, dan pilih jarak baca yang nyaman. Bila keluhan menetap, periksakan mata.','sun']]},
  {id:'cataract',category:'kondisi',label:'KONDISI MATA',title:'Mengenal katarak lebih dekat',desc:'Apa itu katarak? Pahami perubahan pada lensa mata dengan penjelasan visual.',type:'Carousel',time:'3 slide · 2 menit baca',bg:'#f1eadb',art:cataractArt,slides:[['Apa itu katarak?','Katarak adalah kekeruhan pada lensa mata yang normalnya jernih. Kondisi ini dapat membuat penglihatan tampak berkabut.','eye'],['Perubahan yang bisa dirasakan','Penglihatan kabur, lebih silau, atau kesulitan melihat pada malam hari dapat terjadi. Keluhan serupa juga bisa disebabkan kondisi lain.','sun'],['Periksakan ke dokter mata','Pemeriksaan diperlukan untuk memastikan penyebab keluhan dan menentukan penanganan yang sesuai.','info']]},
  {id:'glasses',category:'dasar',label:'MENGENAL MATA',title:'Mengapa kita perlu kacamata?',desc:'Kenali bagaimana kacamata membantu cahaya terfokus dengan lebih baik.',type:'Carousel',time:'3 slide · 2 menit baca',bg:'#e9ede7',art:glassesArt,slides:[['Melihat dengan lebih jelas','Kelainan refraksi terjadi ketika cahaya tidak terfokus tepat pada retina. Akibatnya, objek dapat terlihat kabur.','eye'],['Lensa membantu fokus','Lensa kacamata mengubah arah cahaya sehingga membantu memfokuskannya pada retina.','search'],['Ukuran yang sesuai','Pemeriksaan mata membantu menentukan koreksi yang tepat. Jangan memilih ukuran kacamata hanya berdasarkan perkiraan.','info']]},
  {id:'dry',category:'kondisi',label:'KONDISI MATA',title:'Saat mata terasa kering',desc:'Pahami peran air mata dan kebiasaan yang membantu kenyamanan permukaan mata.',type:'Carousel',time:'3 slide · 2 menit baca',bg:'#e4eee7',art:dropsArt,slides:[['Air mata punya peran penting','Lapisan air mata melindungi dan menjaga permukaan mata tetap lembap. Gangguannya dapat menimbulkan rasa tidak nyaman.','eye'],['Keluhan bisa beragam','Rasa berpasir, perih, atau penglihatan yang berubah-ubah dapat terjadi. Mata berair juga bisa menyertai mata kering.','info'],['Cari penyebabnya','Hindari hembusan AC langsung dan berikan jeda saat menatap layar. Untuk keluhan menetap, konsultasikan pilihan perawatan dengan dokter.','heart']]},
  {id:'outdoor',category:'kebiasaan',label:'KEBIASAAN SEHAT',title:'Melindungi mata di luar ruang',desc:'Temani aktivitas harian dengan perlindungan mata yang sesuai.',type:'Carousel',time:'3 slide · 2 menit baca',bg:'#f5edda',art:sunArt,slides:[['Nikmati aktivitas luar ruang','Aktivitas di luar ruang bisa menjadi bagian dari kebiasaan sehari-hari yang sehat. Perhatikan keamanan dan perlindungan mata.','sun'],['Pilih perlindungan UV','Gunakan kacamata dengan perlindungan UVA dan UVB yang sesuai. Warna lensa yang gelap saja tidak menjamin perlindungan UV.','eye'],['Tambahkan topi dan peneduh','Topi bertepi lebar dan tempat teduh membantu mengurangi paparan. Jangan menatap matahari secara langsung.','heart']]}
];
let activeFilter='all', expanded=false;
const search=document.getElementById('search');
function renderMaterials(){
  const query=search.value.trim().toLocaleLowerCase('id');
  const filtered=materials.filter(m=>(activeFilter==='all'||m.category===activeFilter)&&`${m.title} ${m.desc} ${m.label} ${m.type}`.toLocaleLowerCase('id').includes(query));
  const showAll=expanded||query||activeFilter!=='all';
  document.getElementById('materials').innerHTML=(showAll?filtered:filtered.slice(0,3)).map(m=>`<article class="material"><button class="material-open" data-lesson="${m.id}" aria-label="Buka ${m.type.toLowerCase()}: ${m.title}"><div class="material-visual" style="background:${m.bg}">${m.art}<span class="material-type">${icon(m.type==='Interaktif'?'mouse-pointer':'layers')}${m.type}</span><span class="visual-open">${icon('arrow-up-right')}</span></div><div class="material-body"><span class="material-category">${m.label}</span><h3>${m.title}</h3><p>${m.desc}</p><div class="material-meta">${icon('clock')}<span>${m.time}</span><span class="meta-right">Materi contoh</span></div></div></button></article>`).join('');
  document.getElementById('empty-state').hidden=filtered.length>0;
  const more=document.getElementById('show-more');
  more.hidden=!!query||activeFilter!=='all';
  more.innerHTML=`${expanded?'Tampilkan lebih sedikit':'Lihat semua materi'} ${icon('arrow-down')}`;
  more.setAttribute('aria-expanded',String(expanded));
  document.getElementById('results-status').textContent=`${showAll?filtered.length:Math.min(3,filtered.length)} materi ditampilkan.`;
}
renderMaterials();
document.querySelector('.filters').addEventListener('click',e=>{
  const button=e.target.closest('[data-filter]'); if(!button)return;
  activeFilter=button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
  renderMaterials();
});
search.addEventListener('input',renderMaterials);
document.getElementById('show-more').addEventListener('click',()=>{expanded=!expanded;renderMaterials();});
document.getElementById('reset-search').addEventListener('click',()=>{search.value='';document.querySelector('[data-filter="all"]').click();search.focus();});
document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)&&!document.getElementById('lesson-dialog').open){e.preventDefault();search.focus();search.scrollIntoView({block:'center'});}});
const menu=document.querySelector('.menu-toggle'),nav=document.getElementById('navigation');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Buka menu');}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Tutup menu':'Buka menu');});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});

const dialog=document.getElementById('lesson-dialog'),content=document.getElementById('lesson-content');
let current=null,slide=0;
function renderSlide(){
  const focusedControl=document.activeElement?.id;
  const [title,text,glyph]=current.slides[slide];
  content.innerHTML=`<h2 id="lesson-title" class="lesson-heading">${current.title}</h2><p class="lesson-desc">${current.desc}</p><div class="lesson-slide">${icon(glyph)}<h3>${title}</h3><p>${text}</p></div><div class="slide-navigation"><button class="icon-button" id="prev-slide" aria-label="Slide sebelumnya" ${slide===0?'disabled':''}>${icon('arrow-left')}</button><div class="slide-dots" aria-hidden="true">${current.slides.map((_,i)=>`<span class="${i===slide?'active':''}"></span>`).join('')}</div><span class="slide-count" role="status" aria-live="polite">${slide+1} / ${current.slides.length}</span><button class="icon-button" id="next-slide" aria-label="Slide berikutnya" ${slide===current.slides.length-1?'disabled':''}>${icon('arrow-right')}</button></div><p class="lesson-disclaimer">Contoh materi untuk preview desain. Informasi umum ini tidak menggantikan pemeriksaan dan saran dokter.</p>`;
  const prev=document.getElementById('prev-slide'),next=document.getElementById('next-slide');
  if(focusedControl==='prev-slide'||focusedControl==='next-slide'){
    const preferred=focusedControl==='prev-slide'?prev:next;
    (preferred.disabled?(preferred===prev?next:prev):preferred).focus();
  }
  prev.addEventListener('click',()=>{slide--;renderSlide();document.getElementById(slide===0?'next-slide':'prev-slide').focus();});
  next.addEventListener('click',()=>{slide++;renderSlide();document.getElementById(slide===current.slides.length-1?'prev-slide':'next-slide').focus();});
}
function renderInteractive(){
  content.innerHTML=`<h2 id="lesson-title" class="lesson-heading">Cahaya berubah, pupil merespons.</h2><p class="lesson-desc">Pupil adalah bukaan di tengah iris. Geser cahaya untuk melihat ilustrasi respons pupil.</p><div class="pupil-demo" id="pupil-demo"><div class="pupil-eye" aria-hidden="true"><div class="pupil-iris"><div class="pupil" id="pupil"></div></div></div><div class="light-control"><label for="light">Intensitas cahaya</label><input id="light" type="range" min="0" max="100" value="50" aria-describedby="light-output" /><div class="range-labels"><span>Redup</span><span>Terang</span></div><output id="light-output" for="light">Cahaya sedang · pupil berukuran sedang</output></div></div><p class="lesson-desc">Saat cahaya terang, pupil umumnya mengecil untuk membatasi cahaya yang masuk. Saat redup, pupil membesar. Iris mengatur perubahan ukuran ini.</p><p class="preview-note">Simulasi sederhana untuk ilustrasi, bukan alat pemeriksaan mata.</p><p class="lesson-disclaimer">Materi contoh untuk preview. Animasi HTML milik dokter dapat ditambahkan pada tahap pengembangan berikutnya.</p>`;
  document.getElementById('light').addEventListener('input',e=>{
    const value=Number(e.target.value),size=74-value*.52;
    const pupil=document.getElementById('pupil');pupil.style.width=`${size}px`;pupil.style.height=`${size}px`;
    document.getElementById('pupil-demo').style.background=`hsl(82 25% ${75+value*.16}%)`;
    document.getElementById('light-output').textContent=value<35?'Cahaya redup · pupil membesar':value>65?'Cahaya terang · pupil mengecil':'Cahaya sedang · pupil berukuran sedang';
  });
}
function openLesson(id){current=materials.find(m=>m.id===id);if(!current)return;slide=0;if(current.type==='Interaktif')renderInteractive();else renderSlide();dialog.showModal();document.body.classList.add('no-scroll');document.getElementById('close-dialog').focus();}
document.getElementById('materials').addEventListener('click',e=>{const button=e.target.closest('[data-lesson]');if(button)openLesson(button.dataset.lesson);});
document.getElementById('hero-demo').addEventListener('click',()=>openLesson('anatomy'));
document.getElementById('close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>document.body.classList.remove('no-scroll'));
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('keydown',e=>{if(current?.type!=='Carousel')return;if(e.key==='ArrowRight'&&slide<current.slides.length-1){e.preventDefault();slide++;renderSlide();}if(e.key==='ArrowLeft'&&slide>0){e.preventDefault();slide--;renderSlide();}});
let touchX=0;
dialog.addEventListener('touchstart',e=>{touchX=e.changedTouches[0].screenX;},{passive:true});
dialog.addEventListener('touchend',e=>{if(current?.type!=='Carousel')return;const distance=e.changedTouches[0].screenX-touchX;if(Math.abs(distance)>55){const target=slide+(distance<0?1:-1);if(target>=0&&target<current.slides.length){slide=target;renderSlide();}}},{passive:true});
