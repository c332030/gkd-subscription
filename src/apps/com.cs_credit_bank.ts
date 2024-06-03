import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cs_credit_bank',
  name: '发现精彩',
  groups: [
    {
      key: 0,
      name: '邀请分期弹窗',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.mapass.example.activity.MainActivity_',
          matches: '[id="com.cs_credit_bank:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15531383',
        },
      ],
    },
  ],
});
