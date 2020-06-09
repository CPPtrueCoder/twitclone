import React from "react";
import "./post-add-form.css"

const PostAddForm=()=>{
	return(
		<form className="bottom-panel d-flex">
			<input className="form-control new-post-label" type="text" placeholder="О чём вы думаете сейчас?"/>
			<button type="submit" className="btn btn-outline-secondary">
				Добавить пост</button>
			
		</form>
		
		
	)
};
export default PostAddForm