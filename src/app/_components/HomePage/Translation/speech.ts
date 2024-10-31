// provides methods that interact with the Web Speech API
let supported = true;
let recognition: any;
let tts;

const useTTS = () => {

  // @ts-ignore
  if (!webkitSpeechRecognition) {
    // if speech recognition isn't supported, set to trigger an error when the user attempts to use
    supported = false;
  } else {
    // if it is supported, set it up
    // @ts-ignore
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";
  }

  return { textToSpeeh, speechToText };

}

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
      recognition.onresult = (event: any) => {

        let output = "";

        // add all the data together
        for (let result of event.results) {
          // @ts-ignore
          output += result[0].transcript;
        }

        if (output != undefined) {
          try {
            controller.enqueue(output);
          } catch (error) {
            recognition.abort();
          }
        }

      }
    },

    // don't need to do anything with this, probably
    pull(controller) {

    },

    // stop the speech recognition
    cancel(controller) {
      recognition.abort();
    }

  });

};

const textToSpeeh = async (text: string) => {
  // tbi
}

export default useTTS;