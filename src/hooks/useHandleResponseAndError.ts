const useHandleResponseAndError = (
  snapshot: any,
  refer: string,
  reject: (error: any) => void,
  transformData?: (data: any) => any,
) => {
  
  if (!snapshot.exists()) {
    reject(
      new Error(
        `No Response found. Check your path (refer variable). Value - ${refer}`,
      ),
    );
  }

  const getResponse = () => {
    return snapshot.val();
  };

  if (!getResponse()) {
    reject(new Error(`Response  (${getResponse()})  is unavailable. Check it`));
  }

  const getValue = () => {
    if (transformData) {
      return transformData(getResponse());
    } else {
      getResponse();
    }
  };

  return {
    getValue,
  };
};

export { useHandleResponseAndError };
