import '../styles/css/style.css'
export default function Header() {
  return (
    <>
      <div className="cover"></div>
      <section className="cabecera">
        <nav>
          <div className="logo">
            <img width="170px" src="img/logo.png" alt="" />
          </div>
          <div className="login">
            <span><b>Iniciar sesión</b></span>
          </div>
        </nav>
        <div className="presentacion">
          <div>
            <h1>Programas y <br /> películas sin límite y<br /> mucho más.</h1>
            <h2>Disfruta donde quieras. Cancela en cualquier<br /> momento.</h2>
            <input type="email" placeholder="Email" />
            <span>PROBAR AHORA </span>
            <h3>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta de Netflix o acceder a la tuya.</h3>
          </div>
        </div>
      </section>
    </>
  )
}