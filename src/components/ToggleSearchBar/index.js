import React, { Component } from 'react';
import { View, Animated, TouchableOpacity, TextInput } from 'react-native';
import { styles, padding } from './styles';

export class ToggleSearchBar extends Component {
	static defaultProps = {
		thumbSize: 40,
	};

	constructor(props) {
		super(props);
		this.state = {
			width: 0,
			leftAnimatedValue: new Animated.Value(0),
			isEnabledService: props.activeIndex === 0,
			opacity: new Animated.Value(0),
		}
	}

	componentDidMount() {
		this.onAnimate();
	}

	onLayout = ({ nativeEvent }) => {
		this.setState({ width: nativeEvent.layout.width }, this.onAnimate);
	};

	onToggle = () => {
		this.setState({ isEnabledService: !this.state.isEnabledService }, () =>{
			this.onAnimate();
			this.props.onChangeSearchType(this.state.isEnabledService ? 1 : 0);
		});
	};

	onAnimate = () => {
		const { leftAnimatedValue, isEnabledService, width, opacity } = this.state;
		const { thumbSize } = this.props;
		if (isEnabledService) {
			Animated.parallel([
				Animated.timing(leftAnimatedValue, {
					toValue: width - (thumbSize - padding),
					duration: 300
				}),
				Animated.timing(opacity, {
					toValue: 0,
					duration: 300
				})
			]).start();
		} else {
			Animated.parallel([
				Animated.timing(leftAnimatedValue, {
					toValue: 0,
					duration: 300
				}),
				Animated.timing(opacity, {
					toValue: 1,
					duration: 300
				})
			]).start();
		}
	};

	onChangeText = (value) => {
		const { isEnabledService } = this.state;
		this.props.onChangeText(isEnabledService ? 1 : 0, value);
	};

	render() {
		const { leftAnimatedValue, isEnabledService, opacity } = this.state;
		const { thumbSize, fontStyle } = this.props;
		const opacity1 = opacity.interpolate({
			inputRange: [0, 0.25, 0.5, 0.75, 1],
			outputRange: [0, 0.25, 0.5, 0.75, 1]
		});
		const opacity2 = opacity.interpolate({
			inputRange: [0, 0.25, 0.5, 0.75, 1],
			outputRange: [1, 0.75, 0.5, 0.25, 0]
		});
		const opacityStyle1 = {
			opacity: opacity1
		};
		const opacityStyle2 = {
			opacity: opacity2
		};
		return (
			<View style={[styles.container, this.props.style, { height: thumbSize, borderRadius: thumbSize / 2 }]} onLayout={this.onLayout}>
				{isEnabledService &&
					<Animated.View style={[styles.inputContainer1, opacityStyle2]}>
						<TextInput
							style={[styles.inputText1, fontStyle]}
							placeholder="Service for Service"
							placeholderTextColor="gray"
							onChangeText={this.onChangeText}
						/>
					</Animated.View>
				}
				<Animated.View style={
					[styles.thumb, {
						left: leftAnimatedValue,
						borderRadius: thumbSize / 2,
						width: thumbSize - 2,
						height: thumbSize - 2,
					}]
				}
				>
					<TouchableOpacity onPress={this.onToggle} style={styles.thumbContainer} />
				</Animated.View>
				{!isEnabledService &&
				<Animated.View style={[styles.inputContainer2, opacityStyle1]}>
					<TextInput
						style={[styles.inputText2, fontStyle]}
						placeholder="Service for Business"
						placeholderTextColor="gray"
						onChangeText={this.onChangeText}
					/>
				</Animated.View>}
			</View>
		);
	}
}