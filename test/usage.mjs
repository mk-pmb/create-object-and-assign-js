// -*- coding: utf-8, tab-width: 2 -*-

import testUtil from './testUtil.mjs';

const {
  crObAss,
  declareTest,
  describeSandwich,
  getProto,
  keys,
} = testUtil;


declareTest('Basics', function sandwiches(t) {
  t.plan(8);
  const eq = t.strictEqual;
  const theoreticalSandwich = { toString: describeSandwich };

  const poorCrunch = crObAss(theoreticalSandwich, { toasted_bread: 1 });
  eq(getProto(poorCrunch), theoreticalSandwich);
  eq(keys(poorCrunch), 'toasted_bread');
  eq(String(poorCrunch),
    '[sandwich; relevant ingredients: 1× toasted_bread.]');

  const blt = crObAss(poorCrunch, { bacon: 3, lettuce: 2 }, { tomato: 4 });
  eq(getProto(blt), poorCrunch);
  eq(keys(blt), 'bacon,lettuce,tomato');
  eq(String(blt),
    '[sandwich; relevant ingredients: 3× bacon, 2× lettuce, 4× tomato.]');
  // Next to bacon, the bread is too boring to mention, but it's still there:
  t.ok('toasted_bread' in blt);
  eq(blt.toasted_bread, 1);
});
