/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// provides methods that interact with the Web Speech API
let supported = true;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let recognition: any;

const useTTS = () => {
  // @ts-expect-error type definitions don't include speech recognition
  if (!window?.webkitSpeechRecognition) {
    // if speech recognition isn't supported, set to trigger an error when the user attempts to use
    supported = false;
  } else {
    // if it is supported, set it up
    // @ts-expect-error type definitions don't include speech recognition
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";
  }

  return { textToSpeeh, speechToText };
};

const speechToText = () => {
  
  // check browser support
  if (!supported) {
    alert("Speech to text is not supported in your browser.");
    return new ReadableStream();
  }

  // create a stream for the data from the speech recognition
  return new ReadableStream({
    // start the speech recognition
    start(controller) {
      recognition.start();

      // when recognition recognizes a word, send it down the stream
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      recognition.onresult = (event: any) => {
        let output = "";

        // add all the data together
        for (const result of event.results) {
          output += result[0].transcript;
        }

        if (output != undefined) {
          try {
            controller.enqueue(output);
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          } catch (error) {
            recognition.abort();
          }
        }
      };
    },

    // stop the speech recognition
    cancel(_controller) {
      recognition.abort();
    },
  });
};

const textToSpeeh = (text: string) => {
  // check if tts is supported
  if (!speechSynthesis) {
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
};

export default useTTS;
