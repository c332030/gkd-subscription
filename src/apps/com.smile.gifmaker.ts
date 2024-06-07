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
      key: 1,
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
    {
      key: 2,
      name: '视频描述上方广告',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
          matches: '[id="com.smile.gifmaker:id/close_icon"]',
          snapshotUrls: 'https://i.gkd.li/i/15722461',
        },
      ],
    },
    {
      key: 3,
      name: '视频-评论区-评论问卷调查',
      rules: [
        {
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
          matches:
            'TextView[text="你对评论内容是否满意？"] + ViewGroup + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/15722545',
        },
      ],
    },
    {
      key: 4,
      name: '视频-商品推荐',
      rules: [
        {
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
          matches: 'ViewGroup[desc="close_view"]',
          snapshotUrls: 'https://i.gkd.li/i/15723407',
        },
      ],
    },
    {
      key: 5,
      name: '插件-推荐',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
          matches: '[id="com.smile.gifmaker:id/close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/15724384',
        },
      ],
    },
  ],
});
