import React, { Component } from 'react';
import Header from './Header.js'
import Main from './Main.js'
import injectTapEventPlugin from 'react-tap-event-plugin'

// material-ui imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

injectTapEventPlugin()
const muiTheme = getMuiTheme({
	margin: 0,
	appBar: {
		height: 70
	}
})

class App extends Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div className="App">
					<Header />
					<Main />
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
