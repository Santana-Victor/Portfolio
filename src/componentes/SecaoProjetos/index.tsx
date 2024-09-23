import styles from './SecaoProjetos.module.css';
import TituloSecao from '../TituloSecao';
import CardProjeto from '../CardProjeto';
import useObterDadosProjetos from '../../hooks/useObterDadosProjetos';

export default function SecaoProjetos() {
  const { projetos } = useObterDadosProjetos();

  return (
    <section className={styles.secao_projetos}>
      <TituloSecao ehTextoComSombra={false}>meus projetos</TituloSecao>
      {!projetos.length ? (
        <p className={styles.erro}>Nenhum projeto encontrado!</p>
      ) : (
        <div className={styles.container_projetos}>
          {projetos.map((projeto) => (
            <CardProjeto projeto={projeto} key={projeto.id} />
          ))}
        </div>
      )}
    </section>
  );
}
