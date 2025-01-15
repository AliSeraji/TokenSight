import Image from "next/image";
import { useSearchQuery, useSetSearchQuery } from "store/search/hooks";
import styled, { useTheme } from "styled-components";
import SEARCH_ICON from "/public/search.svg";
import SearchIcon from "components/constants/icons/SearchIcon";

const InputElement = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 24px;
  border: none;
  background: ${({ theme }) => theme.GrayBlueDark20};
  width: 100%;
  height: 100%;
  padding-left: 12px;
  color: ${({ theme }) => theme.text0};
  & > ::placeholder {
    width: 100%;
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
  max-width: 400px;
  max-height: 46px;
  font-size: 14px;
  padding-right: 16px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.White30};
  background-color: ${({ theme }) => theme.BlackBoxBG40};

  &:hover {
    cursor: pointer;
  }

  ${({ theme }) => theme.mediaQueries.md`
    height: 38px;
  `}
`;

const SearchBtnWrap = styled.button`
  min-width: 162px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
  gap: 12px;
  border: 1px solid ${({ theme }) => theme.White5};
  border-radius: 8px;
  background: ${({ theme }) => theme.Black50};
  color: ${({ theme }) => theme.GrayText};
  font-size: 14px;
  font-weight: 400;

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
  const searchQuery = useSearchQuery();
  const setSearchQuery = useSetSearchQuery();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Wrap>
      <SearchContent
        type="text"
        title="Search"
        placeholder={"token, address ..."}
        spellCheck="false"
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
