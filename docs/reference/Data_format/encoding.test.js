const vm = require('vm');
const fs = require('fs');
const p = require('path');
const t = require('assert');
const script = new vm.Script(
  fs.readFileSync(p.resolve(__dirname, 'encoding.js'), 'utf8')
);
script.runInThisContext(); // expose  + extendedEncode, simpleEncode

const {
  extendedDecode,
} = require('../../../../routes/charts/dataset/compression/extended');
const {
  simpleDecode,
} = require('../../../../routes/charts/dataset/compression/simple');

describe('encoding snippets', () => {
  describe('extendedEncode', () => {
    it('works', () => {
      var valueArray = '0,100,400,400,600,110,14,17,23,28,33,36,43,59,65'.split(
        ','
      );
      var maxValue = 601;
      t.strictEqual(
        extendedEncode(valueArray, maxValue),
        'e:AAKpqmqm.5LtBfBzCcC-DgD1ElGSG6'
      );
    });
    it('works', () => {
      t.strictEqual(extendedEncode([3968, -1, 1100, 250], 3968), 'e:..__RvEC');
    });
    it('works', () => {
      var valueArray = [
        406,
        405,
        404,
        403,
        403,
        403,
        401,
        402,
        404,
        406,
        403,
        405,
        404,
        405,
        404,
        405,
        408,
        409,
        409,
        409,
        409,
        408,
        408,
        408,
        408,
      ];
      var maxValue = 509;
      t.strictEqual(
        extendedEncode(valueArray, maxValue),
        'e:zDy7yzyryryryayiyzzDyry7yzy7yzy7zTzbzbzbzbzTzTzTzT'
      );

      t.deepStrictEqual(extendedDecode(extendedEncode(valueArray, maxValue)), [
        [
          // it's not the same as the "valueArray" because extendedEncode 'scales data values to fit within the complete range of that encoding'
          3267,
          3259,
          3251,
          3243,
          3243,
          3243,
          3226,
          3234,
          3251,
          3267,
          3243,
          3259,
          3251,
          3259,
          3251,
          3259,
          3283,
          3291,
          3291,
          3291,
          3291,
          3283,
          3283,
          3283,
          3283,
        ],
      ]);
    });
  });

  describe('simpleEncode', () => {
    it('works', () => {
      var valueArray = [0, 1, 4, 4, 6, 11, 14, 17, 23, 28, 33, 36, 43, 59, 65];
      var maxValue = 70;
      t.strictEqual(simpleEncode(valueArray, maxValue), 's:ABDDFKMPUYdflz5');
      t.deepStrictEqual(simpleDecode(simpleEncode(valueArray, maxValue)), [
        [
          // it's not the same as the "valueArray" because extendedEncode 'scales data values to fit within the complete range of that encoding'
          0,
          1,
          3,
          3,
          5,
          10,
          12,
          15,
          20,
          24,
          29,
          31,
          37,
          51,
          57,
        ],
      ]);
    });
  });
});
