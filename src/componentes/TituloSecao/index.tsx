import styles from './TituloSecao.module.css';

interface TituloSecaoProps {
  ehTextoComSombra: boolean;
  children: string;
}

export default function TituloSecao({
  ehTextoComSombra,
  children,
}: TituloSecaoProps) {
  const sombraTexto = ehTextoComSombra ? ' sombra_texto' : '';
  return <h2 className={styles.titulo_secao + sombraTexto}>{children}</h2>;
}
