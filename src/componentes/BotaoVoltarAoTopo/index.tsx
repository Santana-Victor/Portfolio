import styles from './BotaoVoltarAoTopo.module.css';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { useState } from 'react';

export default function BotaoVoltarAoTopo() {
  const [posicaoEixoY, setPosicaoEixoY] = useState(0);

  function obterPosicaoEixoY() {
    setPosicaoEixoY(window.scrollY);
  }

  window.addEventListener('scroll', obterPosicaoEixoY);

  function voltarAoTopo() {
    scroll.scrollToTop({ duration: 500, smooth: true });
  }

  return (
    <>
      {posicaoEixoY > 560 && (
        <button className={styles.btn_voltar_topo} onClick={voltarAoTopo}>
          <FaArrowAltCircleUp className={styles.icone} />
        </button>
      )}
    </>
  );
}
