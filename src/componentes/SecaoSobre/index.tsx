import styles from './SecaoSobre.module.css';
import TituloSecao from '../TituloSecao';

export default function SecaoSobre() {
  return (
    <section className={styles.secao_sobre}>
      <TituloSecao ehTextoComSombra={false}>sobre mim</TituloSecao>
      <div className={styles.container_texto}>
        <p>
          Olá, meu nome é{' '}
          <a
            className={styles.link}
            href={
              'https://www.linkedin.com/in/victor-augusto-santana-lopes-9821a0236/'
            }
            target={'_blank'}
          >
            Victor
          </a>
          , um desenvolvedor Front-end (pretensão a Full stack), curioso e
          entusiasta de tecnologia! Meu interesse em desenvolvimento web surgiu
          em 2023 quando conheci a{' '}
          <a
            className={styles.link}
            href={'https://www.devmedia.com.br/'}
            target={'_blank'}
          >
            DevMedia
          </a>
          , comecei estudando de forma autodidata, construindo pequenos sites em
          HTML & CSS.
        </p>
        <p>
          Atualmente desenvolvo sites com React.js + Typescript e recentemente
          venho implementando API's com Node.js + Typescript.
        </p>
      </div>
    </section>
  );
}
