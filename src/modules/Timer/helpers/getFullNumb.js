const getFullNumb = (numb) => {
    return `${numb}`.length === 1 ? `0${numb}` : numb;
  };

export default getFullNumb;