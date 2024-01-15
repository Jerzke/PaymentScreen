import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* White Box */}
      <View style={styles.whiteBox}>
        {/* Circular Image Box */}
        <View style={styles.circularImageContainer}>
          <Image
            source={require('./assets/success.png')}
            style={styles.circularImage}
          />
        </View>

        {/* Dollar Amount Sent */}
        <Text style={styles.dollarAmount}>$100.00</Text>

        {/* Centered Content */}
        <View style={styles.centeredContent}>
          {/* Image of the Sender */}
          <Image
            source={require('./assets/PlaceholderImage.jpg')}
            style={styles.profileImageContainer}
          />

          {/* User Info */}
          <View style={styles.userInfo}>
            {/* User Name */}
            <Text style={styles.userName}>John Doe</Text>

            {/* Email Address */}
            <Text style={styles.emailAddress}>john.doe@gmail.com</Text>
          </View>
        </View>

        {/* Success Text */}
        <Text style={styles.successText}>Sent successfully to Jane Doe</Text>

        {/* Transaction Text */}
        <Text style={styles.transactionText}>
          Transaction done on 15 January 2024, your reference number is 03492390
        </Text>

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Continue button pressed')}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#435573',
    justifyContent: 'center',
    padding: 16,
  },
  whiteBox: {
    height: 500,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    paddingHorizontal: 16,
    paddingBottom: 16,
    position: 'relative',
    justifyContent: 'space-between',
  },
  circularImageContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  circularImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  dollarAmount: {
    fontSize: 50,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
  centeredContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  profileImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 16,

  },
  userInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  emailAddress: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 8,
  },
  successText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    top: 120,
    left: 0,
    right: 0,
  },
  transactionText: {
    color: '#435573',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
  },
  button: {
    backgroundColor: 'blue',
    padding: 16,
    borderRadius: 5,
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
