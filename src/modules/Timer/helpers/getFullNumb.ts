const getFullNumb = (numb: number): string => {
    return `${numb}`.length === 1 ? `0${numb}` : `${numb}`;
  };

export default getFullNumb;