import styles from './Header.module.css';
import Logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <a href={'/'} className={styles.link_home}>
          <img
            className={styles.logo}
            src={Logo}
            alt={'logo'}
            width={298}
            height={137}
          />
        </a>
        <nav>
          <ul className={styles.links}>
            <li>
              <Link
                to={'secao_sobre'}
                smooth={true}
                duration={500}
                className={styles.link}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to={'secao_projetos'}
                smooth={true}
                duration={500}
                className={styles.link}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to={'contato'}
                smooth={true}
                duration={500}
                className={styles.link}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
