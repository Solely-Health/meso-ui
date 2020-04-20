import { CalendarEvent } from '../../components/Calendar/Calendar';

interface SampleCalendar {
  start: string;
  end: string;
  events: CalendarEvent[];
}

export const sampleCalendar: SampleCalendar = {
  start: '2020-4-19',
  end: '2020-4-28',
  events: [
    {
      name: 'Shift',
      start: '2020-4-22 10:0',
      end: '2020-4-22 16:15',
      color: 'blue',
    },
    {
      name: 'Shift',
      start: '2020-4-13 9:45',
      end: '2020-4-13 16:15',
      color: 'grey',
    },
    {
      name: 'Shift',
      start: '2020-4-14 9:30',
      end: '2020-4-14 11:15',
      color: 'grey',
    },
    {
      name: 'Shift',
      start: '2020-4-16 9:30',
      end: '2020-4-16 11:15',
      color: 'grey',
    },
    {
      name: 'Shift',
      start: '2020-4-20 11:0',
      end: '2020-4-20 14:0',
      color: 'grey',
    },
    {
      name: 'Shift',
      start: '2020-4-24 9:0',
      end: '2020-4-24 14:0',
      color: 'blue',
    },
    {
      name: 'Shift',
      start: '2020-4-28 10:0',
      end: '2020-4-28 14:0',
      color: 'blue',
    },
  ],
};
