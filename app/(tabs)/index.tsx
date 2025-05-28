// screens/HomeScreen.tsx
import { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'
import { TimeButton } from '~/components/TimeButton'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Stack } from 'expo-router';
import moment from 'moment-timezone';
import { Table } from '~/components/Table';
import { useBearStore } from '~/store/store';
import { MainModal } from '~/components/MainModal';
import { Dropdown } from '~/components/Dropdown';

moment.tz.setDefault('America/Sao_Paulo');

export default function Home() {


  const { selectedRow } = useBearStore()

  const [modalVisible, setModalVisible] = useState(false)
  const [dropdownValue, setDropdownValue] = useState<string>('');

  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <View className="flex-1 justify-center p-4 gap-5">

        {
          selectedRow && (
            <Text className="text-lg font-semibold mb-4 mx-auto">
              Linha Selecionada: {selectedRow}
            </Text>
          )
        }

        <Button
          title="Abrir Modal"
          onPress={() => setModalVisible(true)}
        />

        <Dropdown
          value={dropdownValue}
          setValue={setDropdownValue}
        />

        <Table />

        <MainModal
          visible={modalVisible}
          setVisible={setModalVisible}
          title='Modal de Teste'
          height={1000}
          marginTop={100}
        >
          <View style={{ height: 300 }}>

          </View>
        </MainModal>

      </View>
    </>
  )
}