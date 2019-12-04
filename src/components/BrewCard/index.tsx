import { BrewData } from "api/api";
import { StarRarting } from "components/StarRarting";
import { CupIcon } from "components/Svg/CupIcon";
import dayjs from "dayjs";
import React, { useState } from "react";
import {
  Card,
  ClickableWrapper,
  CoffeeMeasures,
  CoffeeOrigin,
  CoffeeRoastery,
  ExpandedActions,
  ExpandedDate,
  ExpandedDetails,
  ExpandedTechnique,
  GrindDetails,
  MetaRow,
  TechniqueAuthor,
  TopRow,
  WaterDetails
} from "./style";

export interface BrewCardData {
  brew: BrewData;
  animationDelay: number;
}

export const BrewCard: React.FC<BrewCardData> = ({
  animationDelay,
  brew: { id, roaster, coffeeWeight, grindSize, technique, rating, method, waterDose, origin, createdAt }
}) => {
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
        <ExpandedTechnique>{technique}</ExpandedTechnique>

        <GrindDetails coffeeWeight={coffeeWeight} grindSize={grindSize} />

        <WaterDetails waterDose={waterDose} waterTemperature={"98"} />

        <ExpandedActions>
          <button>Favourite</button>
          <button>Brew</button>
        </ExpandedActions>

        <ExpandedDate>{dayjs(createdAt).format("DD/MM/YYYY")}</ExpandedDate>
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
