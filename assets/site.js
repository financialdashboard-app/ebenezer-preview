(function(){
  var KEY='ibe-lang';
  function setLang(l){
    document.documentElement.lang=l;
    var t=document.querySelector('title');if(t&&t.dataset[l])t.textContent=t.dataset[l];
    document.querySelectorAll('[data-es-ph]').forEach(function(el){el.placeholder=el.getAttribute('data-'+l+'-ph')});
    document.querySelectorAll('[data-es-alt]').forEach(function(el){el.alt=el.getAttribute('data-'+l+'-alt')});
    document.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.set===l?'true':'false')});
    try{localStorage.setItem(KEY,l)}catch(e){}
  }
  var q=new URLSearchParams(location.search).get('lang'),saved=null;
  try{saved=localStorage.getItem(KEY)}catch(e){}
  setLang(q==='en'||q==='es'?q:(saved==='en'?'en':'es'));
  document.querySelectorAll('.lang button').forEach(function(b){b.addEventListener('click',function(){setLang(b.dataset.set)})});
  var mb=document.querySelector('.burger'),mn=document.querySelector('.mnav');
  if(mb&&mn)mb.addEventListener('click',function(){var o=mn.classList.toggle('open');mb.setAttribute('aria-expanded',o)});
  document.querySelectorAll('form.demo').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();var m=f.querySelector('.form-msg');if(m){m.classList.add('show');m.focus()}})});
  document.querySelectorAll('.seg').forEach(function(g){g.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;e.preventDefault();g.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')})})});
  document.querySelectorAll('.pray').forEach(function(b){b.addEventListener('click',function(){b.setAttribute('aria-pressed','true');b.classList.add('on')})});
  var s=document.querySelector('.search input');
  if(s)s.addEventListener('input',function(){var v=s.value.toLowerCase();document.querySelectorAll('[data-dir]').forEach(function(r){r.style.display=r.textContent.toLowerCase().indexOf(v)>-1?'':'none'})});
})();
