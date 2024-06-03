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
    },
    {
      key: 1,
      name: '视频描述广告',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches: '[id="com.ss.android.ugc.aweme:id/close"]',
        },
      ],
    },
    {
      key: 2,
      name: '直播满意度调查',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches: 'LynxFlattenUI[text^="满意"] - LynxFlattenUI[text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/15531325',
        },
      ],
    },
    {
      key: 3,
      name: '视频推荐-取消',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches: '[id="com.ss.android.ugc.aweme:id/bpg"]',
          snapshotUrls: 'https://i.gkd.li/i/15532712',
        },
      ],
    },
    {
      key: 4,
      name: '博主主页视频浏览-不关注',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.ss.android.ugc.aweme.detail.ui.DetailActivity',
          matches: '[id="com.ss.android.ugc.aweme:id/bov"]',
          snapshotUrls: 'https://i.gkd.li/i/15532724',
        },
      ],
    },
    {
      key: 5,
      name: '评论-显示折叠的评论',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.ss.android.ugc.aweme.detail.ui.DetailActivity',
          matches: '[id="com.ss.android.ugc.aweme:id/huc"][text="展开"]',
          snapshotUrls: 'https://i.gkd.li/i/15532730',
        },
      ],
    },
  ],
});
