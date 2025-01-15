import styled from "styled-components";
import { ReactNode } from "react";
import { Navbar } from "components/navbar";

const HeadWrap = styled.div`
  width: 100%;
  z-index: 0;
`;

const LayoutWrapper = styled.div`
  min-height: 100vh;
  padding-top: 72px; // Height of navbar
`;

const ContentWrap = styled.div`
  width: 100%;
  min-height: calc(100vh - 120px);
  position: relative;
  display: flex;
  z-index: 0;
  justify-content: center;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  margin-top: 0px;
  height: 100%;
  min-height: calc(100vh - 130px);
  z-index: 1;
  padding-bottom: 30px;
  overflow: hidden;

  ${({ theme }) => theme.mediaQueries.md`
    min-height: calc(100vh - 55px);
  `}

  ${({ theme }) => theme.mediaQueries.sm`
    padding-bottom: 30px;
  `}
`;

interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <LayoutWrapper>
      <HeadWrap>
        <Navbar />
      </HeadWrap>
      <ContentWrap>
        <Content>{children}</Content>
      </ContentWrap>
    </LayoutWrapper>
  );
}
