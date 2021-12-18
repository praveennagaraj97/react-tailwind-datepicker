import {
  FC,
  Fragment,
  ReactNode,
  useContext,
  useLayoutEffect,
  useState,
} from 'react';
import { DatepickerCtx } from '../../../context/date-context';
import { beginningDayOfWeek, daysInMonth } from '../../../utils/date-utils';
import Header from './header';
import WeeksHeading from './weeks-display';

const DateSelector: FC = (props) => {
  const {
    selectDate,
    visible: { month, year },
    isSelectedDate,
  } = useContext(DatepickerCtx);
  const [dates, setDates] = useState<ReactNode[]>([]);

  useLayoutEffect(() => {
    const dates: ReactNode[] = [];

    // to pre fill with empty grid col based on starting date of the month.
    for (let i = 0; i < beginningDayOfWeek(month, year); i++) {
      dates.push(<div key={`emptybefore${i}`} />);
    }

    // start at index 1 - in the prev loop start date is filled
    for (let i = 1; i <= daysInMonth(month, year); i++) {
      dates.push(
        <button
          key={`day${i}`}
          className={`hover:bg-slate-500/10 rounded p-1 text-sm ${
            isSelectedDate(i) ? 'bg-slate-500/30 font-semibold' : ''
          }`}
          onClick={() => selectDate(i)}
          style={{ textAlign: 'center' }}
        >
          {i}
        </button>
      );
    }

    setDates(dates);
  }, [isSelectedDate, month, selectDate, year]);

  return (
    <Fragment>
      <Header />
      <div className=" grid grid-cols-7 items-stretch">
        <WeeksHeading />
        {dates}
      </div>
    </Fragment>
  );
};

export default DateSelector;
