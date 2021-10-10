import React, { useState } from 'react';
import PageCard from 'components/web/PageCard';
import { Tab, Tabs } from 'components/web/Tab';
import Info from './info';
import RecruitmentStatus from './recruitmentStatus';
import Activity from './activity';

function MettingInfo() {
  const [tab, setTab] = useState(0);

  return (
    <PageCard
      pageTitle="모임정보"
      tabs={
        <Tabs value={tab} onChange={(value) => setTab(value)}>
          <Tab label="상세내용" />
          <Tab label="모집현황" />
          <Tab label="모임활동" />
        </Tabs>
      }
    >
      {tab === 0 && <Info />}
      {tab === 1 && <RecruitmentStatus />}
      {tab === 2 && <Activity />}
    </PageCard>
  );
}

export default MettingInfo;
