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
    },
    {
      key: 1,
      name: '添加到首页-小程序',
      rules: [
        {
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches: 'TextView[text="立即添加"] + TextView[text="取消"]',
          snapshotUrls: 'https://i.gkd.li/i/15531282',
        },
      ],
    },
    {
      key: 2,
      name: '首页-半屏广告',
      rules: [
        {
          activityIds: 'com.eg.android.AlipayGphone.AlipayLogin',
          matches:
            '[id="com.alipay.android.phone.openplatform:id/home_grid_container"] + RelativeLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/15531414',
        },
      ],
    },
  ],
});
