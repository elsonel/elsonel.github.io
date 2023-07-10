import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { ProgressLine } from '../../atoms/ProgressLine';
import { Tab } from '../../inputs/Tab';

export interface TabData {
  isSelected?: boolean;
  label?: string;
  onClick?: () => void;
}

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs?: TabData[];
}

export const Tabs: React.FC<TabsProps> = ({
  tabs = [],
  ...props
}): React.ReactElement => {
  const childRefs = useRef<HTMLDivElement[]>([]);

  const [lineStart, setLineStart] = useState(0);
  const [lineWidth, setLineWidth] = useState(0);

  const callback = (ref: HTMLDivElement | null) => {
    if (!ref) return;

    const selectedButtonIndex = tabs.findIndex((e) => e.isSelected);
    const selectedRef = childRefs.current[selectedButtonIndex];

    let buttonCoords = selectedRef.getBoundingClientRect();
    let parentCoords = ref.getBoundingClientRect();

    setLineStart(buttonCoords.left - parentCoords.left);
    setLineWidth(buttonCoords.width);
  };

  return (
    <Wrapper ref={callback} {...props}>
      <TabRow>
        {tabs.map((e, i) => (
          <div ref={(node) => node && (childRefs.current[i] = node)} key={i}>
            <Tab isSelected={e.isSelected} onClick={e.onClick}>
              {e.label}
            </Tab>
          </div>
        ))}
      </TabRow>
      <ProgressLineStyled lineStart={lineStart} lineWidth={lineWidth} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  vertical-align: top;
  position: relative;
  display: inline-block;
`;

const ProgressLineStyled = styled(ProgressLine)`
  position: absolute;

  width: 100%;
  left: 0px;
  bottom: 0px;

  pointer-events: none;
`;

const TabRow = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
