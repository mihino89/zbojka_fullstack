/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import App from "./App";
import i18next from 'i18next';
import {I18nextProvider} from 'react-i18next';
import common_de from "./translation/de/common.json"
import common_en from "./translation/en/common.json";
import common_sk from "./translation/sk/common.json";
import common_pl from "./translation/pl/common.json";

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'sk',                              // language to use
    resources: {
        de: {
            common: common_de
        },
        sk: {
            common: common_sk
        },
        pl: {
            common: common_pl
        },
        en: {
            common: common_en               // 'common' is our custom namespace
        },
    },
});

ReactDOM.render(
  <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <App/>
      </I18nextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
