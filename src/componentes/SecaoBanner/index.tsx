import TituloSecao from '../TituloSecao';
import styles from './SecaoBanner.module.css';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';

export default function SecaoBanner() {
  const urlLinkedin = import.meta.env.VITE_URL_LINKEDIN as string;
  const urlGithub = import.meta.env.VITE_URL_GITHUB as string;
  const urlWhatsapp = import.meta.env.VITE_URL_WHATSAPP as string;

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
                href={urlLinkedin}
                target={'_blank'}
              >
                <FaLinkedinIn className={styles.icone} />
              </a>
            </li>
            <li>
              <a
                className={styles.link_rede_social}
                href={urlGithub}
                target={'_blank'}
              >
                <FaGithub className={styles.icone} />
              </a>
            </li>
            <li>
              <a
                className={styles.link_rede_social}
                href={urlWhatsapp}
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
