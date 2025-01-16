import styled from "styled-components";

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const StatCard = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.Black10};
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.White10};
  & > :first-child {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.GrayText};
  }
  & > :last-child {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.White};
  }
`;

export const InfoTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 16px 0;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

export const InfoLabel = styled.span`
  color: #666;
`;

export const InfoValue = styled.span`
  font-weight: 500;
`;

export const TokenVersion = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: 400;
  color: ${({ theme }) => theme.GrayText};
  border: 1px solid ${({ theme }) => theme.GrayText};
  padding: 2px;
  border-radius: 2px;
  width: 18px;
  height: 18px;
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  transition: all 0.3s ease;
  border-radius: 6px;
  background: ${({ theme }) => theme.GrayBlueDark20};
  color: ${({ theme }) => theme.GrayText};
  font-size: 12px;
  font-weight: 400;
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.GrayBlueDark40};
  }
`;

export const TooltipWrapper = styled.div<{ $show: boolean }>`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.GrayBlueDark80};
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  opacity: ${({ $show }) => ($show ? "1" : "0")};
  visibility: ${({ $show }) => ($show ? "visible" : "hidden")};
  transition: all 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.GrayBlueDark80};
  }
`;

export const IconWrapper = styled.div<{ $show: boolean }>`
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
  opacity: ${({ $show }) => ($show ? "1" : "0.7")};
`;
