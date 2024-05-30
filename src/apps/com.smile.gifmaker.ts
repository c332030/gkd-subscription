import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.smile.gifmaker',
  name: '快手',
  groups: [
    {
      key: 0,
      name: '视频满意度反馈',
      rules: { matches: '[vid="survey_close"]' },
      snapshotUrls: ['https://i.gkd.li/snapshot/1717037405839'],
    }
  ]
});
