import NavProjeto from '/src/components/NavProjeto'
import Carrosel from '/src/components/Carrosel'
import Cards from '/src/components/Cards'
import Cabecalho from '/src/components/Cabecalho'
import Rodape from '/src/components/Rodape'
import Espacamento from '/src/components/Espacamento'

function Home() {
  return (
    <div>
     <Cabecalho/>
     <NavProjeto />
     <Carrosel />
     <Espacamento />
     <Cards />
     <Espacamento />
     <Rodape />

    </div>
  )
} 
 export default Home
