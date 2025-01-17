import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  position: fixed;
  top: 0;
  left: 0;
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.White40};
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LoginBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 198px;
  min-height: 38px;
  background: ${({ theme }) => theme.BlueDark};
  color: ${({ theme }) => theme.White};
  padding: 12px;
  border-radius: ${({ theme }) => theme.radius2};
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.BlueDark40};
    cursor: pointer;
  }

  &:disabled {
    opacity: ${({ theme }) => theme.GrayBlueDark};
    cursor: not-allowed;
  }
`;

export default function LoginPage(): React.ReactNode {
  const router = useRouter();
  const { address, isConnected } = useAppKitAccount();
  const { open } = useAppKit();

  useEffect(() => {
    if (address && isConnected) {
      router.replace("/dashboard");
    }
  }, [address, isConnected]);

  return (
    <Wrap>
      <Text>Login to Access the functionality</Text>
      <LoginBtn onClick={() => open({ view: "Connect" })}>Login</LoginBtn>
    </Wrap>
  );
}
