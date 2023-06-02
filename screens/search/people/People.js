import c from './sPeople';
import g from '../../../GlobalStyles';
import {ImageBackground, ScrollView, Text, TouchableOpacity, View} from "react-native";
import Colors from "../../../util/Colors";
import Person from "./Person";
import VariableIcon from "../../../util/VariableIcon";
import Icons from "../../../util/Icons";

function People({navigation}) {
    const people = [
        {
            name: "Walter Mannung",
            img: require("../../../assets/img/portrait.png"),
            description: "Kunst-Therapie - Kreative Selbsterfahrung - Biografisches Arbeiten - Meditation - Workshops",
            distance: "3.8",
            languages: ["DE", "FR"]
        },
        {
            name: "Jane Doe",
            img: require("../../../assets/img/portrait.png"),
            description: "Kunst-Therapie - Kreative Selbsterfahrung - Biografisches Arbeiten - Meditation - Workshops",
            distance: "3.8",
            languages: ["DE", "FR"]
        },
        {
            name: "Jane Doe",
            img: require("../../../assets/img/portrait.png"),
            description: "Kunst-Therapie - Kreative Selbsterfahrung - Biografisches Arbeiten - Meditation - Workshops",
            distance: "3.8",
            languages: ["DE", "FR"]
        },
        {
            name: "Jane Doe",
            img: require("../../../assets/img/portrait.png"),
            description: "Kunst-Therapie - Kreative Selbsterfahrung - Biografisches Arbeiten - Meditation - Workshops",
            distance: "3.8",
            languages: ["DE", "FR"]
        },
        {
            name: "Jane Doe",
            img: require("../../../assets/img/portrait.png"),
            description: "Kunst-Therapie - Kreative Selbsterfahrung - Biografisches Arbeiten - Meditation - Workshops",
            distance: "3.8",
            languages: ["DE", "FR"]
        }, {
            name: "Jane Doe",
            img: require("../../../assets/img/portrait.png"),
            description: "Kunst-Therapie - Kreative Selbsterfahrung - Biografisches Arbeiten - Meditation - Workshops",
            distance: "3.8",
            languages: ["DE", "FR"]
        }
    ]
    // noinspection JSValidateTypes
    return (
        <ImageBackground imageStyle={g.background} source={require("../../../assets/img/background-img-dark.png")}>
            <View style={g.container}>
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
                    {
                        people.map((person, index) =>
                            <TouchableOpacity key={index} style={c.item} onPress={() => navigation.navigate("Profile")}>
                                <Person source={person}/>
                            </TouchableOpacity>
                        )
                    }
                </ScrollView>
            </View>
        </ImageBackground>
    );
}

export default People;
