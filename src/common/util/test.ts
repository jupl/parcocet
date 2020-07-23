import {expect, test} from '@jest/globals'

/***
 * These tests require simulated browser environment.
 * @jest-environment jsdom
 */

test('getRoot', async () => {
  const {getRoot} = await import('.')
  expect(document.querySelector('#root')).toBeFalsy()
  getRoot()
  expect(document.querySelector('#root')).toBeTruthy()
  getRoot()
  expect(document.querySelector('#root')).toBeTruthy()
})

test('getRoot - custom id', async () => {
  const {getRoot} = await import('.')
  expect(document.querySelector('#alt')).toBeFalsy()
  getRoot({id: 'alt'})
  expect(document.querySelector('#alt')).toBeTruthy()
})

test('getRoot - custom tag', async () => {
  const {getRoot} = await import('.')
  expect(document.querySelector('#span')).toBeFalsy()
  getRoot({id: 'span', tag: 'span'})
  expect(document.querySelector('#span')).toBeTruthy()
})

test('getRoot - custom parent', async () => {
  const {getRoot} = await import('.')
  const parent = document.createElement('div')
  expect(parent.querySelector('#parent')).toBeFalsy()
  getRoot({id: 'parent', parent})
  expect(parent.querySelector('#parent')).toBeTruthy()
  expect(document.querySelector('#parent')).toBeFalsy()
})
