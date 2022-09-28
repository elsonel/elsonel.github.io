import React from 'react';
import styled from 'styled-components';
import { AboutSocialRow } from '../../atoms/AboutSocialRow';
import { PageTitle } from '../../atoms/PageTitle';
import { Paragraph } from '../../text/Paragraph';

export interface AboutPanelProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AboutPanel: React.FC<AboutPanelProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <Title
        textAlign="center"
        title="ABOUT"
        subtitle="Developer, Designer, Artist."
      />
      <BodyWrapper>
        <Paragraph textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          fringilla ultricies ultrices. Fusce porttitor, arcu a viverra euismod,
          sem massa faucibus felis, nec auctor dui orci id lectus.
        </Paragraph>
        <Paragraph textAlign="center">
          Etiam quis quam quis nibh vulputate ultrices non vitae felis.
          Vestibulum placerat mi non urna euismod faucibus. Cras cursus
          elementum lacus laoreet consequat. Proin dignissim sagittis libero.
          Sed malesuada vel nunc eget convallis.
        </Paragraph>
        <Paragraph textAlign="center">
          Praesent tortor metus, vestibulum vitae mattis ut, viverra luctus
          odio. Phasellus efficitur urna et dolor sollicitudin porta.
        </Paragraph>
      </BodyWrapper>
      <IconRow />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  box-sizing: border-box;

  height: 100%;
  width: 100%;
  padding: 0px 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled(PageTitle)`
  padding-top: 54px;
  padding-bottom: 40px;
`;

const BodyWrapper = styled.div`
  max-width: 600px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const IconRow = styled(AboutSocialRow)`
  padding: 48px 0px;
`;
