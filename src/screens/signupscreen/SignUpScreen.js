import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';
const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.heading}>Create an account</Text>
          <Text style={styles.bottomText}>Enter your information here</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.sideHeading}>Full Name</Text>
          <TextInput
            placeholder="Enter name"
            onChange={setName}
            style={styles.input}
          />
          <Text style={styles.sideHeading}>Email</Text>
          <TextInput
            placeholder="Enter name"
            onChange={setEmail}
            style={styles.input}
          />
          <Text style={styles.sideHeading}>Password</Text>
          <TextInput
            placeholder="Enter name"
            onChange={setName}
            style={styles.input}
          />
          <TextInput />
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            style={styles.buttonView}>
            <View style={styles.rowButtonText}>
              <Text style={styles.buttonText}>Sign Up</Text>
              <Icon name="arrowright" color="white" size={20} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}style={styles.signInView}>
          <Text>Already have an account? </Text>
          <Text style={styles.sideHeading}>Sign In</Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
