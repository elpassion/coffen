import styled from "styled-components";
import { rem } from "polished";

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    display: block;
    margin: 0 ${rem(2)} 0 0;
    width: ${rem(16)};
    height: ${rem(16)};
  }
`;
