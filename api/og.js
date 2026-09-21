import { ImageResponse } from '@vercel/og';

// Invitation details — edit here and the social preview updates everywhere.
const DATA = {
  eyebrow: "YOU'RE INVITED",
  title: "Matania's 1st Birthday",
  date: 'Sunday, September 27, 2026',
  venue: 'Bole Bulbula 93 behind fresh corner · Addis Ababa',
};

// Palette lifted from the site (see .photo-frame gradient + gold accents).
const THEME = {
  bg: 'linear-gradient(135deg,#FFEBCB 0%,#F6D9A6 48%,#CBE6F2 100%)',
  ink: '#5A4632',
  gold: '#C98A2E',
  goldSoft: '#D9A25C',
};

// Plain-JS element factory (no JSX) so Vercel can deploy this as a .js Function.
function h(type, props, ...children) {
  const p = { ...(props || {}) };
  if (children.length) p.children = children.length === 1 ? children[0] : children;
  return { type, props: p };
}

async function loadFonts() {
  const [serif, sans] = await Promise.all([
    fetch('https://cdn.jsdelivr.net/fontsource/fonts/playfair-display@latest/latin-700-normal.ttf').then((r) => r.arrayBuffer()),
    fetch('https://cdn.jsdelivr.net/fontsource/fonts/poppins@latest/latin-500-normal.ttf').then((r) => r.arrayBuffer()),
  ]);
  return [
    { name: 'Playfair', data: serif, weight: 700, style: 'normal' },
    { name: 'Poppins', data: sans, weight: 500, style: 'normal' },
  ];
}

// A soft balloon-like circle for gentle decoration in the corners.
function Balloon({ left, top, size, color }) {
  return h('div', {
    style: {
      position: 'absolute',
      left,
      top,
      width: size,
      height: size,
      borderRadius: '50%',
      backgroundImage: `radial-gradient(circle at 32% 28%, rgba(255,255,255,0.85), ${color} 62%)`,
      opacity: 0.55,
    },
  });
}

// Modern Vercel Function signature (Node.js runtime). Responds to GET /api/og.
export async function GET() {
  const fonts = await loadFonts();

  const card = h(
    'div',
    {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundImage: THEME.bg,
        padding: 64,
        textAlign: 'center',
      },
    },
    h(Balloon, { left: 70, top: 70, size: 150, color: '#F3B6C0' }),
    h(Balloon, { left: 1000, top: 90, size: 190, color: '#A8D8EA' }),
    h(Balloon, { left: 120, top: 430, size: 120, color: '#F6D9A6' }),
    h(Balloon, { left: 990, top: 420, size: 150, color: '#E8B86D' }),

    h('div', { style: { display: 'flex', fontFamily: 'Poppins', fontSize: 30, letterSpacing: 10, color: THEME.gold } },
      h('div', null, DATA.eyebrow)),

    h('div', { style: { display: 'flex', marginTop: 22, fontFamily: 'Playfair', fontSize: 108, lineHeight: 1.05, color: THEME.ink } },
      h('div', null, DATA.title)),

    h('div', { style: { display: 'flex', alignItems: 'center', marginTop: 30 } },
      h('div', { style: { width: 120, height: 3, backgroundImage: `linear-gradient(to right, transparent, ${THEME.goldSoft})` } }),
      h('div', { style: { margin: '0 22px', width: 14, height: 14, backgroundColor: THEME.goldSoft, transform: 'rotate(45deg)' } }),
      h('div', { style: { width: 120, height: 3, backgroundImage: `linear-gradient(to left, transparent, ${THEME.goldSoft})` } })),

    h('div', { style: { display: 'flex', marginTop: 26, fontFamily: 'Playfair', fontSize: 46, color: THEME.ink } },
      h('div', null, DATA.date)),

    h('div', { style: { display: 'flex', marginTop: 14, fontFamily: 'Poppins', fontSize: 30, color: THEME.gold } },
      h('div', null, DATA.venue))
  );

  return new ImageResponse(card, { width: 1200, height: 630, fonts });
}
