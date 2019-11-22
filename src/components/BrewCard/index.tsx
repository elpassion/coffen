import React from "react";

import CupIcon from "components/Svg/CupIcon";
import { StarRarting } from "components/StarRarting";

import {
  Card,
  TopRow,
  CoffeeOrigin,
  CoffeeRoastery,
  CoffeeMeasures,
  ExpandedDetails,
  TechniqueAuthor,
  MetaRow
} from "./style";

export interface BrewCardData {
  coffeeName: string;
  onClick(): void;
}

export const BrewCard: React.FC<BrewCardData> = ({ onClick, coffeeName }) => {
  return (
    <Card
      onClick={() => {
        onClick();
      }}
    >
      <TopRow>
        <CoffeeOrigin>{coffeeName}</CoffeeOrigin>

        <CoffeeMeasures>
          <CupIcon /> 20.5g / 300ml
        </CoffeeMeasures>
      </TopRow>

      <CoffeeRoastery>Nomad</CoffeeRoastery>

      <ExpandedDetails>
        ...
        <br />
        ...
        <br />
      </ExpandedDetails>

      <MetaRow>
        <TechniqueAuthor>
          <img src="https://placekitten.com/48/48" alt="Author" />
          Paweł Pariaszewski
        </TechniqueAuthor>

        <StarRarting rating={4} />
      </MetaRow>
    </Card>
  );
};
