import React, { useState } from 'react';
import {
  SafeAreaView, Image, StyleSheet, Text,
} from 'react-native';

import {
  Input, Button, Icon,
} from 'react-native-elements';

import { LogoInalum } from '../../assets/logo';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [statemail, setstatemail] = useState(false);

  const [password, setPassword] = useState('');
  const [statepass, setstatepass] = useState(false);

  const handleLogin = () => {
    if (email !== 'admin@inalum.id') {
      setstatemail(true);
      setstatepass(false);
    } else if (password !== 'masukaja') {
      setstatemail(false);
      setstatepass(true);
    } else {
      setstatemail(false);
      setstatepass(false);
      navigation.replace('Home');
    }
  };
  return (

    <SafeAreaView style={styles.container}>
      <Image source={LogoInalum} style={styles.logo} />

      <Text />

      <Input
        placeholder="Email"
        leftIcon={(
          <Icon
            name="user"
            type="font-awesome"
            size={24}
            color="#273c75"
          />
    )}

        value={email}
        errorStyle={{ color: 'red' }}
        errorMessage={(statemail ? 'Email Salah' : '')}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Password"
        leftIcon={(
          <Icon
            name="lock"
            type="font-awesome"
            size={24}
            color="#273c75"
          />
      )}
        value={password}
        errorStyle={{ color: 'red' }}
        errorMessage={(statepass ? 'Password anda Salah' : '')}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button
        onPress={() => handleLogin()}
        style={styles.button}
        title="  Login  "
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: 100,

  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default Login;
