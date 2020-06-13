import React from "react";
import AppHeader from "../header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form";
import "./app.css"
import styled from "styled-components";
const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;

`;


const App = ()=>{
	const data= [
		{label: "Going to learn React", id:"feffeef"},
		{label: "Wtf, I want to eat pizza", id:"434rrgdd"},
		{label: "I need a rest...", id:"334334ssss" },
	];
	
	
	return(
		
		<AppBlock>
		<AppHeader/>
		<div className="search-panel d-flex">
			<SearchPanel/>
			<PostStatusFilter/>
			
		</div>
			<PostList posts={data}/>
			<PostAddForm/>
		</AppBlock>
	);
	
};


export default App