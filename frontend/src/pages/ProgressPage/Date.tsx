import styled from "styled-components";
import { theme } from "../../common/styles";

interface DateProps {
  month: string;
  day: number;
  streakActive: boolean;
  today?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.primary};
  margin-top: 10px;
  width: 61px;
  border-radius: 40px;
  background-color: rgba(216, 231, 236, 0.8);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Date: React.FC<DateProps> = ({
  month,
  day,
  streakActive,
  today,
}) => {
  return (
    <Container
      style={{
        height: today != null && today ? "127px" : "99px",
        backgroundColor:
          today != null && today
            ? `${theme.colors.warmYellow}`
            : "rgba(216, 231, 236, 0.8)",
      }}
    >
      {!streakActive ? (
        <svg
          width="29"
          height="37"
          viewBox="0 0 29 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="29" height="37" fill="url(#pattern0_608_1420)" />
          <defs>
            <pattern
              id="pattern0_608_1420"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_608_1420"
                transform="matrix(0.00510345 0 0 0.004 -0.222138 0)"
              />
            </pattern>
            <image
              id="image0_608_1420"
              width="283"
              height="250"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      ) : today ? (
        <svg
          width="29"
          height="49"
          viewBox="0 0 29 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect
            y="0.979736"
            width="29"
            height="47.4646"
            fill="url(#pattern0_339_2012)"
          />
          <defs>
            <pattern
              id="pattern0_339_2012"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_339_2012"
                transform="matrix(0.00654685 0 0 0.004 -0.426379 0)"
              />
            </pattern>
            <image
              id="image0_339_2012"
              width="283"
              height="250"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      ) : (
        <svg
          width="29"
          height="37"
          viewBox="0 0 29 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="29" height="37" fill="url(#pattern0_608_1441)" />
          <defs>
            <pattern
              id="pattern0_608_1441"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_608_1441"
                transform="matrix(0.00510345 0 0 0.004 -0.222138 0)"
              />
            </pattern>
            <image
              id="image0_608_1441"
              width="283"
              height="250"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      )}
      <p
        style={{
          fontFamily: "Outfit, sans-serif",
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: "30.24px",
        }}
      >
        {day}
      </p>
      <p
        style={{
          fontFamily: "Outfit, sans-serif",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "17.64px",
        }}
      >
        {month}
      </p>
    </Container>
  );
};
