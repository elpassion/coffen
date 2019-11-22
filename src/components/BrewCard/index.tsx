import React, { useState } from "react";

import { CupIcon } from "components/Svg/CupIcon";
import { CoffeGrainIcon } from "components/Svg/CoffeGrainIcon";
import { WaterDropIcon } from "components/Svg/WaterDropIcon";
import { StarRarting } from "components/StarRarting";

import {
  Card,
  TopRow,
  CoffeeOrigin,
  CoffeeRoastery,
  CoffeeMeasures,
  ExpandedDetails,
  TechniqueAuthor,
  ExpandedTechnique,
  ExpandedGrind,
  ExpandedWater,
  ExpandedActions,
  ClickableWrapper,
  ExpandedDate,
  MetaRow
} from "./style";

export interface BrewCardData {
  coffeeName: string;
}

export const BrewCard: React.FC<BrewCardData> = ({ coffeeName }) => {
  const [isExpanded, toggleExpand] = useState(false);
  return (
    <Card>
      <ClickableWrapper
        onClick={() => {
          toggleExpand(!isExpanded);
        }}
      >
        <TopRow>
          <CoffeeOrigin>{coffeeName}</CoffeeOrigin>

          <CoffeeMeasures isExpanded={isExpanded}>
            <CupIcon /> {isExpanded ? "v60" : "20.5g / 300ml"}
          </CoffeeMeasures>
        </TopRow>

        <CoffeeRoastery>Nomad</CoffeeRoastery>
      </ClickableWrapper>

      <ExpandedDetails isExpanded={isExpanded}>
        <ExpandedTechnique>James Hoffman’s Ultimate v60</ExpandedTechnique>

        <ExpandedGrind>
          <CoffeGrainIcon /> 20.5g / Medium Fine grind
        </ExpandedGrind>

        <ExpandedWater>
          <WaterDropIcon /> 300ml / 98°C
        </ExpandedWater>

        <ExpandedActions>
          <button>Favourite</button>
          <button>Brew</button>
        </ExpandedActions>

        <ExpandedDate>20/11/2019</ExpandedDate>
      </ExpandedDetails>

      <MetaRow>
        <TechniqueAuthor>
          <img src="https://placekitten.com/48/48" alt="Author" /> Paweł Pariaszewski
        </TechniqueAuthor>

        <StarRarting rating={4} />
      </MetaRow>
    </Card>
  );
};
