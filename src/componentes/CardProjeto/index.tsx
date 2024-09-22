import styles from './CardProjeto.module.css';
import { IProjeto } from '../../interfaces/projetos';

interface CardProjetoProps {
  projeto: IProjeto;
}

export default function CardProjeto({ projeto }: CardProjetoProps) {
  return (
    <>
      <div className={styles.card_projeto}>
        <img
          src={projeto.imagemProjeto}
          alt={`projeto ${projeto.titulo}`}
          className={styles.imagem_projeto}
          loading={'lazy'}
        />
        <h3>{projeto.titulo}</h3>
        <div className={styles.links}>
          <a href={projeto.linkProjetoOnline} target={'_blank'}>
            Ir para o projeto
          </a>
          <a href={projeto.linkCodigoProjeto} target={'_blank'}>
            Ir para o repositório
          </a>
        </div>
      </div>
    </>
  );
}
