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
          matches: 'Button[id="com.ss.android.ugc.live:id/knt"]',
        },
      ],
    },
  ],
});
