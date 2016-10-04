import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid/lib';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import headerLogo from './img/defi-logo-color.png';
import poweredLogo from './img/powered-by-logo.png';

const styles = {
  paper: {
    marginTop: '50px',
    padding: '60px 30px ',
  },
  button: {
    margin: '30px 0',
  },
  bottom: {
    marginTop: '20px',
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    var username = this.state.username.trim();
    var password = this.state.password.trim();
    if (!username || !password) {
      if (!username) {
        this.setState({ errorUsername: 'Username required' });
      } else {
        this.setState({ errorUsername: '' });
      }

      if (!password) {
        this.setState({ errorPassword: 'Password required' });
      } else {
        this.setState({ errorPassword: '' });
      }

      return;
    } else {
      alert('Username: ' + username + ' / Password: ' + password);
    }

    this.setState({
      username: '',
      password: '',
      errorUsername: '',
      errorPassword: '',
    });
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
    if (this.state.errorUsername) {
      this.setState({ errorUsername: '' });
    }
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
    if (this.state.errorPassword) {
      this.setState({ errorPassword: '' });
    }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Grid>
          <Row center="xs" middle="xs">
            <Col xs={10} sm={6} md={4} lg={4}>
              <Paper zDepth={3} style={styles.paper}>
                <form action="#" method="POST" onSubmit={this.handleSubmit}>
                  <Row center="xs">
                    <Col xs={12}>
                      <img src={headerLogo} alt="logo" />
                    </Col>
                    <Col xs={12}>
                      <TextField
                        fullWidth={true}
                        floatingLabelText="Username"
                        value={this.state.username}
                        errorText={this.state.errorUsername}
                        onChange={this.handleUsernameChange.bind(this)}
                      />
                    </Col>
                    <Col xs={12}>
                      <TextField
                        fullWidth={true}
                        floatingLabelText="Password"
                        value={this.state.password}
                        errorText={this.state.errorPassword}
                        onChange={this.handlePasswordChange.bind(this)}
                        type="password"
                      />
                    </Col>
                    <Col xs={12}>
                      <RaisedButton
                        type="submit"
                        style={styles.button}
                        primary={true}
                        label="Login"
                      />
                    </Col>
                    <Col xs={8}>
                      <p>For help please don't call 214-732-9199</p>
                    </Col>
                    <Col xs={8}>
                      <p>
                        <small>
                          <strong>defi</strong>&nbsp;
                          deployed&nbsp;
                          <strong>SOW-867-Adding-CUDL-Forwarding-Support</strong>&nbsp;
                          on 10/3/2016 1:30:27 PM
                        </small>
                      </p>
                    </Col>
                    <Col xs={8}>
                      <a
                      href="https://kraken.defisolutions.com/app#/projects/definitive/releases/create"
                      className="btn btn-danger btn-sm">
                        Deploy
                      </a>
                    </Col>
                  </Row>
                </form>
              </Paper>
              <a href="http://defisolutions.com" target="_blank">
                <img src={poweredLogo} style={styles.bottom} alt="logo" />
              </a>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
