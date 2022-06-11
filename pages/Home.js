import { StyleSheet, Text, View } from 'react-native'

export default function Home() {
    return (
        <View style={styles.container}>
          <Text>This is the homepage</Text>           
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
