import React from 'react'
import {render} from 'react-dom'
import {RecoilRoot} from 'recoil'
import {getRoot} from '~/src/common/util'
import {MainApp} from './components/app'

render(
  <RecoilRoot>
    <MainApp />
  </RecoilRoot>,
  getRoot(),
)
