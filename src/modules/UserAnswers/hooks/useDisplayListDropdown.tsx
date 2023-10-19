import { useState, useEffect } from 'react';

export const useDisplayListDropdown = () => {
  const [isActive, setActive] = useState<boolean>(false);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (!target.closest('ul') && !target.closest('button')) {
        setActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return { isActive, setActive };
};

