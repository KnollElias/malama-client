import React, { useState, useEffect } from 'react';
import {
    ScrollView,
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
    Image,
} from 'react-native';
import { saveLanguage, loadLanguage } from './saveLanguage';
import VariableIcon from '../../util/VariableIcon';
import Icons from '../../util/Icons';
import c from './sLanguage';
import g from '../../GlobalStyles';
import Colors from '../../util/Colors';

function Language({ navigation }) {
    const Languages = [
        {
            name: 'Deutsch',
            icon: Icons.germany,
        },
        {
            name: 'Français',
            icon: Icons.france,
        },
        {
            name: 'Italiano',
            icon: Icons.italy,
        },
        {
            name: 'English',
            icon: Icons.unitedKingdom,
        },
    ];

    const [selectedLanguage, setSelectedLanguage] = useState("Deutsch");

    useEffect(() => {
        const fetchLanguage = async () => {
            const storedLanguage = await loadLanguage();
            setSelectedLanguage(storedLanguage);
        };
        fetchLanguage();
    }, []);

    const handleLanguageSelect = async (language) => {
        setSelectedLanguage(language);
        await saveLanguage(language);
    };

    return (
        <ImageBackground
            imageStyle={g.background}
            source={require('../../assets/img/background-img-dark.png')}>
            <View style={[g.container, g.sideContainer, c.container]}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Menu')}
                    style={{ alignSelf: 'flex-end' }}>
                    <Image
                        source={require('../../assets/icons/close.png')}
                        style={g.closeIcon}
                    />
                </TouchableOpacity>
                <Image
                    source={require('../../assets/logo/full-logo.png')}
                    style={g.logo}
                />

                <View style={g.subHeading}>
                    {Languages.map((language, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleLanguageSelect(language.name)}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 10,
                                opacity: selectedLanguage === language.name ? 1 : 0.5,
                            }}>
                            <Image
                                source={language.icon}
                                style={{ marginRight: 15, width: 24, height: 24 }}
                            />
                            <Text
                                style={[
                                    g.text,
                                    { color: Colors.white },
                                    selectedLanguage === language.name
                                        ? c.selectedText
                                        : c.unselectedText,
                                ]}>
                                {language.name}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </ImageBackground>
    );
}

export default Language;
