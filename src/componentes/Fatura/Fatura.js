import './style.css';
import MenuHorizontal from '../MenuHorizontal/MenuHorizontal';
import MenuLateral from '../MenuLateral/MenuLateral';
import valorFatura from '../../imagens/valor-fatura.svg';
import Automatico from '../../imagens/automatico.svg';
import Antecipar from '../../imagens/antecipar.svg';
import Parcelar from '../../imagens/parcelar.svg';
import Ordenar from '../../imagens/seta-baixo.svg';
import Uber from '../../imagens/uber.svg';
import Faculdade from '../../imagens/faculdade.svg';
import Celular from '../../imagens/celular.svg';
import Roupa from '../../imagens/roupa.svg';
import Comida from '../../imagens/comida.svg';
import Pontos from '../../imagens/tres-pontos.svg';
import Baixar from '../../imagens/baixar-fatura.svg';

function Fatura(){
  return(
    <div>
    <MenuHorizontal/>
    <MenuLateral/>
    <div id='caixa-fatura'>
      <div className='conteudo-fatura'>
        <h4 id='titulo'>Fatura</h4>
        <div className='meses'>
          <p>Janeiro</p>
          <p>Fevereiro</p>
          <p>Março</p>
          <p>Abril</p>
          <p>Maio</p>
          <p>Junho</p>
          <p>Julho</p>
          <p>Agosto</p>
          <p id='mes-set'>Setembro</p>
          <p>Outubro</p>
          <p>Novembro</p>
          <p>Dezembro</p>
        </div>

        <div className='valor-fatura'>
          <div className='status'>
            <img src={valorFatura}/>
            <h5>FECHADA</h5>
            <p>R$ 219,48</p>
          </div>
          <p id='ajuste'>Melhor dia de compra <span> 15 </span></p>
          <p id='ajuste'>Vencimento <span> 10 </span></p>
        </div>

        <div className='servicos-fatura'>
          <div className='automatico'>
            <button><img src={Automatico}/></button>
            <p>Débito Automático</p>
          </div>
          <div className='antecipar'>
            <button><img src={Antecipar}/></button>
            <p>Antecipar Fatura</p>
          </div>
          <div className='parcelar'>
            <button><img src={Parcelar}/></button>
            <p>Parcelar Compras</p>
          </div>
        </div>

        <div className='extrato'>
          <div className='cabecalho'>
            <h4 id='mes'>Setembro</h4>
            <button>Ordenar por<img src={Ordenar}/></button>
          </div>
          <div className='corpo'>
            <div className='uber'>
              <img src={Uber}/>
              <h5>Uber</h5>
              <a>07 agosto 2022, 13:32</a>
              <p>R$ 50,00</p>
              <img id='pontos' src={Pontos}/>
            </div>
            <div className='faculdade'>
              <img src={Faculdade}/>
              <h5>Faculdade</h5>
              <a>07 agosto 2022, 13:32</a>
              <p>R$ 50,00</p>
              <img id='pontos' src={Pontos}/>
            </div>
            <div className='celular'>
              <img src={Celular}/>
              <h5>Celular</h5>
              <a>07 agosto 2022, 13:32</a>
              <p>R$ 50,00</p>
              <img id='pontos' src={Pontos}/>
            </div>
            <div className='roupa'>
              <img src={Roupa}/>
              <h5>Roupa</h5>
              <a>07 agosto 2022, 13:32</a>
              <p>R$ 50,00</p>
              <img id='pontos' src={Pontos}/>
            </div>
            <div className='comida'>
              <img src={Comida}/>
              <h5>Comida</h5>
              <a>07 agosto 2022, 13:32</a>
              <p>R$ 50,00</p>
              <img id='pontos'src={Pontos}/>
            </div>
          </div>
          
          <div className='rodape'>
            <button>Pagar Fatura</button>
            <img src={Baixar}/>
          </div>
        </div>
      
      </div>
    </div>
    </div>
  );
}
export default Fatura;