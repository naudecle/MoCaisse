import { View, Text, Pressable} from 'react-native'

import groceryStyle from '../style/GroceryStyle';

function GroceryItem(props){
    return(
        <View style={groceryStyle.groceryItem}>
            <Pressable 
                android_ripple={{color:'#0000ff'}} 
                onPress={props.onDeleteItem.bind(props.this, props.id)}
            >
                
                    <Text style={groceryStyle.itemText}>{props.text}</Text>
                
            </Pressable>
        </View>
    );
};

export default GroceryItem;