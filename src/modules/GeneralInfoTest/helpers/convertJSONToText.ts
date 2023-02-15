// We use the function, when there is html tags in JSON.
interface IJSONText {
  selector: string;
  json: string;
}

const convertJSONToText = (dataArray: IJSONText[]): void => {
    dataArray.forEach((data) => {
      if (document.querySelector(data.selector)) {
        (document.querySelector(data.selector) as HTMLHtmlElement).innerHTML = JSON.parse(
          JSON.stringify(data.json)
        );
      }
    });
  };

  export {convertJSONToText};