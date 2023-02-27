import { ScrollView,Text, TextInput, TouchableOpacity, View } from "react-native";

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
    console.log("Add participant");
    
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover o participante ${name}`);
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

      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map(participant => (
          <Participant 
            key={participant}
            name={participant}
            onRemove={()=> handleParticipantRemove("Daniel")}
          />
        ))}
        
      </ScrollView>
    </View>
  )
}