import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid/lib';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import logo from './defi-logo-color.png';

const styles = {
  paper: {
    marginTop: '30px',
    padding: '60px 30px ',
  },
  button: {
    marginTop: '30px',
  }
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Grid fluid>
          <Row center="xs" middle="xs">
            <Col xs={12} sm={8} md={5} lg={5}>
              <Paper zDepth={3} style={styles.paper}>
                <Row center="xs">
                  <Col xs={12}>
                    <img src={logo} alt="logo" />
                  </Col>
                  <Col xs={12}>
                    <TextField
                      fullWidth="true"
                      floatingLabelText="Username"
                    />
                  </Col>
                  <Col xs={12}>
                    <TextField
                      fullWidth="true"
                      floatingLabelText="Password"
                      type="password"
                    />
                  </Col>
                  <Col xs={12}>
                    <RaisedButton
                      style={styles.button}
                      primary={true}
                      label="Login"
                    />
                  </Col>
                </Row>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
