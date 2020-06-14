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

export default class App extends Component {
	
	state = {
		data: [
			{label: "Going to learn React", important: false, like: false, id: 1},
			{label: "Wtf, I want to eat pizza", important: false, like: false, id: 2},
			{label: "I need a rest...", important: false, like: false, id: 3},
		]
	};
	maxId = 4;
	
	deleteItem = (id) => {
		this.setState (({data}) => {
			const index = data.findIndex ((elem) => elem.id === id);
			const before = data.slice (0, index);
			const after = data.slice (index + 1);
			const newArr = [...before, ...after];
			return {
				data: newArr
			}
		})
	};
	addItem = (body) => {
		const newItem = {
			label: body,
			important: false,
			id: this.maxId++
		};
		
		this.setState (({data}) => {
			const newArr = [...data, newItem];
			return {
				data: newArr
			}
		});
	};
	onToggleImportant = (id) => {
		this.setState (({data}) => {
			const index = data.findIndex (elem => elem.id === id);
			const oldPost = data[index];
			const newPost = {
				...oldPost, important: !oldPost.important
			};
			const newArray = [...data.slice (0, index), newPost, ...data.slice (index + 1)]
			return {data: newArray}
			
		})
	};
	onToggleLiked = (id) => {
		this.setState (({data}) => {
			const index = data.findIndex (elem => elem.id === id);
			const oldPost = data[index];
			const newPost = {
				...oldPost, like: !oldPost.like
			};
			const newArray = [...data.slice (0, index), newPost, ...data.slice (index + 1)]
			return {data: newArray}
			
		})
	};
	
	render() {
		const {data}=this.state;
		const liked = data.filter(item=>item.like).length;
		const allPosts= data.length;
		
	
		return (
			<AppBlock>
				<AppHeader liked={liked}
				allPosts={allPosts}/>
				<div className="search-panel d-flex">
					<SearchPanel/>
					<PostStatusFilter/>
				
				</div>
				<PostList posts={data}
				          onDelete={this.deleteItem}
				          onToggleImportant={this.onToggleImportant}
				          onToggleLiked={this.onToggleLiked}/>
				<PostAddForm onAdd={this.addItem}/>
			</AppBlock>
		);
	}
	
};


