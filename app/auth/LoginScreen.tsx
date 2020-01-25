import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native'
import { Headline, Paragraph, TextInput, Button } from 'react-native-paper';

const LoginScreen: React.FC = () => {
    return (<View style={styles.base}>
        <>
            <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
        </>
        <View style={styles.appTitle}>
                <Headline style={styles.appTitle}>TodoApp</Headline>
                <Paragraph style={styles.appDesc}>
                    Inmeta React Native Redux Course
                </Paragraph>
        </View>
        <>
            <View style={styles.divider}>
                <TextInput label="*Username or email" />
            </View>
        </>
        <>
            <View style={styles.divider}>
                <TextInput label="*Password" secureTextEntry />
            </View>
        </>
        <>
            <View style={styles.divider} />
            <Button disabled={false} style={styles.btn}
            mode="contained"
            >Todo</Button>
        </>
    </View>)
};
export default LoginScreen;


const styles = StyleSheet.create({
    base: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    divider: {
        height: 16,
    },
    headline: {
        fontSize: 30,
    },
    appDesc: {
        textAlign: 'center',
    },
    header: {
        padding: 32,
    },
    appTitle: {
        textAlign: 'center',
        fontSize: 35,
        lineHeight: 35,
        fontWeight: '700',
    },
    btn: {
        height: 50,
        paddingTop: 6,
        marginBottom: 12,
    },
});