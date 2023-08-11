import emailjs from '@emailjs/browser';

const YOUR_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const YOUR_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const YOUR_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

type TValues = {
  [key in string]: string;
};

type TResponse = {
  status: number;
  text: string;
};

const sendEmailApi = async (values: TValues): Promise<boolean> => {
  try {
    if (YOUR_SERVICE_ID && YOUR_TEMPLATE_ID) {
      const response: TResponse = await emailjs.send(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        values,
        YOUR_PUBLIC_KEY,
      );

      if (response.text === 'OK') {
        return true;
      } else {
        throw new Error(`EmailJSResponse has status - ${response.status} and text - ${response.text}`);
      }
    } else {
      throw new Error(`Check values of API KEYS in EMAILJS`);
    }
  } catch (e: any) {
    if (e instanceof Error) {
      console.error(`There is an error in sendEmailApi file - ${e}`);
    } else {
      console.error('Unexpected error', e);
    }

    return false;
  }
};

export default sendEmailApi;
