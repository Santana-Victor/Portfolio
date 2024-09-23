import styles from './SecaoBanner.module.css';
import TituloSecao from '../TituloSecao';
import LinksContato from '../LinksContato';

export default function SecaoBanner() {
  return (
    <section className={styles.secao_banner}>
      <div className={styles.container_infos}>
        <TituloSecao ehTextoComSombra={true}>portfólio</TituloSecao>
        <h1 className={'sombra_texto'}>Victor Santana</h1>
        <p className={'sombra_texto'}>| desenvolvedor front-end |</p>
        <LinksContato />
      </div>
    </section>
  );
}
