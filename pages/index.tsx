import type { NextPage } from 'next';
import { useState } from 'react';
import { DatePicker } from '../components/date-picker';

const Home: NextPage = () => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className="container mx-auto my-8">
      <div className="max-w-xs mx-auto">
        <DatePicker date={date} onChange={setDate} />
      </div>
    </div>
  );
};

export default Home;
