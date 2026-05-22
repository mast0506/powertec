/**
 * @file Home.tsx
 * @description Landing page for HMS-PowerTec, highlighting core marine machinery services with bilingual content.
 */

import { useLanguage } from '../context/LanguageContext'

/**
 * @description Home page component showcasing hero, key services, and value highlights in Chinese and English.
 * @returns {JSX.Element} The home page layout.
 */
export default function Home(): JSX.Element {
  const { language, t } = useLanguage()

  const heroFeatureCards =
    language === 'zh'
      ? [
          {
            title: '主机 / 辅机',
            desc: '例行保养、大修、ECES、电控系统服务',
          },
          {
            title: '轴系 / 舵系',
            desc: '对中、线轴测量、刮研、镗孔、轴承负荷调整',
          },
          {
            title: '现场加工 & 备件',
            desc: '曲轴、床座、法兰加工及整机备件供应',
          },
        ]
      : [
          {
            title: 'Main / Auxiliary Engines',
            desc: 'Routine overhaul, major repair, ECES & control systems',
          },
          {
            title: 'Shafting / Rudder',
            desc: 'Alignment, line-boring, scraping, load adjustment',
          },
          {
            title: 'In-situ Machining & Spares',
            desc: 'Crankshaft, bedplate, flange machining & spare parts',
          },
        ]

  return (
    <div className="bg-slate-50 text-slate-900">
      {/* Hero section */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-sky-50/40">
        {/* Ocean background image without white haze overlay */}
        <div className="pointer-events-none absolute inset-0">
          <img
            src="https://pub-cdn.sider.ai/u/U0L5HV95NWL/web-coder/6a1026bd614ae89139bff8ac/resource/ce48b95e-c557-4640-afd9-f24289cc944f.jpg"
            className="h-full w-full object-cover"
            alt="Ocean background"
          />
          {/* Blue glow overlays to add depth without whitening the sea */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.18),_transparent_55%)]" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 md:flex-row md:items-center md:py-16">
          {/* Left hero column: headline, copy and CTAs */}
          <div className="flex-1 space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-700 shadow-sm shadow-sky-200">
              Marine Propulsion & Power
              <span className="h-1 w-1 rounded-full bg-red-500" />
              {t({
                zh: '24/7 Global Response',
                en: '24/7 Global Response',
              })}
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              {t({
                zh: '专业船舶设备维修与现场工程服务',
                en: 'Specialised Marine Machinery Service & On-site Engineering',
              })}
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-100">
              {t({
                zh: 'HMS-PowerTec 专注于主机 / 辅机、轴系、舵系与现场加工，为远洋船舶提供一体化推进及动力系统服务和备件，让您的船舶在全球航线保持安全、高效、可预期的运行。',
                en: 'HMS-PowerTec delivers integrated Marine Propulsion & Power system services for main & auxiliary engines, shafting, rudder systems and in-situ machining, helping your vessels operate safely, efficiently and predictably on global routes.',
              })}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-sky-500 px-6 py-2 text-sm font-semibold text-white shadow-md shadow-red-400/30 hover:shadow-sky-400/40"
              >
                {t({ zh: '立即咨询项目', en: 'Request Support' })}
              </a>
              <a
                href="#/services"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/90 px-5 py-2 text-xs font-medium text-slate-700 hover:border-sky-400 hover:text-sky-600"
              >
                {t({ zh: '查看全部服务', en: 'View All Services' })}
              </a>
            </div>
          </div>

          {/* Right hero column: main imagery */}
          <div className="flex-1">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-sky-400/30 via-transparent to-red-400/30 blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-2xl shadow-sky-200">
                <img
                  src="https://pub-cdn.sider.ai/u/U0L5HV95NWL/web-coder/6a1026bd614ae89139bff8ac/resource/fcd0fb03-e808-4f7c-a3d9-03cca395ad29.jpg"
                  className="h-64 w-full object-cover md:h-80"
                  alt="Marine engine room service"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-transparent p-4 text-xs">
                  <p className="font-semibold text-slate-50">
                    {t({
                      zh: '现场主机大修 & 轴系检查',
                      en: 'On-site Main Engine Overhaul & Shafting Inspection',
                    })}
                  </p>
                  <p className="mt-1 text-slate-100/90">
                    {t({
                      zh: '经验丰富的服务工程师与标准化作业流程，保障关键设备的可靠性与可预测性。',
                      en: 'Experienced service engineers and standardised procedures ensure reliability and predictability of critical machinery.',
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact capability highlight strip, separated below hero without overlap */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 pt-6 pb-8">
          <div className="grid gap-4 md:grid-cols-5">
            {heroFeatureCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs shadow-sm"
              >
                <p className="font-semibold text-slate-900">{card.title}</p>
                {/* Description kept as HTML-capable string for legacy compatibility */}
                <p
                  className="mt-1 text-slate-600"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: card.desc }}
                />
              </div>
            ))}

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-[11px] shadow-sm">
              <p className="font-semibold text-sky-700">24/7</p>
              <p className="mt-0.5 text-slate-600">
                {t({
                  zh: '全球紧急技术支持',
                  en: 'Worldwide emergency technical support',
                })}
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-[11px] shadow-sm">
              <p className="font-semibold text-sky-700">
                {t({ zh: '全生命周期', en: 'Lifecycle' })}
              </p>
              <p className="mt-0.5 text-slate-600">
                {t({
                  zh: '从检验、维修到改装升级',
                  en: 'From inspection & repair to retrofit and upgrade',
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service overview section */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                {t({
                  zh: '核心产品与服务概览',
                  en: 'Core Products & Service Overview',
                })}
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-600">
                {t({
                  zh: '围绕主机、辅机、轴系、舵系及现场加工五大模块，为船舶提供从检验、维修到改造的成套解决方案。',
                  en: 'Around five modules – main engines, auxiliary engines, shafting, rudder systems and in-situ machining – we provide complete solutions from inspection and repair to retrofit.',
                })}
              </p>
            </div>
            <a
              href="#/services"
              className="inline-flex text-xs font-semibold text-sky-700 hover:text-sky-600"
            >
              {t({
                zh: '查看详细服务目录 →',
                en: 'View detailed service catalogue →',
              })}
            </a>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                {t({ zh: '主机（M/E）服务', en: 'Main Engine (M/E) Services' })}
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                {t({
                  zh: '面向两冲程与四冲程主机，从例行保养、大修到电子控制系统与关键部件再制造。',
                  en: 'For two-stroke and four-stroke main engines, from routine and major overhauls to electronic control and key component reconditioning.',
                })}
              </p>
              <ul className="mt-3 space-y-1.5 text-[11px] text-slate-600">
                <li>
                  {t({
                    zh: '· 例行保养与大修',
                    en: '· Routine maintenance & major overhaul',
                  })}
                </li>
                <li>
                  {t({
                    zh: '· 电子控制主机 ECES 服务',
                    en: '· ECES services for electronic-controlled engines',
                  })}
                </li>
                <li>
                  {t({
                    zh: '· LDM 缸径测量与缸套珩磨',
                    en: '· LDM cylinder liner measurement & honing',
                  })}
                </li>
                <li>
                  {t({
                    zh: '· 涡轮增压器与调速器检修',
                    en: '· Turbocharger overhaul & governor maintenance',
                  })}
                </li>
              </ul>
              <span className="mt-3 inline-flex w-fit rounded-full bg-sky-500/10 px-2 py-0.5 text-[10px] font-semibold text-sky-700">
                {t({ zh: '两冲程 & 四冲程', en: 'Two-stroke & four-stroke' })}
              </span>
            </div>

            <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                {t({
                  zh: '辅机（A/E）与发电机组',
                  en: 'Auxiliary Engines (A/E) & Generator Sets',
                })}
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                {t({
                  zh: '覆盖大修、曲轴更换、缸套珩磨及关键部件检修，确保船舶供电系统稳定可靠。',
                  en: 'Covering major overhaul, crankshaft replacement, liner honing and key component services to secure stable power generation.',
                })}
              </p>
              <ul className="mt-3 space-y-1.5 text-[11px] text-slate-600">
                <li>
                  {t({
                    zh: '· 辅机大修与性能恢复',
                    en: '· Major overhaul & performance restoration',
                  })}
                </li>
                <li>
                  {t({
                    zh: '· 曲轴更换与复测',
                    en: '· Crankshaft replacement & re-measurement',
                  })}
                </li>
                <li>
                  {t({
                    zh: '· 缸盖/活塞组件再制造',
                    en: '· Reconditioning of heads and piston components',
                  })}
                </li>
              </ul>
              <span className="mt-3 inline-flex w-fit rounded-full bg-red-500/10 px-2 py-0.5 text-[10px] font-semibold text-red-600">
                {t({
                  zh: '机组完整解决方案',
                  en: 'Complete genset solutions',
                })}
              </span>
            </div>

            <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                {t({
                  zh: '轴系 / 舵系 & 现场加工',
                  en: 'Shafting / Rudder & In-situ Machining',
                })}
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                {t({
                  zh: '从轴系对中、舵系镗孔到曲轴、床座等现场加工，降低振动与结构风险。',
                  en: 'From shafting alignment and rudder boring to crankshaft and bedplate machining, reducing vibration and structural risk.',
                })}
              </p>
              <ul className="mt-3 space-y-1.5 text-[11px] text-slate-600">
                <li>
                  {t({
                    zh: '· 轴系对中与承载调整',
                    en: '· Shafting alignment & bearing load adjustment',
                  })}
                </li>
                <li>
                  {t({
                    zh: '· 舵孔/轴颈现场镗削',
                    en: '· In-situ boring of rudder holes and journals',
                  })}
                </li>
                <li>
                  {t({
                    zh: '· 大型法兰现场加工与金属锁补',
                    en: '· Large flange machining & metal stitching',
                  })}
                </li>
              </ul>
              <span className="mt-3 inline-flex w-fit rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                {t({
                  zh: '码头 & 航行中服务',
                  en: 'Alongside & voyage services',
                })}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why us / trust section */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
          <div className="grid gap-8 md:grid-cols-[1.2fr,0.8fr] md:items-center">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                {t({
                  zh: '为什么选择 HMS-PowerTec？',
                  en: 'Why HMS-PowerTec?',
                })}
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-600">
                {t({
                  zh: '我们以工程能力和项目管理为核心，结合标准化流程与全球服务网络，为船舶提供高可靠性的推进及动力系统解决方案，兼顾安全、效率与全寿命周期成本。',
                  en: 'We combine engineering capability and project management with standardised procedures and a global service mindset to deliver highly reliable solutions that balance safety, efficiency and lifecycle cost.',
                })}
              </p>

              <div className="mt-6 grid gap-4 text-xs text-slate-600 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="font-semibold text-slate-900">
                    {t({ zh: '专业工程团队', en: 'Specialised engineering team' })}
                  </p>
                  <p className="mt-1 text-slate-600">
                    {t({
                      zh: '熟悉多型主机与辅机品牌，可根据船级社与船东要求定制检修方案。',
                      en: 'Experienced in multiple M/E and A/E brands, tailoring scopes to class and owner requirements.',
                    })}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="font-semibold text-slate-900">
                    {t({
                      zh: '标准化流程与报告',
                      en: 'Standardised procedures & reporting',
                    })}
                  </p>
                  <p className="mt-1 text-slate-600">
                    {t({
                      zh: '关键数据全程记录，形成清晰、可追溯的技术报告。',
                      en: 'Key data is recorded throughout the job, resulting in clear, traceable technical reports.',
                    })}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="font-semibold text-slate-900">
                    {t({ zh: '全球现场支持', en: 'Worldwide on-site support' })}
                  </p>
                  <p className="mt-1 text-slate-600">
                    {t({
                      zh: '可在靠港、坞修或航行途中提供服务，减少停航风险。',
                      en: 'Service can be arranged alongside, in dry-dock or at sea to minimise off-hire risk.',
                    })}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="font-semibold text-slate-900">
                    {t({
                      zh: '备件与技术结合',
                      en: 'Service combined with spare parts',
                    })}
                  </p>
                  <p className="mt-1 text-slate-600">
                    {t({
                      zh: '将现场服务与备件供应打包交付，提升一致性与效率。',
                      en: 'Field service is combined with spare-part supply for consistent, efficient delivery.',
                    })}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                {t({ zh: '典型服务场景', en: 'Typical service scenarios' })}
              </h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li>
                  <span className="font-semibold text-sky-700">
                    {t({
                      zh: '主机紧急故障排除：',
                      en: 'Main engine emergency troubleshooting:',
                    })}
                  </span>{' '}
                  {t({
                    zh: '突发停车、过热或震动等故障的快速诊断与临时修复，配合后续计划性大修。',
                    en: 'Rapid diagnosis and temporary repair of sudden stop, overheating or vibration, followed by planned overhaul.',
                  })}
                </li>
                <li>
                  <span className="font-semibold text-sky-700">
                    {t({
                      zh: '轴系异常振动：',
                      en: 'Shafting vibration issues:',
                    })}
                  </span>{' '}
                  {t({
                    zh: '通过激光对中、轴承载荷测试与线轴测量，优化轴承布置与坡度。',
                    en: 'Laser alignment, bearing load tests and shaft line measurement to optimise bearing layout and slope.',
                  })}
                </li>
                <li>
                  <span className="font-semibold text-sky-700">
                    {t({
                      zh: '舵系间隙与磨损：',
                      en: 'Rudder clearance and wear:',
                    })}
                  </span>{' '}
                  {t({
                    zh: '舵孔现场镗孔、刮研与蓝点合瓦，恢复配合精度并减少异响。',
                    en: 'In-situ boring, scraping and blue-fitting to restore clearances and reduce noise.',
                  })}
                </li>
                <li>
                  <span className="font-semibold text-sky-700">
                    {t({
                      zh: '船级社检验配合：',
                      en: 'Support during class survey:',
                    })}
                  </span>{' '}
                  {t({
                    zh: '检验前状态评估，检验期间提供技术支持与整改建议。',
                    en: 'Pre-survey assessment plus technical support and recommendations during class survey.',
                  })}
                </li>
              </ul>
              <a
                href="#/solutions"
                className="inline-flex text-xs font-semibold text-sky-700 hover:text-sky-600"
              >
                {t({ zh: '查看更多解决方案 →', en: 'Explore more solutions →' })}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}