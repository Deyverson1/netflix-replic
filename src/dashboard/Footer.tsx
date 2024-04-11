import '../styles/css/style.css'
export default function Footer() {
  return (
    <section style={{ borderBottom: 'none' }} className="pie">
      <div className="pieContenido">
        <div>
          <p style={{ fontSize: '13px', color: '#909090' }}>Preguntas frecuentes</p>
          <p style={{ fontSize: '13px', color: '#909090' }}>Relaciones con inversionistas</p>
          <p style={{ fontSize: '13px', color: '#909090' }}>Formas de ver</p>
          <p style={{ fontSize: '13px', color: '#909090' }}>Información corporativa</p>
          <p style={{ fontSize: '13px', color: '#909090' }}>Originales de Netflix</p>
        </div>
        <div>
          <p style={{ fontSize: '13px', color: '#909090' }}>Centro de ayuda</p>
          <p style={{ fontSize: '13px', color: '#909090' }}>Empleo</p>
          <p style={{ fontSize: '13px', color: '#909090' }}>Términos de uso</p>
          <p style={{ fontSize: '13px', color: '#909090' }}>Contáctanos</p>
        </div>
        <div className="espacio"></div>
        <div>
          <p style={{ fontSize: '13px', color: '#909090' }}>Cuenta</p>
          <p style={{ fontSize: '13px', color: '#909090' }}>Canjear tarjetas de regalo</p>
          <p style={{ fontSize: '13px', color: '#909090' }}>Privacidad</p>
          <p style={{ fontSize: '13px', color: '#909090' }}>Prueba de velocidad</p>
        </div>
        <div>
          <p style={{ fontSize: '13px', color: '#909090' }}>Prensa</p>
          <p style={{ fontSize: '13px', color: '#909090' }}>Comprar tarjetas de regalo</p>
          <p style={{ fontSize: '13px', color: '#909090' }}>Preferencias de cookies</p>
          <p style={{ fontSize: '13px', color: '#909090' }}>Avisos legales</p>
        </div>
      </div>
    </section>
  )
}