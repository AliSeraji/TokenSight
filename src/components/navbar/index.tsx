import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import styled from "styled-components";
import { Z_INDEX } from "styles";

const NavbarWrapper = styled.nav`
  height: 72px;
  background: ${({ theme }) => theme.Black90};
  border-bottom: 1px solid ${({ theme }) => theme.White5};
  z-index: ${Z_INDEX.fixed};
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 16px;
  width: 100%;
  padding: 16px;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: ${({ theme }) => theme.White};
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 2px;
  ${({ theme }) => theme.mediaQueries.md`
    font-size: 18px;
    letter-spacing: 1.5px;
  `};
`;

const ConnectButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 120px;
  background: ${({ theme }) => theme.BlueDark};
  color: ${({ theme }) => theme.White};
  padding: 12px;
  border-radius: ${({ theme }) => theme.radius2};
  font-weight: 500;
  transition: ${({ theme }) => theme.BlueDark} 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.BlueDark40};
    cursor: pointer;
  }

  &:disabled {
    opacity: ${({ theme }) => theme.GrayBlueDark};
    cursor: not-allowed;
  }

  ${({ theme }) => theme.mediaQueries.md`
    font-size: 14px;
    letter-spacing: 1.5px;
    padding: 6px;
  `};
`;

export function Navbar() {
  const { address, isConnected } = useAppKitAccount();
  const { open } = useAppKit();

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const handleConnect = () => {
    isConnected ? open({ view: "Account" }) : open({ view: "Connect" });
  };

  return (
    <NavbarWrapper>
      <NavbarContent>
        <Logo>TokenSight</Logo>
        <ConnectButton onClick={handleConnect}>
          {isConnected ? formatAddress(address!) : "Connect Wallet"}
        </ConnectButton>
      </NavbarContent>
    </NavbarWrapper>
  );
}
