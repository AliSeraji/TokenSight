import styled from "styled-components";
import { ReactNode } from "react";
import { Navbar } from "components/navbar";

const HeadWrap = styled.div`
  position: absolute;
  width: 100%;
  z-index: 0;
  top: 0;
`;

const LayoutWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding-top: 72px;
`;

const ContentWrap = styled.div`
  width: 100%;
  min-height: calc(100vh - 135px);
  position: relative;
  display: flex;
  z-index: 0;
  justify-content: center;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  margin: 0;
  margin-top: 0px;
  height: 100%;
  min-height: calc(100vh - 130px);
  z-index: 1;
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
