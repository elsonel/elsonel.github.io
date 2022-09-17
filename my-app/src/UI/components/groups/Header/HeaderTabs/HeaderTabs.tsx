import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GreaterThanHook } from '../../../../utility/hooks/ResponsiveProps';
import { HeaderTab } from '../../../inputs/HeaderTab';
import { LinkFake } from '../../../inputs/LinkFake';
import { Modal } from '../../../layout/Modal';
import { HeaderTabsMobile } from '../HeaderTabsMobile';

export interface HeaderTabData {
  label: string;
  href: string;
  onClick?: () => void;
}

export interface HeaderTabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs?: HeaderTabData[];
}

export const HeaderTabs: React.FC<HeaderTabsProps> = ({
  tabs = [],
  ...props
}): React.ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktop = GreaterThanHook(600);

  useEffect(() => {
    if (isDesktop) setIsMenuOpen(false);
  }, [isDesktop]);

  const renderDesktop = () => {
    return tabs.map((e, i) => (
      <LinkFake
        key={i}
        onClick={e.onClick}
        href={e.href}
        children={<HeaderTab>{e.label}</HeaderTab>}
      />
    ));
  };

  const renderMobile = () => {
    return (
      <HeaderTab onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? 'CLOSE' : 'MENU'}
      </HeaderTab>
    );
  };

  return (
    <Wrapper {...props}>
      <Background isVisible={isMenuOpen} />
      <Content>{isDesktop ? renderDesktop() : renderMobile()}</Content>
      <ModalMobile
        tabs={tabs}
        isVisible={isMenuOpen}
        onTabClick={() => setIsMenuOpen(false)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
`;

const Background = styled(Modal)`
  z-index: 0;
  height: ${({ theme }) => theme.size.headerHeight}px;

  background: ${({ theme }) => theme.color.background};
  transform: none;
`;

const Content = styled.div`
  z-index: 1;

  display: flex;
  gap: 20px;
`;

const ModalMobile = styled(HeaderTabsMobile)`
  z-index: 0;
  box-sizing: border-box;

  top: ${({ theme }) => theme.size.headerHeight}px;
  height: ${({ theme }) => `calc(100vh - ${theme.size.headerHeight}px)`};
  padding-top: 0px;

  background: ${({ theme }) => theme.color.background};
`;
