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
		],
		term:'',
		filter:'all'
	};
	maxId = 4;
	searchPost=(items,term)=>{
		if(term.length===0){
			return items;
		}
		return items.filter((item)=>{
			return item.label.indexOf(term)>-1;
		})
		
		
	};
	
	
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
	
	onUpdateSearch =(term)=>{
		this.setState({term})
	};
	
	filterPost(items,filter){
		if (filter==="like"){
			return items.filter(item=>item.like)
		}else{
			return items;
		}
		
	}
	onFilterSelect=(filter)=>{
		this.setState({filter});
	};
	
	render() {
		const {data,term,filter}=this.state;
		const liked = data.filter(item=>item.like).length;
		const allPosts= data.length;
		
		const visiblePosts=this.filterPost(this.searchPost(data,term),filter);
		
	
		return (
			<AppBlock>
				<AppHeader liked={liked}
				allPosts={allPosts}/>
				<div className="search-panel d-flex">
					<SearchPanel onUpdateSearch={this.onUpdateSearch}/>
					<PostStatusFilter filter={filter}
					onFilterSelect={this.onFilterSelect}/>
				
				</div>
				<PostList posts={visiblePosts}
				          onDelete={this.deleteItem}
				          onToggleImportant={this.onToggleImportant}
				          onToggleLiked={this.onToggleLiked}/>
				<PostAddForm onAdd={this.addItem}/>
			</AppBlock>
		);
	}
	
};


