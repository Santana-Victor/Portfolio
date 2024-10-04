import IProjeto from '../interfaces/Projeto.interface';
import { useEffect, useState } from 'react';

const urlAPI = import.meta.env.VITE_URL_API as string;

export default function useObterDadosProjetos() {
  const [projetos, setProjetos] = useState<IProjeto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(urlAPI)
      .then((resposta) => resposta.json())
      .then((dados: IProjeto[]) => {
        const projetos = dados.reverse();
        setProjetos(projetos);
        setLoading(false);
      });
  }, []);

  return {
    projetos,
    loading,
  };
}
