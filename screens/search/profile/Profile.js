import c from './sProfile';
import g from '../../../GlobalStyles';
import {Image, ImageBackground, ScrollView, Text, TouchableOpacity, View, Dimensions} from "react-native";
import Colors from "../../../util/Colors";
import VariableIcon from "../../../util/VariableIcon";
import Icons from "../../../util/Icons";
import Map from '../../../util/Map';

function Profile({navigation}) {

    const info = {
        name: "WALTER MANNUNG",
        shortDescription: "Kunst-Therapie - Kreative Selbsterfahrung - Biografisches Arbeiten - Meditation - Workshops",
        offers: [
            "Gruppen und Enzeltherapie",
            "Selbsterfahrungsgruppen",
            "Trauerarbeit",
            "Kretivkurse fur Kinder"
        ],
        description: "Kunsttherapeutin / Mediatorin / Heilpraktikering fur Psychotherapie\n\nMein eigens kunstlerisches Arbeiten hat mir viele Turen zum Verstehen und Annehmen von mir selbst und dem Lebel geoffnet. Bein intuitiven Umgang mit Farben und Materialen zzeigten sich mir Prozesse mit heilsamer Wirkung. Diese Erfahrung hat mich tief beruhrt und dahin gefughrt, auch andere Menschen auf ihrem Weg zu sich selbst zu unterstutzen und zu begleiten.",
        img: require("../../../assets/img/portrait.png"),
        coverImg: require("../../../assets/img/products.png")
    }

    const initialPosition = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    const markers = [
    {
        coordinate: {
        latitude: 37.75825,
        longitude: -122.4324,
        },
        title: info.name,
        description: 'Walterstrasze 1, \n12345 Berlin',
    },
    ];


    return (
        <ImageBackground imageStyle={g.background} source={require("../../../assets/img/background-img-dark.png")}>
            <View style={g.container}>
                {/* TODO: This header code should be extracted out probably */}
                <View style={c.header}>
                    <TouchableOpacity onPress={() => navigation.pop()}>
                        <VariableIcon source={Icons.back} height={40} width={25}/>
                    </TouchableOpacity>
                    <Text style={[g.subHeading, {color: Colors.light}]}>MALAMA</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
                        <VariableIcon source={Icons.burger} height={30} width={25}/>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View
                        style={{padding: "10%", marginBottom: 20, borderRadius: 20, backgroundColor: Colors.dimLight}}>
                        {/* Cover image */}
                        <View style={{paddingBottom: 20}}>
                            <Image source={info.coverImg} style={{width: "100%", height: 200, borderRadius: 20}}/>
                        </View>
                        {/* PFP and name */}
                        <View style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 20}}>
                            <Image source={info.img} style={{width: 120, height: 120, borderRadius: 20}}/>
                            <Text style={[g.text, g.bold, {textAlign: "center", marginLeft: 20}]}>{info.name}</Text>
                        </View>
                        {/* Other info */}
                        <View>
                            <Text>{info.shortDescription}</Text>
                            <Text/>
                            <Text>{info.offers.map(offer => "-" + offer).join("\n")}</Text>
                            <Text/>
                            <Text style={[g.text, g.bold]}>ÜBER MICH</Text>
                            <Text>{info.description}</Text>
                        </View>
                        {/* External links */}
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            marginTop: 40
                        }}>
                            <TouchableOpacity>
                                <VariableIcon source={Icons.phone} height={30} width={30}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <VariableIcon source={Icons.web} height={30} width={30}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <VariableIcon source={Icons.location} height={30} width={30}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <VariableIcon source={Icons.facebook} height={30} width={30}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <VariableIcon source={Icons.instagram} height={30} width={30}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <VariableIcon source={Icons.location} height={30} width={30}/>
                            </TouchableOpacity>
                        </View>
                        {/* Map */}
                        <View style={{marginTop: 30, backgroundColor: "transparent", width: Dimensions.get("screen").width*0.8, height: 180, alignSelf: "center", marginBottom: -10, }}>
                            <Map initialPosition={initialPosition} markers={markers} />
                        </View> 
                        {/* Arrows */}
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: 40,
                            justifyContent: "space-between"
                        }}>
                            <View style={{display: "flex", flexDirection: "row", alignItems: "center", transform: [{ rotate: '180deg' }]}}>
                                <Text style={{marginRight: 10, transform: [{ rotate: '180deg' }]}}>RETOUR</Text>
                                <VariableIcon source={Icons.forward} height={25} width={25} />
                            </View>
                            <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                <Text style={{marginRight: 10}}>PROCHAIN</Text>
                                <VariableIcon source={Icons.forward} height={25} width={25}/>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    );
}

export default Profile;
