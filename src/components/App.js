import React from 'react';
import Formulaire from './Formulaire';
import Message from './Message';
import base from '../base';
import './css/App.css';

// Pour les animations CSS
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './css/Animation.css';

export default class App extends React.Component {

  state = {
    messages : {}
  }

  // Sync avec Firebase au moment ou l'app se monte pour vérifier si il y a des données. 
  componentWillMount() {
    this.ref = base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }

  // Des que le nouveau message est posté, tu te met tout en bas 
  componentDidUpdate(){
    this.messages.scrollTop = this.messages.scrollHeight;
  }

  addMessage = message => {
    // On va copier le state
    /* Le spread operator = va récuperer tout ce que tu trouves dans ce que je te donne */
    const messages = {...this.state.messages};
    // On ajoute un message à notre copie du state avec une clé timestamp
    const timestamp = Date.now();
    messages[`message-${timestamp}`] = message
    // On supprime si plus de 10 messages. On retire de la boucle les messages qui nous interessent avec le slice ( les 10 premiers).
    // Ensuite on supprime le 11eme à l'aide de null. En React, null = delete.
    // Tout ce qui n'est pas dans le slice est delete. Le tout, sync avec Firebase. 
    Object.keys(messages).slice(0, -10).map(key => messages[key] = null)
    // Mettre à jour notre state 
    this.setState({
      messages
    })
  }

  isUser = (pseudo) => {
    return pseudo === this.props.match.params.pseudo
  }

  render() {

    // On loop à l'intérieur de l'objet messages, qui va regrouper tous nos messages. 
    // On va prendre les clés de l'objet passé en paramètre.
    // Au final, on récupère un tableau avec une clé pour chaque message. 
    const messages = Object
      .keys(this.state.messages)
    // Le map va boucler à l'intérieur des tableaux, pour chaque clé elle va nous renvoyer le component message  
      .map(key => <Message key={key} details={this.state.messages[key]}
      isUser={this.isUser}/>)

    return (
        <div className="conversation">
          <div className="messages" ref={input => this.messages = input}>
            <ReactCSSTransitionGroup 
            component="div"
            className="message"
            transitionName="message"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}>
              {messages}
            </ReactCSSTransitionGroup>
          </div>
          <Formulaire addMessage={this.addMessage} pseudo={this.props.match.params.pseudo} length='140'/>
        </div>
    );
  }
}