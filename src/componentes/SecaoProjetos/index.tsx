import styles from './SecaoProjetos.module.css';
import TituloSecao from '../TituloSecao';
import CardProjeto from '../CardProjeto';
import { useEffect, useState } from 'react';
import { IProjeto } from '../../interfaces/projetos';

export default function SecaoProjetos() {
  const [projetos, setProjetos] = useState<IProjeto[]>([]);
  const [ehErroRequisicao, setEhErroRequisicao] = useState(false);

  const urlAPI = import.meta.env.VITE_URL_API as string;

  useEffect(() => {
    fetch(urlAPI)
      .then((resposta) => resposta.json())
      .then((dados: IProjeto[]) => setProjetos(dados))
      .catch(() => setEhErroRequisicao(true));
  }, [urlAPI]);

  return (
    <section className={styles.secao_projetos}>
      <TituloSecao ehTextoComSombra={false}>meus projetos</TituloSecao>
      {ehErroRequisicao ? (
        <div className={styles.erro_requisicao}>
          <p>Sinto muito, houve algum problema!</p>
          <p>Por favor, volte mais tarde.</p>
        </div>
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
