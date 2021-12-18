import { useContext } from 'react';
import { DatepickerCtx } from '../../../context/date-context';
import { monthNames } from '../../../utils/date-utils';
import CalButton from './cal-button';

const MonthSelection: React.FC<{}> = (props) => {
  const { viewYears, selectMonth, nextYear, prevYear, visible } =
    useContext(DatepickerCtx);

  return (
    <div
      className="h-48"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateRows: '2rem auto',
        alignItems: 'stretch',
      }}
    >
      <div className="flex" style={{ gridColumn: '1/5' }}>
        <CalButton chevron="left" onClick={(e) => prevYear()} />
        <CalButton className="flex-grow" onClick={(e) => viewYears()}>
          {visible.year}
        </CalButton>
        <CalButton chevron="right" onClick={(e) => nextYear()} />
      </div>

      {monthNames.map((month, index) => (
        <CalButton key={index} onClick={(e) => selectMonth(index)}>
          {month.substring(0, 3)}
        </CalButton>
      ))}
    </div>
  );
};

export default MonthSelection;
