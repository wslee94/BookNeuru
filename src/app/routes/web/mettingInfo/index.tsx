import React, { useState } from 'react';
import PageCard from 'components/web/PageCard';
import { Tab, Tabs } from 'components/web/Tab';

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
      <div>내용</div>
    </PageCard>
  );
}

export default MettingInfo;
