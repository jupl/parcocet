import React from 'react'
import {RecoilRoot} from 'recoil'
import {render} from 'react-dom'
import {getRoot} from '~/src/common/util'
import {MainApp} from './components/app'

render(
  <RecoilRoot>
    <MainApp />
  </RecoilRoot>,
  getRoot(),
)
