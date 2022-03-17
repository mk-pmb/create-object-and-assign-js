// -*- coding: utf-8, tab-width: 2 -*-

import 'p-fatal';
import 'usnam-pmb';

import pTapeTest from 'p-tape';

import crObAss from '../index.mjs';

function mapEntries(o, f) { return Object.entries(o).map(f); }

function describeSandwich() {
  return ('[sandwich; relevant ingredients: ' + (mapEntries(this,
    ([k, v]) => (v + '× ' + k)).join(', ') || 'nothing') + '.]');
}


const tu = {
  crObAss,
  declareTest: pTapeTest,
  describeSandwich,
  getProto: Object.getPrototypeOf,
  keys(o) { return Object.keys(o).sort().join(','); },
};

export default tu;
