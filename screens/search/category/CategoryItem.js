import c from './sCategoryItem';
import g from '../../../GlobalStyles';
import {Image, Text, View} from "react-native";

function CategoryItem({source}) {
    return (
        <View style={c.container}>
            <Image source={source.img} style={c.img}/>
            <View style={c.text}>
                <Text style={[g.text, g.bold]}>{source.name}</Text>
            </View>
        </View>
    );
}

export default CategoryItem;
