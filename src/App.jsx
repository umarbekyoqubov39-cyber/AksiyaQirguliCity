import Timer from './Timer.jsx'
import logo from './assets/logo.webp'
import onix from './assets/onix.webp'
import onixSm from './assets/onix-sm.webp'

const TG = 'https://t.me/QirGuliCity'

const Tv = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <rect x="3" y="6" width="26" height="17" rx="2" />
    <path d="M11 27h10M16 23v4" />
  </svg>
)
const Fridge = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <rect x="8" y="3" width="16" height="26" rx="2" />
    <path d="M8 13h16M12 7v3M12 16v4" />
  </svg>
)
const Washer = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <rect x="5" y="4" width="22" height="25" rx="2" />
    <path d="M5 10h22" />
    <circle cx="16" cy="19" r="6" />
    <circle cx="9" cy="7" r=".6" />
  </svg>
)
const Calendar = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" className="cal">
    <rect x="4" y="6" width="24" height="22" rx="3" fill="#fff" />
    <path d="M4 9a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v4H4z" fill="#e2231a" />
    <path d="M10 3v6M22 3v6" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M9 18h3M15 18h3M21 18h2M9 23h3M15 23h3" stroke="#0b3d2e" strokeWidth="2" strokeLinecap="round" />
  </svg>
)
const Kaaba = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" className="kaaba">
    <path d="M5 9l11-4 11 4v16l-11 4-11-4z" fill="#111" stroke="none" />
    <path d="M5 13l11 4 11-4" />
    <path d="M16 17v12" stroke="#000" />
  </svg>
)

export default function App() {
  return (
    <div className="page">
      <header className="top">
        <img className="logo" src={logo} alt="QIR GULI CITY" width="360" height="299" />
        <Timer />
      </header>

      <main className="main">
        <div className="head">
          <h1 className="big">
            <span>KATTA</span> <span>AKSIYA</span>
          </h1>
          <p className="sub">Uy oling va katta sovrinlarga ega bo‘ling!</p>
        </div>

        <section className="car" aria-label="Bosh sovrin">
          <div className="frame">
            <p className="cap">
              <b>1 TA YANGI ONIX</b>
              <span>Avtomobil yutib olish imkoniyati</span>
            </p>
          </div>
          <img
            className="onix"
            src={onix}
            srcSet={`${onixSm} 700w, ${onix} 1100w`}
            sizes="(min-width: 900px) 50vw, 100vw"
            alt="Qizil Chevrolet Onix"
            width="1100"
            height="504"
            fetchPriority="high"
          />
        </section>

        <div className="side">
          <div className="prizes">
            <div className="pz">
              <i className="ic">
                <Tv />
                <Fridge />
                <Washer />
              </i>
              <div>
                <b>100 GA YAQIN</b>
                <span>maishiy texnika sovg‘alari</span>
              </div>
            </div>
            <div className="pz">
              <i className="ic">
                <Kaaba />
              </i>
              <div>
                <b>2 TA</b>
                <span>Umra safariga yo‘llanma</span>
              </div>
            </div>
          </div>

          <div className="info">
            <div className="inf date">
              <Calendar />
              <div>
                <b>20-OKTABR</b>
                <span>SOAT 20:00 DA</span>
              </div>
            </div>
            <div className="inf live">
              <i className="dot" aria-hidden="true" />
              <div>
                <b>JONLI EFIR</b>
                <span>onlayn taqdimot</span>
              </div>
            </div>
          </div>

          <a className="btn" href={TG} target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21.9 4.3 18.7 19.4c-.2 1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.3-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.2 13.1 1.4 11.6c-1-.3-1-1 .2-1.5L20.6 2.8c.9-.3 1.6.2 1.3 1.5z" />
            </svg>
            TELEGRAM KANALGA O‘TISH
          </a>
          <p className="note">Aksiya shartlari tashkilotchi tomonidan e’lon qilinadi.</p>
        </div>
      </main>
    </div>
  )
}
