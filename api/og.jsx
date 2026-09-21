import { ImageResponse } from '@vercel/og';

// Runs on Vercel's Edge runtime; renders a 1200x630 PNG on demand.
export const config = { runtime: 'edge' };

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
  white: 'rgba(255,255,255,0.55)',
};

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
  return (
    <div
      style={{
        position: 'absolute',
        left,
        top,
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundImage: `radial-gradient(circle at 32% 28%, rgba(255,255,255,0.85), ${color} 62%)`,
        opacity: 0.55,
      }}
    />
  );
}

export default async function handler() {
  const fonts = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
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
        }}
      >
        <Balloon left={70} top={70} size={150} color="#F3B6C0" />
        <Balloon left={1000} top={90} size={190} color="#A8D8EA" />
        <Balloon left={120} top={430} size={120} color="#F6D9A6" />
        <Balloon left={990} top={420} size={150} color="#E8B86D" />

        <div style={{ display: 'flex', fontFamily: 'Poppins', fontSize: 30, letterSpacing: 10, color: THEME.gold }}>
          <div>{DATA.eyebrow}</div>
        </div>

        <div style={{ display: 'flex', marginTop: 22, fontFamily: 'Playfair', fontSize: 108, lineHeight: 1.05, color: THEME.ink }}>
          <div>{DATA.title}</div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginTop: 30 }}>
          <div style={{ width: 120, height: 3, backgroundImage: `linear-gradient(to right, transparent, ${THEME.goldSoft})` }} />
          <div style={{ margin: '0 22px', fontFamily: 'Poppins', fontSize: 34, color: THEME.goldSoft }}>✦</div>
          <div style={{ width: 120, height: 3, backgroundImage: `linear-gradient(to left, transparent, ${THEME.goldSoft})` }} />
        </div>

        <div style={{ display: 'flex', marginTop: 26, fontFamily: 'Playfair', fontSize: 46, color: THEME.ink }}>
          <div>{DATA.date}</div>
        </div>

        <div style={{ display: 'flex', marginTop: 14, fontFamily: 'Poppins', fontSize: 30, color: THEME.gold }}>
          <div>{DATA.venue}</div>
        </div>
      </div>
    ),
    {
      ...{ width: 1200, height: 630 },
      fonts,
    }
  );
}
