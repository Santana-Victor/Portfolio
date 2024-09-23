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
          width={projeto.width}
          height={projeto.height}
          loading={'lazy'}
        />
        <h3>{projeto.titulo}</h3>
        <div className={styles.links}>
          <a
            href={projeto.linkProjetoOnline}
            target={'_blank'}
            title={'Ir para o projeto online'}
          >
            Ir para o projeto
          </a>
          <a
            href={projeto.linkCodigoProjeto}
            target={'_blank'}
            title={'Ir para o repositório do projeto no Github'}
          >
            Ir para o repositório
          </a>
        </div>
      </div>
    </>
  );
}
