import React from 'react'
import { Text, View } from 'react-native'
import { useBearStore } from '~/store/store'

export const Table = () => {

  const { setSelectedRow } = useBearStore()

  const values = [
    <View key="1" style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }} onTouchEnd={() => setSelectedRow('Linha 1')}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ width: '20%' }}><Text style={{ textAlign: 'center' }}>Teste 1</Text></View>
        <View style={{ width: '20%' }}><Text style={{ textAlign: 'center' }}>Teste maior</Text></View>
        <View style={{ width: '20%' }}><Text style={{ textAlign: 'center' }}>Teste 2</Text></View>
        <View style={{ width: '20%' }}><Text style={{ textAlign: 'center' }}>Tst menor</Text></View>
        <View style={{ width: '20%' }}><Text style={{ textAlign: 'center' }}>Observacoes</Text></View>
      </View>
    </View>,
    <View key="2" style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }} onTouchEnd={() => setSelectedRow('Linha 2')}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ width: '20%' }}><Text style={{ textAlign: 'center' }}>Teste 1</Text></View>
        <View style={{ width: '20%' }}><Text style={{ textAlign: 'center' }}>Teste maior</Text></View>
        <View style={{ width: '20%' }}><Text style={{ textAlign: 'center' }}>Teste 2</Text></View>
        <View style={{ width: '20%' }}><Text style={{ textAlign: 'center' }}>Tst menor</Text></View>
        <View style={{ width: '20%' }}><Text style={{ textAlign: 'center' }}>Observacoes</Text></View>
      </View>
    </View>,
  ]

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "column" }}>
          {values}
        </View>
      </View>

    </View>
  )
}



