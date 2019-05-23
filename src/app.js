import React, { Component } from 'react';
import { SafeAreaView, View } from 'react-native';
import { styles } from './styles';
import { ToggleSearchBar } from './components';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeIndex: 1
		}
	}

	onChangeText = (activeIndex, value) => {
		// activeIndex: 0 -> Business name
		// activeIndex: 1 -> Service name
	};

	onChangeSearchType = (activeIndex) => {
		this.setState({ activeIndex });
	};


	render() {
		return (
			<SafeAreaView style={styles.container}>
				{/*<ToggleSearchBar*/}
					{/*onChangeText={this.onChangeText}*/}
					{/*onChangeSearchType={this.onChangeSearchType}*/}
					{/*style={styles.searchBar}*/}
					{/*thumbSize={40}*/}
					{/*fontStyle={styles.font}*/}
				{/*/>*/}
				<ToggleSearchBar
					activeIndex={0}
					onChangeText={(activeIndex, text) => {
						this.setState({ activeIndex })
					}}
					value={this.state.Choose_Service}
					onChangeSearchType={this.onChangeSearchType}
					style={{
						marginHorizontal: 10,
					}}
				/>
			</SafeAreaView>
		);
	}
}

export default App;
