import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ThemeProvider, StyledEngineProvider } from '@mui/styles';

import ColorPicker from '../src'

class Controlled extends React.Component {
  state = { value: '#fff' }

  handleChange = (value) => {
    this.setState({ value })
    action('changed')(value)
  }

  render () {
    return (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={{}}>
          <ColorPicker
            value={this.state.value}
            onChange={this.handleChange}
            floatingLabelText='Color picker'
            variant='outlined'
          />
          <button onClick={() => this.handleChange('#00ff00')}>set #00ff00</button>
        </ThemeProvider>
      </StyledEngineProvider>
    );
  }
}

storiesOf('ColorPicker', module)
  .add('simple', () => (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={{}}>
        <ColorPicker
          defaultValue='#000000'
          onChange={action('changed')}
          floatingLabelText='Color picker'
        />
      </ThemeProvider>
    </StyledEngineProvider>
  ))
  .add('controlled', () => (
    <Controlled />
  ))
