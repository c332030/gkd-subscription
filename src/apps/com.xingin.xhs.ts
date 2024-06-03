import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xingin.xhs',
  name: '小红书',
  groups: [
    {
      key: 0,
      name: '开启通知',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.xingin.xhs.index.v2.IndexActivityV2',
          matches: '[id="com.xingin.xhs:id/ghw"]',
          snapshotUrls: 'https://i.gkd.li/i/15531488',
        },
      ],
    },
  ],
});
