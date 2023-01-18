import React, { useEffect } from 'react'
import { i18n } from '@lingui/core'
import { detect, fromNavigator } from "@lingui/detect-locale"
import { I18nProvider } from '@lingui/react'
import { Trans } from '@lingui/macro'
import logo from './logo.svg';
import './App.css';

const DEFAULT_FALLBACK = 'en'

export async function dynamicActivate(locale) {
  const { default: messages } = await import(
    /* webpackChunkName: "language-[request]" */
    `./locales/${locale}/messages.json`)
  // console.log({ messages })
  i18n.load(locale, messages)
  i18n.activate(locale)
}

function App() {

  useEffect(() => {
    const currentLocale = detect(
      fromNavigator()?.substring(0, 2),
      DEFAULT_FALLBACK
    )
    dynamicActivate(currentLocale)
  }, [])

  return (
    <I18nProvider i18n={i18n}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Trans>Learn React</Trans>
          </a>
        </header>
      </div>
    </I18nProvider>
  );
}

export default App;
