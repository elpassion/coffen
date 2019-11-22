import React from "react";

import { BrewCard } from "components/BrewCard";

import { FeedWrapper, FeedHeader, FeedList } from "./style";

export const Feed = () => {
  return (
    <FeedWrapper>
      <FeedHeader>Feed</FeedHeader>

      <FeedList>
        <BrewCard coffeeName="Rwana" />
        <BrewCard coffeeName="Poland" />
        <BrewCard coffeeName="Hong Kong" />
        <BrewCard coffeeName="Ugabnda" />
        <BrewCard coffeeName="Wardakanda" />
      </FeedList>
    </FeedWrapper>
  );
};
