import { useCallback, useEffect } from "react";
import {
  useSearch,
  useSearchModal,
  useSetSearchQuery,
} from "store/search/hooks";
import styled, { useTheme } from "styled-components";
import SearchIcon from "components/constants/icons/SearchIcon";

const InputElement = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 24px;
  border: none;
  background: ${({ theme }) => theme.GrayBlueDark90};
  width: 100%;
  height: 100%;
  padding-left: 12px;
  border-radius: 8px;
  color: ${({ theme }) => theme.text0};
  &::placeholder {
    color: ${({ theme }) => theme.text2};
  }
  &:focus {
    border: none;
    outline: none;
  }
`;

const SearchContent = styled(InputElement)`
  background-color: inherit;
  font-size: 18px;
  ${({ theme }) => theme.mediaQueries.md`
    font-size: 14px;
  `}
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  max-width: 400px;
  height: 42px;
  max-height: 100%;
  font-size: 14px;
  padding: 12px;
  padding-right: 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.White30};
  background: ${({ theme }) => theme.BlackBoxBG};

  ${({ theme }) => theme.mediaQueries.md`
    height: 32px;
    font-size: 12px;
    padding: 0px;
  `}
`;

const SearchBtnWrap = styled.button`
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
  gap: 12px;
  border: 1px solid ${({ theme }) => theme.White20};
  border-radius: 8px;
  background: ${({ theme }) => theme.Black50};
  color: ${({ theme }) => theme.GrayText};
  font-size: 14px;
  font-weight: 400;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.Black10};
    border: 1px solid ${({ theme }) => theme.GrayText90};
  }
  & > :first-child {
    height: 100%;
    width: unset;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export default function SearchBox(): React.ReactNode {
  const { searchQuery } = useSearch();
  const isOpen = useSearchModal();
  const setSearchQuery = useSetSearchQuery();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setSearchQuery(newValue);
    },
    [setSearchQuery]
  );

  useEffect(() => {
    if (!isOpen) setSearchQuery("");
  }, [isOpen]);

  return (
    <Wrap>
      <SearchContent
        type="text"
        title="Search"
        placeholder="token, address ..."
        spellCheck={false}
        value={searchQuery}
        onChange={handleChange}
        autoFocus
      />
    </Wrap>
  );
}

export function SearchButton({
  toggle,
}: {
  toggle: () => void;
}): React.ReactNode {
  const theme = useTheme();

  return (
    <SearchBtnWrap onClick={toggle}>
      <div>Search</div>
      <SearchIcon color={theme.GrayText90} width={28} height={28} />
    </SearchBtnWrap>
  );
}
