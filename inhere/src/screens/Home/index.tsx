import { FlatList,Text, TextInput, TouchableOpacity, View, Alert } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./style";

const participants = [
  'Daniel Sousa',
  'Marlene',
  'Andreane',
  'Ivaldo',
  'Denilson',
  'Aline',
  'Lorenna',
  'Maiza',
  'Rayele'
]


export  function Home() {


  function handleParticipantAdd (){
    if(participants.includes('Daniel Sousa')){
      return Alert.alert('Participante existe', 'Já existe participante com esse nome')
    }
    
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado')
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor= "#6B6B6B"
        />

        <TouchableOpacity  style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({item}) =>(
          <Participant  
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove("Rodrigo")} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=>(
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      
      />
    </View>
  )
}