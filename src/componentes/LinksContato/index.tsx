import styles from './LinksContato.module.css';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function LinksContato() {
  const urlLinkedin = import.meta.env.VITE_URL_LINKEDIN as string;
  const urlGithub = import.meta.env.VITE_URL_GITHUB as string;
  const urlWhatsapp = import.meta.env.VITE_URL_WHATSAPP as string;
  const urlEmail = import.meta.env.VITE_URL_EMAIL as string;

  return (
    <nav>
      <ul className={styles.container_links}>
        <li>
          <a
            className={styles.link_contato}
            href={urlLinkedin}
            target={'_blank'}
            aria-label={'Perfil Linkedin'}
          >
            <FaLinkedinIn className={styles.icone} />
          </a>
        </li>
        <li>
          <a
            className={styles.link_contato}
            href={urlGithub}
            target={'_blank'}
            aria-label={'Perfil Github'}
          >
            <FaGithub className={styles.icone} />
          </a>
        </li>
        <li>
          <a
            className={styles.link_contato}
            href={urlWhatsapp}
            target={'_blank'}
            aria-label={'Whatsapp'}
          >
            <FaWhatsapp className={styles.icone} />
          </a>
        </li>
        <li>
          <a
            className={styles.link_contato}
            href={urlEmail}
            target={'_blank'}
            aria-label={'Enviar email'}
          >
            <MdEmail className={styles.icone} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
