import './style.css';
import FundoHome from '../../imagens/fundo-verde.png';
import CardHome from '../../imagens/card-home.svg';
import Logo from '../../imagens/logo.svg';
import Divisao from '../../imagens/divisao.svg';
import Tarifa from '../../imagens/tarifa-icon.svg';
import Transacao from '../../imagens/transacao-segura.svg';
import Cartao from '../../imagens/cartao-credito.svg';
import Rendimento from '../../imagens/rendimento.svg';
import Cashback from '../../imagens/cashback.svg';
import Sonhos from '../../imagens/sonhos.svg';
import {Link} from 'react-router-dom';

function Home (){
    return(
        <div className='home-pagina'>
        <div className='superior'>
          <div className='logo-home'>
            <img id="logo" src={Logo}/>
          </div>
          <div className='menu'>
            <button><a>Inicio</a></button>
            <button><a>Produtos</a></button>
            <button><a>Beneficios</a></button>
            <button><a>Sobre</a></button>
          </div>
          <div className='fundo-verde'>
            <img src={FundoHome}/>
          </div>
          <div className='cards-home'>
            <img src={CardHome}/>
          </div>
          <div className='entrar'>
            <button id='btContato'> Contato</button>
            <button id='btEntrar'> <Link to="/login" id='link'>Entrar </Link></button>
          </div>
          <div className='main'>
            <div className='titulo'>
              <h2>O melhor banco para <br></br> facilitar a <span> sua segurança</span><br></br> financeira.</h2>
            </div>
            <div className='subtitulo'>
              <p>Somos um banco transparente, prático e moderno. Vamos juntos desmoralizar os servços financeiros.</p>
            </div>
            <div className='cadastro'>
              <button>Junte-se a nós</button>
            </div>
          </div>
        </div>
        <div className='meio'>
            <img src={Divisao}/>
        </div>
        <div className='inferior'>
          <div className='titulo-bene'>
            <h3>Benefícios do nosso banco</h3>
            <p>Algumas vantagens ao aderir nossos serviços</p>
          </div>
          <div className='beneficios'>
            <div className='tarifa'>
              <img src={Tarifa}/>
                <h4>Nossas Tarifas</h4>
                  <a>somos 100% transparente, não se preocupe com taxas escondidas.</a>
            <div className='transacao'>
              <img src={Transacao}/>
                <h4>Transações Seguras</h4>
                  <a>reporte qualquer movimentação suspeita e use nossos bloqueios</a> 
            </div>
            <div className='cartao'>
              <img src={Cartao}/>
                <h4>Cartão de Crédito</h4>
                  <a>sem anuidade e com sua cara, escolha o cartão que mais combina com você.</a> 
            </div>
            <div className='rendimento'>
              <img src={Rendimento}/>
                <h4>Rendimento</h4>
                  <a>aqui seu dinheiro rende mais que a poupança. é aplicado 100% do CDI.</a> 
            </div>
            <div className='cashback'>
              <img src={Cashback}/>
                <h4>Cashback</h4>
                  <a>receba de volta uma % sobre suas compras em nossas lojas parceiras.</a> 
            </div>
            <div className='sonhos'>
              <img src={Sonhos}/>
                <h4>Realize Sonhos</h4>
                  <a>crie diferentes caixinhas para diferentes objetivos com prazos para realiza-los.</a> 
            </div>
            </div>
          </div>
        </div>
        <div className='espacamento'></div>
      </div>
    
    )
}

export default Home;