import React from 'react'
import {Provider} from 'react-redux'
import configureStore from './src/configureStore'

const App = () => {
    <Provider store= {configureStore()}>
      <AppContainer />
    </Provider>
}

export default App;