/**
 * @file App.tsx
 * @description Root application component defining global layout, language provider, and page routes for the HMS-PowerTec website.
 */

import { HashRouter, Route, Routes, useLocation } from 'react-router'
import HomePage from './pages/Home'
import ServicesPage from './pages/Services'
import SolutionsPage from './pages/Solutions'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import { LanguageProvider, useLanguage } from './context/LanguageContext'

/**
 * @description Main application component that wraps routing with HashRouter and global LanguageProvider.
 * @returns {JSX.Element} The App component.
 */
export default function App(): JSX.Element {
  return (
    <LanguageProvider>
      <HashRouter>
        <AppShell />
      </HashRouter>
    </LanguageProvider>
  )
}

/**
 * @description Shell component providing global layout (header, footer) and route outlet.
 * @returns {JSX.Element} The shell layout component.
 */
function AppShell(): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <SiteHeader />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}

/**
 * @description Navigation item definition for header.
 */
interface NavItem {
  /** Display label in the navigation bar. */
  label: string
  /** Target hash-based href, e.g. "#/services". */
  href: string
}

/**
 * @description Site header with logo, language switcher and primary navigation.
 * @returns {JSX.Element} The header component.
 */
function SiteHeader(): JSX.Element {
  const location = useLocation()
  const { language, setLanguage, t } = useLanguage()

  const navItems: NavItem[] = [
    { label: t({ zh: '主页', en: 'Home' }), href: '#/' },
    { label: t({ zh: '产品与服务', en: 'Products & Services' }), href: '#/services' },
    { label: t({ zh: '解决方案', en: 'Solutions' }), href: '#/solutions' },
    { label: t({ zh: '关于我们', en: 'About Us' }), href: '#/about' },
    { label: t({ zh: '联系我们', en: 'Contact' }), href: '#/contact' },
  ]

  /**
   * @description Checks whether a navigation item is active for the current location.
   * @param href Hash-based href string, e.g. "#/services".
   * @returns {boolean} True when item should be highlighted.
   */
  const isActive = (href: string): boolean => {
    const targetPath = href.replace('#', '') || '/'
    return location.pathname === targetPath
  }

  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:py-4">
        <a href="#/" className="flex items-center gap-3">
          {/* Company logo image for HMS-PowerTec */}
          <img
            src="https://pub-cdn.sider.ai/u/U0L5HV95NWL/web-coder/6a1026bd614ae89139bff8ac/resource/7f78fdc8-1556-42f9-93f6-e5c78a97f4e5.png"
            alt="HMS-PowerTec · Marine Propulsion &amp; Power Services"
            className="h-10 w-auto object-contain"
          />
          <span className="sr-only">HMS-PowerTec · Marine Propulsion &amp; Power Services</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative transition-colors ${
                isActive(item.href)
                  ? 'text-sky-700'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-sky-500 to-red-500" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex">
            <a
              href="#/contact"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-red-600 to-sky-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white shadow-md shadow-red-400/30 hover:shadow-sky-400/40"
            >
              {t({
                zh: '24/7 紧急支持',
                en: '24/7 Emergency Support',
              })}
            </a>
          </div>

          <div className="flex rounded-full border border-slate-200 bg-slate-100 p-0.5 text-[11px] text-slate-600">
            <button
              type="button"
              onClick={() => setLanguage('zh')}
              className={`rounded-full px-2 py-0.5 ${
                language === 'zh'
                  ? 'bg-gradient-to-r from-red-600 to-sky-500 text-white'
                  : 'hover:text-slate-900'
              }`}
            >
              中
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`rounded-full px-2 py-0.5 ${
                language === 'en'
                  ? 'bg-gradient-to-r from-red-600 to-sky-500 text-white'
                  : 'hover:text-slate-900'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

/**
 * @description Site footer displaying basic company information, quick links, and bilingual text.
 * @returns {JSX.Element} The footer component.
 */
function SiteFooter(): JSX.Element {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-900">
            HMS-PowerTec Limited
          </h3>
          <p className="max-w-sm text-xs leading-relaxed text-slate-600">
            {t({
              zh: '专注于两冲程与四冲程主机、辅机、轴系、舵系及现场加工的专业服务供应商，为全球船东及管理公司提供可靠、高效的推进及动力系统解决方案。',
              en: 'A specialised service provider for two-stroke and four-stroke main engines, auxiliary engines, shafting, rudder systems and in-situ machining, delivering reliable and efficient Marine Propulsion &amp; Power system solutions to shipowners and managers worldwide.',
            })}
          </p>
          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} HMS-PowerTec Limited.{' '}
            {t({
              zh: '保留所有权利。',
              en: 'All rights reserved.',
            })}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 text-xs md:grid-cols-3">
          <div>
            <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-slate-700">
              {t({ zh: '快速链接', en: 'Quick Links' })}
            </h4>
            <ul className="space-y-1.5 text-slate-600">
              <li>
                <a href="#/" className="hover:text-slate-900">
                  {t({ zh: '主页', en: 'Home' })}
                </a>
              </li>
              <li>
                <a href="#/services" className="hover:text-slate-900">
                  {t({ zh: '产品与服务', en: 'Products &amp; Services' })}
                </a>
              </li>
              <li>
                <a href="#/solutions" className="hover:text-slate-900">
                  {t({ zh: '解决方案', en: 'Solutions' })}
                </a>
              </li>
              <li>
                <a href="#/about" className="hover:text-slate-900">
                  {t({ zh: '关于我们', en: 'About Us' })}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-slate-700">
              {t({ zh: '服务与支持', en: 'Service &amp; Support' })}
            </h4>
            <ul className="space-y-1.5 text-slate-600">
              <li>{t({ zh: '24/7 紧急响应', en: '24/7 emergency response' })}</li>
              <li>{t({ zh: '全球现场服务', en: 'Worldwide on-site service' })}</li>
              <li>{t({ zh: '备件供应', en: 'Spare parts supply' })}</li>
              <li>{t({ zh: '技术咨询', en: 'Technical consultancy' })}</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-slate-700">
              {t({ zh: '联系方式', en: 'Contact' })}
            </h4>
            <ul className="space-y-1.5 text-slate-600">
              <li>
                {t({ zh: '电话：+XX-XXXX-XXXX', en: 'Tel: +XX-XXXX-XXXX' })}
              </li>
              <li>
                {t({
                  zh: '邮箱：info@hms-powertec.com',
                  en: 'E-mail: info@hms-powertec.com',
                })}
              </li>
              <li>
                {t({
                  zh: '地址：待补充 · Marine Service Hub',
                  en: 'Address: To be confirmed · Marine Service Hub',
                })}
              </li>
            </ul>
            <a
              href="#/contact"
              className="mt-3 inline-flex text-[11px] font-semibold text-sky-700 hover:text-sky-600"
            >
              {t({
                zh: '提交项目需求 →',
                en: 'Submit your project →',
              })}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}