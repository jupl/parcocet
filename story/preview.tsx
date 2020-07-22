import {withA11y} from '@storybook/addon-a11y'
import {withKnobs} from '@storybook/addon-knobs'
import {addDecorator} from '@storybook/react'
import React from 'react'
import {RecoilRoot} from 'recoil'
import {Normalize} from 'styled-normalize'

addDecorator(withA11y)
addDecorator(withKnobs)
addDecorator(storyFn => (
  <>
    <Normalize />
    <RecoilRoot>{storyFn()}</RecoilRoot>
  </>
))
