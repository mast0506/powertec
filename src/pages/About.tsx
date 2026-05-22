/**
 * @file About.tsx
 * @description Company overview, values, and capabilities page for HMS-PowerTec with bilingual content, using a bright ocean background and solid white cards for better text contrast.
 */

import { useLanguage } from '../context/LanguageContext'

/**
 * @description About page component outlining company profile, strengths, and service philosophy, using white cards over an ocean background.
 * @returns {JSX.Element} The about page layout.
 */
export default function About(): JSX.Element {
  const { t } = useLanguage()

  return (
    <div className="relative min-h-screen overflow-hidden bg-sky-50 text-slate-900">
      {/* Ocean background image */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="https://pub-cdn.sider.ai/u/U0L5HV95NWL/web-coder/6a1026bd614ae89139bff8ac/resource/5300dc93-9764-452e-9905-a30a5a856406.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        {/* Darker overlay to enhance readability of all foreground content */}
        <div className="absolute inset-0 bg-sky-900/30" />
      </div>

      {/* Foreground content */}
      <div className="relative">
        <section className="border-b border-white/60 bg-sky-900/5 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
            <div className="inline-flex flex-col rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.2em] text-sky-700">
                Company Profile
              </p>
              <h1 className="mt-2 text-2xl font-semibold text-slate-900">
                {t({ zh: '关于 HMS-PowerTec', en: 'About HMS-PowerTec' })}
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-700">
                {t({
                  zh: 'HMS-PowerTec Limited 专注于船舶推进及动力系统领域，为全球客户提供主机、辅机、轴系、舵系以及现场加工与备件供应等一体化服务。我们致力于以工程技术和标准化管理，为船舶提供安全、可靠、高效的解决方案。',
                  en: 'HMS-PowerTec Limited focuses on Marine Propulsion & Power system for ships, providing integrated services for main and auxiliary engines, shafting, rudder systems, in-situ machining and spare parts supply. We are committed to delivering safe, reliable and efficient solutions through engineering expertise and standardised project management.',
                })}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-sky-900/5">
          <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
            <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-start">
              <div className="space-y-6">
                <div className="rounded-2xl border border-sky-100 bg-white p-5 text-xs text-slate-800 shadow-sm">
                  <h2 className="text-sm font-semibold text-slate-900">
                    {t({ zh: '我们的定位', en: 'Our Positioning' })}
                  </h2>
                  <p className="mt-2 text-slate-700">
                    {t({
                      zh: '作为独立的船舶设备服务提供商，HMS-PowerTec 专注于为主机/辅机及轴系/舵系等关键设备提供高技术含量服务，通过专业现场工程与可靠备件供应，协助船东和管理公司提升船舶可靠性并优化全寿命周期成本。',
                      en: 'As an independent marine machinery service provider, HMS-PowerTec focuses on high-technology services for key equipment such as main/auxiliary engines and shafting/rudder systems. Through professional on-site engineering and reliable spare-part supply, we help shipowners and managers improve reliability and optimise lifecycle cost.',
                    })}
                  </p>
                  <p className="mt-3 text-slate-700">
                    {t({
                      zh: '我们的工程团队拥有丰富的现场经验，熟悉多种主机品牌与型号，在 M/E、A/E、轴系、舵系及控制系统领域形成了系统化能力，能够灵活应对紧急故障处理、计划性保养以及复杂改装项目。',
                      en: 'Our engineering team has extensive field experience and is familiar with various engine brands and types. With systematic capabilities in M/E, A/E, shafting, rudder systems and controls, we can flexibly handle emergency repairs, planned maintenance and complex retrofit projects.',
                    })}
                  </p>
                </div>

                <div className="grid gap-4 text-xs text-slate-800 sm:grid-cols-3">
                  <div className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm">
                    <p className="text-2xl font-semibold text-sky-600">24/7</p>
                    <p className="mt-1 text-slate-800">
                      {t({ zh: '紧急响应', en: 'Emergency response' })}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-600">
                      {t({
                        zh: '全天候待命，覆盖主要航运航线与港口。',
                        en: 'On call around the clock, covering major shipping routes and ports.',
                      })}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm">
                    <p className="text-2xl font-semibold text-sky-600">
                      {t({ zh: '多品牌', en: 'Multi-brand' })}
                    </p>
                    <p className="mt-1 text-slate-800">
                      {t({ zh: '主机/辅机经验', en: 'M/E & A/E experience' })}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-600">
                      {t({
                        zh: '熟悉主流制造商设备与 OEM 标准。',
                        en: 'Familiar with major engine makers and OEM standards.',
                      })}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm">
                    <p className="text-2xl font-semibold text-sky-600">
                      {t({ zh: '一体化', en: 'Integrated' })}
                    </p>
                    <p className="mt-1 text-slate-800">
                      {t({ zh: '服务 + 备件', en: 'Service + spares' })}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-600">
                      {t({
                        zh: '现场工程与备件供应协同交付。',
                        en: 'Coordinated delivery of field service and spare parts.',
                      })}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm">
                  <img
                    src="https://pub-cdn.sider.ai/u/U0L5HV95NWL/web-coder/6a1026bd614ae89139bff8ac/resource/83fbe249-9936-45d8-a9d1-86bd643b28dc.jpg"
                    className="h-52 w-full object-cover"
                    alt="Ship repair and marine service yard"
                  />
                  <div className="border-t border-sky-100/80 p-4 text-xs text-slate-800">
                    <p className="font-semibold text-slate-900">
                      {t({
                        zh: '工业化管理 · 海事行业基因',
                        en: 'Industrialised management · Maritime DNA',
                      })}
                    </p>
                    <p className="mt-1 text-slate-700">
                      {t({
                        zh: '从项目准备、现场执行到完工报告，每一步均遵循标准化流程与质量控制要求，以工业化思维服务海事行业。',
                        en: 'From preparation and execution to final reporting, every project follows standardised procedures and quality control, applying industrial thinking to the maritime industry.',
                      })}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-sky-100 bg-white p-4 text-xs text-slate-800 shadow-sm">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {t({ zh: '我们的价值观', en: 'Our Values' })}
                  </h3>
                  <ul className="mt-2 space-y-1.5 text-slate-800">
                    <li>
                      <span className="font-semibold text-sky-700">
                        {t({ zh: '安全优先：', en: 'Safety first: ' })}
                      </span>
                      {t({
                        zh: '始终将人身安全与设备安全放在首位，严格遵守船舶与船厂安全规定。',
                        en: 'We always prioritise people and equipment safety, strictly following vessel and yard safety rules.',
                      })}
                    </li>
                    <li>
                      <span className="font-semibold text-sky-700">
                        {t({ zh: '质量为本：', en: 'Quality-driven: ' })}
                      </span>
                      {t({
                        zh: '按照 OEM 和船级社标准控制关键工序和检测过程。',
                        en: 'Critical work steps and inspections are controlled in line with OEM and class standards.',
                      })}
                    </li>
                    <li>
                      <span className="font-semibold text-sky-700">
                        {t({
                          zh: '透明沟通：',
                          en: 'Transparent communication: ',
                        })}
                      </span>
                      {t({
                        zh: '在项目全过程与船东及管理公司保持充分沟通，确保决策充分、信息透明。',
                        en: 'We maintain open communication with owners and managers throughout the project, ensuring informed decisions and transparency.',
                      })}
                    </li>
                    <li>
                      <span className="font-semibold text-sky-700">
                        {t({
                          zh: '持续改进：',
                          en: 'Continuous improvement: ',
                        })}
                      </span>
                      {t({
                        zh: '通过项目复盘与经验反馈，不断优化施工工艺与工具装备。',
                        en: 'Lessons learned and feedback from projects are used to continuously improve methods and tooling.',
                      })}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <section className="mt-10 grid gap-6 md:grid-cols-[1.2fr,0.8fr] md:items-center">
              <div className="rounded-2xl border border-sky-100 bg-white p-5 text-xs text-slate-800 shadow-sm">
                <h2 className="text-sm font-semibold text-slate-900">
                  {t({ zh: '能力范围概览', en: 'Capability Overview' })}
                </h2>
                <p className="mt-2 text-slate-700">
                  {t({
                    zh: '结合 M/E、A/E、轴系、舵系及现场加工能力，HMS-PowerTec 能够为从散货船、集装箱船到油轮、气体船等不同船型提供非甲板机械服务。',
                    en: 'With capabilities across M/E, A/E, shafting, rudder systems and in-situ machining, HMS-PowerTec serves a wide range of vessel types from bulk carriers and container ships to tankers and gas carriers.',
                  })}
                </p>
                <div className="mt-4 grid gap-4 text-slate-800 sm:grid-cols-2">
                  <div className="rounded-xl border border-sky-100 bg-white p-4">
                    <p className="font-semibold text-slate-900">
                      {t({ zh: '设备类型覆盖', en: 'Equipment coverage' })}
                    </p>
                    <ul className="mt-2 space-y-1.5 text-slate-700">
                      <li>
                        {t({
                          zh: '· 两冲程 / 四冲程主机与辅机',
                          en: '· Two-stroke / four-stroke main and auxiliary engines',
                        })}
                      </li>
                      <li>
                        {t({
                          zh: '· 涡轮增压器与调速系统',
                          en: '· Turbochargers and governing systems',
                        })}
                      </li>
                      <li>
                        {t({
                          zh: '· 轴系与舵系组件',
                          en: '· Shafting and rudder components',
                        })}
                      </li>
                      <li>
                        {t({
                          zh: '· 机舱通用机械设备',
                          en: '· General engine-room machinery',
                        })}
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-sky-100 bg-white p-4">
                    <p className="font-semibold text-slate-900">
                      {t({ zh: '服务形式覆盖', en: 'Service coverage' })}
                    </p>
                    <ul className="mt-2 space-y-1.5 text-slate-700">
                      <li>
                        {t({
                          zh: '· 计划性检修 / 坞修',
                          en: '· Planned maintenance / dry-docking',
                        })}
                      </li>
                      <li>
                        {t({
                          zh: '· 航行中紧急故障处理',
                          en: '· Emergency troubleshooting during voyage',
                        })}
                      </li>
                      <li>
                        {t({
                          zh: '· 技改与安装工程配合',
                          en: '· Support for retrofit and installation projects',
                        })}
                      </li>
                      <li>
                        {t({
                          zh: '· 备件打包与技术咨询',
                          en: '· Spare-part packages and technical consultancy',
                        })}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-sky-100 bg-white p-5 text-xs text-slate-800 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  {t({
                    zh: '面向合作伙伴与船队管理',
                    en: 'For Partners & Fleet Management',
                  })}
                </h3>
                <p className="mt-2 text-slate-700">
                  {t({
                    zh: 'HMS-PowerTec 乐于与船东、船队管理公司、船厂及 OEM 形成长期合作关系，通过稳定的服务质量和清晰的技术文档，降低沟通成本并提升项目执行效率。',
                    en: 'HMS-PowerTec seeks long-term cooperation with shipowners, fleet managers, shipyards and OEMs. Stable service quality and clear technical documentation reduce communication cost and improve project efficiency.',
                  })}
                </p>
                <p className="mt-2 text-slate-700">
                  {t({
                    zh: '若您是管理多艘船舶的技术部门，我们可以基于船队标准化策略，为您提供年度检修计划、关键设备状态评估以及备件框架协议等定制服务。',
                    en: 'For technical departments managing multiple vessels, we support fleet-wide standardisation with annual maintenance planning, condition assessment of critical equipment and tailored spare-part frame agreements.',
                  })}
                </p>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  )
}
