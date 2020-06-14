import React, {Component} from "react";
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


export default class App extends Component{
	
	state={
		data: [
			{label: "Going to learn React", id:"feffeef"},
			{label: "Wtf, I want to eat pizza", id:"434rrgdd"},
			{label: "I need a rest...", id:"334334ssss" },
		]
	}   ;
	
	deleteItem = (id)=>{
		this.setState((data)=>{
			const index = data.findIndex((elem)=>elem.id===id
			
			);
			const before= data.slice(0,index);
			const after = data.slice(index+1);
			const newArr = [...before,...after];
			return{
				data:newArr
			}
		})
	};
	addItem = (body)=>{
		console.log(body);
	};
	
	render() {
		
		const {data} = this.state;
		return(
		<AppBlock>
			<AppHeader/>
			<div className="search-panel d-flex">
				<SearchPanel/>
				<PostStatusFilter/>
			
			</div>
			<PostList posts={data}
			          onDelete={this.deleteItem}/>
			<PostAddForm onAdd={this.addItem}/>
		</AppBlock>
	);
	}
	
	
	
		
	
	
};


