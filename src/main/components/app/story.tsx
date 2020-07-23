import {storiesOf} from '@storybook/react'
import React from 'react'
import {MainApp} from '~/src/main/components/app'

storiesOf('Main/App', module)
  .addParameters({component: MainApp})
  .add('default', () => <MainApp />)
