import { Title } from 'components/Title';
import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Paragraph } from 'UI/components/text/Paragraph';
import { ThemeInterface } from 'UI/utility/themes/Theme';
import { Gallery } from '../../components/Gallery';
import { Layout } from '../../components/Layout';
import { Page } from '../../components/Page';
import { SafeNotchPadding } from '../../components/SafeNotchPadding';
import { PageTitle } from '../../UI/components/atoms/PageTitle';
import { GreetingPanel } from '../../UI/components/groups/GreetingPanel';
import { SortsData, TabsData } from './data';

export interface PageGalleryProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const PageGallery: React.FC<PageGalleryProps> = ({
  ...props
}): React.ReactElement => {
  const theme = useTheme() as ThemeInterface;

  return (
    <Page title="Gallery" {...props}>
      <Layout>
        <SafeNotchPadding>
          <Title>GALLERY</Title>
          <Gallery tabsData={TabsData} sortsData={SortsData} />
        </SafeNotchPadding>
      </Layout>
    </Page>
  );
};
