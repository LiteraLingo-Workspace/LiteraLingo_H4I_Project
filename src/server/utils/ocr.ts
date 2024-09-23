import Tesseract from "tesseract.js";

export const imageToText = async (file: File): Promise<string> => {
  try {
    const imageUrl = await fileToString(file);
    const {
      data: { text },
    } = await Tesseract.recognize(imageUrl, "eng", {
      logger: (m) => console.log(m),
    });
    return text;
  } catch (error) {
    console.error("Error during OCR process:", error);
    throw error;
  }
};

const fileToString = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      resolve(base64String);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
