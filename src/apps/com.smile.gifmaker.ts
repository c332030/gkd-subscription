import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.smile.gifmaker',
  name: '快手',
  groups: [
    {
      key: 0,
      name: '视频满意度反馈',
      rules: { matches: '[vid="survey_close"]' },
      snapshotUrls: ['https://i.gkd.li/i/1717037405839'],
    },
    {
      key: 0,
      name: '直接退出直播间',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.yxcorp.gifshow.detail.PhotoDetailActivity',
          matches:
            '[id="com.smile.gifmaker:id/krn_content_container"] TextView[text="退出直播间"]',
        },
      ],
    },
  ],
});
