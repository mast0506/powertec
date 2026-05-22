/**
 * @file LanguageContext.tsx
 * @description Global language context providing simple bilingual (zh/en) support for the HMS-PowerTec website.
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

/**
 * @description Supported language codes.
 */
export type Language = 'zh' | 'en'

/**
 * @description Shape of the language context value.
 */
interface LanguageContextValue {
  /** Current active language. */
  language: Language
  /**
   * @description Sets the current language.
   * @param lang Next language value.
   */
  setLanguage: (lang: Language) => void
  /**
   * @description Convenience translation helper choosing string by language.
   * @param options Object containing zh/en variants.
   * @returns Selected string according to current language.
   */
  t: (options: { zh: string; en: string }) => string
}

/**
 * @description Props for the LanguageProvider component.
 */
interface LanguageProviderProps {
  /** React children to render inside the provider. */
  children: ReactNode
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
)

/**
 * @description Resolves initial language from localStorage or browser setting.
 * @returns {Language} Initial language value.
 */
function resolveInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'zh'

  const stored = window.localStorage.getItem('hms-language')
  if (stored === 'zh' || stored === 'en') {
    return stored
  }

  const navLang =
    window.navigator.language || window.navigator.languages[0] || ''
  if (navLang.toLowerCase().startsWith('zh')) {
    return 'zh'
  }

  return 'en'
}

/**
 * @description Provides global language state and translation helper.
 * @param props Provider props.
 * @returns {JSX.Element} Provider-wrapped children.
 */
export function LanguageProvider({
  children,
}: LanguageProviderProps): JSX.Element {
  const [language, setLanguageState] = useState<Language>(resolveInitialLanguage)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('hms-language', language)
    }
  }, [language])

  const setLanguage = (lang: Language): void => {
    setLanguageState(lang)
  }

  const t = (options: { zh: string; en: string }): string => {
    return language === 'zh' ? options.zh : options.en
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

/**
 * @description Hook to access language context within the component tree.
 * @throws Error when used outside of LanguageProvider.
 * @returns {LanguageContextValue} Current language context value.
 */
export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}
