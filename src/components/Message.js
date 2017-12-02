import React from 'react';
import "./css/Message.css"

export default class Message extends React.Component {

	// Ici, on va vérifier si le user est bien conforme au pseudo.

	preRender = (isUser) => {
		if (isUser) {
			return(
				<p className="user-message">
					{this.props.details.message}
				</p>
			)
		}
		else {
			return(
				<p className="not-user-message">
					<strong>{this.props.details.pseudo}</strong>:{this.props.details.message}
				</p>
			)
		}
		}

	// La fonction isUser va vérifier le pseudo. 

  render() {
    return (
      this.preRender(this.props.isUser(this.props.details.pseudo))
    )
  }
}

