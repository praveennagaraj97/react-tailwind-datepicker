import { useContext } from 'react';
import { DatepickerCtx } from '../../../context/date-context';
import CalButton from './cal-button';

const YearSelection: React.FC<{}> = (props) => {
  const {
    selectYear,
    prevDecade,
    nextDecade,
    visible: { year },
  } = useContext(DatepickerCtx);

  let years = [];
  let [minYear, maxYear] = [year - 6, year + 6];

  for (let i = minYear; i < maxYear; i++) {
    years.push(
      <CalButton key={'year' + i} onClick={(e) => selectYear(i)}>
        {i}
      </CalButton>
    );
  }

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
        <CalButton chevron="left" onClick={(e) => prevDecade()} />
        <CalButton className="flex-grow">
          {`${minYear} - ${maxYear - 1}`}
        </CalButton>
        <CalButton chevron="right" onClick={(e) => nextDecade()} />
      </div>

      {years}
    </div>
  );
};

export default YearSelection;
