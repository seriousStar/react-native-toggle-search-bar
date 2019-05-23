import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'steelblue'
	},
	searchBar: {
		marginHorizontal: 20
	},
	font: {
		color: 'red',
		fontWeight: '500'
	}
});
