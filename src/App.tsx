import fotoAnderson from './assets/anderson-foto.png'
import './App.css';
import Link from './components/Link/index'
import { BsWhatsapp, BsFillEnvelopeFill } from "react-icons/bs";

function App() {

  return (
    <section className='container'>
        <section className='container-header'>
          <article className='container-header-imagem'>
            <img src={fotoAnderson} alt="Foto do Anderson" className='container-header-imagem-item'/>
          </article>
        </section>

        <main className='container-main'>
          <article className="container-main-box">
            <p className='container-main-box-nome'>Anderson Vieira de Paula</p>
            <p className='container-main-box-cargo'>Gestor de Relacionamento Institucional</p>
          </article>

          <article className='container-main-link'>
            <Link link="https://api.whatsapp.com/send?phone=5511982398352" text="Whatsapp" tag={<BsWhatsapp className='container-link-icon'/>} />

            <Link link="mailto:anderson.vieira@eniac.edu.br" text="Email" tag={<BsFillEnvelopeFill className='container-link-icon'/>} />
          </article>
        </main>
    </section>
  )
}

export default App
