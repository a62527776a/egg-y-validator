'use strict';

/**
 * egg-y-validator default config
 * @member Config#validator
 * @property {String} SOME_KEY - some description
 */
exports.validator = {
  open: 'zh-CN',
  languages: {
    'zh-CN': {
      required: '%s 必填',
    },
  },
  superstruct: false,
  types() {},
  async formatter(ctx, error) {
    ctx.status = 400;
    ctx.body = error;
  },
};
