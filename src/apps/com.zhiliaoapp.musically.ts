import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhiliaoapp.musically',
  name: 'TikTok',
  groups: [
    {
      key: 0,
      name: '视频-评论区-评论问卷调查',
      rules: [
        {
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            'FlattenUIText[text="你喜欢该视频中的评论吗？"] + LynxFlattenUI',
          snapshotUrls: 'https://i.gkd.li/i/15722527',
        },
      ],
    },
  ],
});
