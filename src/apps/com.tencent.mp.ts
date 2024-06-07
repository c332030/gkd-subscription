import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mp',
  name: 'APP_NAME',
  groups: [
    {
      key: 0,
      name: '订阅号助手',
      rules: [
        {
          quickFind: true,
          activityIds:
            'com.tencent.mp.feature.personal.letter.ui.PersonalLetterActivity',
          matches: '[id="com.tencent.mp:id/btn_negative"]',
        },
      ],
    },
  ],
});
