import { IProjeto } from '../interfaces/projetos';
import { useEffect, useState } from 'react';

const urlDadosMockados = import.meta.env.VITE_URL_DADOS_MOCKADOS as string;

export default function useObterDadosProjetos() {
  const [projetos, setProjetos] = useState<IProjeto[]>([]);

  useEffect(() => {
    fetch(urlDadosMockados)
      .then((resposta) => resposta.json())
      .then((dados: IProjeto[]) => setProjetos(dados));
  }, []);

  return {
    projetos,
  };
}
