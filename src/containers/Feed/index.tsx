import { useApi, useApiCall } from "api/api";
import { BrewCard } from "components/BrewCard";
import React from "react";
import { FeedHeader, FeedList, FeedWrapper } from "./style";

export const Feed = () => {
  const api = useApi();
  const { data, isLoading } = useApiCall(() => api.getBrews(), []);

  return (
    <FeedWrapper>
      <FeedHeader>Feed</FeedHeader>

      <FeedList>
        {data.map(brew => (
          <BrewCard brew={brew} key={brew.id} />
        ))}
      </FeedList>
    </FeedWrapper>
  );
};
