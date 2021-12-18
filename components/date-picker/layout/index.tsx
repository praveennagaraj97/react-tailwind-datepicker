import { FC, useContext, useEffect, useState } from 'react';
import { DatepickerCtx } from '../../../context/date-context';
import MonthSelection from '../calendar/month-selection';
import YearSelection from '../calendar/year-selection';
import DateSelection from '../date-selector';

const DatePickerLayout: FC = () => {
  const { view } = useContext(DatepickerCtx);
  const [showChild, setShowChild] = useState<boolean>(false);

  useEffect(() => {
    let isCancelled = false;

    if (!isCancelled) {
      setShowChild(true);
    }

    return () => {
      isCancelled = true;
      setShowChild(false);
    };
  }, []);

  function SelectedView(): JSX.Element {
    switch (view) {
      case 'date':
        return <DateSelection />;
      case 'month':
        return <MonthSelection />;
      case 'year':
        return <YearSelection />;
      default:
        return <></>;
    }
  }

  if (!showChild) {
    return null;
  }

  return (
    <div className="relative drop-shadow-xl shadow-lg max-w-xs w-64 p-2 rounded-lg">
      <SelectedView />
    </div>
  );
};

export default DatePickerLayout;
