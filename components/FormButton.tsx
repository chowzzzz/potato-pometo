import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { windowHeight } from "../utils/Dimensions";

const FormButton = ({ buttonTitle, ...rest }) => {
	return (
		<TouchableOpacity style={styles.button} {...rest}>
			<Text style={styles.btnText}>{buttonTitle}</Text>
		</TouchableOpacity>
	);
};

export default FormButton;

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#6b5b95",
		justifyContent: "center",
		borderRadius: 10,
		padding: 10,
		margin: 5,
		width: "75%",
		height: 38,
		alignItems: "center"
	},
	btnText: {
		color: "#fff8dc",
		fontSize: 15
	}
});
