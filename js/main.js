// Rixos Travel Egypt — логика сайта (переводы — в i18n.js)

// Видео — MP4 (H.264): играет во всех браузерах, включая iPhone
const VEXT = "mp4";
const vsrc = path => path;
document.documentElement.classList.add("loaded");

// Ленивая загрузка: фоновые картинки и видео подгружаются, только когда до них доскроллили
const bgIO = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.style.backgroundImage = `url(${e.target.dataset.bg})`;
  bgIO.unobserve(e.target);
}), { rootMargin: "700px 0px" });
const lazyBg = root => root.querySelectorAll("[data-bg]").forEach(el => bgIO.observe(el));

// ---------- Контакты (менять здесь) ----------
const CONTACTS = {
  phone: "201224057253",            // TODO: подтвердить, что это WhatsApp-номер
  telegram: "Haytham_trib85"
};
const waLink = (text) => `https://wa.me/${CONTACTS.phone}?text=${encodeURIComponent(text || M().hi)}`;
const refreshLinks = () => document.querySelectorAll(".js-wa").forEach(a => { a.href = waLink(); a.target = "_blank"; a.rel = "noopener"; });
document.querySelectorAll(".js-tg").forEach(a => { a.href = `https://t.me/${CONTACTS.telegram}`; a.target = "_blank"; a.rel = "noopener"; });
document.querySelectorAll(".js-tel").forEach(a => { a.href = `tel:+${CONTACTS.phone}`; });

// ---------- Экскурсии (только данные из Taplink) ----------
const CATEGORIES = [
  { id: "cairo",  name: "Каир и Луксор" },
  { id: "sea",    name: "Море" },
  { id: "desert", name: "Пустыня" },
  { id: "sinai",  name: "Синай и Дахаб" },
  { id: "abroad", name: "Иордания" }
];
const TOURS = [
  { cat: "cairo", place: "Каир", title: "Каир на самолёте, группа", img: "content/photos/stock/cairo-plane-group.webp", tags: ["самолёт", "русскоговорящий гид"], text: "Без долгой дороги: Большой Египетский музей, пирамиды Гизы, Сфинкс, обед.", price: "$265", per: "за человека" },
  { cat: "cairo", place: "Каир", title: "Каир на автобусе", img: "content/photos/stock/egyptian-museum.webp", tags: ["ежедневно", "обед"], text: "Национальный музей, пирамиды Гизы, Сфинкс, обед.", price: "$55", per: "за человека" },
  { cat: "cairo", place: "Каир", title: "Каир на автобусе: Гранд музей", img: "content/photos/stock/grand-museum.webp", tags: ["ежедневно", "обед"], text: "Большой Египетский музей, пирамиды Гизы, Сфинкс, обед.", price: "$85", per: "за человека" },
  { cat: "cairo", place: "Каир", title: "Каир мини-группой", img: "content/photos/stock/sphinx.webp", tags: ["микроавтобус", "возврат к 22:00"], text: "Гранд музей, великие пирамиды, Сфинкс, обед. Дни выезда — в мессенджере.", price: "$110", per: "за человека" },
  { cat: "cairo", place: "Каир", title: "Каир на самолёте, индивидуально", img: "content/photos/stock/cairo-plane-private.webp", tags: ["самолёт", "личный гид"], text: "Музей, пирамиды, Сфинкс, православный собор, Висячая церковь, обед.", price: "$610", per: "за двоих" },
  { cat: "cairo", place: "Каир", title: "Каир «История Египта»", img: "content/photos/stock/hanging-church.webp", tags: ["новинка", "индивидуально"], text: "Православный собор, Висячая церковь, церковь-пещера, место пребывания Святого семейства, древние иконы.", price: "от $200", per: "за двоих · микроавтобус до 5 чел. — $480" },
  { cat: "cairo", place: "Луксор", title: "Луксор на самолёте", img: "content/photos/stock/karnak.webp", tags: ["самолёт", "русскоговорящий гид"], text: "Храмовый комплекс Карнак, храм царицы Хатшепсут, Долина царей, обед.", price: "$265", per: "за человека" },

  { cat: "sea", place: "Рас-Мохаммед", title: "Морская прогулка с дайвингом «всё в одном»", img: "content/photos/stock/divers.webp", tags: ["8:30–17:00", "обед"], text: "Снорклинг на рифах, погружение с аквалангом, обед «шведский стол», Белый остров.", price: "$50", per: "за человека" },
  { cat: "sea", place: "Шарм-эль-Шейх", title: "Индивидуальная яхта", img: "content/photos/stock/yacht.webp", tags: ["9:00–16:30", "двухпалубная"], text: "Снорклинг — 2 захода (маска и ласты), обед. Цена зависит от количества человек.", price: "по запросу", per: "" },
  { cat: "sea", place: "Белый остров", title: "Белый остров с дайвингом", img: "content/photos/stock/white-island.webp", tags: ["море", "дайвинг"], text: "Морская прогулка на Белый остров с погружением.", price: "$55", per: "за человека" },
  { cat: "sea", place: "Рас-Мохаммед", title: "Рас-Мохаммед на автобусе", img: "content/photos/stock/ras-mohammed.webp", tags: ["обед включён"], text: "Поездка в национальный парк Рас-Мохаммед.", price: "$30", per: "за человека" },
  { cat: "sea", place: "Шарм-эль-Шейх", title: "Ужин / вечеринка на яхте", img: "content/photos/stock/yacht-night.webp", tags: ["вечер"], text: "Стоимость зависит от количества гостей и типа яхты.", price: "от $30", per: "за человека" },
  { cat: "sea", place: "Шарм-эль-Шейх", title: "Батискаф", img: "content/photos/stock/glass-boat.webp", tags: ["для всей семьи"], text: "Рифы через стекло нижней палубы под водой.", price: "$35", per: "за человека" },
  { cat: "sea", place: "Шарм-эль-Шейх", title: "Погружение с аквалангом", img: "content/photos/stock/padi.webp", tags: ["с инструктором"], text: "Погружение с аквалангом с инструктором.", price: "$45", per: "за человека" },
  { cat: "sea", place: "Шарм-эль-Шейх", title: "Дайвинг с берега", img: "content/photos/stock/coral-reef.webp", tags: ["дайвинг"], text: "Цена зависит от времени под водой.", price: "$30–40", per: "за человека" },
  { cat: "sea", place: "Шарм-эль-Шейх", title: "Курсы дайвинга PADI", img: "content/photos/stock/divers.webp", tags: ["сертификат"], text: "Обучение с получением международного сертификата PADI.", price: "по запросу", per: "" },
  { cat: "sea", place: "Шарм-эль-Шейх", title: "Шоу дельфинов", img: "content/photos/stock/dolphin.webp", tags: ["для детей"], text: "Дети до 3 лет — бесплатно, 3–8 лет — скидка 50%.", price: "$20", per: "за человека" },

  { cat: "desert", place: "Синайская пустыня", title: "Мега сафари", img: "content/photos/stock/buggy.webp", tags: ["8:00–16:00", "завтрак и обед"], text: "Квадроциклы и багги, чай с бедуинами, верблюды, катание на бананах.", price: "$50", per: "за человека" },
  { cat: "desert", place: "Синайская пустыня", title: "Утреннее сафари на квадроциклах", img: "content/photos/stock/quad-road.webp", tags: ["1 час", "чай с бедуинами"], text: "Час катания на квадроциклах по пустыне и остановка с традиционным чаем.", price: "$25", per: "за человека" },
  { cat: "desert", place: "Синайская пустыня", title: "Супер сафари", img: "content/photos/stock/quad-sunset.webp", tags: ["16:00–22:00", "ужин"], text: "Квадроциклы, бедуинская деревня, верблюды, бедуинская вечеринка и ужин.", price: "$35", per: "за человека" },

  { cat: "sinai", place: "Дахаб", title: "Цветной каньон и Дахаб", img: "content/photos/stock/colored-canyon.webp", tags: ["6:00–17:00", "джип"], text: "Квадроцикл, бедуинская деревня, кальян, чай, верблюды, завтрак, снорклинг.", price: "$55", per: "за человека" },
  { cat: "sinai", place: "Дахаб", title: "Один день в Дахабе", img: "content/photos/stock/dahab.webp", tags: ["программы на выбор"], text: "Каньон, Голубая дыра и другие программы на выбор.", price: "от $40", per: "за человека" },
  { cat: "sinai", place: "Гора Синай", title: "Монастырь Св. Екатерины и гора Моисея", img: "content/photos/stock/st-catherine.webp", tags: ["21:00–11:00"], text: "Монастырь у подножия горы Синай, восхождение на гору Моисея, возможность посетить Дахаб.", price: "$40", per: "за человека" },

  { cat: "abroad", place: "Петра", title: "Иордания — Петра и Акаба", img: "content/photos/stock/petra.webp", tags: ["ночной выезд", "паром"], text: "Паром до Акабы, Петра: Эль-Хазне, амфитеатр, гробницы. Обед и прогулка по Акабе.", price: "$250", per: "за человека" }
];

const tabsEl = document.getElementById("tabs");
const gridEl = document.getElementById("tours-grid");
const tourCount = document.getElementById("tour-count");
if (tourCount) tourCount.textContent = TOURS.length;
const COLS = 4;

// Бенто: первая карточка большая (2×2), последнюю растягиваем, чтобы ряд был полным
function layout(n) {
  const s = Array(n).fill(null);
  if (n <= 3) { s[0] = { c: COLS - (n - 1), r: 1 }; return s; }
  s[0] = { c: 2, r: 2 };
  if (n === 4) s[3] = { c: 2, r: 1 };
  if (n > 5) { const left = (n - 5) % COLS; if (left) s[n - 1] = { c: COLS - left + 1, r: 1 }; }
  return s;
}

function renderTours(cat) {
  const list = TOURS.filter(t => t.cat === cat);
  const spans = layout(list.length);
  gridEl.innerHTML = list.map((t, i) => {
    const sp = spans[i];
    const cls = sp ? (sp.r === 2 ? " big" : " wide") : "";
    const vars = sp ? `--c:${sp.c}; --r:${sp.r};` : "";
    const ratio = sp && sp.r === 2 ? "1:1 · 1600×1600" : sp ? "16:9 · 1600×900" : "3:4 · 900×1200";
    return `
    <article class="tour anim${cls}" style="--i:${i}; ${vars}">
      <div class="tour-in">
        ${t.img ? `<div class="ph img" data-bg="${t.img}"></div>` : `<div class="ph" data-ph="ФОН КАРТОЧКИ · ${ratio}"></div>`}
        <span class="pin"><svg><use href="#i-pin"/></svg>${t.place}</span>
        <div class="panel">
          <div class="tags">${t.tags.join(" · ")}</div>
          <h4>${t.title}</h4>
          <p>${t.text}</p>
          <div class="tour-foot">
            <div class="price">${t.price}${t.per ? `<small>${t.per}</small>` : ""}</div>
            <a href="${waLink(M().book + tr(t.title))}" target="_blank" rel="noopener">Забронировать</a>
          </div>
        </div>
      </div>
    </article>`;
  }).join("");
  translateTree(gridEl);
  lazyBg(gridEl);
}
tabsEl.innerHTML = CATEGORIES.map((c, i) =>
  `<button class="tab${i === 0 ? " on" : ""}" role="tab" data-cat="${c.id}">${c.name}</button>`).join("");
tabsEl.addEventListener("click", e => {
  const b = e.target.closest(".tab");
  if (!b) return;
  tabsEl.querySelectorAll(".tab").forEach(x => x.classList.toggle("on", x === b));
  renderTours(b.dataset.cat);
});
renderTours(CATEGORIES[0].id);

// Наклон карточки за курсором
if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
  gridEl.addEventListener("pointermove", e => {
    const card = e.target.closest(".tour");
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    const k = card.classList.contains("big") ? 4 : 8;
    card.style.setProperty("--ry", (x * k).toFixed(2) + "deg");
    card.style.setProperty("--rx", (-y * k).toFixed(2) + "deg");
  });
  gridEl.addEventListener("pointerout", e => {
    const card = e.target.closest(".tour");
    if (card && !card.contains(e.relatedTarget)) { card.style.removeProperty("--rx"); card.style.removeProperty("--ry"); }
  });
}

document.getElementById("foot-cats").innerHTML = CATEGORIES.map(c => `<li><a href="#tours" data-cat="${c.id}">${c.name}</a></li>`).join("");
document.getElementById("foot-cats").addEventListener("click", e => {
  const a = e.target.closest("a[data-cat]");
  if (a) tabsEl.querySelector(`[data-cat="${a.dataset.cat}"]`).click();
});

// Бегущая строка
const strip = list => { const one = list.map(p => `<span>${p}</span>`).join(""); return one + one; };
document.getElementById("marquee-1").innerHTML = strip(["Шарм-эль-Шейх", "Дахаб", "Каир", "Луксор", "Петра", "Рас-Мохаммед", "Синай"]);
document.getElementById("marquee-2").innerHTML = strip(["Пирамиды", "Яхты", "Сафари", "Дайвинг", "Храмы", "Бедуины", "Рифы", "Каньоны"]);

// ---------- Видео ----------
const REELS = {
  inaction: [
    { v: "v19", ar: "9 / 16", t: "Хайсам в Большом Египетском музее", s: "Гранд музей, Каир" },
    { v: "v03", ar: "16 / 9", t: "У статуи Рамзеса II", s: "Большой Египетский музей" },
    { v: "v20", ar: "9 / 16", t: "Египетский музей", s: "Каир, площадь Тахрир" },
    { v: "v16", ar: "9 / 16", t: "Коптский Каир", s: "Висячая церковь и старый город" },
    { v: "v05", ar: "9 / 16", t: "Рассказ в залах музея", s: "Большой Египетский музей" },
    { v: "v02", ar: "16 / 9", t: "Вид на пирамиды из музея", s: "Большой Египетский музей" },
    { v: "v08", ar: "9 / 16", t: "Дорога с гидом", s: "В автобусе группы" },
    { v: "v10", ar: "9 / 16", t: "Залы с сокровищами", s: "Большой Египетский музей" },
    { v: "v06", ar: "9 / 16", t: "Плато Гиза", s: "У пирамид" }
  ],
  guests: [
    { v: "v14", ar: "9 / 16", t: "«Мечта сбылась»", s: "У пирамиды Хеопса" },
    { v: "v12", ar: "16 / 9", t: "Группа у пирамид", s: "Плато Гиза" },
    { v: "v15", ar: "9 / 16", t: "С сыном у пирамид", s: "Плато Гиза" },
    { v: "v17", ar: "9 / 16", t: "Семья у пирамид", s: "Плато Гиза" },
    { v: "v01", ar: "16 / 9", t: "После экскурсии", s: "Большой Египетский музей" },
    { v: "v18", ar: "9 / 16", t: "Большая группа", s: "Большой Египетский музей" },
    { v: "v07", ar: "16 / 9", t: "Привет из Египта", s: "Группа гостей" },
    { v: "v13", ar: "16 / 9", t: "Группа у пирамид", s: "Плато Гиза" },
    { v: "v11", ar: "9 / 16", t: "Вся группа вместе", s: "Большой Египетский музей" }
  ]
};
const DUR = { v01: 10, v02: 21, v03: 8, v04: 13, v05: 60, v06: 60, v07: 16, v08: 59, v09: 41, v10: 31, v11: 12, v12: 11, v13: 11, v14: 16, v15: 9, v16: 60, v17: 6, v18: 9, v19: 32, v20: 11 };
const fmt = sec => `${Math.floor(sec / 60)}:${String(Math.round(sec % 60)).padStart(2, "0")}`;
document.querySelectorAll("[data-reels]").forEach(box => {
  box.innerHTML = REELS[box.dataset.reels].map(r => `
    <div class="reel" style="--ar:${r.ar}" data-open="content/video/${r.v}.mp4">
      <video src="content/video/${r.v}.${VEXT}" poster="content/posters/${r.v}.webp" muted loop playsinline preload="none"></video>
      <span class="dur">${fmt(DUR[r.v])}</span>
      <span class="play"><svg><use href="#i-play"/></svg></span>
      <div class="cap"><b>${r.t}</b><span>${r.s}</span></div>
    </div>`).join("");
  if (matchMedia("(hover: hover)").matches) {
    box.addEventListener("pointerover", e => { const r = e.target.closest(".reel"); if (r) r.querySelector("video").play().catch(() => {}); });
    box.addEventListener("pointerout", e => { const r = e.target.closest(".reel"); if (r && !r.contains(e.relatedTarget)) r.querySelector("video").pause(); });
  }
});
document.querySelectorAll(".reels-wrap").forEach(wrap => {
  const box = wrap.querySelector(".reels"), prev = wrap.querySelector(".prev"), next = wrap.querySelector(".next");
  const sync = () => { prev.hidden = box.scrollLeft < 10; next.hidden = box.scrollLeft + box.clientWidth > box.scrollWidth - 10; };
  wrap.addEventListener("click", e => {
    const b = e.target.closest(".side-arrow");
    if (b) box.scrollBy({ left: +b.dataset.dir * box.clientWidth * .7, behavior: "smooth" });
  });
  box.addEventListener("scroll", sync, { passive: true });
  addEventListener("resize", sync);
  sync();
});
// видео в «О Хайсаме» играет без звука, пока на экране
const autoplay = new IntersectionObserver(es => es.forEach(e => {
  const v = e.target;
  if (e.isIntersecting) { if (!v.src && v.dataset.src) v.src = v.dataset.src; v.play().catch(() => {}); }
  else v.pause();
}), { threshold: .3 });
// ролики, что видны сразу (первый экран), начинают грузиться только после основного видео и картинок
const startLazyVideos = () => document.querySelectorAll("video[data-autoplay]").forEach(v => autoplay.observe(v));
if (document.readyState === "complete") setTimeout(startLazyVideos, 600);
else addEventListener("load", () => setTimeout(startLazyVideos, 600), { once: true });
lazyBg(document);
// просмотр со звуком
const vbox = document.getElementById("vbox"), vplayer = vbox.querySelector("video");
document.addEventListener("click", e => {
  const t = e.target.closest("[data-open]");
  if (!t) return;
  e.preventDefault();
  vplayer.src = vsrc(t.dataset.open);
  vbox.classList.add("open");
  vplayer.play().catch(() => {});
});
const closeBox = () => { vplayer.pause(); vplayer.removeAttribute("src"); vplayer.load(); vbox.classList.remove("open"); };
vbox.addEventListener("click", e => { if (e.target === vbox || e.target.closest("button")) closeBox(); });
addEventListener("keydown", e => { if (e.key === "Escape" && vbox.classList.contains("open")) closeBox(); });

// ---------- Сравнение: подсветка одинаковых строк в обеих карточках ----------
document.querySelectorAll(".vs li").forEach(li => {
  const same = () => document.querySelectorAll(`.vs li[data-i="${li.dataset.i}"]`);
  li.addEventListener("pointerenter", () => same().forEach(x => x.classList.add("hl")));
  li.addEventListener("pointerleave", () => same().forEach(x => x.classList.remove("hl")));
});

// ---------- Конструктор маршрута трансфера ----------
const CITIES = ["Шарм-эль-Шейх", "Хургада", "Дахаб", "Таба", "Каир", "Александрия"];
const pick = { from: "Шарм-эль-Шейх", to: "Каир" };
function drawRoute() {
  document.querySelectorAll("[data-pick]").forEach(box => {
    const side = box.dataset.pick, other = side === "from" ? pick.to : pick.from;
    box.innerHTML = CITIES.map(c => `<button type="button" data-c="${c}" class="${pick[side] === c ? "on" : ""}" ${c === other ? "disabled" : ""}>${tr(c)}</button>`).join("");
  });
  document.getElementById("rb-from").textContent = tr(pick.from);
  document.getElementById("rb-to").textContent = tr(pick.to);
  document.getElementById("rb-go").href = waLink(M().transfer(tr(pick.from), tr(pick.to)));
}
document.querySelectorAll("[data-pick]").forEach(box => box.addEventListener("click", e => {
  const b = e.target.closest("button");
  if (!b || b.disabled) return;
  pick[box.dataset.pick] = b.dataset.c;
  drawRoute();
}));
drawRoute();

// ---------- FAQ: открыт только один вопрос ----------
document.querySelectorAll(".faq.chat details").forEach(d => d.addEventListener("toggle", () => {
  if (d.open) document.querySelectorAll(".faq.chat details[open]").forEach(x => { if (x !== d) x.open = false; });
}));

// ---------- Быстрая заявка → WhatsApp ----------
const selTour = document.getElementById("b-tour");
selTour.innerHTML += CATEGORIES.map(c =>
  `<optgroup label="${c.name}">${TOURS.filter(t => t.cat === c.id).map(t => `<option>${t.title}</option>`).join("")}</optgroup>`).join("");
const dateEl = document.getElementById("b-date");
dateEl.min = new Date().toISOString().slice(0, 10);
document.getElementById("booking").addEventListener("submit", e => {
  e.preventDefault();
  const lines = [M().form];
  if (selTour.value) lines.push(M().tour + selTour.value);
  if (dateEl.value) lines.push(M().date + dateEl.value.split("-").reverse().join("."));
  lines.push(M().guests + document.getElementById("b-guests").value);
  window.open(waLink(lines.join("\n")), "_blank", "noopener");
});

// ---------- Появление при скролле ----------
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const REVEAL = [
  [".head", "", 0],
  [".stat", "", .12],
  [".stat .badge", "pop", .12],
  [".vs-card.them", "from-left", 0],
  [".vs-card.us", "from-right", .15],
  [".vs-badge", "pop", .4],
  [".ticket", "", .1],
  [".route-builder", "zoom", 0],
  [".ask-card", "from-left", 0],
  [".about-photo", "unmask", 0],
  [".about-photo-2", "unmask", .3],
  [".about-badge", "pop", .6],
  [".about-text > *", "from-right", .08],
  [".step", "", .18],
  [".step .pic", "pop", .18],
  ["#tours .tabs, .pay-note", "", 0],
  [".stop .info", "", 0],
  [".stop .pics .ph", "unmask", .2],
  [".svc", "", .12],
  [".insure", "", 0],
  [".t-table", "from-left", 0],
  [".t-cities", "from-right", .1],
  [".review", "", .15],
  [".reel", "", .08],
  [".polaroid", "pop", .1],
  [".faq details", "", .08],
  [".final2", "zoom", 0],
  [".foot > div", "", .08]
];
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { rootMargin: "0px 0px -10% 0px", threshold: .12 });
REVEAL.forEach(([sel, variant, step]) => {
  const groups = new Map();
  document.querySelectorAll(sel).forEach(el => {
    const key = el.closest(".stats, .steps, .reviews, .polaroids, .bento, .reels, .tickets-row, .tickets-col, .faq.chat, .faq, .foot, .about-text, .pics") || el.parentElement;
    const n = groups.get(key) || 0;
    groups.set(key, n + 1);
    el.classList.add("reveal");
    if (variant) el.classList.add(variant);
    if (step) el.style.setProperty("--d", (n * step).toFixed(2) + "s");
    reduce ? el.classList.add("in") : io.observe(el);
  });
});

// Счётчики
const counters = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    counters.unobserve(e.target);
    const b = e.target, m = b.textContent.match(/^(\d+)(.*)$/);
    if (!m || reduce) return;
    const end = +m[1], tail = m[2], t0 = performance.now() + 200, dur = 1400;
    const tick = now => {
      const x = Math.min(Math.max((now - t0) / dur, 0), 1);
      b.textContent = Math.round(end * (1 - Math.pow(1 - x, 3))) + tail;
      if (x < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}, { threshold: .5 });
document.querySelectorAll("[data-count]").forEach(b => counters.observe(b));

// Шапка, параллакс, линия маршрута
const header = document.getElementById("header");
const heroVideo = document.querySelector(".hero2-video");
const hero = document.querySelector(".hero2"), heroMedia = hero.querySelector(".hero2-media"), heroContent = hero.querySelector(".hero2-content");
// на телефоне параллакс первого экрана отключён — меньше перерисовок при скролле
const phone = matchMedia("(max-width: 760px), (hover: none)");
let solid = null;
function drawHero(y, vh) {
  if (solid !== y > 40) { solid = y > 40; header.classList.toggle("solid", solid); }
  if (reduce || phone.matches || y > vh * 1.2) return;
  heroMedia.style.setProperty("--hy", (y * .35).toFixed(1) + "px");
  heroContent.style.setProperty("--hc", (y * -.12).toFixed(1) + "px");
  heroContent.style.setProperty("--ho", Math.max(0, 1 - y / (vh * .75)).toFixed(3));
}
const route = document.querySelector(".route");
const line = document.querySelector(".route-line");
let ticking = false;
let lastP = -1;
function onScroll() {
  ticking = false;
  // сначала все замеры, потом запись стилей — без лишних пересчётов раскладки
  const y = scrollY, vh = innerHeight, r = route.getBoundingClientRect();
  drawHero(y, vh);
  const p = reduce ? 1 : +Math.min(Math.max((vh * .65 - r.top) / r.height, 0), 1).toFixed(3);
  if (p !== lastP) { lastP = p; line.style.setProperty("--p", p); }
}
addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
addEventListener("resize", onScroll);
onScroll();

// видео первого экрана не декодируется, пока его не видно
new IntersectionObserver(([e]) => e.isIntersecting ? heroVideo.play().catch(() => {}) : heroVideo.pause()).observe(hero);

// ---------- Язык ----------
const TITLE_RU = document.title, META = document.querySelector('meta[name="description"]'), META_RU = META.content;
function setLang(lang) {
  LANG = lang;
  try { localStorage.setItem("lang", lang); } catch (e) {}
  document.documentElement.lang = lang;
  document.title = tr(TITLE_RU);
  META.content = tr(META_RU);
  renderTours(tabsEl.querySelector(".tab.on").dataset.cat);
  translateTree(document.body);
  refreshLinks();
  drawRoute();
  document.querySelectorAll(".lang [data-lang]").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
}
document.querySelector(".lang").addEventListener("click", e => {
  const b = e.target.closest("[data-lang]");
  if (b && b.dataset.lang !== LANG) setLang(b.dataset.lang);
});
setLang(LANG);
