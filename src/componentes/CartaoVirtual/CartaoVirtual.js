import './style.css';
import MenuHorizontal from '../MenuHorizontal/MenuHorizontal';
import MenuLateral from '../MenuLateral/MenuLateral';
import cardFrente from '../../imagens/card-frente.svg';
import cardVerso from '../../imagens/card-verso.svg';
import Barra from '../../imagens/barra.svg';
import Question from '../../imagens/question.svg';
import Adicional from '../../imagens/adicional.svg';
// import Validade from '../../imagens/validade.svg';
import Bloquear from '../../imagens/bloquear.svg';
import Senha from '../../imagens/senha.svg';
import Excluir from '../../imagens/excluir.svg';
import Roubo from '../../imagens/roubo.svg';
import addCartao from '../../imagens/adicionar-cartao.svg';

function CartaoVirtual(){
  return(
    <div>
    <MenuHorizontal/>
    <MenuLateral/>
    <div id='caixa-cartao'>
      <div className='conteudo-cartao'>
          <h4>Cartão Virtual</h4>
        <div className='cartoes'>
          <img src={cardFrente}/>
          <img src={cardVerso}/>
          <button>Copiar número</button>
        </div>
        <div className='limite'>
          <p>Limite <span>R$ 4.200</span></p>
          <img src={Barra}/>
          <div id='inf-limite'>
          <p id='usado'>Usado<span> R$ 3.100 </span></p>
          <p id='disp'>Disponível <span>R$1.100</span></p>
          </div>
        </div>
        <div className='question'>
          <img src={Question}/>
          <p>Sobre o cartão virtual</p>
        </div>
        <div className='bts-lateral'>
          <div className='teste'>
            <button><img src={Adicional}/></button>
            <label>Adicional</label>
          </div>
          <div className='teste'>
            <button><img src={Bloquear}/></button>
            <label>Bloquear</label>
          </div>
          <div className='teste'>
            <button><img id='ajuste' src={Senha}/></button>
            <label>Senha</label>
          </div>          
          <div className='teste'>
            <button><img id='ajuste' src={Excluir}/></button>
            <label>Excluir</label>
          </div>  
          <div className='teste'>
            <button><img id='ajuste' src={Roubo}/></button>
            <label>Perda/Roubo</label>
          </div>            
        </div>
        <div className='add'>
          <img src={addCartao}/>
        </div>
      </div>
    </div>
    </div>
  );
}
export default CartaoVirtual;