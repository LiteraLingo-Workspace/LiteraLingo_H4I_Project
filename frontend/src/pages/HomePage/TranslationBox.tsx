import styled from "styled-components";
import { theme } from "../../common/styles";
import { useEffect, useRef, useState } from "react";
import { BsCamera, BsArrowCounterclockwise } from "react-icons/bs";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { TypeLabel } from "../../common/components/TypeLabel";
import { IoIosStarOutline } from "react-icons/io";
import data from "./translations.json";

const Container = styled.div`
  color: ${theme.colors.primary};
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 16px;
  border: 2px solid ${theme.colors.coolDark};
  box-shadow: 0px 4px 0px 0px rgba(100, 174, 198, 1);
  height: 344px;
  width: 100%;
  padding: 16px 24px;
  box-sizing: border-box;
`;

const SubContainer = styled.div`
  width: 312px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 256px;
  width: 100%;
  gap: 8px;
`;

const TextField = styled.textarea`
  color: ${theme.colors.primary};
  resize: none;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  border: none;
  outline: none;
  &::placeholder {
    color: ${theme.colors.secondary};
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
  }
`;

const Result = styled.p`
  font-family: "Poppins", sans-serif;
  color: black;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid ${theme.colors.faintGrey};
  height: 48px;
  width: 100%;
  justify-content: space-between;
`;

const InnerButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  position: relative;
  padding-top: 10px;
  align-items: center;
  color: ${theme.colors.coolDark};
`;

const GoButton = styled.button`
  border-radius: 100px;
  padding: 8px 12px 8px 12px;
  height: 38px;
  width: 85px;
  background-color: ${theme.colors.warm};
  display: flex;
  align-items: center;
  color: white;
  font-family: Baloo 2, sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  border: none;
  cursor: pointer;
  gap: 10px;
`;

const RestartButton = styled.button`
  border-radius: 100px;
  padding: 8px 12px 8px 12px;
  height: 38px;
  width: 130px;
  background-color: ${theme.colors.warm};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: Baloo 2, sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  border: none;
  cursor: pointer;
  gap: 5px;
`;

const Label = styled.p`
  color: ${theme.colors.secondary};
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
`;

const Break = styled.div`
  height: 1px;
  width: 312px;
  background-color: ${theme.colors.faintGrey};
  margin-top: 8px;
  margin-bottom: 4px;
`;

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
    <Container>
      {!translate ? (
        <SubContainer>
          <TextContainer>
            <Label>Figurative</Label>
            <TextField
              onChange={handleChange}
              ref={textAreaRef}
              rows={1}
              value={value}
              placeholder="Insert sentence to paraphrase"
              disabled={!canType}
              maxLength={80}
            ></TextField>
          </TextContainer>
          <ButtonsContainer>
            <InnerButtonsContainer>
              <BsCamera size={24.5} />
              <HiOutlineMicrophone size={24.5} />
            </InnerButtonsContainer>
            <InnerButtonsContainer>
              <GoButton
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
              </GoButton>
            </InnerButtonsContainer>
          </ButtonsContainer>
        </SubContainer>
      ) : (
        <SubContainer>
          <TextContainer>
            <Label>Figurative</Label>
            <TextField
              onChange={handleChange}
              ref={textAreaRef}
              rows={1}
              value={value}
              disabled={!canType}
            ></TextField>
            <Break />
            <Label>Literal</Label>
            <Result>{result}</Result>
          </TextContainer>
          <ButtonsContainer>
            <InnerButtonsContainer>
              <RestartButton
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
              </RestartButton>
            </InnerButtonsContainer>
            <InnerButtonsContainer>
              <TypeLabel
                color={theme.colors.purple}
                bg={theme.colors.faintPurple}
              >
                Sarcasm
              </TypeLabel>
              <IoIosStarOutline size={32} />
            </InnerButtonsContainer>
          </ButtonsContainer>
        </SubContainer>
      )}
    </Container>
  );
};
