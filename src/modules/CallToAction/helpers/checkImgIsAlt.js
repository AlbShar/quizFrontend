
const checkIsImgAlt = (item, index) => {
    try {
      if (!item.alt) {
        throw new Error(
          `В массиве infoTestBlock(элемент №${index + 1}) пустое поле alt`
        );
      }
    } catch (e) {
      console.error(e);
    }
  };

  export {checkIsImgAlt}