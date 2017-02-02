import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import Highlight from "react-highlight";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import MDSpinner from "../";


injectTapEventPlugin();

function Rect({ color }) {
  return <div className="rect" style={{ backgroundColor: color }} />;
}

Rect.propTypes = {
  color: PropTypes.string.isRequired
};

class App extends Component {
  render() {
    /* eslint-disable max-len */
    return (
      <div>
        {/* hero */}
        <div className="hero">
          <div className="hero__container container">
            <div className="hero__text">
              <h1 className="hero__logo"><img src="./images/logo@2x.png" width="400" /></h1>
              <p className="hero__lead">
                Material Design spinner components for React.js.<br />
                Because it is made of 100% inline styles, you can start using it right away!
              </p>
              <div className="hero__install">
                <Highlight className="bash">
                  {"$ npm install react-md-spinner"}
                </Highlight>
              </div>
              <ul className="hero__button-group">
                <li className="hero__button">
                  <RaisedButton
                    primary
                    label="Document on GitHub"
                    href="https://github.com/tsuyoshiwada/react-md-spinner"
                  />
                </li>
              </ul>
            </div>
            <div className="hero__spinner">
              <MDSpinner size={60} />
            </div>
          </div>
        </div>

        {/* contents */}
        <div className="contents">
          <div className="container">
            {/* size */}
            <div className="block">
              <h2 className="block__title">Size</h2>
              <div className="block__row">
                <div className="block__col">
                  <div className="block__body">
                    <p>You can easily specify a custom size(default: 28px). Therefore, it is possible to use in a flexible scene.</p>
                  </div>
                </div>
                <div className="block__col">
                  <Highlight className="html">
                    {`<div>
  <MDSpinner size={16} />
  <MDSpinner size={30} />
  <MDSpinner size={50} />
  <MDSpinner size={70} />
  <MDSpinner size={100} />
</div>`}
                  </Highlight>
                </div>
              </div>
              <div className="block__result">
                <MDSpinner size={16} />
                <MDSpinner size={30} />
                <MDSpinner size={50} />
                <MDSpinner size={70} />
                <MDSpinner size={100} />
              </div>
            </div>

            {/* Duration */}
            <div className="block">
              <h2 className="block__title">Duration</h2>
              <div className="block__row">
                <div className="block__col">
                  <div className="block__body">
                    <p>You can change the Duration of the animation (default: 1333ms).<br />In the following example, we dropped the speed of the icon.</p>
                  </div>
                </div>
                <div className="block__col">
                  <Highlight className="html">
                    {`<div>
  <MDSpinner duration={2000} />
</div>`}
                  </Highlight>
                </div>
              </div>
              <div className="block__result">
                <MDSpinner duration={2000} />
              </div>
            </div>

            {/* Colors */}
            <div className="block">
              <h2 className="block__title">Colors</h2>
              <div className="block__row">
                <div className="block__col">
                  <div className="block__body">
                    <p>You can change the base color of 1 to 4.</p>
                    <p><strong>Default:</strong></p>
                    <ul>
                      {["rgb(66, 165, 245)", "rgb(239, 83, 80)", "rgb(253, 216, 53)", "rgb(76, 175, 80)"].map((color, index) =>
                        <li key={index}>color{index + 1}: <Rect color={color} /> {color}</li>
                      )}
                    </ul>
                  </div>
                </div>
                <div className="block__col">
                  <Highlight className="html">
                    {`<div>
  <MDSpinner
    color1="#e91e63"
    color2="#673ab7"
    color3="#009688"
    color4="#ff5722"
  />
</div>`}
                  </Highlight>
                </div>
              </div>
              <div className="block__result">
                <MDSpinner
                  color1="#e91e63"
                  color2="#673ab7"
                  color3="#009688"
                  color4="#ff5722"
                />
              </div>
            </div>

            {/* Single Color */}
            <div className="block">
              <h2 className="block__title">Single Color</h2>
              <div className="block__row">
                <div className="block__col">
                  <div className="block__body">
                    <p>Colorful spinner also nice. but it is also possible to change to a single color.</p>
                    <p>If you specify a singleColor, value of color1 ~ 4 are ignored.</p>
                  </div>
                </div>
                <div className="block__col">
                  <Highlight className="html">
                    {`<div>
  <MDSpinner singleColor="#03a9f4" />
</div>`}
                  </Highlight>
                </div>
              </div>
              <div className="block__result">
                <MDSpinner singleColor="#03a9f4" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <div className="footer__container container">
            <p className="footer__copyright">
              react-md-spinner.js licensed under MIT.<br />
              Made by <a href="https://github.com/tsuyoshiwada">tsuyoshiwada</a>.
              <MDSpinner
                size={14}
                singleColor="#009688"
                style={{
                  marginLeft: 10
                }}
              />
            </p>
          </div>
        </footer>
      </div>
    );
    /* eslint-enable max-len */
  }
}

ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById("app")
);
