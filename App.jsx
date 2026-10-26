import { useState } from 'react'
import { CONFIG } from './config.js'

const NAV = [
  ['Inicio', '#inicio'], ['Servicios', '#servicios'], ['Proyectos', '#proyectos'],
  ['Proceso', '#proceso'], ['Preguntas frecuentes', '#faq'], ['Contacto', '#contacto'],
]

const SERVICIOS = [
  ['restaurantes', 'Páginas web para restaurantes', 'Presentación del menú, fotografías, horarios, ubicación, información del establecimiento y enlaces de contacto.', 'M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 3c-2 1-3 4-3 7h3v11'],
  ['barberías y peluquerías', 'Páginas web para barberías y peluquerías', 'Presentación de servicios, tarifas proporcionadas por el negocio, fotografías, horarios y opciones de contacto o reserva.', 'M6 4l12 12M6 16L18 4M5 18a2 2 0 1 0 0 .01M19 18a2 2 0 1 0 0 .01'],
  ['veterinarias', 'Páginas web para veterinarias', 'Información de servicios veterinarios, horarios, ubicación y medios de contacto.', 'M12 20c-4-3-7-5-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4-3 6-7 9z'],
  ['salones de belleza', 'Páginas web para salones de belleza', 'Presentación de tratamientos, servicios, fotografías y datos de contacto.', 'M12 3l2 6 6 .5-4.6 4 1.6 6.5L12 16.5 7 20l1.6-6.5L4 9.5 10 9z'],
  ['otro tipo de negocio', 'Páginas web para otros negocios', 'Diseños personalizados según las necesidades, el estilo y los objetivos de cada negocio.', 'M4 8h16v11H4zM9 8V5h6v3'],
]

const PROYECTOS = [
  ['resto', 'Casa Brasa', 'Restaurante', 'Menú por categorías, horarios y ubicación con un estilo cálido y gastronómico.'],
  ['barber', 'Filo & Navaja', 'Barbería', 'Servicios, tarifas y reservas con un diseño sobrio y masculino.'],
  ['salon', 'Lumi Estudio', 'Salón de belleza', 'Tratamientos y galería con una paleta suave y delicada.'],
]

const PASOS = [
  ['Conversamos', 'Conocemos tu negocio, tus necesidades y el tipo de página que buscas.'],
  ['Diseñamos', 'Creamos una propuesta visual adaptada a tu marca y a tus objetivos.'],
  ['Revisamos', 'Revisamos el diseño contigo y realizamos los ajustes acordados.'],
  ['Publicamos', 'Preparamos la página para su publicación una vez aprobado el proyecto y acordadas las condiciones.'],
]

const BENEFICIOS = [
  'Presenta tus servicios de manera organizada.',
  'Facilita que los clientes encuentren tu información.',
  'Permite enlazar WhatsApp y redes sociales.',
  'Transmite una imagen más profesional.',
  'Ayuda a que las personas conozcan tu negocio antes de contactarte.',
]

const FAQ = [
  ['¿Qué tipo de negocios pueden tener una página web?', 'Diseñamos páginas adaptadas a restaurantes, barberías, peluquerías, veterinarias, tiendas y otros negocios.'],
  ['¿La página se verá bien en celulares?', 'Sí. Diseñamos para celulares, tablets y computadores y comprobamos que el contenido se adapte correctamente a cada pantalla.'],
  ['¿Puedo solicitar una demostración?', 'Puedes consultar por una propuesta visual personalizada y conocer las condiciones antes de contratar.'],
  ['¿Cuánto cuesta una página web?', 'El precio depende de las características y necesidades de cada proyecto. Contacta con nosotros para solicitar una cotización.'],
  ['¿Cuánto tarda el desarrollo?', 'El plazo depende de la complejidad del proyecto y de la información que proporcione el cliente.'],
  ['¿Se puede incluir WhatsApp y Google Maps?', 'Sí, se pueden integrar enlaces de contacto y ubicación siempre que se disponga de los datos correctos.'],
]

function Logo() {
  return (
    <a className="logo" href="#inicio" aria-label="web.ia studio, ir al inicio">
      <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
        <defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#3b82ff" /><stop offset="1" stopColor="#8b5cf6" /></linearGradient></defs>
        <rect width="32" height="32" rx="9" fill="url(#lg)" />
        <rect x="7" y="9" width="18" height="14" rx="3" fill="none" stroke="#fff" strokeWidth="2" />
        <path d="M7 14h18" stroke="#fff" strokeWidth="2" />
      </svg>
      <span>web.ia studio</span>
    </a>
  )
}

function Devices() {
  return (
    <div className="devices" role="img" aria-label="Ilustración de una página web en un computador y en un celular">
      <div className="laptop">
        <div className="bar"><i /><i /><i /></div>
        <div className="screen">
          <div className="s-nav"><b /><span /><span /><span /></div>
          <div className="s-hero"><h4>Tu negocio, en línea</h4><p /><p className="short" /><u /></div>
          <div className="s-cards"><div /><div /><div /></div>
        </div>
      </div>
      <div className="phone">
        <div className="notch" />
        <div className="s-hero small"><h4>Tu negocio</h4><p /><u /></div>
        <div className="s-cards col"><div /><div /></div>
      </div>
    </div>
  )
}

function Mock({ kind }) {
  return (
    <div className={`mock ${kind}`} aria-hidden="true">
      <div className="bar"><i /><i /><i /></div>
      <div className="m-body">
        <div className="m-top"><b /><span /><span /></div>
        <div className="m-hero"><h5>{kind === 'resto' ? 'Cocina de fuego' : kind === 'barber' ? 'Corte clásico' : 'Belleza a tu medida'}</h5><u /></div>
        <div className="m-row"><div /><div /><div /></div>
      </div>
    </div>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)
  const [tipo, setTipo] = useState('Cotización')
  const [mensajeInicial, setMensajeInicial] = useState('')
  const [estado, setEstado] = useState({ s: 'idle', m: '' })

  const irAContacto = (nuevoTipo, texto = '') => {
    setTipo(nuevoTipo)
    setMensajeInicial(texto)
    setOpen(false)
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  const waLink = (texto) => `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`

  const enviar = async (e) => {
    e.preventDefault()
    const f = e.currentTarget
    const datos = Object.fromEntries(new FormData(f))
    if (!CONFIG.FORM_ENDPOINT) {
      setEstado({ s: 'error', m: 'El envío del formulario aún no está configurado. Escríbenos por WhatsApp o Instagram.' })
      return
    }
    setEstado({ s: 'loading', m: 'Enviando…' })
    try {
      const r = await fetch(CONFIG.FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(datos),
      })
      if (!r.ok) throw new Error()
      f.reset()
      setMensajeInicial('')
      setEstado({ s: 'ok', m: 'Mensaje enviado correctamente. Te responderemos pronto.' })
    } catch {
      setEstado({ s: 'error', m: 'No se pudo enviar el mensaje. Revisa tu conexión e inténtalo de nuevo.' })
    }
  }

  return (
    <>
      <a className="skip" href="#contenido">Saltar al contenido</a>
      <header className="header">
        <div className="wrap head-in">
          <Logo />
          <nav className={`nav ${open ? 'open' : ''}`} aria-label="Principal">
            {NAV.map(([t, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{t}</a>)}
            <button className="btn small nav-cta" onClick={() => irAContacto('Cotización')}>Solicitar cotización</button>
          </nav>
          <button className="burger" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button>
        </div>
      </header>

      <main id="contenido">
        <section id="inicio" className="hero wrap">
          <div className="hero-text">
            <h1>Tu negocio merece una página web profesional</h1>
            <p>Diseñamos páginas web modernas y adaptadas a tu negocio para que tus clientes conozcan tus servicios, encuentren tu información y puedan contactarte fácilmente.</p>
            <div className="actions">
              <button className="btn" onClick={() => irAContacto('Cotización', 'Quiero mi página web.')}>Quiero mi página web</button>
              <a className="btn ghost" href="#proyectos">Ver proyectos</a>
            </div>
          </div>
          <Devices />
        </section>

        <section id="servicios" className="wrap section">
          <h2>Servicios</h2>
          <p className="lead">Páginas web modernas y profesionales, adaptadas a celulares, tablets y computadores.</p>
          <div className="grid g3">
            {SERVICIOS.map(([clave, titulo, desc, path]) => (
              <article className="card" key={titulo}>
                <div className="art"><svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={path} /></svg></div>
                <h3>{titulo}</h3>
                <p>{desc}</p>
                <button className="btn ghost small" onClick={() => irAContacto('Cotización', `Hola, quiero consultar por una página web para ${clave}.`)}>Consultar</button>
              </article>
            ))}
          </div>
        </section>

        <section id="proyectos" className="wrap section">
          <h2>Proyectos y demostraciones</h2>
          <p className="lead">Tres ejemplos de diseño, cada uno con su propia identidad visual. Son demostraciones conceptuales, no trabajos realizados para clientes reales.</p>
          <div className="grid g3">
            {PROYECTOS.map(([kind, nombre, sector, desc]) => (
              <article className="card proj" key={kind}>
                <Mock kind={kind} />
                <h3>{nombre} <small>Demostración conceptual</small></h3>
                <p>{desc}</p>
                <button className="btn ghost small" onClick={() => irAContacto('Demostración', `Me interesa una propuesta de diseño como la demostración «${nombre}» (${sector}).`)}>Ver proyecto</button>
              </article>
            ))}
          </div>
        </section>

        <section className="wrap section split">
          <h2>Haz que tu negocio destaque en internet</h2>
          <ul className="ticks">{BENEFICIOS.map(b => <li key={b}>{b}</li>)}</ul>
        </section>

        <section id="proceso" className="wrap section">
          <h2>Nuestro proceso de trabajo</h2>
          <ol className="grid g4 steps">
            {PASOS.map(([t, d], i) => (
              <li className="card" key={t}><span className="n">{String(i + 1).padStart(2, '0')}</span><h3>{t}</h3><p>{d}</p></li>
            ))}
          </ol>
          <p className="note">Los plazos, el precio, el alojamiento web, el dominio y el mantenimiento se acuerdan según cada proyecto.</p>
        </section>

        <section className="wrap section">
          <div className="offer">
            <h2>¿Te imaginas tu negocio con una página web propia?</h2>
            <p>Conoce una propuesta visual personalizada para tu negocio y descubre cómo podría verse tu presencia online.</p>
            <button className="btn" onClick={() => irAContacto('Demostración', 'Quiero solicitar mi demostración.')}>Solicitar mi demostración</button>
            <small>Las condiciones de la demostración se explican antes de comenzar.</small>
          </div>
        </section>

        <section id="faq" className="wrap section narrow">
          <h2>Preguntas frecuentes</h2>
          {FAQ.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        </section>

        <section id="contacto" className="wrap section">
          <div className="contact">
            <div>
              <h2>Hagamos realidad la página web de tu negocio</h2>
              <p className="lead">Cuéntanos sobre tu proyecto y encontremos una solución adaptada a tus necesidades.</p>
              <div className="actions col">
                <button className="btn" onClick={() => setTipo('Cotización')}>Solicitar cotización</button>
                <button className="btn ghost" onClick={() => setTipo('Demostración')}>Solicitar demostración</button>
                {CONFIG.WHATSAPP_NUMBER && <a className="btn ghost" href={waLink('Hola, quiero consultar por una página web.')} target="_blank" rel="noopener noreferrer">Escribir por WhatsApp</a>}
                {CONFIG.INSTAGRAM_URL && <a className="btn ghost" href={CONFIG.INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Ver Instagram</a>}
              </div>
            </div>
            <form className="form" onSubmit={enviar} key={tipo + mensajeInicial}>
              <label>Nombre<input name="nombre" required autoComplete="name" /></label>
              <label>Correo o teléfono<input name="contacto" required autoComplete="email" /></label>
              <label>Negocio<input name="negocio" placeholder="Ej.: barbería, restaurante…" /></label>
              <label>Qué necesitas
                <select name="tipo" defaultValue={tipo}>
                  <option>Cotización</option><option>Demostración</option>
                </select>
              </label>
              <label>Mensaje<textarea name="mensaje" rows="4" required defaultValue={mensajeInicial} /></label>
              <button className="btn" disabled={estado.s === 'loading'}>Enviar mensaje</button>
              <p className={`status ${estado.s}`} role="status" aria-live="polite">{estado.m}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap foot-in">
          <Logo />
          <small>© {new Date().getFullYear()} web.ia studio. Diseño de páginas web para negocios en Chile.</small>
        </div>
      </footer>
    </>
  )
}
