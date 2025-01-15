import styled from "styled-components";
import Image from "next/image";
import { useDexSearch } from "store/api/hooks";
import { useEffect, useMemo } from "react";
import { useSearchQuery, useSetSearchQuery } from "store/search/hooks";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 100px;
  overflow-y: scroll;
`;

const SearchResultItem = styled.div`
  width: unset;
  height: 16px;
  color: ${({ theme }) => theme.text0};
  font-size: 14px;
  font-weight: 400px;
`;

export default function RetrievedData(): React.ReactNode {
  const { searchByQuery, searchByTokenAddresses, pairs, loading } =
    useDexSearch();

  const searchQuery = useSearchQuery();
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
        {!pairs && loading && <div>Loading...</div>}
        {pairs.map((pair, idx) => (
          <SearchResultItem key={idx}>
            <Image
              src={pair.info?.imageUrl}
              alt="Token icon"
              width={20}
              height={20}
            />
            <p>
              {pair.baseToken.symbol}/{pair.quoteToken.symbol}
            </p>
            <p>{pair.chainId}</p>
            <p>{pair.labels}</p>
          </SearchResultItem>
        ))}
      </Wrap>
    );
  }, [pairs, searchByQuery, setSearchQuery]);
}
