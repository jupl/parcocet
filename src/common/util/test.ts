import test from 'ava'
import {getRoot} from '.'

test('getRoot', t => {
  t.falsy(document.querySelector('#root'))
  getRoot()
  t.truthy(document.querySelector('#root'))
  getRoot()
  t.truthy(document.querySelector('#root'))
})

test('getRoot - custom id', t => {
  t.falsy(document.querySelector('#alt'))
  getRoot({id: 'alt'})
  t.truthy(document.querySelector('#alt'))
})

test('getRoot - custom tag', t => {
  t.falsy(document.querySelector('#span'))
  getRoot({id: 'span', tag: 'span'})
  t.truthy(document.querySelector('#span'))
})

test('getRoot - custom parent', t => {
  const parent = document.createElement('div')
  t.falsy(parent.querySelector('#parent'))
  getRoot({parent, id: 'parent'})
  t.truthy(parent.querySelector('#parent'))
  t.falsy(document.querySelector('#parent'))
})
