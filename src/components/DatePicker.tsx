import DayPicker, { DayModifiers } from 'react-day-picker';
import React, { SetStateAction } from 'react';
import { DateUtils } from '../utils/Date';

const modifiers = {
  holidays: { daysOfWeek: [0, 6] },
};

const modifiersStyles = {
  holidays: {
    color: 'red',
  },
};

interface Props {
  selectedDays: Date[];
  setSelectedDays: React.Dispatch<SetStateAction<Date[]>>;
}

export function DatePicker({ selectedDays, setSelectedDays }: Props) {
  function handleDayClick(day: Date, { selected }: DayModifiers) {
    if (selected) {
      setSelectedDays(selectedDays =>
        selectedDays.filter(selectedDay =>
          DateUtils.getDatesDayMonthEqual(selectedDay, day),
        ),
      );
      return;
    }
    setSelectedDays(selectedDays => [...selectedDays, day]);
  }

  return (
    <DayPicker
      modifiers={modifiers}
      modifiersStyles={modifiersStyles}
      onDayClick={handleDayClick}
      selectedDays={selectedDays}
    />
  );
}
