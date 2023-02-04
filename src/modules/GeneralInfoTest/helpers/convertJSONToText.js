// We use the function, when there is html tags in JSON.
const convertJSONToText = (dataArray) => {
    dataArray.forEach((data) => {
      if (document.querySelector(data.selector)) {
        document.querySelector(data.selector).innerHTML = JSON.parse(
          JSON.stringify(data.json)
        );
      }
    });
  };

  export {convertJSONToText};