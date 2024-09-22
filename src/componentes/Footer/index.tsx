import styles from './Footer.module.css';
import TituloSecao from '../TituloSecao';
import LinksContato from '../LinksContato';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <TituloSecao ehTextoComSombra={false}>Contato</TituloSecao>
      <LinksContato />
      <p>&copy; Todos os Diretos Reservados - Victor Santana</p>
    </footer>
  );
}
