import {useState} from 'react';
import { View, TextInput, Text,TouchableOpacity } from 'react-native';

import itemStyle from '../style/ItemStyle';

function ItemInput(props){
    const [enteredItemText, setEnteredItemText] = useState('');

    function itemInputHandler(enteredText){
        setEnteredItemText(enteredText);
    };

    function addItemHandler(){
        props.onAddItem(enteredItemText);
        setEnteredItemText('');
    };

    return(
        <View style={itemStyle.inputContainer} >
            <TextInput
                style={itemStyle.textInput} 
                placeholder='Enter an Item'
                onChangeText={itemInputHandler}
                value= {enteredItemText}
            />
            <TouchableOpacity style={itemStyle.button} onPress={addItemHandler}>
                <Text style={itemStyle.buttonText}>Add Item</Text>
            </TouchableOpacity>
            
        </View>
    );

};

export default ItemInput;