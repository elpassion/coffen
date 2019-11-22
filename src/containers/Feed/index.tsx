import React from "react";
import { useApi, useApiCall } from "api/api";

import { BrewCard } from "components/BrewCard";
import { LoadingCup } from "components/Svg/LoadingCup";

import { LoaderWrapper } from "styles/commonStyles";
import { FeedHeader, FeedList, FeedWrapper } from "./style";

export const Feed = () => {
  const api = useApi();
  const { data, isLoading } = useApiCall(() => api.getBrews(), []);

  return (
    <FeedWrapper>
      <FeedHeader>Feed</FeedHeader>

      {isLoading && (
        <LoaderWrapper>
          <LoadingCup />
        </LoaderWrapper>
      )}

      <FeedList>
        {data.map((brew, i) => (
          <BrewCard animationDelay={(i + 1) * 0.25} brew={brew} key={brew.id} />
        ))}
      </FeedList>
    </FeedWrapper>
  );
};
