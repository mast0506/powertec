/**
 * @file Solutions.tsx
 * @description Typical engineering solutions and service scenarios for HMS-PowerTec with bilingual content, using a bright ocean background and solid white content cards for maximum readability.
 */

import { useLanguage } from '../context/LanguageContext'

/**
 * @description Solutions page component describing scenario-based service packages on top of a bright ocean background.
 * @returns {JSX.Element} The solutions page layout.
 */
export default function Solutions(): JSX.Element {
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
        {/* Darker overlay to ensure card and standalone text readability */}
        <div className="absolute inset-0 bg-sky-900/30" />
      </div>

      {/* Foreground content */}
      <div className="relative">
        <section className="border-b border-white/60 bg-sky-900/5 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
            <div className="inline-flex flex-col rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.2em] text-sky-700">
                Engineering Solutions
              </p>
              <h1 className="mt-2 text-2xl font-semibold text-slate-900">
                {t({ zh: '典型解决方案', en: 'Typical Solutions' })}
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-700">
                {t({
                  zh: '结合主机、辅机、轴系、舵系及现场加工能力，我们为不同运行场景和技改需求设计了多种标准化解决方案，以提升可靠性、降低生命周期成本并满足船级社与环保法规要求。',
                  en: 'Combining our capabilities in M/E, A/E, shafting, rudder systems and in-situ machining, we design standardised solutions for various operating scenarios and retrofit needs, improving reliability, reducing lifecycle cost and meeting class and environmental requirements.',
                })}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-sky-900/5">
          <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
            <div className="grid gap-6 md:grid-cols-2">
              {/* 1 */}
              <article className="flex flex-col rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
                <h2 className="text-sm font-semibold text-slate-900">
                  {t({
                    zh: '主机例行大修 & 状态评估方案',
                    en: 'Main Engine Overhaul & Condition Assessment',
                  })}
                </h2>
                <p className="mt-2 text-xs text-slate-700">
                  {t({
                    zh: '面向计划性坞修或靠港期间，对两冲程或四冲程主机进行系统化大修与状态评估，确保船级社检验顺利通过。',
                    en: 'For planned dry-dock or port stays, providing systematic overhaul and condition assessment for two-stroke and four-stroke main engines, ensuring smooth class surveys.',
                  })}
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-xs text-slate-700">
                  <li>
                    {t({
                      zh: '根据 OEM 与船东要求制定大修清单与工期计划。',
                      en: 'Preparation of overhaul scope and schedule according to OEM and owner requirements.',
                    })}
                  </li>
                  <li>
                    {t({
                      zh: '缸盖、活塞、缸套等关键部件解体检查、测量记录与再制造建议。',
                      en: 'Dismantling, inspection and measurement of key components such as cylinder covers, pistons and liners, with reconditioning proposals.',
                    })}
                  </li>
                  <li>
                    {t({
                      zh: 'LDM 缸径测量与缸套磨损评估，配合缸套珩磨或更换方案。',
                      en: 'LDM measurement of cylinder liner diameter, wear assessment and liner honing or replacement plan.',
                    })}
                  </li>
                  <li>
                    {t({
                      zh: '电子控制主机（ECES）关键部件功能测试与检修。',
                      en: 'Functional testing and overhaul of ECES key components such as FIVA valves, actuators, fuel and cylinder oil systems.',
                    })}
                  </li>
                  <li>
                    {t({
                      zh: '涡轮增压器及调速器检修，配合功率测试与燃油优化建议。',
                      en: 'Turbocharger and governor overhaul with performance test and fuel optimisation advice.',
                    })}
                  </li>
                  <li>
                    {t({
                      zh: '形成完整技术报告，包含数据记录、照片和后续维护建议。',
                      en: 'Comprehensive technical report including data logs, photographs and maintenance recommendations.',
                    })}
                  </li>
                </ul>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-700">
                  <span className="rounded-full bg-sky-500/10 px-2 py-0.5">
                    {t({ zh: '主机（M/E）', en: 'Main Engine (M/E)' })}
                  </span>
                  <span className="rounded-full bg-red-500/10 px-2 py-0.5">
                    {t({ zh: '船级社检验', en: 'Class survey' })}
                  </span>
                </div>
              </article>

              {/* 2 */}
              <article className="flex flex-col rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
                <h2 className="text-sm font-semibold text-slate-900">
                  {t({
                    zh: '辅机曲轴损坏应急处理方案',
                    en: 'Auxiliary Engine Crankshaft Damage Emergency Plan',
                  })}
                </h2>
                <p className="mt-2 text-xs text-slate-700">
                  {t({
                    zh: '针对辅机曲轴拉伤、烧瓦或断裂等严重故障，为船舶提供快速评估与修复/更换方案，降低停航时间。',
                    en: 'For serious A/E crankshaft failures such as scoring, bearing damage or fracture, we provide quick assessment and repair/replacement solutions to minimise off-hire time.',
                  })}
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-xs text-slate-700">
                  <li>
                    {t({
                      zh: '现场检查曲轴与轴承状况，评估可修复性与更换必要性。',
                      en: 'On-site inspection of crankshaft and bearings to evaluate repairability and replacement need.',
                    })}
                  </li>
                  <li>
                    {t({
                      zh: '曲轴现场抛光、磨削与尺寸复测，确认剩余强度与使用寿命。',
                      en: 'In-situ polishing/grinding and dimensional check to confirm remaining strength and service life.',
                    })}
                  </li>
                  <li>
                    {t({
                      zh: '轴承巴氏合金重浇与加工，恢复轴承表面质量与配合间隙。',
                      en: 'Remetalling and machining of bearings to restore surface quality and clearances.',
                    })}
                  </li>
                  <li>
                    {t({
                      zh: '如需更换曲轴，协助备件选型、安装对中及试车服务。',
                      en: 'If replacement is required, support on spare-part selection, installation, alignment and test run.',
                    })}
                  </li>
                  <li>
                    {t({
                      zh: '优化机组负荷分配方案，减少发电冗余风险。',
                      en: 'Optimisation of generator load sharing to reduce power redundancy risk.',
                    })}
                  </li>
                </ul>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-700">
                  <span className="rounded-full bg-sky-500/10 px-2 py-0.5">
                    {t({ zh: '辅机（A/E）', en: 'Auxiliary Engine (A/E)' })}
                  </span>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5">
                    {t({ zh: '应急维修', en: 'Emergency repair' })}
                  </span>
                </div>
              </article>

              {/* 3 */}
              <article className="flex flex-col rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
                <h2 className="text-sm font-semibold text-slate-900">
                  {t({
                    zh: '轴系振动与轴承过热诊断方案',
                    en: 'Shafting Vibration & Bearing Overheating Diagnosis',
                  })}
                </h2>
                <p className="mt-2 text-xs text-slate-700">
                  {t({
                    zh: '针对轴系振动、轴承温度异常或偏磨等现象，通过综合测量与计算优化轴系布置与承载。',
                    en: 'For shafting vibration, abnormal bearing temperature or uneven wear, we optimise shafting layout and bearing loads through comprehensive measurement and calculation.',
                  })}
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-xs text-slate-700">
                  <li>
                    {t({
                      zh: '现场轴系激光对中检查与轴线测量。',
                      en: 'On-site laser alignment check and shaft line measurement.',
                    })}
                  </li>
                  <li>
                    {t({
                      zh: '轴承顶升试验，确定各轴承实际承载分布。',
                      en: 'Jack-up bearing load tests to determine actual load distribution.',
                    })}
                  </li>
                  <li>
                    {t({
                      zh: '根据设计资料进行轴系计算与承载分析。',
                      en: 'Shafting calculations and load analysis based on design data.',
                    })}
                  </li>
                  <li>
                    {t({
                      zh: '通过刮研、垫片调整或轴承斜度优化，重新分配轴承负荷。',
                      en: 'Re-distribution of bearing loads by scraping, shimming or slope optimisation.',
                    })}
                  </li>
                  <li>
                    {t({
                      zh: '必要时对中间轴及艉管轴承进行巴氏合金修复与轴颈抛光。',
                      en: 'Remetalling of intermediate and stern tube bearings and journal polishing when required.',
                    })}
                  </li>
                </ul>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-700">
                  <span className="rounded-full bg-sky-500/10 px-2 py-0.5">
                    {t({ zh: '轴系服务', en: 'Shafting service' })}
                  </span>
                  <span className="rounded-full bg-amber-500/10 px-2 py-0.5">
                    {t({ zh: '状态诊断', en: 'Condition diagnosis' })}
                  </span>
                </div>
              </article>

              {/* 4 */}
              <article className="flex flex-col rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
                <h2 className="text-sm font-semibold text-slate-900">
                  {t({
                    zh: '舵系间隙过大与舵杆磨损治理方案',
                    en: 'Rudder Clearance & Stock Wear Remedy',
                  })}
                </h2>
                <p className="mt-2 text-xs text-slate-700">
                  {t({
                    zh: '解决舵系间隙放大、异响或舵杆磨损问题，通过现场镗孔与刮研恢复配合精度，延长舵系寿命。',
                    en: 'Addressing excessive rudder clearance, noise and stock wear by in-situ boring and scraping to restore correct fit and extend rudder service life.',
                  })}
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-xs text-slate-700">
                  <li>
                    {t({
                      zh: '舵系中心线激光对中测量，评估整体偏心与挠度。',
                      en: 'Laser alignment of rudder system centre line to assess eccentricity and deflection.',
                    })}
                  </li>
                  <li>
                    {t({
                      zh: '舵孔及导向轴承座现场镗孔，恢复同轴度。',
                      en: 'In-situ boring of rudder holes and bearing housings to restore coaxiality.',
                    })}
                  </li>
                  <li>
                    {t({
                      zh: '舵杆轴颈修复加工或更换，配合蓝点检查与刮研。',
                      en: 'Journal repair or renewal of rudder stocks with blue-fitting and scraping.',
                    })}
                  </li>
                  <li>
                    {t({
                      zh: '舵系法兰端面加工，确保连接预紧力与密封性能。',
                      en: 'Flange facing of rudder components to secure proper pre-load and sealing.',
                    })}
                  </li>
                  <li>
                    {t({
                      zh: '出具完整测量记录与维修报告，支持船级社审核。',
                      en: 'Provision of full measurement records and repair reports for class approval.',
                    })}
                  </li>
                </ul>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-700">
                  <span className="rounded-full bg-sky-500/10 px-2 py-0.5">
                    {t({ zh: '舵系服务', en: 'Rudder service' })}
                  </span>
                  <span className="rounded-full bg-fuchsia-500/10 px-2 py-0.5">
                    {t({ zh: '结构修复', en: 'Structural repair' })}
                  </span>
                </div>
              </article>

              {/* 5 */}
              <article className="flex flex-col rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
                <h2 className="text-sm font-semibold text-slate-900">
                  {t({
                    zh: '船舶改装与大型设备基础现场加工方案',
                    en: 'Retrofit & Large Equipment Foundation Machining',
                  })}
                </h2>
                <p className="mt-2 text-xs text-slate-700">
                  {t({
                    zh: '针对脱硫塔、压载水处理、甲板吊机等改装项目，提供设备基础与法兰端面现场加工服务。',
                    en: 'For retrofits such as scrubbers, ballast water treatment systems and deck cranes, we provide in-situ machining of equipment foundations and flanges.',
                  })}
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-xs text-slate-700">
                  <li>
                    {t({
                      zh: '大型法兰端面加工与铣削，确保平面度与垂直度。',
                      en: 'Large flange facing and milling to secure flatness and perpendicularity.',
                    })}
                  </li>
                  <li>
                    {t({
                      zh: '设备基础与螺栓孔现场加工、扩孔及攻丝。',
                      en: 'In-situ machining, reaming and tapping of foundation bolt holes.',
                    })}
                  </li>
                  <li>
                    {t({
                      zh: '主机床座与机体线镗，为主机更换或重新对中提供基础。',
                      en: 'Line boring of main engine bedplates and blocks providing basis for engine replacement or realignment.',
                    })}
                  </li>
                  <li>
                    {t({
                      zh: '金属锁补技术修复裂纹或局部损伤基础结构。',
                      en: 'Metal stitching to repair cracked or locally damaged foundations.',
                    })}
                  </li>
                  <li>
                    {t({
                      zh: '配合改装项目整体进度与多工种交叉作业。',
                      en: 'Coordination with overall retrofit schedule and multi-discipline teams.',
                    })}
                  </li>
                </ul>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-700">
                  <span className="rounded-full bg-sky-500/10 px-2 py-0.5">
                    {t({ zh: '现场加工', en: 'In-situ machining' })}
                  </span>
                  <span className="rounded-full bg-lime-500/10 px-2 py-0.5">
                    {t({ zh: '改装项目', en: 'Retrofit projects' })}
                  </span>
                </div>
              </article>

              {/* 6 */}
              <article className="flex flex-col rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
                <h2 className="text-sm font-semibold text-slate-900">
                  {t({
                    zh: '备件打包供应 & 长协方案',
                    en: 'Spare Part Package & Long-term Agreements',
                  })}
                </h2>
                <p className="mt-2 text-xs text-slate-700">
                  {t({
                    zh: '为船队或长期运营项目提供备件打包与框架协议，结合定期检修计划，降低备件成本和停机风险。',
                    en: 'For fleets and long-term operation projects, we provide spare-part packages and frame agreements aligned with maintenance plans, reducing cost and downtime risk.',
                  })}
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-xs text-slate-700">
                  <li>
                    {t({
                      zh: '根据机型与运行小时制定年度或多年度备件计划。',
                      en: 'Annual or multi-year spare-part planning according to engine types and running hours.',
                    })}
                  </li>
                  <li>
                    {t({
                      zh: '主机、辅机、涡轮增压器、调速器及电控系统备件打包供应。',
                      en: 'Package supply of main/auxiliary engine, turbocharger, governor and electronic control spares.',
                    })}
                  </li>
                  <li>
                    {t({
                      zh: '关键备件安全库存建议与物流方案设计。',
                      en: 'Recommendations for safety stock levels and logistics concepts for critical spares.',
                    })}
                  </li>
                  <li>
                    {t({
                      zh: '配套技术支持与安装指导，确保备件正确使用。',
                      en: 'Technical support and installation guidance ensuring correct use of supplied spares.',
                    })}
                  </li>
                </ul>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-700">
                  <span className="rounded-full bg-sky-500/10 px-2 py-0.5">
                    {t({ zh: '备件供应', en: 'Spare parts supply' })}
                  </span>
                  <span className="rounded-full bg-orange-500/10 px-2 py-0.5">
                    {t({ zh: '船队管理', en: 'Fleet management' })}
                  </span>
                </div>
              </article>
            </div>

            <div className="mt-8 flex flex-col items-start gap-3 rounded-2xl border border-sky-100 bg-white p-5 text-xs text-slate-800 shadow-sm md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <p className="font-semibold text-slate-900">
                  {t({
                    zh: '需要为您的船舶定制专属解决方案？',
                    en: 'Need a tailored solution for your vessel?',
                  })}
                </p>
                <p className="mt-1 text-slate-700">
                  {t({
                    zh: '将船舶资料、机型、当前问题及计划时间窗口发送给我们，我们将为您提供技术评估与实施建议。',
                    en: 'Send us vessel particulars, engine types, current issues and time window. We will provide technical evaluation and implementation recommendations.',
                  })}
                </p>
              </div>
              <a
                href="#/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-sky-500 px-5 py-1.5 text-xs font-semibold text-white shadow-md shadow-red-400/30 hover:shadow-sky-400/40"
              >
                {t({
                  zh: '提交工况与需求',
                  en: 'Submit operating condition & request',
                })}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
