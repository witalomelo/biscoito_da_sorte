import React, { Component } from 'react';
import './style.css'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'O sucesso está sempre à porta daqueles que persistem.',
      'Seja a mudança que você deseja ver no mundo.',
      'Acredite no poder dos seus sonhos, pois eles podem se realizar.',
      'A sorte favorece os corajosos.',
      'A paciência é a chave para desvendar grandes conquistas.',
      'Sua criatividade é a luz que ilumina seu caminho.',
      'A felicidade está nas pequenas coisas da vida.',
      'Aprenda com o passado, viva no presente, sonhe com o futuro.',
      'A amizade é o melhor presente que se pode dar e receber.',
      'Seja gentil, pois cada ato de bondade cria ondas que se espalham.'
    ];
    
  }

  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
    this.setState(state);
  }

 

  render(){
    return(
      <div className="container">
        <img src={require('./assets/biscoito.png')} className="img"/>
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>

      </div>
   
    );
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
       <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    )
  }
}

export default App;
