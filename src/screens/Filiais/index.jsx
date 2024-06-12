import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, TextInput } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import {
  Provider,
  Button,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
} from "@react-native-material/core";

import styles from "./styles";
import Title from "../../components/Title";
import usersRepository from "../../models/user/UserRepository";

export default function Filiais() {
  const [visible, setVisible] = useState(false);
  const [searchBar, setSearchBar] = useState("");

  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    if (isFocused) {
      const users = usersRepository.getAll();
      setAllUsers(users);
      setFilteredUsers(users);
    }
  }, [isFocused]);

  useEffect(() => {
    const filtered = allUsers.filter((user) =>
      user.nomeFilial.toLowerCase().includes(searchBar.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchBar, allUsers]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de listagem de todos as filiais</Text>
      <View>
        <TextInput
          style={styles.searchBar}
          placeholderTextColor={"#fff"}
          placeholder="Pesquisar"
          onChangeText={setSearchBar}
          value={searchBar}
        />
      </View>

      {filteredUsers.length > 0 ? (
        <View style={styles.userList}>
          {filteredUsers.map((user) => (
            <View key={user.id} style={styles.userItem}>
              <View>
                <Text style={styles.nome}>{user.nomeFilial}</Text>
              </View>

              <View style={styles.userActions}>
                <TouchableOpacity
                  style={styles.detailsButton}
                  onPress={() => navigation.navigate('Details', {id: user.id})}
                >
                  <Text style={styles.title}>Detalhes</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      ) : (
        <Text>Não há usuários cadastrados</Text>
      )}
    </View>
  );
};
