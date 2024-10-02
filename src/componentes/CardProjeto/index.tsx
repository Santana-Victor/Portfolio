import styles from './CardProjeto.module.css';
import IProjeto from '../../interfaces/Projeto.interface';

interface CardProjetoProps {
  projeto: IProjeto;
}

export default function CardProjeto({ projeto }: CardProjetoProps) {
  return (
    <>
      <div className={styles.card_projeto}>
        <img
          src={projeto.imageProjectURL}
          alt={`projeto ${projeto.title}`}
          className={styles.imagem_projeto}
          width={projeto.imageWidth}
          height={projeto.imageHeight}
          loading={'lazy'}
        />
        <h3>{projeto.title}</h3>
        <div className={styles.links}>
          <a
            href={projeto.onlineProjectURL}
            target={'_blank'}
            title={'Ir para o projeto online'}
          >
            Ir para o projeto
          </a>
          <a
            href={projeto.repositoryProjectURL}
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
