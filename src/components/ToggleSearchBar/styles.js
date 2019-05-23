import { StyleSheet } from 'react-native';

export const padding = 1;

export const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
	},
	thumbContainer: {
		flex: 1
	},
	thumb: {
		position: 'absolute',
		left: 1,
		top: 1,
		bottom: 1,
		backgroundColor: 'green',
		borderWidth: 1,
		borderColor: 'black'
	},
	inputText2: {
		fontSize: 15,
		textAlignVertical: 'center'
	},
	inputText1: {
		fontSize: 15,
		textAlignVertical: 'center'
	},
	inputContainer1: {
		flex: 1,
		marginLeft: 15,
		marginRight: 50,
		justifyContent: 'center'
	},
	inputContainer2: {
		flex: 1,
		marginLeft: 50,
		marginRight: 15,
		justifyContent: 'center'
	}
});
