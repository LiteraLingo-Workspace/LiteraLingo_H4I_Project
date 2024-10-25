"use client";

import styles from "./Translation.module.css";
import { theme } from "../../../../styles/index";
import useTTS from './speech';
import { useEffect, useRef, useState } from "react";
import { BsCamera, BsArrowCounterclockwise } from "react-icons/bs";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { TypeLabel } from "../../shared/TypeLabel/TypeLabel";
import { IoIosStarOutline } from "react-icons/io";
import { api } from "../../../../trpc/react"; // import tRPC client
import data from "../../../data/translations.json";

type JsonData = Record<string, string>;

export const TranslationBox: React.FC = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [translate, setTranslate] = useState<boolean>(false);
  const [canType, setCanType] = useState<boolean>(true);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const translations: JsonData = JSON.parse(JSON.stringify(data)) as JsonData;

  const { textToSpeeh, speechToText } = useTTS();

  const { mutate } = api.openai.translate.useMutation({
    onSuccess: (data) => {
      setIsLoading(false);
      console.log(data);
      setResult(data.result ? data.result : "An error occurred.");
    },
    onError: () => {
      setIsLoading(false);
      setResult("An error occurred.");
    },
  });

  const useAutosizeTextArea = (
    textAreaRef: HTMLTextAreaElement | null,
    value: string,
  ) => {
    useEffect(() => {
      if (textAreaRef) {
        textAreaRef.style.height = "0px";
        const scrollHeight = textAreaRef.scrollHeight;
        textAreaRef.style.height = scrollHeight + "px";
      }
    }, [textAreaRef, value]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target?.value);
  };

  useAutosizeTextArea(textAreaRef.current, value);

  return (
    <div className={styles.tBoxContainer}>
      {!translate ? (
        <div className={styles.subContainer}>
          <div className={styles.textContainer}>
            <p className={styles.label}>Figurative</p>
            <textarea
              className={styles.textField}
              onChange={handleChange}
              ref={textAreaRef}
              rows={1}
              value={value}
              placeholder="Insert sentence to paraphrase"
              disabled={!canType}
              maxLength={80}
            ></textarea>
          </div>
          <div className={styles.buttonsContainer}>
            <div className={styles.innerButtonsContainer}>
              <BsCamera size={24.5} />
              <HiOutlineMicrophone size={24.5} onClick={() => {
                console.log('starting reader');
                const stream = speechToText();
                const reader = stream.getReader();

                const onData = ({done, value}: ReadableStreamReadResult<any>) => {
                  // @ts-ignore
                  textAreaRef.current.value = value;
                  if (!done) {
                    reader.read().then(onData);
                  }
                }

                reader.read().then(onData);
              }} />
            </div>
            <div className={styles.innerButtonsContainer}>
              <button
                className={styles.goButton}
                onClick={() => {
                  setTranslate(true);
                  setCanType(false);
                  setIsLoading(true);
                  mutate({ text: value });
                  // BELOW WAS LEFT IN FOR TESTING PURPOSES
                  // SINCE OPENAI KEY HAS LIMITED CALLS

                  // if (translations.hasOwnProperty(value)) {
                  //   setResult(translations[value] ?? "error");
                  // } else {
                  //   setResult("error");
                  // }
                }}
              >
                <p style={{ marginLeft: "5px" }}>Go</p>
                <svg
                  width="10"
                  height="15"
                  viewBox="0 0 10 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.2944 7L2.69869 1.3C2.299 0.9 1.69946 0.9 1.29977 1.3C0.900077 1.7 0.900077 2.3 1.29977 2.7L6.19601 7.6L1.29977 12.5C1.09992 12.7 1 12.9 1 13.2C1 13.8 1.39969 14.2 1.99923 14.2C2.299 14.2 2.49885 14.1 2.69869 13.9L8.39432 8.2C8.69409 8 8.69409 7.4 8.2944 7Z"
                    fill="white"
                    stroke="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.subContainer}>
          <div className={styles.textContainer}>
            <p className={styles.label}>Figurative</p>
            <textarea
              className={styles.textField}
              onChange={handleChange}
              ref={textAreaRef}
              rows={1}
              value={value}
              disabled={!canType}
            ></textarea>
            <div className={styles.break} />
            <p className={styles.label}>Literal</p>
            <p className={styles.result}>{isLoading ? "Loading..." : result}</p>
          </div>
          <div className={styles.buttonsContainer}>
            <div className={styles.innerButtonsContainer}>
              <button
                className={styles.restartButton}
                onClick={() => {
                  setTranslate(false);
                  setCanType(true);
                  setValue("");
                  setResult("");
                }}
              >
                <BsArrowCounterclockwise />
                <p>Restart</p>
              </button>
            </div>
            <div className={styles.innerButtonsContainer}>
              <TypeLabel
                color={theme.colors.purple}
                bg={theme.colors.faintPurple}
                text="Sarcasm"
              />
              <IoIosStarOutline size={32} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
