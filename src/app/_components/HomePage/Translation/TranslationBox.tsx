/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
"use client";

import styles from "./Translation.module.css";
import useTTS from "./speech";
import { useEffect, useRef, useState } from "react";
import { BsCamera, BsArrowCounterclockwise } from "react-icons/bs";
import { HiOutlineMicrophone, HiMicrophone } from "react-icons/hi2";
import { TypeLabel } from "../../shared/TypeLabel/TypeLabel";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { labelStyles } from "../../../../styles/index";
import { api } from "../../../../trpc/react"; // import tRPC client
import data from "../../../data/translations.json";
import { type Session } from "next-auth";

type JsonData = Record<string, string>;

interface TranslationBoxProps {
  session: Session | null;
}

export const TranslationBox: React.FC<TranslationBoxProps> = ({ session }) => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [translate, setTranslate] = useState<boolean>(false);
  const [canType, setCanType] = useState<boolean>(true);
  const [historyEntryId, setHistoryEntryId] = useState<number | null>(null);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const [sttActive, setSttActive] = useState<boolean>(false);
  const [sttReader, setSttReader] =
    useState<ReadableStreamDefaultReader | null>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const translations: JsonData = JSON.parse(JSON.stringify(data)) as JsonData;

  const { speechToText } = useTTS();

  // make this false when we want real api results
  const fakeAPIresults = true;

  const { mutate } = api.openai.translate.useMutation({
    onSuccess: (data) => {
      setIsLoading(false);
      console.log(data);
      setResult(data.result ? data.result : "An error occurred.");
      storeTranslationHistory(
        value,
        data.result ? data.result : "An error occurred."
      );
    },
    onError: () => {
      setIsLoading(false);
      setResult("An error occurred.");
    },
  });

  const { mutate: storeHistoryMutate } = api.historyEntry.create.useMutation({
    onSuccess: (data) => {
      console.log("Translation history stored successfully.");
      setHistoryEntryId(data.id);
    },
    onError: (e) => {
      console.log(
        "An error occurred storing translation history. " + e.message
      );
    },
  });

  const { mutate: updateFavoriteMutate } =
    api.historyEntry.updateIsFavorite.useMutation({
      onSuccess: (_) => {
        console.log("Favorite updated successfully.");
      },
      onError: () => {
        console.log("An error occurred updating favorite status.");
      },
    });

  const storeTranslationHistory = (textEntered: string, outputText: string) => {
    if (session?.user?.id) {
      storeHistoryMutate({
        textEntered,
        outputText,
        isFavorite: false,
        userId: session.user.id,
      });
    } else {
      console.error("User not authenticated.");
    }
  };

  const useAutosizeTextArea = (
    textAreaRef: HTMLTextAreaElement | null,
    value: string
  ) => {
    useEffect(() => {
      if (textAreaRef) {
        textAreaRef.style.height = "0px";
        const scrollHeight = textAreaRef.scrollHeight;
        textAreaRef.style.height = scrollHeight + "px";
      }
    }, [textAreaRef, value]);
  };

  const toggleIsFavorite = () => {
    console.log(historyEntryId);
    if (historyEntryId) {
      updateFavoriteMutate({
        id: historyEntryId,
        isFavorite: !isFavorite,
      });
      setIsFavorite(!isFavorite);
    } else {
      console.error("No history entry ID found.");
    }
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
              aria-label="Insert sentence to paraphrase"
              placeholder="Insert sentence to paraphrase"
              disabled={!canType}
              maxLength={80}
            ></textarea>
          </div>
          <div className={styles.buttonsContainer}>
            <div className={styles.innerButtonsContainer}>
              <BsCamera size={24.5} />
              <div
                onClick={() => {
                  if (!sttActive) {
                    console.log("starting reader");
                    setSttActive(true);
                    const stream = speechToText();
                    const reader = stream.getReader();
                    setSttReader(reader);

                    const onData = ({
                      done,
                      value,
                    }: ReadableStreamReadResult<string>) => {
                      // don't do anything if value is undefined
                      if (value !== undefined) {
                        setValue(value);
                      }
                      if (value == undefined) {
                        reader.cancel();
                      }
                      if (!done && reader !== null) {
                        reader.read().then(onData);
                      }
                    };

                    reader.closed.then(() => {
                      console.log("reader closed");
                      setSttReader(null);
                      setSttActive(false);
                    });

                    reader.read().then(onData);
                  } else {
                    console.log("stopping reader");
                    console.log(sttReader);
                    sttReader?.cancel();
                  }
                }}
                aria-label="Start speech-to-text"
              >
                {sttActive ? (
                  <HiMicrophone size={24.5} />
                ) : (
                  <HiOutlineMicrophone size={24.5} />
                )}
              </div>
            </div>
            <div className={styles.innerButtonsContainer}>
              <button
                className={styles.goButton}
                aria-label="Apply literal translation"
                onClick={() => {
                  setTranslate(true);
                  setCanType(false);
                  setIsLoading(true);
                  // mutate({ text: value });
                  if (fakeAPIresults) {
                    // Use fake translation result
                    const fakeResult =
                      translations[value] ?? "Fake translation result";
                    setResult(fakeResult);
                    setIsLoading(false);
                    storeTranslationHistory(value, fakeResult);
                  } else {
                    // Call the actual API
                    mutate({ text: value });
                    
                  }

                  
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
              aria-label="Figurative text"
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
                aria-label="Restart translation"
                onClick={() => {
                  setTranslate(false);
                  setCanType(true);
                  setValue("");
                  setResult("");
                  setIsFavorite(false);
                }}
              >
                <BsArrowCounterclockwise />
                <p>Restart</p>
              </button>
            </div>
            <div className={styles.innerButtonsContainer}>
              <TypeLabel
                color={labelStyles.sarcasm.color}
                bg={labelStyles.sarcasm.bg}
                text="Sarcasm"
              />
              {isFavorite ? (
                <IoIosStar
                  size={32}
                  onClick={toggleIsFavorite}
                  className={styles.starIconActive}
                />
              ) : (
                <IoIosStarOutline
                  size={32}
                  onClick={toggleIsFavorite}
                  className={styles.starIcon}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
