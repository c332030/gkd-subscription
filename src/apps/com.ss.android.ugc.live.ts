import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.live',
  name: '抖音火山版',
  groups: [
    {
      key: 0,
      name: '给朋友打招呼',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches: '[id="com.ss.android.ugc.live:id/km6"]',
        },
      ],
    },
    {
      key: 1,
      name: '通讯录-权限推荐',
      rules: [
        {
          quickFind: true,
          activityIds:
            'com.ss.android.ugc.aweme.bullet.ui.BulletContainerActivity',
          matches: '[id="com.ss.android.ugc.live:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15723903',
        },
      ],
    },
    {
      key: 2,
      name: '通讯录-权限推荐-二次确认',
      rules: [
        {
          quickFind: true,
          activityIds:
            'com.ss.android.ugc.aweme.bullet.ui.BulletContainerActivity',
          matches: '[id="com.ss.android.ugc.live:id/d6"]',
          snapshotUrls: 'https://i.gkd.li/i/15724068',
        },
      ],
    },
  ],
});
