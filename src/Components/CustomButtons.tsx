import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Colors } from '../Theme/Colors';

interface CustomButtonsProps {
    buttonOneName: string;
    buttonTwoName: string;
    navigation: any;
}

interface CustomButtonsState {}

class CustomButtons extends Component<CustomButtonsProps, CustomButtonsState> {
    constructor(props: CustomButtonsProps) {
        super(props)
    }

    onPressButtonOne = () => {
        this.props.navigation.navigate(this.props.buttonOneName);
    }

    onPressButtonTwo = () => {
        this.props.navigation.navigate(this.props.buttonTwoName);
    }

    render() {
        const {buttonOneName, buttonTwoName} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPressButtonOne}
                >
                    <Text>{buttonOneName}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPressButtonTwo}
                >
                    <Text>{buttonTwoName}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        height: 60,
        marginHorizontal: 10,
        marginVertical: 20,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.buttonBackgorund,
    }
})

export default CustomButtons;