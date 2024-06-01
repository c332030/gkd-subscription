import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mobileqq',
  name: 'QQ',
  groups: [
    {
      key: 0,
      name: '加入鹅毛集市',
      rules: [
        {
          quickFind: true,
          activityIds:
            'com.tencent.open.agent.PublicFragmentActivityForOpenSDK',
          matches: 'CheckBox[id="com.tencent.mobileqq:id/awy"]',
        },
      ],
    },
  ],
});
