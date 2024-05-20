import { useState } from "react";
import { Drawer } from "./BottomSheet";
import clsx from "clsx";
import styled from "styled-components";
import { theme } from "../../common/styles";
import { FaHistory } from "react-icons/fa";

const TabContainer = styled.div`
  height: 136px;
  width: 100%;
  background-color: ${theme.colors.coolAccentBg};
  border-radius: 16px 16px 0 0;
  display: flex;
  justify-content: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 75%;
  width: 344px;
  color: white;
  background-color: transparent;
  font-family: "Baloo 2", sans-serif;
  position: relative;
  top: 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const History: React.FC = () => {
  const [snap, setSnap] = useState<number | string | null>("148px");

  return (
    <Drawer.Root
      snapPoints={["200px", 0.92]}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}
      open={true}
    >
      <Drawer.Portal>
        <Drawer.Content
          style={{ zIndex: 0 }}
          className="fixed flex flex-col bottom-0 left-0 right-0 h-full max-h-[97%] mx-[-1px]"
        >
          <div
            className={clsx("flex flex-col max-w-md mx-auto w-full p-4 pt-5", {
              "overflow-y-auto": snap === 1,
              "overflow-hidden": snap !== 1,
            })}
          >
            <TabContainer>
              <TextContainer>
                <svg
                  width="34"
                  height="8"
                  viewBox="0 0 34 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ margin: "0 auto" }}
                >
                  <path
                    d="M33 7L17 2L1 7"
                    stroke="#D8E7EC"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <TitleContainer>
                  <FaHistory size={21} />
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "20px",
                      lineHeight: "32.04px",
                    }}
                  >
                    Your History
                  </p>
                </TitleContainer>
                <p
                  style={{
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: `${theme.colors.veryLight}`,
                  }}
                >
                  Swipe up to see your most recent translations!
                </p>
              </TextContainer>
            </TabContainer>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
