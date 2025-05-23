import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import styles from './styles';
import {ViewPassIcon} from '../../../assets/icons';

const LoginPage = () => {
  return (
    <View style={styles.mainWrapper}>
      <View>
        <Text style={styles.title}>Login</Text>
        <Text>
          Please enter your login details to continue using our service:
        </Text>
      </View>

      <View>
        <TextInput />
      </View>
      <View>
        <TextInput />
        <TouchableOpacity>
          <ViewPassIcon />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;
