import React from 'react';
import { Text, View, Button, ScrollView, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./styles";

//Impor Icons
import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome5
} from '@expo/vector-icons';

//Import React Native Material
import { Avatar } from "@react-native-material/core";

export default function Profile() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.avatar}>
          <Avatar image={require('../../../assets/eu.jpg')} size={100} />
          <View style={styles.infos}>
            <Text style={styles.title}>Pablo Daniel Couto</Text>
            <Text style={styles.subTitle}>Desenvolvedor Full Stack</Text>
            <View style={styles.icons}>
              <AntDesign name="github" size={24} color="#808080" />
              <MaterialCommunityIcons name="gmail" size={24} color="#808080" />
              <AntDesign name="linkedin-square" size={24} color="#808080" />
            </View>
          </View>
        </View>
        <View style={styles.sobreMim}>
          <Text style={styles.sobreTxt}>
            Sou Pablo Daniel Couto e aluno do SENAI de Valinhos cursando Desenvolvimento de Sistemas(DS) há 1 ano, com grande vontade no aprendizado de programação que ao longo do tempo de estudo obteve conhecimento em HTML5, CSS3, JavaScript, React, React Native e NodeJS.
          </Text>
          <Text style={styles.projectsTitle}>Projetos</Text>
          <View style={styles.carrosel}>
            <ScrollView horizontal>
              <Image
                source={require('../../../assets/valorant.png')}
                style={styles.imagesProjects}
              />
              <Image
                source={require('../../../assets/projeto.png')}
                style={styles.imagesProjects}
              />
            </ScrollView>
          </View>
          <Text style={styles.techsTitle}>Tecnologias:</Text>
          <View style={styles.tech}>
            <FontAwesome5 name="html5" size={40} color="#fff" />
            <FontAwesome5 name="css3" size={40} color="#fff" />
            <FontAwesome5 name="js" size={40} color="#fff" />
            <FontAwesome5 name="react" size={40} color="#fff" />
            <FontAwesome5 name="node-js" size={40} color="#fff" />
          </View>
        </View>
      </ScrollView >
      <StatusBar style="auto" />
    </View>
  );
}
