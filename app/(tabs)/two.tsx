import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from '~/components/Button';

import { TimeButton } from '~/components/TimeButton';
import moment from 'moment-timezone';

interface IWorkLog {
  id: string
  date?: string
  firstShiftEntry?: string
  firstShiftExit?: string
  secondShiftEntry?: string
  secondShiftExit?: string
}

moment.tz.setDefault('America/Sao_Paulo');

export default function Home() {

  const [isCreatingNewWorkLog, setIsCreatingNewWorkLog] = useState(false);
  const [records, setRecords] = useState<IWorkLog[]>([]);

  const [newWorkLog, setNewWorkLog] = useState<IWorkLog>({
    id: '',
    date: undefined,
    firstShiftEntry: undefined,
    firstShiftExit: undefined,
    secondShiftEntry: undefined,
    secondShiftExit: undefined,
  });


  function recordTime(type: keyof IWorkLog) {
    // const hour = moment().format('HH:mm');
    // const date = moment().format('DD/MM/YYYY');
    // const completeDate = moment().format('YYYY-MM-DD HH:mm:ss');

    //por equanto, usar horarios e data aleatorios
    const hour = moment().add(Math.floor(Math.random() * 10), 'hours').format('HH:mm');
    const date = moment().add(Math.floor(Math.random() * 10), 'hours').format('DD/MM/YYYY');
    const completeDate = moment().add(Math.floor(Math.random() * 10), 'hours').format('YYYY-MM-DD HH:mm:ss');

    const workLog: IWorkLog = { ...newWorkLog, [type]: hour, date: date, id: completeDate };
    setNewWorkLog(workLog);
  }

  useEffect(() => {
    setRecords([]);
  }, []);

  return (
    <>
      <Stack.Screen options={{ title: 'Tab Two' }} />

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
       
      </ScrollView>
    </>
  );
}
