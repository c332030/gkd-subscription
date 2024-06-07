import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coloros.gallery3d',
  name: '相册',
  groups: [
    {
      key: 0,
      name: '上传原图，本地只保留缩略图',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.coloros.gallery3d.app.MainActivity',
          matches: 'TextView[id="com.coloros.gallery3d:id/ignore"]',
        },
      ],
    },
    {
      key: 1,
      name: '随身卡包-开启',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.coloros.gallery3d.app.MainActivity',
          matches: '[id="com.coloros.gallery3d:id/tv_banner_negative"]',
        },
      ],
    },
  ],
});
