import React from 'react';
import request from 'request-promise-native';

// Components
import Header from './Header/Header.js';
import ItemsListComponent from './ItemsList/ItemsListComponent.js';
import MenuPreviewComponent from './MenuPreview/MenuPreviewComponent.js';
// Styles 
import '../styles/styles.css';


class ItemsContainer extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			df: 0,
			gf: 0,
			items: [],
			menuItems: [],
			n: 0,
			rsf: 0,
			v: 0,
			value: '',
			ve: 0,
		};
		this.getItemsData = this.getItemsData.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleDelete = this.handleDelete.bind(this);

	}

	componentDidMount(){
		this.getItemsData();
	};

	getItemsData(){
		const options = {
			uri: 'http://localhost:8080/api/items',
			json: true,
		};

		request(options)
			.then((items) => {this.setState({ items: items.items })})
			.catch((err) => {console.log(`Error getting items ${err}`)});
	};

	handleAdd = (id) => {
		
		const item = this.state.items.filter(item => item.id === id);

		var i;

		for (i=0; i < item[0].dietaries.length; i++){
			if(item[0].dietaries[i] === 'df'){
				this.setState(prevState => ({
					df: prevState.df + 1
				}));
			} else if(item[0].dietaries[i] === 'gf') {
				this.setState(prevState => ({
					gf: prevState.gf + 1
				}));
			}
			else if(item[0].dietaries[i] === 'n!') {
				this.setState(prevState => ({
					n: prevState.n + 1
				}));
			}
			else if(item[0].dietaries[i] === 'rsf') {
				this.setState(prevState => ({
					rsf: prevState.rsf + 1
				}));
			}
			else if(item[0].dietaries[i] === 'v') {
				this.setState(prevState => ({
					v: prevState.v + 1
				}));
			}
			else if(item[0].dietaries[i] === 've') {
				this.setState(prevState => ({
					ve: prevState.ve + 1
				}));
			}
		}
		

		this.setState(prevState => ({
			menuItems: [...prevState.menuItems, item[0]],
		}));
	};

	handleChange(event){
		this.setState({
			value: event.target.value
		});
	};

	handleDelete = (id) => {

		const menu_item = this.state.menuItems.filter(item => item.id === id);
		const menuItems = this.state.menuItems;
		var removeIndex = menuItems.map(item => item.id).indexOf(id);
		~removeIndex && menuItems.splice(removeIndex, 1);

		this.setState({
			menuItems: menuItems
		});
		
		
		var i;
		for (i=0; i < menu_item[0].dietaries.length; i++){
			if(menu_item[0].dietaries[i] === 'df'){
				this.setState(prevState => ({
					df: prevState.df - 1
				}));
			} else if(menu_item[0].dietaries[i] === 'gf') {
				this.setState(prevState => ({
					gf: prevState.gf - 1
				}));
			}
			else if(menu_item[0].dietaries[i] === 'n!') {
				this.setState(prevState => ({
					n: prevState.n - 1
				}));
			}
			else if(menu_item[0].dietaries[i] === 'rsf') {
				this.setState(prevState => ({
					rsf: prevState.rsf - 1
				}));
			}
			else if(menu_item[0].dietaries[i] === 'v') {
				this.setState(prevState => ({
					v: prevState.v - 1
				}));
			}
			else if(menu_item[0].dietaries[i] === 've') {
				this.setState(prevState => ({
					ve: prevState.ve - 1
				}));
			}
		}

	};

	render() {
		return (
            <div 
                className="wrapper"
                data-test="warpper"
            > 
                <Header 
                    df={this.state.df}
                    gf={this.state.gf}
                    n={this.state.n}
                    rsf={this.state.rsf}
                    total={this.state.menuItems.length}
                    v={this.state.v}
                    ve={this.state.ve}
                />
                <div className="row">
                    <ItemsListComponent 
                        items={this.state.items}
                        handleAdd={this.handleAdd}
                        handleChange={this.handleChange}
                        value={this.state.value}
                    />			
                    <MenuPreviewComponent 
                        handleDelete={this.handleDelete}
                        menuItems = {this.state.menuItems}
                    />
                </div>
            </div>
		);
	};
};

export default ItemsContainer;