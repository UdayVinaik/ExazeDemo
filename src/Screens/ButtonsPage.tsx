import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
import { connect } from 'react-redux';
import CustomButtons from '../Components/CustomButtons';
import Header from '../Components/Header';
import UserDetailBlock from '../Components/UserDetailBlock';
import { ScreenNames } from '../Constants/ScreenNames';
import { Colors } from '../Theme/Colors';
import SwipeButton from 'rn-swipe-button';

interface ButtonsPageProps {
    navigation: any;
    username: string;
}

interface ButtonsPageState {}

class ButtonsPage extends Component<ButtonsPageProps, ButtonsPageState> {
    constructor(props: ButtonsPageProps) {
        super(props)
    }

    onSwipeSuccess = () => {
        Alert.alert('You swiped a button.')
    }

    render() {
        return (
            <View style={styles.container}>
                <Header headerText='Buttons Page'/>
                <UserDetailBlock username={this.props.username} textColor={Colors.white}/>
                <CustomButtons
                    buttonOneName={ScreenNames.HomePage}
                    buttonTwoName={ScreenNames.SecondPage}
                    navigation={this.props.navigation}
                />
                <View style={styles.buttonsBlock}>
                    <Text style={styles.yellowText}>{'4 variations of button'}</Text>
                    <TouchableOpacity
                        style={styles.button1}
                    >
                        <Text style={styles.blueText}>{'Press me'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button2}
                    >
                        <Text style={styles.blueText}>{'Press me'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button3}
                    >
                        <Text style={styles.whiteText}>{'Press me'}</Text>
                    </TouchableOpacity>
                    <SwipeButton
                        title={'Slide me to continue'}
                        height={60}
                        width={'90%'}
                        railBackgroundColor={Colors.slideButtonBgColor}
                        titleColor={Colors.blueText}
                        thumbIconBackgroundColor={Colors.buttonBlue}
                        containerStyles={styles.slideButton}
                        thumbIconStyles={styles.iconStyle}
                        swipeSuccessThreshold={70}
                        onSwipeSuccess={() => this.onSwipeSuccess()}
                        shouldResetAfterSuccess={true}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.screenBackground
    },
    yellowText: {
        color: Colors.textYellow,
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonsBlock: {
        alignItems: 'center'
    },
    blueText: {
        color: Colors.blueText,
        fontSize: 18,
        fontWeight: 'bold'
    },
    button1: {
        height: 60,
        width: '90%',
        marginHorizontal: 10,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button2: {
        height: 60,
        width: '90%',
        marginHorizontal: 30,
        paddingHorizontal: 30,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.grey,
        borderRadius: 10
    },
    button3: {
        height: 60,
        width: '90%',
        marginHorizontal: 30,
        paddingHorizontal: 30,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.buttonBlue,
        borderRadius: 10
    },
    whiteText: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold'
    },
    slideButton: {
        borderRadius: 10,
        borderColor: Colors.darkGrey,
        borderWidth: 2,
    },
    iconStyle: {
        borderRadius: 10
    }
})

const mapStateToProps = (state: any) => {
    return {
        username: state.usernameReducer.username,
    }
}

export default connect(mapStateToProps, null)(ButtonsPage);