import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { ButtonReverseText } from '../../inputs/ButtonReverseText';
import { Theme, ThemeInterface } from '../../../utility/themes/Theme';
import { Paragraph } from '../../text/Paragraph';
import { Github } from 'styled-icons/bootstrap';
import { Chip } from '../Chip';
import { ExternalLink } from '@styled-icons/feather/ExternalLink';
import { ImageTitle } from '../ImageTitle';

export interface ThumbnailPanelProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  description: string;
  githubLink: string;
  prototypeLink: string;
}

export const ThumbnailPanel: React.FC<ThumbnailPanelProps> = ({
  title,
  subtitle,
  description,
  githubLink,
  prototypeLink,
  ...props
}): React.ReactElement => {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme() as ThemeInterface;

  return (
    <Swapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <WrapperWrapper $isHovered={isHovered}>
        <Wrapper {...props}>
          <SubWrapper>
            {/*
          <ChipRow>
            <Chip icon={Github} label="MongoDB" />
            <Chip icon={Github} label="Node.js" />
            <Chip icon={Github} label="Express" />
            <Chip icon={Github} label="Redux Toolkit" />
            <Chip icon={Github} label="React" />
            <Chip icon={Github} label="TypeScript" />
  </ChipRow>*/}
            <div>
              <TextTitle textAlign="center">{title}</TextTitle>
              <br />
              <TextSubtitle textAlign="center">{description}</TextSubtitle>
            </div>
          </SubWrapper>
          <SubWrapper>
            <Row>
              <Link href={githubLink} target="_blank" rel="noreferrer">
                <ButtonReverseText
                  iconSrc={Github}
                  size="small"
                  border={theme.color.background}
                  color={'transparent'}
                  colorHovered={theme.color.background}
                  colorText={theme.color.background}
                  colorTextHovered={theme.color.text}
                  children="GITHUB"
                />
              </Link>
              <Link href={prototypeLink} target="_blank" rel="noreferrer">
                <ButtonReverseText
                  iconSrc={ExternalLink}
                  isIconOnRight={true}
                  size="small"
                  border={theme.color.background}
                  borderHovered={theme.color.background}
                  color={theme.color.background}
                  colorHovered={theme.color.background}
                  colorText={theme.color.text}
                  colorTextHovered={theme.color.text}
                  children="PROTOTYPE"
                />
              </Link>
            </Row>
          </SubWrapper>
        </Wrapper>
      </WrapperWrapper>
      <TitlePreview $isHovered={isHovered} title={title} subtitle={subtitle} />
    </Swapper>
  );
};

const Swapper = styled.div`
  width: 100%;
  height: 100%;
`;

const TitlePreview = styled(ImageTitle)<{ $isHovered: boolean }>`
  opacity: ${({ $isHovered }) => ($isHovered ? 0 : 1)};
  pointer-events: ${({ $isHovered }) => ($isHovered ? 'none' : 'auto')};
  transition: ${({ theme }) => `${theme.speed.normal}`};
`;

const WrapperWrapper = styled.div<{ $isHovered: boolean }>`
  position: absolute;
  top: 0px;
  left: 0px;

  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 10px;

  background-color: rgba(0, 0, 0, 0.7);
  opacity: ${({ $isHovered }) => ($isHovered ? 1 : 0)};
  pointer-events: ${({ $isHovered }) => ($isHovered ? 'auto' : 'none')};
  transition: ${({ theme }) => `${theme.speed.normal}`};
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  border: 1px solid ${({ theme }) => theme.color.textNeutral};
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const ChipRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 10px;
`;

const TextTitle = styled(Paragraph)`
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.bold2};
  color: ${({ theme }) => theme.color.background};
`;

const TextSubtitle = styled(Paragraph)`
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.color.background};
`;

const Link = styled.a`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
