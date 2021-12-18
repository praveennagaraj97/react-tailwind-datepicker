import type { NextPage } from 'next';
import { useState } from 'react';
import { DatePicker } from '../components/date-picker';
import { formattedDate } from '../utils/date-utils';

const Home: NextPage = () => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className="container mx-auto my-8">
      <div className="max-w-xs mx-auto">
        <DatePicker date={date} onChange={setDate} />
      </div>
      <pre className="my-8 block text-center">{formattedDate(date)}</pre>
    </div>
  );
};

export default Home;
