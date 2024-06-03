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
      name: '首页-推荐开启通知',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.taou.maimai.MainActivity',
          matches: 'ImageView[id="com.taou.maimai:id/close_btn"]',
        },
      ],
    },
    {
      key: 3,
      name: '消息页-推荐开启通知',
      rules: [
        {
          activityIds: 'com.taou.maimai.MainActivity',
          matches: 'ImageView[desc="关闭"][clickable=true]',
        },
      ],
    },
    {
      key: 4,
      name: '多次浏览关注提醒',
      rules: [
        {
          activityIds: 'com.taou.maimai.react.ReactActivity',
          matches: 'TextView[text^="今天浏览了"] + ViewGroup > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/15531112',
        },
      ],
    },
  ],
});
