import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function Hello (props) {
//     return <h2>{props.title}</h2>
// }

// const Hello = (props) => <h2>{props.title}</h2>

class Hello extends Component {
  render () {
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component{
  render () {
    const {
      arrayOfNumbers,
      multiply,
      objectWithInfo,
      title
      } = this.props

    const mappedNumbers = arrayOfNumbers.map(multiply)
    return  (
      <div>
        {title}
        <p>{mappedNumbers.join(', ')}</p>
        <p>{objectWithInfo.key}</p>
      </div>
    )
  }
}
class Title extends Component {
  render () {
    return <h1>{this.props.text}</h1>
  }
}
class Contador extends Component{
  constructor (props) {
    super(props)
    this.state = { contador : this.props.contadorInicial }
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1})
    }, 1000)
  }
  render () {

    return <ContadorNumero numero={this.state.contador} />

  }
}
class ContadorNumero extends Component {
  render () {
    console.log('ContadorNumero render()')
    return <span>{this.props.numero}</span>
  }
}
Contador.defaultProps = {
  contadorInicial : 0
}
Title.defaultProps = {
  text: 'Titulo por defecto'
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hello title = 'Hello from props'/>
        </div>
        <Contador contadorInicial={100} />
        <Text
          arrayOfNumbers ={[ 2, 3, 5]}
          multiply={(number) => number * 4 }
          number={2}
          objectWithInfo={{ key: 'value', key2: 'otherValue'}}
          text='Texto en string'
          title={<h1>Esta es el nuevo titulo</h1>}
          />
          <Title  text ='otro titulo'/>
      </div>
    );
  }
}

export default App;
