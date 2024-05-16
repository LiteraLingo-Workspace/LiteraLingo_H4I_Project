import styled from "styled-components";
import { theme } from "../../common/styles";
import { useEffect, useRef, useState } from "react";
import { BsCamera } from "react-icons/bs";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { FaAngleRight } from "react-icons/fa6";

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
  margin-bottom: 20px;
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
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  border: none;
  outline: none;
  &::placeholder {
    color: ${theme.colors.secondary};
    font-family: Poppins, sans-serif;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid ${theme.colors.faintGrey};
  height: 48px;
  width: 100%;
  justify-content: space-between;
`;

const LeftButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  position: relative;
  padding-top: 10px;
  align-items: center;
  color: ${theme.colors.coolDark};
`;

const RightButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const GoButton = styled.button`
  border-radius: 100px;
  padding: 8px 12px 8px 12px;
  height: 38px;
  width: 85px;
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

export const TranslationBox: React.FC = () => {
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const useAutosizeTextArea = (
    textAreaRef: HTMLTextAreaElement | null,
    value: string
  ) => {
    useEffect(() => {
      if (textAreaRef) {
        // We need to reset the height momentarily to get the correct scrollHeight for the textarea
        textAreaRef.style.height = "0px";
        const scrollHeight = textAreaRef.scrollHeight;
        // We then set the height directly, outside of the render loop
        // Trying to set this with state or a ref will product an incorrect value.
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
      <SubContainer>
        <TextContainer>
          <Label>Figurative</Label>
          <TextField
            onChange={handleChange}
            ref={textAreaRef}
            rows={1}
            value={value}
            placeholder="Insert sentence to paraphrase"
          ></TextField>
        </TextContainer>
        <ButtonsContainer>
          <LeftButtonsContainer>
            <BsCamera size={24.5} />
            <HiOutlineMicrophone size={24.5} />
          </LeftButtonsContainer>
          <RightButtonsContainer>
            <GoButton style={{ marginTop: "auto" }}>
              <p>Go</p>
              <FaAngleRight />
            </GoButton>
          </RightButtonsContainer>
        </ButtonsContainer>
      </SubContainer>
    </Container>
  );
};
