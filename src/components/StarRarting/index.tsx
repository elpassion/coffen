import React from "react";

export interface StarRartingProps {
  rating: number;
}

export const StarRarting: React.FC<StarRartingProps> = ({ rating }) => {
  return <>{rating}</>;
};
