import React, { useState } from "react";
import dayjs from "dayjs";

import { CupIcon } from "components/Svg/CupIcon";
import { CoffeGrainIcon } from "components/Svg/CoffeGrainIcon";
import { WaterDropIcon } from "components/Svg/WaterDropIcon";
import { StarRarting } from "components/StarRarting";

import { BrewData } from "api/api";

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
  brew: BrewData;
  animationDelay: number;
}

export const BrewCard: React.FC<BrewCardData> = ({
  animationDelay,
  brew: { id, roaster, coffeeWeight, grindSize, process, rating, technique, waterDose, origin, createdAt }
}) => {
  console.log(createdAt);
  const [isExpanded, toggleExpand] = useState(false);
  return (
    <Card animationDelay={animationDelay}>
      <ClickableWrapper
        onClick={() => {
          toggleExpand(!isExpanded);
        }}
      >
        <TopRow>
          <CoffeeOrigin>{origin}</CoffeeOrigin>

          <CoffeeMeasures isExpanded={isExpanded}>
            <CupIcon /> {isExpanded ? technique : `${coffeeWeight}g / ${waterDose}ml`}
          </CoffeeMeasures>
        </TopRow>

        <CoffeeRoastery>{roaster}</CoffeeRoastery>
      </ClickableWrapper>

      <ExpandedDetails isExpanded={isExpanded}>
        <ExpandedTechnique>{process}</ExpandedTechnique>

        <ExpandedGrind>
          <CoffeGrainIcon /> {coffeeWeight}g / {grindSize} grind
        </ExpandedGrind>

        <ExpandedWater>
          <WaterDropIcon /> {waterDose}ml / 98°C
        </ExpandedWater>

        <ExpandedActions>
          <button>Favourite</button>
          <button>Brew</button>
        </ExpandedActions>

        <ExpandedDate>{dayjs(createdAt).format("DD-MM-YYYY")}</ExpandedDate>
      </ExpandedDetails>

      <MetaRow>
        <TechniqueAuthor>
          <img src="https://placekitten.com/48/48" alt={id} /> {id.slice(0, 12)}
        </TechniqueAuthor>

        <StarRarting rating={parseInt(rating)} />
      </MetaRow>
    </Card>
  );
};
