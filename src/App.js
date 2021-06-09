
import './App.css';
import React from 'react';
import IconContato from './components/icon-contato';
import * as S from './components/styled';
import logo from './imagens/logo.png';
import Search from './components/search';
import Menu from './components/menu-drop';
import Car from './components/car';
import NavMenu from './components/nav-menu';
import nikeAir from './imagens/nikeAir.jpg';
import Stars from './components/stars';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>

         <IconContato/>
        </div>
        <div class="menu-superior">
                 <S.UL> 
                     <S.LI><a href="#">Entre</a></S.LI>
                     <S.LI>ou</S.LI>
                    <S.LI><a href="#">Cadastre-se</a> </S.LI>
                 </S.UL>
                 <Car/>
             </div>
      </header>
      <S.LOGO> <img src={logo} /></S.LOGO>

      <section className="search">
        <Search />
      </section>
      <div>
        <NavMenu/>

      </div>


      <S.ANUNCIO>
       <img src={nikeAir}/>
        <S.INFO>
        <p> Nike Air  </p>
        <p>De R$ 859,99</p>
        <p>Por R$ 789,99 em até 6x s/juros</p> 
        <button><i className="pi pi-check"></i> Comprar </button>
        <Stars/>
        </S.INFO>

      </S.ANUNCIO>


      <footer className="p-shadow-4">

        <div>
          <p> Lojas perto de você</p>

          <p> Av dos Condores 175 - Parque da Matriz - Cachoeirinha (RS) </p>
          <p> Av Borges de Medeiros 305 - Praia de Belas - Porto Alegre (RS) </p>
          <p> Rua Comendador Lucas Costa 701 - Rio Branco - Canoas (RS) </p>
          <p> Rua josé Luiz de Barros 212 - Moinhos de Ventos - Porto Alegre (RS) </p>
        </div>
         <div className="cupom p-shadow-4"> <i className="pi pi-comments" style={{fontSize:"28px", fontWeight:"bold", cursor: "pointer"}}> </i></div>

      </footer>
      
    </div>
  );
}

export default App;
