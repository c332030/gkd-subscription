import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.quark.browser',
  name: '夸克',
  groups: [
    {
      key: 0,
      name: '广告小说置顶',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.ucpro.BrowserActivity',
          matches:
            'ImageView[id="com.quark.browser:id/bookshelf_slot_close_img"]',
        },
      ],
    },
    {
      key: 1,
      name: '退出阅读推荐小说',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.ucpro.BrowserActivity',
          matches: 'Button[text="等等再读"]',
        },
      ],
    },
  ],
});
