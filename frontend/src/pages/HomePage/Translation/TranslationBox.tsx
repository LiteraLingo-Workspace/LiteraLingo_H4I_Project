import * as S from "./Styles";
import { theme } from "../../../styles/index";
import { useEffect, useRef, useState } from "react";
import { BsCamera, BsArrowCounterclockwise } from "react-icons/bs";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { TypeLabel } from "../../../components/TypeLabel/TypeLabel";
import { IoIosStarOutline } from "react-icons/io";
import data from "../../../data/translations.json";

type JsonData = {
  [key: string]: any;
};

export const TranslationBox: React.FC = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [translate, setTranslate] = useState<boolean>(false);
  const [canType, setCanType] = useState<boolean>(true);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const translations: JsonData = JSON.parse(JSON.stringify(data));

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

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(evt.target?.value);
  };

  useAutosizeTextArea(textAreaRef.current, value);

  return (
    <S.TBoxContainer>
      {!translate ? (
        <S.SubContainer>
          <S.TextContainer>
            <S.Label>Figurative</S.Label>
            <S.TextField
              onChange={handleChange}
              ref={textAreaRef}
              rows={1}
              value={value}
              placeholder="Insert sentence to paraphrase"
              disabled={!canType}
              maxLength={80}
            ></S.TextField>
          </S.TextContainer>
          <S.ButtonsContainer>
            <S.InnerButtonsContainer>
              <BsCamera size={24.5} />
              <HiOutlineMicrophone size={24.5} />
            </S.InnerButtonsContainer>
            <S.InnerButtonsContainer>
              <S.GoButton
                style={{ marginTop: "auto" }}
                onClick={() => {
                  setTranslate(true);
                  setCanType(false);
                  translations.hasOwnProperty(value)
                    ? setResult(translations[value])
                    : setResult("error");
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
              </S.GoButton>
            </S.InnerButtonsContainer>
          </S.ButtonsContainer>
        </S.SubContainer>
      ) : (
        <S.SubContainer>
          <S.TextContainer>
            <S.Label>Figurative</S.Label>
            <S.TextField
              onChange={handleChange}
              ref={textAreaRef}
              rows={1}
              value={value}
              disabled={!canType}
            ></S.TextField>
            <S.Break />
            <S.Label>Literal</S.Label>
            <S.Result>{result}</S.Result>
          </S.TextContainer>
          <S.ButtonsContainer>
            <S.InnerButtonsContainer>
              <S.RestartButton
                style={{ marginTop: "auto" }}
                onClick={() => {
                  setTranslate(false);
                  setCanType(true);
                  setValue("");
                  setResult("");
                }}
              >
                <BsArrowCounterclockwise />
                <p>Restart</p>
              </S.RestartButton>
            </S.InnerButtonsContainer>
            <S.InnerButtonsContainer>
              <TypeLabel
                color={theme.colors.purple}
                bg={theme.colors.faintPurple}
                text="Sarcasm"
              />
              <IoIosStarOutline size={32} />
            </S.InnerButtonsContainer>
          </S.ButtonsContainer>
        </S.SubContainer>
      )}
    </S.TBoxContainer>
  );
};
