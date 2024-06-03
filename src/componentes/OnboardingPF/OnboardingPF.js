import React, { useEffect, useState } from "react";
import './style.css';
import api from '../../servicos/api';
import btVoltar from '../../imagens/voltar.png';
import saberMais from '../../imagens/saber-mais.png';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function OnboardingPF() {

//   useEffect(() => {
//     api
//       .post("https://regdocs.hml.caradhras.io/v1/agreement",{
//         "tokens": [
//           "{{regDocsToken1}}",
//           "{{regDocsToken2}}"
//           ],
//     "fingerprint":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.107
//  })
//       .then((response) => setUser(response.data))
//       .catch((err) => {
//         console.error("ops! ocorreu um erro" + err);
//       });
//   }, []);


  return (
    <div className='conteudo'>
      <div className='titulo'>
        <img src={btVoltar} />
        <h2> Termos e politica de privacidade </h2>
      </div>
      <div className='caixa-texto'>
        <div className='caixa-termo'>
          <h4>1. Introdução</h4>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.<br></br>
            The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.<br></br>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.<br></br>
            The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>       
        </div>
        <div className='popup-register'>
          <Popup trigger={<img src={saberMais} />} position="right center">
            <div><a href='https://lighthouse.dock.tech/docs/cards-and-digital-banking-api-reference/4c121becb0fc8-get-regdocs'>GET/v1/registration</a><br></br>Saiba mais</div>
          </Popup>
        </div> 
      </div>
      <div className='aceite-termos'>
        <h3>Termos de uso e politica de privacidade</h3>
        <div className='termos'>
          <input type='checkbox' name='check' placeholder='' />
          <label id=''>Li e concordo com os termos e aceites</label>
        </div>
        <div className='privacidade'>
          <input type='checkbox' name='check' placeholder='' />
          <label id=''>Li e concordo com a politica de privacidade</label>
        </div>
      </div>
      <div className='btContinuar'>
        <button>Continuar</button>
        <Popup trigger={<img src={saberMais} />} position="right center">
          <div><a href='https://lighthouse.dock.tech/docs/cards-and-digital-banking-api-reference/dbec903f339c2-agree-regdocs'>POST/v1/agreement</a><br></br>Saiba mais</div>
        </Popup>
      </div>
    </div>
  );
}

export default OnboardingPF;