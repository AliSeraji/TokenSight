import { PairData, PairInfo } from "store/api/types";
import { InfoCard, InfoTitle } from "./common";
import styled from "styled-components";
import { ExternalLink, Facebook, Globe, Twitter } from "lucide-react";
import TokenDetails from "./TokenDetails";

const SocialLinks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  margin-bottom: 12px;
`;

const SocialLink = styled.a`
  width: unset;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 6px;
  color: ${({ theme }) => theme.White};
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.GrayText90};
    background: ${({ theme }) => theme.GrayBlueDark40};
  }
`;

const InfoGrid = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.White60};
  margin-bottom: 12px;
`;

export function TokenInfo({ info }: { info: PairInfo }): React.ReactNode {
  return (
    <InfoCard>
      <div>
        <Title>Websites</Title>
        <SocialLinks>
          {info?.websites?.map((website, index) => (
            <SocialLink
              key={index}
              href={website.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe size={16} />
              <span>{website.url}</span>
              <ExternalLink size={14} />
            </SocialLink>
          ))}
        </SocialLinks>

        <Title>Social Media</Title>
        <SocialLinks>
          {info?.socials?.map((social, index) => (
            <SocialLink
              key={index}
              href={`https://${social.platform}.com/${social.handle}`}
            >
              <span>{social.handle}</span>
              <ExternalLink size={14} />
            </SocialLink>
          ))}
        </SocialLinks>
      </div>
    </InfoCard>
  );
}

export default function AdvancedStats({
  pairData,
}: {
  pairData: PairData;
}): React.ReactNode {
  return (
    <InfoGrid>
      <TokenDetails pairData={pairData} />
      <TokenInfo info={pairData.info} />
    </InfoGrid>
  );
}
