import React from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Modal,
    Button,
} from 'react-native';
import { Icon } from 'react-native-elements'


export class TaskItem extends React.Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    _onPressButton(){
        Alert.alert('The button is tapped!');
    }

    _onLongPressButton() {
        Alert.alert('You long pressed the button!');
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <View style={{ marginTop: 22 }}>
                            <View style={styles.buttonView}>
                                <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
                                    <View style={styles.button01}>
                                        <Text style={styles.buttonText}>Edit</Text>
                                        <View style={styles.icons}>
                                        <Icon
                                            name='edit'
                                            type='font-awesome'
                                            size={50}
                                         />
                                        </View>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
                                    <View style={styles.button02}>
                                        <Text style={styles.buttonText}>Delete</Text>
                                        <View style={styles.icons}>
                                        <Icon
                                            name='delete'
                                            type='material-community'
                                            size={50}
                                         />
                                        </View>
                                        
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
                                    <View style={styles.button03}>
                                        <Text style={styles.buttonText}>Pin</Text>
                                        <View style={styles.icons}>
                                        <Icon
                                            name='pin'
                                            type='entypo'
                                            size={50}
                                        />
                                        </View>
                                        
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
                                    <View style={styles.button04}>
                                        <Text style={styles.buttonText}>Mark as Completed</Text>
                                        <View style={styles.icons}>
                                        <Icon
                                            name='check'
                                            type='feather'
                                            size={50}
                                        />
                                        </View>
                                        
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>

                    <TouchableHighlight
                        onPress={() => {
                            this.setModalVisible(true);
                        }}>
                        <View>
                        <Text style={styles.textStyling}>Lets finish the wireless application assignment.</Text>
                        </View>
                    </TouchableHighlight>
                    
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1.0,
        borderWidth: 1,
        backgroundColor: '#fff',
    },
    textStyling: {
        width: 360,
        height: 70, 
        paddingTop: 10, 
        paddingBottom: 10, 
        paddingLeft: 10, 
        fontSize: 20,
    },
    buttonView: {
        paddingTop: 45,
        paddingBottom: 45,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button01: {
        width: 6000,
        height: 100,
        margin: 20,
        backgroundColor: '#d3d3d3',
        borderRadius: 5,
        bottom: 0
    },
    button02: {
        width: 6000,
        height: 100,
        margin: 20,
        backgroundColor: '#ff0000',
        borderRadius: 5,
        bottom: 0
    },
    button03: {
        width: 6000,
        height: 100,
        margin: 20,
        backgroundColor: '#2196F3',
        borderRadius: 5,
        bottom: 0
    },
    button04: {
        width: 6000,
        height: 100,
        margin: 20,
        backgroundColor: '#008000',
        borderRadius: 5,
        bottom: 0
    },
    buttonText: {
        paddingTop: 30,
        textAlign: 'center',
        fontSize: 24,
        color: 'black'
    },
    icons: {
        paddingLeft: 350
    }
});

