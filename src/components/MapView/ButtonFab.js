import React from 'react'
import PropTypes from 'prop-types';
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const ButtonFab = ({name, onPress, style}) => {

    ButtonFab.defaultProps = {
        name: 'star-outline',
        onPress : () => {},
        style: {}
    };

    return (
        <View style={style}>
            <TouchableOpacity
                style={styles.btnStyle}
                activeOpacity={0.5}
                onPress={onPress}
            >
                <Icon 
                    name={name}
                    color='white'
                    size={35}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btnStyle: {
        zIndex: 9999,
        height: 60,
        width: 60,
        backgroundColor:'gray',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems:'center',
        shadowColor: '#000',
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6
    }
})

ButtonFab.propTypes = {
    name: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    style: PropTypes.object.isRequired
};

export default ButtonFab
