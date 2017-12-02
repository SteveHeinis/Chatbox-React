import React from 'react';
import './css/Connexion.css';

export default class Connexion extends React.Component {

	goToChat = e => {
		e.preventDefault();
		// Pour récupérer le pseudo
		const pseudo = this.valueInput.value;
		// Pour changer l'URL et accéder à la page de connexion
		this.props.history.push(`/pseudo/${pseudo}`);
	}; 

  render() {
    return (
      <div className="connexionBox">
    	<form 
    	className="connexion" 
    	onSubmit={e => this.goToChat(e)}>
    		<input 
    			type="text" 
    			placeholder="Pseudo" 
    			required
    			ref={input => {this.valueInput = input}}
    		/>
    		<button type="submit">Go</button>
    	</form>
      </div>
    )
  }
}
