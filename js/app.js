/* ===== EDIT YOUR DATA HERE ===== */
const D = {
  name: "Sabin Khanal",
  photo: "images/profile.png",
  cover: "images/cover.jpg",
  bio: "Web design and development student at UCLan Cyprus. Born in Tanahun, Nepal. Building websites from Larnaca.",
  email: "sabinkhanal809@gmail.com", // <- put your public email here
  github: "https://github.com/sabinkhanal1",
  facebook: "https://facebook.com/sabin.khanal.737080",
  skills: ["HTML", "CSS", "JavaScript", "Git & GitHub", "Responsive design", "Customer service"],
  languages: ["Nepali (native)", "English (fluent)", "Hindi (fluent)"],
  education: [
    ["2025 – now", "BSc (Hons) Web Design and Development", "UCLan Cyprus, Larnaca"],
    ["2022", "Higher Secondary (+2)", "Satyawati Secondary School, Tanahun"],
    ["2020", "Secondary Education (SEE)", "Satyawati Secondary School, Tanahun"],
  ],
  work: [
    ["20 months", "Admission Officer Assistant (intern)", "Time Academy Consultancy, Tanahun. Student admissions, enquiries and records."],
    ["18 months", "Waiter training", "SASAA INN Hotel, Damauli. Service standards and customer relations."],
    ["1 month", "Mobile repair training", "SOS Vocational Training Center, Pokhara."],
  ],
  // Stories: add { text, bg } slides. Add img: "photo.jpg" to show a picture.
  stories: [
    { title: "Tanahun to Larnaca", bg: "linear-gradient(160deg,#0f2a5c,#d3123a)", slides: ["I grew up in Tanahun, Nepal.", "Now I study web design and development in Larnaca, Cyprus."] },
    { title: "What I’m learning", bg: "linear-gradient(160deg,#0b7a75,#14213d)", slides: ["HTML, CSS and JavaScript at UCLan Cyprus.", "Every project goes on GitHub."] },
    { title: "Building Pushpa", bg: "linear-gradient(160deg,#d3123a,#7a0a24)", slides: ["Pushpa is a website I made as a gift.", "It’s the project I’m proudest of."] }
  ],
  // Vlog: add { title, yt: "YOUTUBE_VIDEO_ID", text }
  vlogs: []
};
/* ================================ */

const R = document.body.dataset.root, P = document.body.dataset.page;
const repo = id => `https://github.com/sabinkhanal1/${id}`;
const I = {
  home: '<path d="M12 3 2 12h3v8h5v-6h4v6h5v-8h3z"/>',
  profile: '<circle cx="12" cy="8" r="4.2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/>',
  vlog: '<path fill-rule="evenodd" d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm6 3v8l7-4z"/>',
  stories: '<path fill-rule="evenodd" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 5v4h4v2h-4v4h-2v-4H7v-2h4V7z"/>',
  projects: '<path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z"/>',
  contacts: '<path d="M12 2C6.5 2 2 6 2 11c0 2.7 1.3 5 3.4 6.7V22l4-2.2c.8.2 1.7.3 2.6.3 5.5 0 10-4 10-9S17.5 2 12 2z"/>',
  school: '<path d="M12 3 1 9l11 6 9-4.9V17h2V9zM5 13.2V17c0 1.7 3 3 7 3s7-1.300 7-3v-3.800L12 17z"/>',
  pin: '<path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.500A2.500 2.500 0 1 1 12 6.500a2.500 2.500 0 0 1 0 5z"/>',
  globe: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.900 9h-3a15 15 0 0 0-1.300-6A8 8 0 0 1 18.900 11zM12 4c.9 1.200 1.600 3.300 1.900 7h-3.800C10.400 7.300 11.100 5.200 12 4zM4.300 13h3a15 15 0 0 0 1.300 6A8 8 0 0 1 4.300 13z"/>',
  code: '<path d="m8.500 17-5-5 5-5 1.400 1.400L6.300 12l3.600 3.600zm7 0-1.400-1.400 3.600-3.600-3.600-3.600L15.500 7l5 5z"/>'
};
const ic = k => `<svg viewBox="0 0 24 24" aria-hidden="true">${I[k]}</svg>`;
const nav = [["", "Home", "index", "home"], ["profile/", "Profile", "profile", "profile"], ["vlog/", "Vlog", "vlog", "vlog"], ["stories/", "Stories", "stories", "stories"], ["projects/", "Projects", "projects", "projects"], ["contacts/", "Contacts", "contacts", "contacts"]];
const tabs = () => nav.map(([h, t, k, i]) => `<a class="tab ${k === P ? "on" : ""}" href="${R}${h}" title="${t}" aria-label="${t}">${ic(i)}</a>`).join("");
const sideRows = () => nav.slice(1).map(([h, t, k, i]) => `<a class="row" href="${R}${h}"><span class="ic">${ic(i)}</span>${t}</a>`).join("");
const delay = (h, step = .08) => h.replace(/class="card/g, (m, o, s) => m).replace(/<(article|section) class="card([^"]*)"/g, (m, t, c) => { delay.n = (delay.n || 0) + 1; return `<${t} class="card${c}" style="--d:${(delay.n * step).toFixed(2)}s"`; });

const storyBtns = () => `${D.stories.map((s, i) => `<button class="story" style="background:${s.bg};--d:${i * .08}s" data-s="${i}"><i style="background-image:url(${D.photo})"></i><span>${s.title}</span></button>`).join("")}`;
const projActs = p => `<div class="acts"><a class="act" href="${repo(p.id)}" target="_blank" rel="noopener">${ic("code")}View code</a>${p.live ? `<a class="act" href="${p.live}" target="_blank" rel="noopener">${ic("globe")}Live site</a>` : ""}</div>`;
const post = (tag, text, p) => `<article class="card post"><header><img class="av" src="${D.photo}" alt=""><div><b>${D.name}</b><span class="mute small">${tag}</span></div></header><p>${text}</p>${p ? `<div class="pic" style="background:${p.color}"><span style="position:relative">${p.title}</span></div>${projActs(p)}` : ""}</article>`;
const facts = () => `<div class="facts"><p>${ic("school")}Studies at <b>UCLan Cyprus</b></p><p>${ic("pin")}Lives in <b>Larnaca, Cyprus</b></p><p>${ic("pin")}From <b>Tanahun, Nepal</b></p><p>${ic("globe")}${D.languages.join(", ")}</p></div>`;
const about = () => `<section class="card"><h2>Education</h2><div class="tl">${D.education.map(e => `<div><h3>${e[1]}</h3><span class="mute small">${e[0]} · ${e[2]}</span></div>`).join("")}</div></section><section class="card"><h2>Experience</h2><div class="tl">${D.work.map(e => `<div><h3>${e[1]}</h3><span class="mute small">${e[0]}</span><p class="small">${e[2]}</p></div>`).join("")}</div></section><section class="card"><h2>Skills</h2><div class="chips">${D.skills.map(s => `<span class="chip">${s}</span>`).join("")}</div></section>`;
const projCards = () => D.projects.map(p => `<article class="card mp"><div class="pic" style="background:${p.color}"><span style="position:relative">${p.title}</span></div><div class="in"><p>${p.text}</p></div>${projActs(p)}</article>`).join("");
const feed = () => D.projects.slice(0, 4).map(p => post("New project", p.text, p)).join("");

const pages = {
  index: () => `<section class="card"><div class="strip" style="margin:-4px 0">${storyBtns()}</div></section>
    <section class="card"><div class="comp"><img class="av" src="${D.photo}" alt=""><a class="fake" href="${R}contacts/">Say hello to Sabin…</a></div><div class="acts"><a class="act" href="${R}vlog/"><span style="color:#f3425f;display:flex">${ic("vlog")}</span>Vlog</a><a class="act" href="${R}stories/"><span style="color:#45bd62;display:flex">${ic("stories")}</span>Stories</a><a class="act" href="${R}projects/"><span style="color:#f7b928;display:flex">${ic("projects")}</span>Projects</a></div></section>
    ${post("Study", "I started my BSc (Hons) in Web Design and Development at UCLan Cyprus in Larnaca.")}${feed()}${post("Hello", "Welcome to my new site. Look around: profile, vlog, stories, projects and contacts.")}`,

  profile: () => "",
  vlog: () => D.vlogs.length ? `<div class="grid two">${D.vlogs.map(v => `<article class="card vid"><iframe src="https://www.youtube-nocookie.com/embed/${v.yt}" title="${v.title}" loading="lazy" allowfullscreen></iframe><div><h3>${v.title}</h3><p class="mute small">${v.text || ""}</p></div></article>`).join("")}</div>`
    : `<section class="card empty"><h2>No videos yet</h2><p class="mute">Upload a video to YouTube, then add its ID to <code>vlogs</code> in <code>js/app.js</code>. It will appear here.</p></section>`,
  stories: () => `<section class="card"><h2>Stories</h2><p class="mute small" style="margin-bottom:12px">Tap a story to open it. Tap the screen to go to the next one.</p><div class="strip" style="flex-wrap:wrap">${storyBtns()}</div></section>`,
  projects: () => `<div class="grid three">${projCards()}</div>`,
  contacts: () => `<div class="grid two"><section class="card"><div class="chatH"><div class="dot"><img class="av" src="${D.photo}" alt=""></div><div><b>${D.name}</b><div class="mute small">Active now</div></div></div><div class="chat" id="chat"><div class="bub">Hi! I’m Sabin. What would you like to build?</div></div><input class="inp" id="nm" placeholder="Your name" autocomplete="name"><textarea class="inp" id="msg" rows="3" placeholder="Write your message"></textarea><button class="btn" id="send">Send message</button><p class="mute small" style="margin-top:8px">Sending opens your email app with the message ready.</p></section>
    <section class="card"><h2>Contacts</h2><a class="row" href="mailto:${D.email}"><span class="ic">${ic("contacts")}</span><div>Email<small>${D.email}</small></div></a><a class="row" href="${D.github}" target="_blank" rel="noopener"><span class="ic">${ic("code")}</span><div>GitHub<small>sabinkhanal1</small></div></a><a class="row" href="${D.facebook}" target="_blank" rel="noopener"><span class="ic">${ic("globe")}</span><div>Facebook<small>sabin.khanal.737080</small></div></a></section></div>`
};

function profile() {
  const head = `<div class="pcover"><div class="card" style="padding:0;border-radius:0 0 12px 12px"><div class="cover"></div><div class="ph"><img class="big" src="${D.photo}" alt="${D.name}"><div class="t"><h1>${D.name}</h1><p class="mute">${D.bio}</p></div><div class="chips"><a class="btn" href="${R}contacts/">${ic("contacts")}Message</a><a class="btn alt" href="${D.github}" target="_blank" rel="noopener">GitHub</a><a class="btn alt" href="${D.facebook}" target="_blank" rel="noopener">Facebook</a></div></div><div class="tabs">${["Posts", "About", "Projects"].map((t, i) => `<button class="tb ${i ? "" : "on"}" data-t="${i}">${t}</button>`).join("")}</div></div></div>`;
  const body = t => t === 0 ? `<div class="pbody"><aside><section class="card"><h2>Intro</h2><p style="margin-bottom:8px">${D.bio}</p>${facts()}</section></aside><div class="col" style="margin:0">${post("Study", "I started my BSc (Hons) in Web Design and Development at UCLan Cyprus.")}${feed()}</div></div>`
    : t === 1 ? `<div class="pbody one"><div class="col">${about()}</div></div>` : `<div class="pbody one"><div class="grid three" style="grid-template-columns:repeat(auto-fill,minmax(260px,1fr))">${projCards()}</div></div>`;
  return { head, body };
}

function mount() {
  const el = document.getElementById("app");
  el.innerHTML = `<header class="top"><a class="logo" href="${R}" aria-label="Home">S</a><nav aria-label="Main">${tabs()}</nav><div class="rt"><a class="rb" href="${R}contacts/" aria-label="Messages">${ic("contacts")}</a><a href="${R}profile/" aria-label="Profile"><img class="av" src="${D.photo}" alt=""></a></div></header><div class="wrap ${P === "index" ? "three" : ""}" id="wrap"></div>`;
  const w = document.getElementById("wrap");
  const side = P === "index" ? `<aside class="side"><a class="row" href="${R}profile/"><img class="av" src="${D.photo}" alt="">${D.name}</a>${sideRows()}</aside>` : "";
  const right = P === "index" ? `<aside class="side"><div class="card" style="animation:none"><h2>Available for work</h2><p class="mute small" style="margin-bottom:10px">Websites for schools, clinics and small businesses.</p><a class="btn" href="${R}contacts/">Hire me</a></div><h3 class="mute" style="padding:10px 8px 2px">Contacts</h3><a class="row" style="position:relative" href="${D.github}" target="_blank" rel="noopener"><span class="ic">${ic("code")}</span>GitHub</a><a class="row" href="${D.facebook}" target="_blank" rel="noopener"><span class="ic">${ic("globe")}</span>Facebook</a></aside>` : "";
  w.innerHTML = `${side}<main class="col">${P === "profile" ? "" : `<div class="card sk"></div><div class="card sk"></div>`}</main>${right}`;
  const main = w.querySelector("main");
  const done = () => {
    delay.n = 0;
    if (P === "profile") {
      const p = profile(); w.innerHTML = ""; w.style.display = "block"; w.insertAdjacentHTML("beforeend", p.head + `<div id="pb">${p.body(0)}</div>`);
      w.querySelectorAll(".tb").forEach(b => b.onclick = () => { w.querySelectorAll(".tb").forEach(x => x.classList.toggle("on", x === b)); document.getElementById("pb").innerHTML = p.body(+b.dataset.t); wire(); });
    } else main.innerHTML = delay(pages[P]());
    wire();
  };
  setTimeout(done, P === "profile" ? 0 : 450);
}

/* Story viewer */
let timer;
function openStory(i) {
  const s = D.stories[i]; let n = 0;
  const ov = document.createElement("div"); ov.className = "ov";
  const close = () => { clearTimeout(timer); ov.remove(); document.removeEventListener("keydown", key); };
  const key = e => e.key === "Escape" ? close() : e.key === "ArrowRight" ? next() : e.key === "ArrowLeft" && (n = Math.max(0, n - 2), next());
  function next() {
    clearTimeout(timer);
    if (n >= s.slides.length) return i + 1 < D.stories.length ? (close(), openStory(i + 1)) : close();
    ov.innerHTML = `<div class="sv" style="background:${s.bg}"><div class="bars">${s.slides.map((_, k) => `<span><i style="width:${k < n ? 100 : 0}%;${k === n ? "transition:width 4s linear" : ""}"></i></span>`).join("")}</div><div class="sh"><img class="av" src="${D.photo}" alt="">${D.name}</div><button class="x" aria-label="Close">×</button>${s.slides[n]}</div>`;
    ov.querySelector(".x").onclick = e => { e.stopPropagation(); close(); };
    ov.querySelector(".sv").onclick = next;
    requestAnimationFrame(() => requestAnimationFrame(() => { const b = ov.querySelectorAll(".bars i")[n]; if (b) b.style.width = "100%"; }));
    n++; timer = setTimeout(next, 4000);
  }
  ov.onclick = e => e.target === ov && close();
  document.addEventListener("keydown", key); document.body.append(ov); next();
}

function wire() {
  document.querySelectorAll(".av,.big").forEach(i => i.onerror = () => { i.onerror = null; i.src = "data:image/svg+xml," + encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'><rect width='40' height='40' fill='#0866ff'/><text x='20' y='27' font-size='20' font-family='Arial' font-weight='700' fill='#fff' text-anchor='middle'>SK</text></svg>"); });
  document.querySelectorAll("[data-s]").forEach(b => b.onclick = () => openStory(+b.dataset.s));
  const send = document.getElementById("send");
  if (send) send.onclick = () => {
    const nm = document.getElementById("nm").value.trim(), m = document.getElementById("msg").value.trim();
    if (!m) return document.getElementById("msg").focus();
    const c = document.getElementById("chat"), q = t => t.replace(/</g, "&lt;");
    c.insertAdjacentHTML("beforeend", `<div class="bub me">${q(m)}</div><div class="bub">Thanks${nm ? ", " + q(nm) : ""}! Opening your email app now.</div>`);
    location.href = `mailto:${D.email}?subject=${encodeURIComponent("Message from " + (nm || "your website"))}&body=${encodeURIComponent(m)}`;
  };
}
mount();
