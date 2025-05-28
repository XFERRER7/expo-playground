export type DailyRecord = {
  date: string; // formato YYYY-MM-DD
  records: {
    firstShiftEntry?: string
    firstShiftExit?: string
    secondShiftEntry?: string
    secondShiftExit?: string
  };
};

export type TimeRecords = DailyRecord[];