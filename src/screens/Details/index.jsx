import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Title from '../../components/Title'

import styles from "./styles";
import usersRepository from "../../models/user/UserRepository";
import { useEffect, useState } from "react";

export default function Details() {
    const navigation = useNavigation();
    const route = useRoute();
    const { id } = route.params;
    const [filial, setFilial] = useState([]);

    useEffect(() => {
        const filial = usersRepository.users.find((user) => user.id === id);
        setFilial(filial);
    }, [])

    const editFilial = () => {
        navigation.navigate("Form", { id: filial.id, edit: true });
    };

    const deleteFilial = () => {
        usersRepository.remove(filial.id);
        navigation.navigate("Filiais");
    };

    return (
        <View style={styles.container}>
            <Title title="Details" />

            {filial ? (
                <View>
                    <Text>Detalhes da Filial</Text>
                    <View style={styles.user}>
                        <View style={styles.userDetail}>
                            <Text style={styles.txt}>{filial.nomeFilial}</Text>
                            <Text style={styles.txt}>{filial.fundacao}</Text>
                            <Text style={{color: filial.corPrimaria, fontSize: 20}}>{filial.corPrimaria}</Text>
                            <Text style={{color: filial.corSecundaria, fontSize: 20}}>{filial.corSecundaria}</Text>
                            <Text style={styles.txt}>{filial.quantidadeFuncionarios}</Text>
                            <Text style={styles.txt}>{filial.capacidadeAlunosMatriculadosPorAno}</Text>
                            <Text style={styles.txt}>{filial.quantidadeTurmas}</Text>
                            <Text style={styles.txt}>{filial.endereco}</Text>
                            <Text style={styles.txt}>{filial.telefone}</Text>
                            <Text style={styles.txt}>{filial.email}</Text>
                            <Text style={styles.txt}>{filial.nomeResponsavel}</Text>
                            <Text style={styles.txt}>{filial.cargoResponsavel}</Text>
                        </View>
                        <View style={styles.userActions}>
                            <TouchableOpacity style={styles.editButton} onPress={editFilial}>
                                <Text style={styles.buttonTxt}>Editar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.editButton} onPress={deleteFilial}>
                                <Text style={styles.buttonTxt}>Excluir</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            ) : (
                <Text>Detalhes da filial não encontrada!</Text>
            )}
        </View>
    )
}