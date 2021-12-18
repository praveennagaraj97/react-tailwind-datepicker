import { AnimatePresence, motion, Variant } from 'framer-motion';
import React from 'react';
import { FcCalendar } from 'react-icons/fc';
import { DatepickerCtx, useDatepickerCtx } from '../../context/date-context';
import { formattedDate } from '../../utils/date-utils';
import DatePickerLayout from './layout';

export const inputStyle = {
  paddingTop: '0.375rem',
  paddingBottom: '0.375rem',
};

interface DatePickerProps {
  date: Date;
  onChange: (date: Date) => void;
}

export const DatePicker: React.FC<DatePickerProps> = ({ date, onChange }) => {
  const ctxValue = useDatepickerCtx(date, onChange);

  const varients: { animate: Variant; initial: Variant; exit: Variant } = {
    animate: { y: 0, opacity: 1 },
    exit: { opacity: 0 },
    initial: { y: '-10%', opacity: 0 },
  };

  return (
    <DatepickerCtx.Provider value={ctxValue}>
      <div className="relative cursor-pointer w-full">
        <input
          className="common-input drop-shadow-sm"
          placeholder="Date of birth"
          type="text"
          value={formattedDate(date)}
          onFocus={() => ctxValue.showCalendar()}
          readOnly
        />
        <button
          onClick={(e) => ctxValue.toggleCalendar()}
          className="absolute right-0 top-0 h-full flex items-center p-2"
        >
          <FcCalendar fontSize={24} />
        </button>
        <AnimatePresence exitBeforeEnter>
          {ctxValue.isVisible && (
            <motion.div
              variants={varients}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute left-0 z-10 bg-white"
            >
              <DatePickerLayout />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </DatepickerCtx.Provider>
  );
};
