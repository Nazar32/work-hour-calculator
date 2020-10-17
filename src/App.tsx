import React from 'react';
import './App.css';
import 'react-day-picker/lib/style.css';
import { DatePicker } from './components/DatePicker';
import { WeekDaysEnum } from './enums/weekDays.enum';
import { useLocalStorage } from './hooks/useLocalStorage';
import { DateUtils } from './utils/Date';

const DEFAULT_WORK_DAY_HOURS = 9;
const DAY_OFF_SAVE_KEY = 'DAY_OFF';

function App() {
  const [initialDayOffs, saveDayOffs] = useLocalStorage<Date[]>(
    DAY_OFF_SAVE_KEY,
    [],
  );
  const [dayOffs, setDayOffs] = React.useState<Date[]>(
    initialDayOffs.map(d => new Date(d)),
  );

  function getWorkDaysCount(): number {
    let count = 0;
    const currentDate = new Date().getDate();
    for (let i = 1; i <= currentDate; i++) {
      const date = new Date();
      date.setDate(i);
      if (
        [WeekDaysEnum.SATURDAY, WeekDaysEnum.SUNDAY].includes(date.getDay()) ||
        dayOffs.find(dayOff => DateUtils.getDatesDayMonthEqual(dayOff, date))
      ) {
        continue;
      }
      count++;
    }
    return count;
  }

  function addDayOff() {
    saveDayOffs(dayOffs);
  }

  const workHoursInCurrentMonth = getWorkDaysCount() * DEFAULT_WORK_DAY_HOURS;

  return (
    <div className="app">
      <div className="content">
        <h2>Work hours in current month: {workHoursInCurrentMonth}</h2>
        <DatePicker selectedDays={dayOffs} setSelectedDays={setDayOffs} />
        <button
          className="halfWidth endAlign"
          disabled={initialDayOffs.length === dayOffs.length}
          onClick={addDayOff}
        >
          Save day-off
        </button>
      </div>
    </div>
  );
}

export default App;
