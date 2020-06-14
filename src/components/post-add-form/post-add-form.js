import React,{Component} from "react";
import "./post-add-form.css"

export default class PostAddForm extends Component
{
	
	
	
	render() {
		return(
			<form className="bottom-panel d-flex">
				<input className="form-control new-post-label" type="text" placeholder="О чём вы думаете сейчас?"/>
				<button type="submit" className="btn btn-outline-secondary" onClick={()=>onAdd('Hello')}>
					Добавить пост</button>
			
			</form>
		
		
		)
	}
	

};
