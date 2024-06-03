import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhichan.msmds',
  name: '买什么都省',
  groups: [
    {
      key: 0,
      name: '全屏弹窗',
      rules: [
        {
          activityIds: 'com.zhichan.msmds.MainActivity',
          matches:
            '[id="com.zhichan.msmds:id/action_bar_root"] > [id="android:id/content"] > FrameLayout > ViewGroup + ViewGroup > ViewGroup > ViewGroup - ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/15532491',
        },
      ],
    },
  ],
});
