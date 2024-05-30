import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 0,
      name: '添加到首页-经常使用',
      rules: {
        matches: '[id="com.alipay.android.phone.openplatform:id/iv_close"]',
      },
      snapshotUrls: ['https://i.gkd.li/i/1717082549409'],
    },
  ],
});
