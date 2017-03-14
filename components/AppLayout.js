
import React, { Component } from 'react';
import {
    StyleSheet,
    LayoutAnimation,
    Text,
    Image,
    View
} from 'react-native';
class Header extends Component {
    render() {
        let { title } = this.props;
        return (
            <View style={{
                backgroundColor: '#F8F8F8',
                alignSelf: 'stretch',
                justifyContent: 'center',
                alignItems: 'center',
                height: 60,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                elevation: 2,
                position: 'relative'
            }}>
                <Text style={{ fontSize: 20 }}>{title}</Text>
            </View>
        );
    }
}

export default class AppLaout extends Component {
    componentWillUpdate(nextProps, nextState) {
        LayoutAnimation.easeInEaseOut();
    }
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                backgroundColor: '#F5FCFF'
            }}>
                <Header title="Header Title" />
                <View style={{
                    margin: 10,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: '#ddd',
                    borderBottomWidth: 0,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 2,
                    overflow:'hidden',
                    elevation: 1
                }}>
                    <Image source={{ uri: 'http://writm.com/wp-content/uploads/2016/08/Cat-hd-wallpapers-1080x675.jpg' }} style={{
                        alignSelf: 'stretch',
                        borderTopLeftRadius:10,
                        borderTopRightRadius:10,
                        height: 200
                    }} />

                    <View style={{
                        flexDirection: 'row',
                        margin: 5
                    }}>

                        <View style={{
                            marginRight: 10
                        }}>
                            <Image source={{ uri: 'http://writm.com/wp-content/uploads/2016/08/Cat-hd-wallpapers-1080x675.jpg' }} style={{
                                width: 50,
                                borderRadius:5,
                                height: 50
                            }} />
                        </View>
                        <View>
                            <Text style={{
                                fontWeight: 'bold'
                            }}>Albumn Title</Text>
                            <Text style={{
                                color: '#CCCCCC'
                            }}>Artist Name</Text>
                        </View>

                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});