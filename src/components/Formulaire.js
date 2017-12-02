import React from 'react';
import PropTypes from 'prop-types';
import './css/Formulaire.css'

export default class Formulaire extends React.Component {

	state = {
		length : this.props.length
	}

	createMessage = e => {
		e.preventDefault();
		const message = {
			message : this.message.value,
			pseudo : this.props.pseudo};
		this.props.addMessage(message);
		this.messageForm.reset();
		this.setState({
			length : this.props.length
		})
	}

	compteur = e => {
		const length = this.props.length - this.message.value.length;
		this.setState({
			length
		})
	}

  render() {
    return (
	    <form 
	    className="form"
	    ref={input => this.messageForm = input} 
	    onChange={e => this.compteur(e)}
	    onSubmit={e => this.createMessage(e)}
	    >
	      	<textarea 
	      	required 
	      	maxLength={this.state.length}
	      	ref={input => this.message = input}></textarea>
	      	<div className="info">{this.state.length}</div>
	      	<button type="submit">Envoyer !</button>	      	
	    </form>	    
    );
  }
}

// Permet de vérifier le type, sinon il affiche une erreur dans la console.

Formulaire.propTypes = {
  	addMessage: PropTypes.func.isRequired,
  	pseudo: PropTypes.string.isRequired,
  	length: PropTypes.string.isRequired
  }
