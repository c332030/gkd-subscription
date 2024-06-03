import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.citiccard.mobilebank',
  name: '动卡空间',
  groups: [
    {
      key: 0,
      name: '开启通知权限',
      rules: [
        {
          quickFind: true,
          activityIds:
            'com.citiccard.mobilebank.card.activity.BillDetailHomeActivity',
          matches: '[id="com.citiccard.mobilebank:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15531169',
        },
      ],
    },
  ],
});
