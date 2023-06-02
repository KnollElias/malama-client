import c from './sLogin';
import g from "../../GlobalStyles";
import {Image, ImageBackground, Text, TextInput, TouchableOpacity, View} from "react-native";

function Login({navigation}) {
    const messageString = `Please sign in \nto continue`;
    return (
        <ImageBackground imageStyle={g.background} source={require("../../assets/img/background-img-dark.png")}>
            <View style={[g.container, g.sideContainer, c.container, ]}>
                <TouchableOpacity onPress={() => navigation.navigate("Menu")} style={{alignSelf: "flex-end",}}><Image source={require("../../assets/icons/close.png")} style={g.closeIcon}/></TouchableOpacity>
                <Image source={require("../../assets/logo/full-logo.png")} style={g.logo}/>
                <Text style={[c.alignLeft, g.text]}>{messageString}</Text>
                <View style={{height: "3%"}}/>
                <TextInput style={[g.bigText, c.input]} placeholder={"Email"}/>
                <TextInput style={[g.bigText, c.input]} placeholder={"Password"}/>
                <TouchableOpacity style={c.alignLeft}>
                    <Text style={[{color: "#fff",}, g.text]}>FORGOT PASSWORD</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[c.button, c.alignLeft]}
                                  onPress={() => navigation.navigate("Search")}>
                    <Text style={[c.buttonText, g.subHeading]}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[{flexDirection: "row", overflow: "scroll"}, c.alignLeft]}>
                    <Text style={[c.linkd, g.text]}>Don't have an account? </Text><Text style={[c.linkb, g.text]}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

export default Login;
