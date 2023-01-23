import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { connect } from 'react-redux';
import CustomButtons from '../Components/CustomButtons';
import Header from '../Components/Header';
import UserDetailBlock from '../Components/UserDetailBlock';
import { ScreenNames } from '../Constants/ScreenNames';

interface SecondPageProps {
    navigation: any;
    username: string;
}

interface SecondPageState {}

class SecondPage extends Component<SecondPageProps, SecondPageState> {
    constructor(props: SecondPageProps) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Header headerText='Second Page'/>
                <CustomButtons
                    buttonOneName={ScreenNames.HomePage}
                    buttonTwoName={ScreenNames.ButtonsPage}
                    navigation={this.props.navigation}
                />
                <UserDetailBlock username={this.props.username}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const mapStateToProps = (state: any) => {
    return {
        username: state.usernameReducer.username,
    }
}

export default connect(mapStateToProps, null)(SecondPage);