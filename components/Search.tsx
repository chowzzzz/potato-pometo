import React from "react";
import { SearchBar } from "react-native-elements";
import { StyleSheet, View } from "react-native";

export default class Search extends React.Component {
	state = {
		search: ""
	};

	updateSearch = (search: string) => {
		this.setState({ search });
	};

	render() {
		const { search } = this.state;

		return (
			<View style={styles.container}>
				<SearchBar lightTheme round placeholder="Search" onChangeText={this.updateSearch} value={search} style={styles.searchBar} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: "100%"
	},
	searchBar: {
		width: "100%"
	}
});
