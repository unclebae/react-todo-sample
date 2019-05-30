import React, {Component} from "react";

class InsertTodo extends Component {
	state = {
		item: ''
	};

	onClickAddTodoItem = (event) => {
		event.preventDefault();
		this.props.addTodoItem(this.state.item);
		this.setState({item: ''})
	}

	render() {
		return (
			<form>
				<div className="input-group mb-3">
					<input
						type="text"
						className="form-control"
						placeholder={this.props.placeholder}
						aria-label="Enter an action item."
						aria-describedby="button-addon2"
						onChange={event => this.setState({item: event.target.value})}
						value={this.state.item}
					/>
					<div className="input-group-append">
						<button
							className="btn btn-outline-secondary"
							type="button"
							id="button-addon2"
							onClick={this.onClickAddTodoItem}
						>
							Button
						</button>
					</div>
				</div>
			</form>
		);
	}
};



export default InsertTodo;
