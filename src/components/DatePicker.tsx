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
  month?: Date;
  onMonthChange?: (date: Date) => void;
}

export function DatePicker({
  selectedDays,
  setSelectedDays,
  month,
  onMonthChange,
}: Props) {
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

  function handleMonthChange(date: Date) {
    if (onMonthChange) {
      onMonthChange(date);
    }
  }

  return (
    <DayPicker
      modifiers={modifiers}
      modifiersStyles={modifiersStyles}
      onDayClick={handleDayClick}
      selectedDays={selectedDays}
      month={month}
      onMonthChange={handleMonthChange}
    />
  );
}
