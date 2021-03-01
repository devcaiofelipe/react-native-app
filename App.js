import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


class App extends Component {
  constructor(props) {
    super(props)

    this.inicialTextoFraseState = 'Veja como anda sua sorte'
    this.inicialImgState = require('./src/biscoitos/biscoito.png')

    this.state = {
      textoFrase: this.inicialTextoFraseState,
      img: this.inicialImgState
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'Siga os bons e aprenda com eles.', 
      'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ]
  };

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({ textoFrase: `"${this.frases[numeroAleatorio]}"` });
    this.setState({ img: require('./src/biscoitos/biscoitoAberto.png') })

    setTimeout(() => {
      this.setState({ textoFrase: this.inicialTextoFraseState });
      this.setState({ img: this.inicialImgState });
    }, 10000)
  };

  render () {
    return(
      <View style={ styles.container }>
        <Image  source={ this.state.img } style={ styles.img }/>
        <Text style={ styles.textoFrase }>{ this.state.textoFrase }</Text>

        <TouchableOpacity style={ styles.botao } onPress={ this.quebraBiscoito }>
          <View style={ styles.btnArea }>
            <Text style={ styles.btnTexto } >Sorte do dia</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };      
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    color: '#000000',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: 25
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  },
});


export default App;
