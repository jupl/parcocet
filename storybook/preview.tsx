import {addDecorator} from '@storybook/react'
import React from 'react'
import {RecoilRoot} from 'recoil'
import {Normalize} from 'styled-normalize'

addDecorator(storyFn => (
  <>
    <Normalize />
    <RecoilRoot>{storyFn()}</RecoilRoot>
  </>
))
