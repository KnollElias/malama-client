import {Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import c from './sMenu';
import g from "../../GlobalStyles";

function Menu({navigation}) {

    const items = [
        {name: "Categories", nav: "Search", img: require("../../assets/favicon.png")},
        {name: "Login", nav: "Login", img: require("../../assets/favicon.png")},
        {name: "Register", nav: "Menu", img: require("../../assets/favicon.png")},
        {name: "Language", nav: "Language", img: require("../../assets/favicon.png")},
        {name: "FAQ", nav: "FAQ", img: require("../../assets/favicon.png")},
    ]

    return (
        <ImageBackground imageStyle={g.background} source={require("../../assets/img/background-img-dark.png")}>
            <View style={[g.container, c.container]}>
                <Text style={[g.heading, c.heading]}>MALAMA</Text>
                {
                    items.map((item, index) =>
                        <View style={c.item} key={index}>
                            <Image source={require("../../assets/icons/location.png")} style={c.icon}/>
                            <TouchableOpacity onPress={() => navigation.navigate(item.nav)}>
                                <Text style={[g.subHeading]}>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>
        </ImageBackground>
    );
}

export default Menu;
