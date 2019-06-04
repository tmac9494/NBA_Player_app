import React, { Component } from "react";
import Search from "./Search";
import styles from "./styles";
import Catalog from './Catalog';
class Main extends Component {

	constructor(props) {
		super()
		this.state = {
			searchQuery: "",
			itemLimit: 10,
			pageIndex: 1,
		}
	}

	// handle search bar type event
	queryHandler = (e) => {
		console.log(e.target.value)
		this.setState({searchQuery: e.target.value})
	}

	// handle page change
	pageHandler = (e) => {
		const index = e.target.value;
		console.log(index);
		this.setState({pageIndex: index}); 
	}


    render() {
        return (
            <div style={{ ...styles.container, ...this.props.style }}>
                <div style={styles.title}>NBA Interview</div>
                <Search style={styles.search} setQuery={this.queryHandler} />
                <Catalog 
                	itemLimit={this.state.itemLimit} 
                	query={this.state.searchQuery} 
                	pageIndex={this.state.pageIndex} 
                	pageHandler={this.pageHandler} 
                />
            </div>
        );
    }
}

export default Main;
