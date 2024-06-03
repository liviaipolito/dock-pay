import './style.css';
import fundoInicio from '../../imagens/fundo-inicio.svg';
import Logo from '../../imagens/logo.svg';
import { Link } from 'react-router-dom';


function Login(){
  return(
    <div className='posicao'>
      <div className='logo-login'>
        <img id="logo" src={Logo}/>
      </div>
      <div className='caixa-login'>
        <div className='texto-sub'>
          <h2>Olá novamente,<span id='nome'> Livia.</span></h2>
          <p id='subtitulo'>
            Bem vindo de novo, por favor preencha seus dados 
          </p>
        </div>
        <div className='campo-info'>
          <input type='email' name='email' placeholder='E-mail'/>
        </div>
        <div className='campo-info'>
          <input type='password' name='senha' placeholder='Senha'/>
        </div>
        <div className='campo-sub-info'>
          <input type='checkbox' name='check' placeholder=''/>
          <label id='lembrar'>Lembrar de mim</label>
          <button id='btPassword'> Esqueceu a senha?
          </button>
        </div>
        <div className='entrar'>
          <Link to="/principal"><button id='btEntrar'>Entrar </button></Link>
        </div>
        <div className='cadastrar'>
          <a> Você não tem uma conta? <span>Cadastre-se aqui</span></a>
        </div>
        <div className='imagem'>
          <img src={fundoInicio}/>
        </div>
      </div>

    </div>
  );
}
export default Login;