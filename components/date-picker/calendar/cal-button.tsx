import { FiChevronLeft, FiChevronsRight } from 'react-icons/fi';

const CalButton: React.FC<{
  chevron?: 'right' | 'left';
  className?: string;
  style?: React.StyleHTMLAttributes<HTMLButtonElement>;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}> = (props) => {
  let children = null;

  if (props.chevron && props.chevron === 'left')
    children = <FiChevronLeft size={20} className="stroke-current" />;
  else if (props.chevron && props.chevron === 'right')
    children = <FiChevronsRight size={20} className="stroke-current" />;
  else children = props.children;

  return (
    <button
      className={`hover:bg-gray-200 rounded p-1 text-sm flex align-center justify-center focus:outline-none ${props.className}`}
      style={props.style}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
};

export default CalButton;
