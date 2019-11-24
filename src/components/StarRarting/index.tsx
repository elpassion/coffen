import React from "react";

import { RatingWrapper } from "./style";
import { StarIcon } from "components/Svg/StarIcon";

export interface StarRartingProps {
  rating: number;
}

export const StarRarting: React.FC<StarRartingProps> = ({ rating }) => {
  return (
    <RatingWrapper>
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
    </RatingWrapper>
  );
};
