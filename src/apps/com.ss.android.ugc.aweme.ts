import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      key: 0,
      name: '直播游戏推荐',
      rules: {
        matches:
          '[id="com.ss.android.ugc.aweme:id/n_="] View[childCount > 2] View[childCount = 1] + View',
      },
      snapshotUrls: ['https://i.gkd.li/i/1717136825621'],
    },
  ],
});
