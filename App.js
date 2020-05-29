import React, { Component } from 'react'
import { Text, View, Picker, YellowBox, StyleSheet } from 'react-native'
import i18n from './i18n/i18n';
import { Card } from 'react-native-elements';

class App extends Component {
  constructor(){
    super();
    this.state={
      select: "",
    }
  }

  onChangeLang(lang){
    this.setState({select: lang})
    i18n.changeLanguage(lang)
  }
     render() {
          return (
               <View style={styles.safeArea}>
                    <View style={styles.safeAreaHeader}>
                      <Text style={styles.value}>React Native Localization</Text>
                    </View>
                    <View style={styles.safeArea}>
                      
                          <Picker
                            selectedValue={this.state.select}
                            style={{ height: 50, width: 200 }}
                            onValueChange={(itemValue, itemIndex) => this.onChangeLang(itemValue)}
                          >
                          <Picker.Item label="Select a language" value="" />
                          <Picker.Item label="Arabic" value="ar" />
                            <Picker.Item label="English" value="en" />
                            <Picker.Item label="Dutch" value="de" />
                          </Picker>
                      <View style={styles.safeAreaContent}>
                      <Card>
                        <Text style={styles.value}>{i18n.t('homeTitle')}</Text>
                        <Text style={styles.value}>{i18n.t('homeIntroduction')}</Text>
                        <Text style={styles.value}>Context</Text>
                        <Text style={styles.value}>{i18n.t('pageTitle')}</Text>
                        <Text style={styles.value}>{i18n.t('pageIntroduction')}</Text>
                      </Card>
                      </View>
                    </View>
               </View>
          )
     }
}

export default App;

console.disableYellowBox = true;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin:15
  },
  safeAreaContent: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:10
  },
  safeAreaHeader: {
    backgroundColor: '#2f92d4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40
  },
  value: {
    fontSize: 24
  }
})
