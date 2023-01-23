import React, {Component} from 'react';
import {Text} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface UserDetailBlockProps {
    username: string;
    textColor?: string;
}

interface UserDetailBlockState {}

class UserDetailBlock extends Component<UserDetailBlockProps, UserDetailBlockState> {
    constructor(props: UserDetailBlockProps) {
        super(props);
    }

    render() {
        return (
            <Text style={this.props?.textColor ? {color: this.props.textColor} : {color: Colors.black}}>{'You are logged in as :'} {this.props.username}</Text>
        )
    }
}

export default UserDetailBlock;