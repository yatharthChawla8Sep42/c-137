import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from 'react-native-elements';

export default class StarScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            star_name : this.props.navigation.getParam("star_name"),
            distance : this.props.navigation.getParam("distance"),
            mass : this.props.navigation.getParam("mass"),
            radius : this.props.navigation.getParam("radius"),
            surface_gravity : this.props.navigation.getParam("surface_gravity"),
            image: ""
        }
    }

    componentDidMount() {
        this.setImage()
    }

    setImage = () => {
        const star_name = this.state.star_name
        var image = "";
        switch(star_name) {
            case "Sun":
                image = require('../assets/stars/Sun.jpg')
                break;
            case "Sirius":
                image = require('../assets/stars/Sirius.jpg')
                break;
            case "Alpha Centauri":
                image = require('../assets/stars/Alpha%20Centauri.jpg')
                break;
            case "Altair":
                image = require('../assets/stars/Altair.jpg')
                break;
            case "Fomalhaut":
                image = require('../assets/stars/Fomalhaut.jpg')
                break;
            case "Tau Ceti":
                image = require('../assets/stars/Tau%20Ceti.jpg')
                break;
            case "Delta Pavonis":
                image = require('../assets/stars/Delta%20Pavonis.jpg')
                break;
            case "Titawin":
                image = require('../assets/stars/Titawin.jpg')
                break;
            case "54 Piscium":
                image = require('../assets/stars/54%20Piscium.jpg')
                break;
            case "2MASSW J0045214+163445":
                image = require('../assets/stars/2MASSW%20J0045214%2B163445.jpg')
                break;
            case "WISEP J004701.06+680352.1 [fr]":
                image = require('../assets/stars/WISEP%20J004701.06%2B680352.1%20[fr].jpg')
                break;
            case "2MASS J03264225-2102057 [de]":
                image = require('../assets/stars/2MASS%20J03264225-2102057%20[de].jpg')
                break;
            case "2MASS J03552337+1133437":
                image = require('../assets/stars/2MASS%20J03552337%2B1133437.jpg')
                break;
            case "2MASS J04433764+0002040":
                image = require('../assets/stars/2MASS%20J04433764%2B0002040.jpg')
                break;
            case "2MASS J05012406-0010452 [de]":
                image = require('../assets/stars/2MASS%20J05012406-0010452%20[de].jpg')
                break;
            case "LSR 0602+3910 [de]":
                image = require('../assets/stars/LSR%200602%2B3910%20[de].jpg')
                break;
            case "2MASS J10224821+5825453 [de]":
                image = require('../assets/stars/2MASS%20J10224821%2B5825453%20[de].jpg')
                break;
            case "DENIS-P J142527.97-365023.4 [de]":
                image = require('../assets/stars/DENIS-P%20J142527.97-365023.4%20[de].jpg')
                break;
            case "2MASSW J2206450-421721":
                image = require('../assets/stars/2MASSW%20J2206450-421721.jpg')
                break;
            case "2MASSW J2244316+204343":
                image = require('../assets/stars/2MASSW%20J2244316%2B204343.jpg')
                break;
            case "2MASS J23224684-3133231":
                image = require('../assets/stars/2MASS%20J23224684-3133231.jpg')
                break;
            default:
                image = require('../assets/stars/Sun.jpg')
        }
        this.setState({
            image: image
        })
    }

    render() {
        const { image } = this.state
        return(
            <View style = {{flex: 1, backgroundColor: '#CFDEE7'}}>
                <Card containerStyle = {{marginTop: 50}}>
                    <Card.Title style = {styles.header}>
                        {this.state.star_name}
                    </Card.Title>
                    <Card.Image source = {image} resizeMode = "contain"/>
                    <View>
                        <Text style = {styles.darkDesc}>{`Distance from Earth : ${this.state.distance} light years`}</Text>
                        <Text style = {styles.lightDesc}>{`Mass : ${this.state.mass} Suns`}</Text>
                        <Text style = {styles.darkDesc}>{`Radius : ${this.state.radius} Suns`}</Text>
                        <Text style = {styles.lightDesc}>{`Surface Gravity : ${this.state.surface_gravity} m/s²`}</Text>
                    </View>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        color: '#4472CA'
    },
    darkDesc: {
        fontSize: 18,
        marginTop: 30,
        color: '#5E7CE2',
        fontWeight: 'bold'
    },
    lightDesc: {
        fontSize: 18,
        marginTop: 30,
        color: '#92B4F4',
        fontWeight: 'bold'
    }
})