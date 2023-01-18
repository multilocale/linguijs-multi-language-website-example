import { i18n } from '@lingui/core'
import { detect, fromUrl, fromStorage, fromNavigator } from "@lingui/detect-locale"
import { I18nProvider } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { messages as enMessages } from './locales/en/messages'
import { messages as esMessages } from './locales/es/messages'
import logo from './logo.svg';
import './App.css';

const DEFAULT_FALLBACK = 'en'

const currentLocale = detect(
  fromNavigator(),
  DEFAULT_FALLBACK
)

i18n.load({
  en: enMessages,
  es: esMessages,
})
i18n.activate(currentLocale)

function App() {
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
