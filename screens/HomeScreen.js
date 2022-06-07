import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, Alert, SafeAreaView, ActivityIndicator } from "react-native";
import { ListItem, SearchBar, Icon } from "react-native-elements";
import axios from "axios";

export default class HomeScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            star_data : [],
            url : "http://4992a0d3e404.ngrok.io/",
            dataSource: [],
            search: ""
        }
    }

    componentDidMount() {
        this.getStars()
    }

    getStars = () => {
        const { url } = this.state
        axios
        .get(url)
        .then(response => {
            return this.setState({
                star_data : response.data.data
            })
        })
        .catch(error => {
            Alert.alert(error.message)
        })
    }

    searchFilterFunction(text) {
        const searchData = this.state.star_data.filter((item)=> {
            const itemData = item["Star Name"]
            ? item["Star Name"].toUpperCase()
            : ''.toUpperCase()
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            dataSource: searchData,
            search: text,
        });
    }

    renderItem = ({item, index}) => (
        <ListItem
        key = {index}
        bottomDivider
        containerStyle = {{backgroundColor: '#CFDEE7'}}
        onPress = {() => {
            this.props.navigation.navigate("StarScreen", {
                star_name: item["Star Name"],
                distance: item["Distance (ly)"],
                mass: item.Mass,
                radius: item.Radius,
                surface_gravity: item["Surface Gravity"]
            })
        }}
        >
            <ListItem.Content>
                <ListItem.Title style = {{color: '#4472CA', fontSize : 18, fontWeight: "bold"}}>
                    {`Star Name : ${item["Star Name"]}`}
                </ListItem.Title>
                <ListItem.Subtitle style = {{color: '#5E7CE2', fontSize: 16}}>
                    {`Distance from Earth: ${item["Distance (ly)"]} light years`}
                </ListItem.Subtitle>
            </ListItem.Content>
        <ListItem.Chevron iconStyle = {{color: '#92B4F4'}} size = {25}/>
        </ListItem>
    )

    keyExtractor = (item, index) => index.toString();

    render() {
        const { star_data } = this.state;

    if (star_data.length === 0) {
        return (
        <View style = {styles.container}>
            <ActivityIndicator size="large" color="#0A369D" marginTop = {300}/>
        </View>
        );
    }

    return (
      <View style = {styles.container}>
        <SafeAreaView />
        <SearchBar
                placeholder = "Search..."
                value = {this.state.search}
                onChangeText = {text =>
                    this.searchFilterFunction(text)
                }
                onClear = {text =>
                    this.searchFilterFunction('')
                }
                inputStyle = {{color: '#4472CA', fontSize: 20}}
                inputContainerStyle = {{backgroundColor: '#92B4F4'}}
                containerStyle = {{backgroundColor: '#92B4F4', borderTopWidth: 0, borderBottomWidth: 0, borderRadius: 10, width: '90%', marginTop: 20, alignSelf: 'center'}}
                placeholderTextColor = {'#4472CA'}
                searchIcon = {<Icon name = "search" type = "feather" size = {22} color = "#5E7CE2"/>}
                clearIcon = {{color: "#5E7CE2"}}
            />
        <View>
          <FlatList
            keyExtractor = {this.keyExtractor}
            data = {this.state.search == "" ? this.state.star_data : this.state.dataSource}
            renderItem = {this.renderItem}
            contentContainerStyle = {{marginTop: 20}}
          />
        </View>
      </View>)
    }
}

const styles = StyleSheet.create({
    loading: {
      fontWeight: 'bold',
      fontSize: 20,
      alignSelf: 'center',
      marginTop: 100
    },
    container: {
        flex: 1,
        backgroundColor: '#CFDEE7'
    }
  });