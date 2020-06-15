import React,{Component} from "react";
import "./post-add-form.css"

export default class PostAddForm extends Component
{
	
	state={
	text:''
	};
	
	onValueChanged=(e)=>{
		this.setState({
			text:e.target.value
		})
	};
	onSubmit=(e)=>{
		e.preventDefault();
		this.props.onAdd(this.state.text);
		this.setState({
			text:''
		})
	};
	
	render() {
		return(
			<form
				className="bottom-panel d-flex"
			onSubmit={this.onSubmit}>
				<input className="form-control new-post-label"
				       type="text"
				       placeholder="О чём вы думаете сейчас?"
				       onChange={this.onValueChanged}
				       value={this.state.text}
				/>
				<button type="submit" className="btn btn-outline-secondary">
					Добавить пост</button>
			
			</form>
		
		
		)
	}
	

};
