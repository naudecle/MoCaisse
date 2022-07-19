import React, { useState} from "react";
import { View, FlatList, SafeAreaView } from "react-native";

import CustomeHeader from "../component/CustomHeader";
import GroceryItem from "../component/Groceryitem";
import ItemInput from "../component/ItemInputs";

import ShopListStyle from "../style/ShopListStyle";

function ShopList({navigation}){
    const [marketItem, setMarketItem] = useState([]);

    function addItemHandler(enteredItemText){
        setMarketItem((currentMarketItem) =>
        [
            ...currentMarketItem,
            {text: enteredItemText, id: Math.random().toString()},
        ]);
    };

    function deleteHandler(id){
        setMarketItem((currentMarketItem) =>{
            return currentMarketItem.filter((goal) => goal.id !== id);
        });
    }

    return(
        <SafeAreaView style={ShopListStyle.container}>
            <CustomeHeader title="List of groceries" navigation={navigation}/>
             <View style={ShopListStyle.listContainer}>
                <ItemInput onAddItem={addItemHandler}/>
                <View style={ShopListStyle.groceryContainer}>
                    <FlatList data={marketItem} renderItem={itemData => {
                        return <GroceryItem 
                            text={itemData.item.text}
                            id={itemData.item.id}
                            onDeleteItem={deleteHandler}
                        />
                    }}/>
                </View>
            </View>
        </SafeAreaView>
       
    );
    
};

export default ShopList;

/**
 * 
 * @returns we are going to store the input text 'state' when we want the text that we enter
 * in the itemInputHandler to be sent in the addItemHandler function.
 * enteredItemText is updated by setEnteredItemText. enteredItemText and setEnteredItemText are for the input text
 * 
 * marketItem and setMarketItem are for the elements of the list
 * a list is a data that change dynamically. so we are going to use the 'useState' in order to manage it.
 * the useState is going to be an array.
 * The Spread operator lets you expand an iterable 
 * like an object, string, or array into its elements.
 * The JavaScript spread operator (...) allows us to quickly copy all 
 * or part of an existing array or object into another array or object
 * 
 * in this case the new state depends on the previous, so we are going 
 * to pass a function to the state updating function,
 * a function which will be called automatically by React
 * this function will store the previous state of the list 
 * but also the new entered item and then the list will be updated through this function. 
 */