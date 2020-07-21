import React from 'react'
import {render} from 'react-dom'
import {RecoilRoot} from 'recoil'
import {Normalize} from 'styled-normalize'
import {getRoot} from '~/src/common/util'
import {MainApp} from './components/app'

render(
  <>
    <Normalize />
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  </>,
  getRoot(),
)
