import c from './sPerson';
import g from '../../../GlobalStyles';
import {Image, Text, View} from "react-native";
import VariableIcon from "../../../util/VariableIcon";
import Icons from "../../../util/Icons";

function Person({source}) {
    return (
        <View style={c.container}>
            <Image source={source.img} style={c.img}/>
            <View style={c.dataContainer}>
                <Text style={[g.bigText, g.bold, c.textBP]}>{source.name}</Text>
                <Text style={[g.smallText, c.description, c.textBP]}>{source.description}</Text>
                <View style={c.additionalDetails}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <VariableIcon source={Icons.location} width={18} height={18}/>
                        <Text style={[g.smallText]}>à {source.distance}km</Text>
                    </View>
                    <Text style={[g.smallText]}>{source.languages.join("|")}</Text>
                    <VariableIcon source={Icons.forward} width={18} height={18}/>
                </View>
            </View>
        </View>
    );
}

export default Person;
