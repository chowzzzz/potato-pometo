import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { windowHeight } from "../utils/Dimensions";
import Icon from "react-native-vector-icons/FontAwesome5";

const FormButton = ({ iconType, labelValue, placeholder, ...rest }) => {
	return (
		<View style={styles.inputContainer}>
			{iconType !== "" ? (
				<View style={styles.iconStyle}>
					<Icon name={iconType} size={25} color="#666"></Icon>
				</View>
			) : null}

			<TextInput
				value={labelValue || ""}
				style={styles.input}
				placeholder={placeholder}
				placeholderTextColor="#666"
				{...rest}
			/>
		</View>
	);
};

export default FormButton;

const styles = StyleSheet.create({
	inputContainer: {
		marginTop: 5,
		marginBottom: 10,
		width: "90%",
		height: windowHeight / 15,
		borderColor: "#ccc",
		borderRadius: 10,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#fff"
	},
	iconStyle: {
		padding: 10,
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		borderRightColor: "#ccc",
		borderRightWidth: 1,
		width: 50
	},
	input: {
		padding: 10,
		flex: 1,
		fontSize: 16,
		color: "#333",
		justifyContent: "center",
		alignItems: "center"
	}
});
