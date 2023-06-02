import c from './sSearch';
import g from '../../../GlobalStyles';
import {ImageBackground, ScrollView, TextInput, TouchableOpacity, View} from "react-native";
import CategoryItem from "./CategoryItem";
import VariableIcon from "../../../util/VariableIcon";
import Icons from "../../../util/Icons";

function Search({navigation}) {

    const categories = [
        {name: "PHYSIQUE", img: require("../../../assets/img/promo.png")},
        {name: "PHYSIQUE", img: require("../../../assets/img/promo.png")},
        {name: "ENFANTS", img: require("../../../assets/img/promo.png")},
        {name: "SONOR & ART", img: require("../../../assets/img/promo.png")},
        {name: "ANIMAUX", img: require("../../../assets/img/promo.png")},
        {name: "NATURE", img: require("../../../assets/img/promo.png")},
    ]
    const lastCategory = {name: "PROUITS / ARTISANAT", img: require("../../../assets/img/promo.png")};

    // noinspection JSValidateTypes
    return (
        <ImageBackground imageStyle={g.background} source={require("../../../assets/img/background-img-dark.png")}>
            <View style={g.container}>
                <View style={c.header}>
                    <TextInput style={[c.searchBar, g.smallText]} placeholder={"PLACEHOLDER TEXT"}/>
                    <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
                        <VariableIcon source={Icons.burger} width={40} height={28} />
                    </TouchableOpacity>
                </View>
                <ScrollView style={{flex: 1}}>
                    <View style={c.categoryContainer}>
                        {
                            categories.map((item, index) =>
                                <TouchableOpacity key={index} style={c.categoryItem}
                                                  onPress={() => navigation.navigate("People")}>
                                    <CategoryItem source={item}/>
                                </TouchableOpacity>
                            )
                        }
                        <TouchableOpacity style={{width: "100%", padding: 10}}
                                          onPress={() => navigation.navigate("People")}>
                            <CategoryItem source={lastCategory}/>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    );
}

export default Search;
