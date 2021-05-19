import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Home Screen</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Products List')}>
        <Text style={{ fontSize: 20, color: '#266ed4', fontWeight: 'bold' }}>
          Manage Products
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Employees List')}>
        <Text style={{ fontSize: 20, color: '#266ed4', fontWeight: 'bold' }}>
          Manage Employees
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Orders List')}>
        <Text style={{ fontSize: 20, color: '#266ed4', fontWeight: 'bold' }}>
          Manage Orders
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function ProductsList({ navigation }) {
  const products = [
    {
      name: 'Bloody G530 Gaming Headset',
      price: 'Rs. 4000',
      image:
        'https://static-01.daraz.pk/p/7a23da8fa73242ae8e46c6349766ef93.jpg',
      description:
        'Experience true directional sound to detect your enemies based on their location and immerse yourself in virtual gaming worlds.Omni-Directional Noise-Canceling Mic.Suspended Headband50mm Speaker Unit. Dazzling Red Light',
    },
    {
      name: 'Razer Black Widow Elite Keyboard',
      price: 'Rs. 10,000',
      image: 'https://www.slashgear.com/wp-content/uploads/2018/08/keyaha.jpg',
      description:
        'The NPD Group, Inc., U.S. Retail Tracking Service, Gaming Designed: Keyboards, Mice, PC Headsets, and PC MicrophonesSignature Mechanical Switch for Gaming: Razer Green switch technology provides a satisfying clicky sound with 50 G of actuation force, ideal for typing and gaming requiring the highest accuracyUltimate Personalization & Gaming Immersion with Razer Chroma: Fully syncs with popular games, Razer hardware, Philips Hue, and gear from 30+ partners, supports 16.8 million colors on individually backlit keysFully Programmable Macros: Razer Hypershift allows for all keys and keypress combinations to be remapped to execute complex commandsErgonomic, Magnetic Wrist Rest: Made of plush leatherette to maximize comfort over extended gaming sessions. Durable Construction: Supports up to 80 million clicks, made of military-grade metal top plate',
    },
    {
      name: 'Razer Deathadder Elite',
      price: 'Rs. 9000',
      image:
        'https://www.cnet.com/a/img/nEsdX93e6YwdOXSnaGZO0njAuyk=/940x0/2019/03/26/0cbb8b14-4263-4bdc-a064-702eff96e505/razer-deathadder-elite-01.jpg',
      description:
        "The world's most advanced optical sensor Equipped with the new esports-grade optical sensor that has true 16,000 DPI and true tracking at 450 Inches Per Second (IPS), the Razer DeathAdder Elite gives you the absolute advantage of having the fastest sensor in the world.",
    },
    {
      name: 'Logitech G402 Hyperion Fury',
      price: 'Rs. 5000',
      image:
        'https://i1.wp.com/effemeride.com/wp-content/uploads/2019/07/Logitech-G402-Hyperion-Fury-%E2%80%93-Use_thumb.jpg?ssl=1',
      description:
        "Responsiveness:USB data format: 16 bits/axis USB report rate: 1000 Hz (1ms) Microprocessor: 32-bit. Fusion Engine hybrid sensor,8 programmable buttons,On-the-fly DPI Switching,32-bit ARM processor,1 millisecond report,High-speed clicking,Full-speed USB. 4 on-the-fly DPI settings,Tracking Resolution: 240-4000 dpi Max. acceleration: >16G* Max. speed: >500 ips*. Glide:Dynamic coefficient of friction -: .09 µ (k)* Static coefficient of friction -: .14 µ (s)*.Dimension and Weight: Height: 5.4 in (136 mm),Width: 2.8 in (72 mm),Depth: 1.6 in (41 mm) Weight: 5.1 oz (144 grams,mouse plus cable), 3.8 oz (108 grams,mouse without cable),Length Cable: 7 ft. ( 2.1 m). World's fastest gaming mouse: Fusion Engine technology and 1MS report rate enables tracking speeds of up to 10 meters/second (420 ips). 8 programmable buttons: Customize your gaming experience and save button settings to the onboard memory",
    },
    {
      name: 'ADATA SWORDFISH 250 GB SSD',
      price: 'Rs. 7500',
      image:
        'http://www.eezepc.com/wp-content/uploads/2020/10/Adata-swordfish-250gb.jpg',
      description:
        'Get the best out of your creative mind with the ADATA SWORDFISH PCIe Gen3x4 M. 2 2280 solid state drive. Built with 3D NAND Flash and featuring support for the PCIe Gen3x4 interface, it delivers up to 2TB of capacity and read/write performance of up to 1800/1200MB per second.',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>List of Products</Text>
      <ScrollView>
        {products.map((product) => (
          <View style={styles.cardContainer} key={product.name}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Products Details', { product })
              }>
              <Text style={styles.name}>{product.name}</Text>
              <Text style={styles.textSecondary}>{product.price}</Text>
            </TouchableOpacity>
            <Image style={styles.image} source={{ uri: product.image }} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

function ProductsDetails({ route, navigation }) {
  const { product } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Product Details</Text>
      <ScrollView style={styles.cardContainer}>
        <Text style={[styles.name, { marginBottom: 10 }]}>
          Product Name:{' '}
          <Text style={{ fontWeight: 'normal' }}>{product.name}</Text>
        </Text>
        <Text style={[styles.name, { marginBottom: 10 }]}>
          Price: <Text style={{ fontWeight: 'normal' }}>{product.price}</Text>
        </Text>
        <Image
          style={[styles.image, { marginVertical: 10 }]}
          source={{ uri: product.image }}
        />
        <Text style={[styles.name, { marginBottom: 10 }]}>
          Description:{' '}
          <Text style={{ fontWeight: 'normal' }}>{product.description}</Text>
        </Text>
      </ScrollView>
    </View>
  );
}

function EmployeesList({ navigation }) {
  const employees = [
    {
      name: 'Esfandyar Ali Khan',
      designation: 'CEO',
      image:
        'https://i.tribune.com.pk/media/images/1620557-AsfandyarWaliKhan-1517156085/1620557-AsfandyarWaliKhan-1517156085.JPG',
      salary: 'Rs. 1,000,000',
    },
    {
      name: 'Hamza Rafique',
      designation: 'Manager',
      image:
        'https://i.tribune.com.pk/media/images/hamza1611131834-0/hamza1611131834-0.gif',
      salary: 'Rs. 400,000',
    },
    {
      name: 'Ghulam Jaffar',
      designation: 'Game Developer',
      image:
        'https://i.pinimg.com/474x/4e/66/94/4e6694e2547f79418ad8ed47729e3793.jpg',
      salary: 'Rs. 200,000',
    },
    {
      name: 'Awais Aqeel',
      designation: 'Junior Developer',
      image: 'https://www.parhlo.com/wp-content/uploads/2021/01/te.jpg.webp',
      salary: 'Rs. 100,000',
    },
    {
      name: 'Hammad Jamil',
      designation: 'Chotu at Company Cafe',
      image:
        'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vbWVkaWEucmJsLm1zL2ltYWdlP3U9JTJGZmlsZXMlMkYyMDE3JTJGMDElMkYxNSUyRjYzNjIwMTEwNzI2NTUxNDM0NDE3OTQxMDQ0Mjdfc2hvcnQucG5nJmhvPWh0dHBzJTNBJTJGJTJGYXo2MTY1Nzgudm8ubXNlY25kLm5ldCZzPTMxMyZoPTVhZmQ1Njk2NzNiZDJkZTFkMjhiMmM1MTk1YWViNDIwM2U5YTk5ZDNlNzkxMzkxYTk1ZmNhMDJlYmQ0ZmU5YTkmc2l6ZT05ODB4JmM9MzAwOTk1NjEzNCIsImV4cGlyZXNfYXQiOjE2NzMzOTgxNzV9.FE7Sj1wrxaD7EXWY25HP_EwTXDBpTXLxoxKLa4b4-Tc/img.jpg?width=1200&height=628',
      salary: 'Rs. 20,000',
    },
  ];
  return (
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <Text style={styles.textStyle}>List of Employees</Text>
      <ScrollView>
        <View>
          {employees.map((employee) => (
            <TouchableOpacity
              key={employee.name}
              onPress={() =>
                navigation.navigate('Employee Details', { employee })
              }
              style={{
                borderBottomColor: '#b5b5b5',
                borderBottomWidth: 0.25,
              }}>
              <Text style={styles.name}>{employee.name}</Text>
              <Text style={styles.textSecondary}>{employee.designation}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

function EmployeeDetails({ route, navigation }) {
  const { employee } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Employee Details</Text>
      <View style={styles.cardContainer}>
        <Text style={[styles.name, { marginBottom: 10 }]}>
          Name: <Text style={{ fontWeight: 'normal' }}>{employee.name}</Text>
        </Text>
        <Text style={[styles.name, { marginBottom: 10 }]}>
          Designation:{' '}
          <Text style={{ fontWeight: 'normal' }}>{employee.designation}</Text>
        </Text>
        <Text style={[styles.name, { marginBottom: 10 }]}>
          Salary:{' '}
          <Text style={{ fontWeight: 'normal' }}>{employee.salary}</Text>
        </Text>
        <Image
          style={[styles.empPic, { marginVertical: 10 }]}
          source={{ uri: employee.image }}
        />
      </View>
    </View>
  );
}
function OrdersList({ navigation }) {
  const orders = [
    {
      orderNum: 101,
      productName: 'Razer Deathadder Elite',
      price: 9000,
      customer: {
        name: 'Awais',
        phone: '0300-9898999',
        address: 'Street # 18, DHA-I, Islamabad',
      },
    },
    {
      orderNum: 102,
      productName: 'Bloody G530 Gaming Headset',
      price: 4000,
      customer: {
        name: 'Ghulam Jaffar',
        phone: '0300-7878999',
        address: 'Some Street, Kuri Road, Islamabad',
      },
    },
    {
      orderNum: 103,
      productName: 'Logitech G402 Hyperion Fury',
      price: 5000,
      customer: {
        name: 'Hamza',
        phone: '0300-6969420',
        address: 'That Street, PWD, Rawalpindi',
      },
    },
  ];
  return (
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <Text style={styles.textStyle}>List of Orders</Text>
      <ScrollView>
        <View>
          {orders.map((order) => (
            <TouchableOpacity
              key={order.orderNum}
              onPress={() => navigation.navigate('Order Details', { order })}
              style={{
                borderBottomColor: '#b5b5b5',
                borderBottomWidth: 0.25,
              }}>
              <Text style={styles.name}>Order Number: {order.orderNum}</Text>
              <Text style={styles.name}>{order.productName}</Text>
              <Text style={styles.textSecondary}>Rs. {order.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
function OrderDetails({ route, navigation }) {
  const { order } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Order Details</Text>
      <View style={styles.cardContainer}>
        <Text style={[styles.name, { marginBottom: 10 }]}>
          Order Number:{' '}
          <Text style={{ fontWeight: 'normal' }}>{order.orderNum}</Text>
        </Text>
        <Text style={[styles.name, { marginBottom: 10 }]}>
          Product Name:{' '}
          <Text style={{ fontWeight: 'normal' }}>{order.productName}</Text>
        </Text>
        <Text style={[styles.name, { marginBottom: 10 }]}>
          Price: <Text style={{ fontWeight: 'normal' }}>Rs. {order.price}</Text>
        </Text>
        <Text style={[styles.name, { marginBottom: 10 }]}>
          Customer's Name:{' '}
          <Text style={{ fontWeight: 'normal' }}>{order.customer.name}</Text>
        </Text>
        <Text style={[styles.name, { marginBottom: 10 }]}>
          Customer's Address:{' '}
          <Text style={{ fontWeight: 'normal' }}>{order.customer.address}</Text>
        </Text>
        <Text style={[styles.name, { marginBottom: 10 }]}>
          Customer's Phone Number:{' '}
          <Text style={{ fontWeight: 'normal' }}>{order.customer.phone}</Text>
        </Text>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Products List" component={ProductsList} />
        <Stack.Screen name="Products Details" component={ProductsDetails} />
        <Stack.Screen name="Employees List" component={EmployeesList} />
        <Stack.Screen name="Employee Details" component={EmployeeDetails} />
        <Stack.Screen name="Orders List" component={OrdersList} />
        <Stack.Screen name="Order Details" component={OrderDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  textStyle: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
  },
  cardContainer: {
    marginVertical: 10,
    paddingHorizontal: 2,
  },
  name: {
    fontSize: 18,
    color: '#474141',
    fontWeight: 'bold',
  },
  textSecondary: {
    fontSize: 16,
    color: '#266ed4',
    marginBottom: 8,
  },
  image: {
    width: 320,
    height: 250,
  },
  empPic: {
    width: 300,
    height: 350,
  },
});

export default App;
