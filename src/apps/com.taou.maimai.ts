import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taou.maimai',
  name: '脉脉',
  groups: [
    {
      key: 0,
      name: '补充工作信息',
      rules: [
        {
          activityIds: 'com.taou.maimai.react.ReactActivity',
          matches:
            'TextView[text^="距离你上份工作"] - ViewGroup > ViewGroup > ViewGroup > ImageView',
        },
      ],
    },
    {
      key: 1,
      name: '通知',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.taou.maimai.MainActivity',
          matches: 'ImageView[id="com.taou.maimai:id/close_btn"]',
        },
      ],
    },
  ],
});
