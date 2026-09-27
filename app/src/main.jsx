import React from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDown, ArrowRight, ArrowUpRight, Clock3, MapPin, Menu, MoveUpRight, Plus, Sparkles, X } from 'lucide-react'
import './style.css'

const menu = [
  { no: '01', name: 'Классика', detail: 'Курица · томат · огурец · соус фирменный', price: 'от 390 ₽', tag: 'любимая', image: 'photo-1626700051175-6818013e1d4f' },
  { no: '02', name: 'Дымная', detail: 'Курица с огня · хрустящий лук · BBQ', price: 'от 450 ₽', tag: 'с дымком', image: 'photo-1529006557810-274b9b2fc783' },
  { no: '03', name: 'Сырная', detail: 'Нежный сыр · курица · соус из четырёх сыров', price: 'от 470 ₽', tag: 'новинка', image: 'photo-1565299624946-b28f40a0ae38' },
]
function App() {
  const [open, setOpen] = React.useState(false)
  const [active, setActive] = React.useState('Главная')
  const nav = [['Главная','#home'],['Меню','#menu'],['О нас','#about'],['Контакты','#contacts']]
  const handleNav = (name, href) => { setActive(name); setOpen(false); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }) }
  return <>
    <header className="topbar">
      <a className="brand" href="#home" onClick={e=>{e.preventDefault();handleNav('Главная','#home')}}><span className="brand-mark">B<span>.</span></span><span>BLACK<br/>SHAWARMA</span></a>
      <nav className={open ? 'nav open' : 'nav'}>{nav.map(([name,href])=><button className={active===name?'selected':''} key={name} onClick={()=>handleNav(name,href)}>{name}</button>)}</nav>
      <a className="header-cta" href="tel:+79991234567">Заказать <ArrowUpRight size={15}/></a>
      <button className="mobile-toggle" aria-label="Открыть меню" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    </header>
    <main>
      <section className="hero" id="home">
        <div className="hero-grain"/><div className="hero-copy"><div className="eyebrow"><span className="live-dot"/> ШАУРМА. ОГОНЬ. СВОИ.</div>
          <h1>ВКУС<br/><span>БЕЗ</span> ЛИШНЕГО<span className="accent">.</span></h1>
          <p className="hero-note">Горячая, сочная, своя.<br/>Заворачиваем прямо при тебе.</p>
          <a className="round-link" href="#menu" onClick={e=>{e.preventDefault();handleNav('Меню','#menu')}}><span>Смотреть меню</span><i><ArrowDown size={18}/></i></a>
        </div>
        <div className="hero-photo"><div className="photo-wash"/><div className="hero-sticker"><span>СВЕЖОЕ</span><strong>каждый<br/>день</strong><Sparkles size={18}/></div><div className="hero-side-label">ЧЕСТНЫЙ ВКУС · 55°45′ N</div></div>
        <div className="hero-bottom"><span>УЛИЧНАЯ ЕДА С ХАРАКТЕРОМ</span><span>01 — 03</span><span>СДЕЛАНО С ОГНЁМ <span className="accent">✳</span></span></div>
      </section>
      <section className="menu-section section-pad" id="menu">
        <div className="section-head"><div><div className="eyebrow">НАШИ ХИТЫ <span className="accent">✳</span></div><h2>СОБРАЛИ<br/><span className="muted">КАК НАДО.</span></h2></div><p>Хорошие продукты.<br/>Правильный огонь.<br/>Никаких компромиссов.</p></div>
        <div className="menu-grid">{menu.map(item=><article className="menu-card" key={item.no}><div className="dish-photo" style={{backgroundImage:`url(https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=900&q=85)`}}><span className="dish-tag">{item.tag}</span><span className="dish-no">/{item.no}</span></div><div className="dish-info"><div><h3>{item.name}</h3><p>{item.detail}</p></div><span className="price">{item.price}</span></div><a href="tel:+79991234567" className="dish-order">ЗАКАЗАТЬ <ArrowUpRight size={15}/></a></article>)}</div>
        <div className="menu-foot"><span>* Можно собрать по-своему — просто скажи нам.</span><a href="tel:+79991234567">Всё меню <ArrowRight size={16}/></a></div>
      </section>
      <section className="manifesto" id="about"><div className="manifesto-image"><div className="manifesto-caption">НЕ СПЕШИ.<br/>ОНА ГОРЯЧАЯ.</div></div><div className="manifesto-copy"><div className="eyebrow">НЕ ПРОСТО ПЕРЕКУС</div><h2>МАЛЕНЬКОЕ<br/>МЕСТО.<br/><span className="muted">БОЛЬШОЙ</span><br/>ОГОНЬ<span className="accent">.</span></h2><p>Мы открыли Black Shawarma, чтобы у района было своё место. Где мясо с вертела, лепёшка с огня и всегда рады видеть.</p><a className="text-link" href="#contacts" onClick={e=>{e.preventDefault();handleNav('Контакты','#contacts')}}>Познакомиться <ArrowUpRight size={16}/></a></div></section>
      <section className="visit section-pad" id="contacts"><div className="eyebrow">ЗАХОДИ НА ОГОНЁК <span className="accent">✳</span></div><h2>МЫ ТУТ.<br/><span className="muted">ТЫ ГДЕ?</span></h2><div className="visit-bottom"><div className="visit-details"><div><MapPin size={17}/><span>Красноярск, ул. Мира, 28<br/><small>рядом с тобой — уже хорошо</small></span></div><div><Clock3 size={17}/><span>Каждый день<br/><small>10:00 — 23:00</small></span></div></div><a className="visit-button" href="https://yandex.ru/maps/?text=Красноярск%20ул.%20Мира%2028" target="_blank" rel="noreferrer">Найти нас <ArrowUpRight size={17}/></a></div></section>
    </main>
    <footer><a className="brand" href="#home"><span className="brand-mark">B<span>.</span></span><span>BLACK<br/>SHAWARMA</span></a><span>СДЕЛАНО С ОГНЁМ, КРАСНОЯРСК · 2026</span><a href="tel:+79991234567">+7 (999) 123-45-67</a></footer>
  </>
}

createRoot(document.getElementById('root')).render(<App />)
