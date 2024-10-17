import './App.css'

//Imagnes
import City from './assets/city.jpg'

function App() {

  return (
    <>
      <p>Avançando no React</p>
      {/*Imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      {/*Imagem em assets*/}
      <div>
        <img src={City} alt="Cidade" />
      </div>
    </>
  )
}

export default App
