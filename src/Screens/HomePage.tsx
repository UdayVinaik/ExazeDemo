import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView} from 'react-native';
import { connect } from 'react-redux';
import { setUsername } from '../Actions/setUsername';
import CustomButtons from '../Components/CustomButtons';
import Header from '../Components/Header';
import UserDetailBlock from '../Components/UserDetailBlock';
import { ScreenNames } from '../Constants/ScreenNames';
import { Colors } from '../Theme/Colors';

interface HomePageProps {
    navigation: any;
    username: string;
    setUsername: any;
}

interface HomePageState {
    username: string;
}

class HomePage extends Component<HomePageProps, HomePageState> {
    constructor(props: HomePageProps) {
        super(props)
        this.state = {
            username: '',
        }
    }

    setUserName = (str: string) => {
        this.setState({username: str});
    }

    onPressSubmit = () => {
        this.props.setUsername(this.state.username);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Header headerText='Home Page'/>
                <TextInput
                    value={this.state.username}
                    onChangeText={(text: string) => this.setUserName(text)}
                    style={styles.textInput}
                    placeholder={'Enter you name:'}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPressSubmit}
                >
                    <Text>{'Submit'}</Text>
                </TouchableOpacity>
                <UserDetailBlock username={this.props.username}/>
                <CustomButtons
                    buttonOneName={ScreenNames.SecondPage}
                    buttonTwoName={ScreenNames.ButtonsPage}
                    navigation={this.props.navigation}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textInput: {
        height: 60,
        marginHorizontal: 10,
        marginVertical: 20,
        borderWidth: 1,
        borderRadius: 10,
    },
    button: {
        height: 60,
        marginHorizontal: 10,
        marginVertical: 20,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.buttonBackgorund
    }
})

const mapStateToProps = (state: any) => {
    return {
        username: state.usernameReducer.username,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setUsername: (username: string) => setUsername(dispatch, username)
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);