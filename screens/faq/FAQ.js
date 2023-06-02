import { ScrollView, ImageBackground, Text, TouchableOpacity, View, Image } from "react-native";
import VariableIcon from "../../util/VariableIcon";
import Icons from "../../util/Icons";
import c from './sFAQ';
import g from "../../GlobalStyles";
import Colors from "../../util/Colors";
import React, { useState, useEffect } from 'react';
import { loadLanguage } from '../language/saveLanguage';
import faqsData from './faqs.json';

function FAQ({navigation}) {

    const [language, setLanguage] = useState('Deutsch');
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        const fetchLanguage = async () => {
            const storedLanguage = await loadLanguage();
            setLanguage(storedLanguage);
            setFaqs(faqsData[storedLanguage]);
        };
        fetchLanguage();
    }, []);
    const [activeFAQ, setActiveFAQ] = React.useState(-1);

    return (
        <ImageBackground imageStyle={g.background} source={require("../../assets/img/background-img-dark.png")}>
            <View style={c.header}>
                <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
                    <VariableIcon source={Icons.back} height={40} width={25}/>
                </TouchableOpacity>
                <VariableIcon source={Icons.hedarLogo} height={40/1.25} width={238/1.25}/>
                <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
                    <VariableIcon source={Icons.burger} height={30} width={25}/>
                </TouchableOpacity>
            </View>
            <ScrollView style={g.interfaceBackground}>
                <Text style={[g.heading, c.heading]}>FAQ's</Text>
                <View style={c.questionIcon}>
                    <VariableIcon source={Icons.question} height={25} width={25}/>
                    {faqs && faqs.map((faq, index) => (
                        <React.Fragment key={index}>
                            <TouchableOpacity style={c.fragment} onPress={() => setActiveFAQ(activeFAQ === index ? -1 : index)}>
                                <View style={c.questionRow}>
                                    <Text style={[g.heading, c.question]}>{faq.question}</Text>
                                    <Image
                                        style={[
                                            c.arrowImage,
                                            activeFAQ === index ? { transform: [{ rotate: '180deg' }] } : {},
                                        ]}
                                        source={require('../../assets/icons/down_arrow.png')}
                                    />
                                </View>
                                {activeFAQ === index ? (
                                    <Text style={[g.subHeading, c.answer]}>{faq.answer}</Text>
                                ) : null}
                            </TouchableOpacity>
                        </React.Fragment>
                    ))}
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

export default FAQ;
