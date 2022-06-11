import { StyleSheet, Text, View } from 'react-native'

export default function Login() {
    return (
        <View style={styles.container}>
          <Text>This is the login page</Text>           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ebdcae',
      alignItems: 'center',
      justifyContent: 'center',
    },
});