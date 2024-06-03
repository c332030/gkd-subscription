import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.meituan',
  name: '美团',
  groups: [
    {
      key: 0,
      name: '钱包-借钱推荐',
      rules: [
        {
          activityIds: 'com.sankuai.eh.framework.EHContainerActivity',
          matches: 'View[childCount=2] + TextView[text^="点击领取"] + TextView',
          snapshotUrls: 'https://i.gkd.li/i/15532678',
        },
      ],
    },
  ],
});
