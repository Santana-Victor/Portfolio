import './App.css';
import Header from './componentes/Header';
import SecaoBanner from './componentes/SecaoBanner';
import { Element } from 'react-scroll';
import SecaoSobre from './componentes/SecaoSobre';
import SecaoProjetos from './componentes/SecaoProjetos';
import Footer from './componentes/Footer';
import BotaoVoltarAoTopo from './componentes/BotaoVoltarAoTopo';

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <SecaoBanner />
        <Element name="secao_sobre">
          <SecaoSobre />
        </Element>
        <Element name="secao_projetos">
          <SecaoProjetos />
        </Element>
      </main>
      <BotaoVoltarAoTopo />
      <Element name="contato">
        <Footer />
      </Element>
    </>
  );
}
