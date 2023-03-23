import React from 'react';
import styled, { css } from 'styled-components';
import { GreaterThan } from '../../../utility/styles/ResponsiveCSS';

export interface IFrameLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const FrameLayout: React.FC<IFrameLayoutProps> = ({
  children,

  ...props
}): React.ReactElement => (
  <Wrapper {...props}>
    <Content>{children}</Content>
  </Wrapper>
);

const Padding = css`
  ${({ theme }) =>
    GreaterThan(
      0,
      `
        padding: ${theme.size.headerHeight}px 0px 0px 0px;
      `
    ) +
    GreaterThan(
      theme.breakpoint.header,
      `
        padding: 
          ${theme.size.headerHeight}px 
          ${theme.size.padding}px 
          ${theme.size.padding}px 
          ${theme.size.headerHeight}px;
      `
    )}
`;

const Wrapper = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  min-height: ${({ theme }) => theme.size.frameMinHeight}px;
  ${Padding}
`;

const Content = styled.div`
  position: relative;
  width: 100%;
`;
