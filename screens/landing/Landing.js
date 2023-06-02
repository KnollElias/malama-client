import {Image, ImageBackground, View} from "react-native";
import c from './sLanding';
import g from "../../GlobalStyles";

function Landing({navigation}) {
    // Replace this screen with Main Menu, to disable going back
    setTimeout(() => navigation.replace("Menu"), 500);
    return (
        <ImageBackground imageStyle={g.background} source={require("../../assets/img/background-img-dark.png")}>
            <View style={[c.container, g.container]}>
                <Image source={require("../../assets/logo/full-logo.png")}
                       style={{width: 300, height: 200, resizeMode: "stretch"}}/>
            </View>
        </ImageBackground>
    );
}

export default Landing;
