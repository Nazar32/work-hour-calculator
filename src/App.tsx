import React from 'react';
import './App.css';
import 'react-day-picker/lib/style.css';
import { DatePicker } from './components/DatePicker';
import { WeekDaysEnum } from './enums/weekDays.enum';
import { useLocalStorage } from './hooks/useLocalStorage';
import { DateUtils } from './utils/Date';

const DEFAULT_WORK_DAY_HOURS = 8;
const DAY_OFF_SAVE_KEY = 'DAY_OFF';

function App() {
  const [initialDayOffs, saveDayOffs] = useLocalStorage<Date[]>(
    DAY_OFF_SAVE_KEY,
    [],
  );
  const [dayOffs, setDayOffs] = React.useState<Date[]>(
    initialDayOffs.map(d => new Date(d)),
  );

  const [currentMonth, setCurrentMonth] = React.useState(new Date());

  function getWorkDaysCount(): number {
    let count = 0;
    const currentDate = currentMonth.getDate();
    for (let i = 1; i <= currentDate; i++) {
      const date = new Date(currentMonth);
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

  function onMonthChange(month: Date) {
    const currentDate = new Date();
    if (month.getMonth() === currentDate.getMonth()) {
      setCurrentMonth(currentDate);
      return;
    }
    setCurrentMonth(new Date(month.getFullYear(), month.getMonth() + 1, 0));
  }

  const workHoursInCurrentMonth = getWorkDaysCount() * DEFAULT_WORK_DAY_HOURS;

  return (
    <div className="app">
      <div className="content">
        <h2>Work hours in current month: {workHoursInCurrentMonth}</h2>
        <DatePicker
          selectedDays={dayOffs}
          setSelectedDays={setDayOffs}
          month={currentMonth}
          onMonthChange={onMonthChange}
        />
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
