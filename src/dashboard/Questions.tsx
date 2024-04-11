import { ArrowRight } from '../icons/ArrowRight'
import '../styles/css/style.css'
export default function Questions() {
  return (
    <section className="preguntas">
      <div className="contPreguntas">
        <h2>
          Frequently Asked Questions</h2>
        <br />
        <div className="pregunta">
          <p>¿Qué es Netflix?</p>
          <div className="respuesta">
            <hr />
            <p>Netflix es un servicio de streaming que ofrece una gran variedad de programas, películas y documentales premiados en casi cualquier pantalla conectada a internet. <br /><br />Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más programas y películas!</p>
          </div>
        </div>
        <div className="pregunta">
          <p>¿Cuánto cuesta Netflix?</p>
          <div className="respuesta">
            <hr />
            <p>Ve Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual muy accesible. Planes desde al mes. Sin costos adicionales ni contratos.</p>
          </div>
        </div>
        <div className="pregunta">
          <p>¿Dónde puedo ver Netflix?</p>
          <div className="respuesta">
            <hr />
            <p>Ve donde quieras, cuando quieras y en todos los dispositivos que quieras. Inicia sesión en tu cuenta de Netflix para ver contenido al instante a través de netflix.com desde tu computadora personal o en cualquier dispositivo con conexión a internet que cuente con la app de Netflix, como smart TV, smartphones, tablets, reproductores multimedia y consolas de juegos. <br /><br /> Además, puedes descargar tus programas favoritos con iOS, Android o la app para Windows 10. Con la función de descarga, puedes ver donde vayas y sin conexión a internet. Lleva Netflix contigo adonde sea.</p>
          </div>
        </div>
        <div className="pregunta">
          <p>¿Cómo cancelo?</p>
          <div className="respuesta">
            <hr />
            <p>Netflix es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo dos clics. No hay cargos por cancelación. Empieza y termina cuando quieras.</p>
          </div>
        </div>
        <div className="pregunta">
          <p>¿Qué puedo ver en Netflix?</p>
          <div className="respuesta">
            <hr />
            <p>Netflix tiene un amplio catálogo de programas, películas, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras.</p>
          </div>
        </div>
        <section className='flex flex-col gap-y-4 pt-16 pb-5'>
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
          <div className='flex items-center gap-x-2'>
            <input type="email" placeholder="Email address" className='w-8/12 p-4 text-sm bg-neutral-900 rounded-md' />
            <button className='bg-[#E50914] text-lg p-3 gap-x-2 flex justify-center items-center font-bold rounded-lg hover:bg-[#ff3d3d]'>Get Started <div>
              <ArrowRight />
            </div></button>
          </div>
        </section>
      </div>
    </section>
  )
}