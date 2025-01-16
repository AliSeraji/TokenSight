import { useEffect, useMemo } from "react";
import { useDexSearch } from "store/api/hooks";
import { useSearch, useSetSearchQuery } from "store/search/hooks";
import styled from "styled-components";
import Row from "./Row";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 8px;
  padding: 8px;
  overflow-y: scroll;
`;

const Loading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.GrayText};
`;

const NoResult = styled(Loading);

export default function SearchResult(): React.ReactNode {
  const { searchByQuery, searchByTokenAddresses, pairs, loading } =
    useDexSearch();
  const { searchQuery } = useSearch();
  const setSearchQuery = useSetSearchQuery();

  useEffect(() => {
    if (searchQuery.startsWith("0x")) {
      searchByTokenAddresses(searchQuery);
    } else {
      searchByQuery(searchQuery);
    }
  }, [searchQuery, setSearchQuery]);

  return useMemo(() => {
    return (
      <Wrap>
        {!pairs && loading && <Loading>Loading...</Loading>}
        {!pairs && !loading && <NoResult>Nothing was found!</NoResult>}
        {pairs?.map((pair, idx) => <Row key={idx} pair={pair} />)}
      </Wrap>
    );
  }, [pairs, loading, searchQuery]);
}
