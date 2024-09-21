import TituloSecao from '../TituloSecao';
import styles from './SecaoBanner.module.css';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';

export default function SecaoBanner() {
  return (
    <section className={styles.secao_banner}>
      <div className={styles.container_imagem}></div>
      <div className={styles.container_infos}>
        <TituloSecao ehTextoComSombra={true}>portfólio</TituloSecao>
        <h1 className={'sombra_texto'}>Victor Santana</h1>
        <p className={'sombra_texto'}>| desenvolvedor front-end |</p>
        <nav>
          <ul>
            <li>
              <a
                className={styles.link_rede_social}
                href={
                  'https://www.linkedin.com/in/victor-augusto-santana-lopes-9821a0236/'
                }
                target={'_blank'}
              >
                <FaLinkedinIn className={styles.icone} />
              </a>
            </li>
            <li>
              <a
                className={styles.link_rede_social}
                href={'https://github.com/Santana-Victor/'}
                target={'_blank'}
              >
                <FaGithub className={styles.icone} />
              </a>
            </li>
            <li>
              <a
                className={styles.link_rede_social}
                href={'https://wa.me/5585989288161/'}
                target={'_blank'}
              >
                <FaWhatsapp className={styles.icone} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
