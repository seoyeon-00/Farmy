import { useEffect, useState } from 'react';

type DropDownType = {
  ref: React.RefObject<HTMLElement>;
  initialState: boolean;
};

export const useDropDown = ({ ref, initialState }: DropDownType) => {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    const handleMouseOut = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.relatedTarget as Node)) {
        setIsOpen(false);
      }
    };

    const handleMouseOver = () => {
      setIsOpen(true);
    };

    const element = ref.current;

    if (element) {
      element.addEventListener('mouseover', handleMouseOver);
      element.addEventListener('mouseout', handleMouseOut);
    }

    return () => {
      if (element) {
        element.removeEventListener('mouseover', handleMouseOver);
        element.removeEventListener('mouseout', handleMouseOut);
      }
    };
  }, [ref, isOpen]);

  return { isOpen, setIsOpen };
};
