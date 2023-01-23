import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Colors } from '../Theme/Colors';

interface HeaderProps {
    headerText: string;
}

interface HeaderState {}

class Header extends Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props)
    }

    render() {
        const {headerText = ''} = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{headerText}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        backgroundColor: Colors.headerBackground,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default Header;