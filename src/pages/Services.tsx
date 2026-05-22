/**
 * @file Services.tsx
 * @description Detailed listing of HMS-PowerTec products and services by category with bilingual content, on a bright ocean background.
 */

import { useLanguage } from '../context/LanguageContext'

/**
 * @description Services page component summarising M/E, A/E, shafting, rudder, in-situ machining, and spare parts.
 * @returns {JSX.Element} The services page layout.
 */
export default function Services(): JSX.Element {
  const { language, t } = useLanguage()

  const meBullets =
    language === 'zh'
      ? [
          'M/E 单元例行检修与大修，缸套、缸盖、活塞组件更换与再制造。',
          'M/E 电子控制主机服务（ECES），包括 FIVA 阀、排气阀执行器、燃油压力助推器、缸油泵、累压器充氮、高压油泵、主起动阀及完整电控系统。',
          'M/E 气动控制系统检修与维护。',
          'M/E 燃油泵、喷油器检修及油泵正时调整。',
          'M/E Alpha 缸油润滑系统检修与功能测试。',
          'M/E LDM 缸径测量服务，无需拆卸缸盖即可完成缸套磨损评估。',
          'M/E 缸套珩磨（现场或车间）。',
          'M/E 涡轮增压器检修与调速器维护。',
          'M/E 缸盖、活塞冠、活塞杆、排气阀再制造与再加工。',
        ]
      : [
          'Routine and major overhaul of M/E units, renewal and reconditioning of liners, cylinder covers and piston components.',
          'Electronic-Controlled Engine Services (ECES) for M/E, including overhaul of FIVA valves, exhaust valve actuators, fuel oil pressure boosters, cylinder lubricator systems, accumulators and nitrogen refill, HPS pumps, main starting valves and electronic control systems.',
          'Overhaul and maintenance of pneumatic control systems for main engines.',
          'Overhaul and timing adjustment of M/E fuel pumps and fuel injectors.',
          'Overhaul and functional test of M/E Alpha cylinder lubrication systems.',
          'Cylinder liner diameter measurement by LDM without removing cylinder covers.',
          'Cylinder liner honing in situ or in workshop.',
          'Turbocharger overhaul service for M/E and governor maintenance.',
          'Reconditioning of M/E cylinder covers, piston crowns, piston rods and exhaust valves.',
        ]

  const aeBullets =
    language === 'zh'
      ? [
          'A/E 大修服务，包括解体、测量、装配与试车。',
          'A/E 曲轴更换服务，含对中、轴颈及轴承配合检查。',
          'A/E 缸套珩磨（现场或车间）。',
          'A/E 燃油泵、喷油器检修及试验。',
          'A/E 涡轮增压器和调速器检修服务。',
          'A/E 缸盖、活塞头、连杆等关键部件再制造与修理。',
        ]
      : [
          'Major overhaul of auxiliary engines, including dismantling, measurement, assembly and test run.',
          'Crankshaft replacement service for A/E including alignment and journal/bearing fit check.',
          'Cylinder liner honing for auxiliary engines in situ or in workshop.',
          'Overhaul and testing of A/E fuel pumps and fuel injectors.',
          'Turbocharger and governor overhaul services for auxiliary engines.',
          'Reconditioning and repair of A/E cylinder heads, piston crowns and connecting rods.',
        ]

  const shaftingBullets =
    language === 'zh'
      ? [
          '轴系中心线激光对中检查。',
          '中间轴及艉管轴承巴氏合金浇注修复。',
          '新艉管轴承加工与更换。',
          '轴承顶升试验，轴承负荷测试与分析，根据原始设计调整并重新分配承载。',
          '中间轴联轴节及轴颈现场服务，包括检查、抛光或机加工，轴承刮研与蓝点检查，实现轴承负荷与对中状态再调整。',
          '中间轴联轴节螺栓孔现场钻孔/镗孔。',
          '艉管轴承座现场镗孔。',
          '车间内中间轴和艉轴检查与加工。',
          '轴系计算与轴承斜度（slope）优化。',
        ]
      : [
          'Laser alignment check of shafting line centre.',
          'Remetalling of intermediate shaft and stern tube bearings with white metal.',
          'Machining and replacement of new stern tube bearings.',
          'Jack-up bearing load test, analysis and re-distribution of loads according to original design.',
          'In-situ services for intermediate shaft bearings and journals, including inspection, polishing or machining, scraping and blue-fitting to readjust alignment and bearing load.',
          'In-situ drilling or boring of intermediate shaft coupling bolt holes.',
          'In-situ line boring of stern tube housings.',
          'Workshop inspection and machining of intermediate shafts and propeller shafts.',
          'Shafting calculation and optimisation of bearing slope.',
        ]

  const rudderBullets =
    language === 'zh'
      ? [
          '舵系中心线激光对中检查。',
          '舵孔现场镗孔。',
          '舵杆现场机加工（含轴颈修复）。',
          '舵系法兰端面加工。',
          '舵杆与舵叶孔蓝点接触检查与刮研修整。',
        ]
      : [
          'Laser alignment check of rudder system centre line.',
          'In-situ line boring of rudder holes.',
          'In-situ machining of rudder stocks including journal repair.',
          'In-situ machining of rudder flange facing.',
          'Blue-fitting and scraping between rudder stock and blade holes.',
        ]

  const insituBullets =
    language === 'zh'
      ? [
          '主机曲轴现场抛光、磨削或机加工（现场或车间）。',
          '硬化轴颈退火 / 热处理。',
          '主机床座及机体线镗（现场或车间）。',
          '各类设备激光对中检查。',
          '各类孔的现场镗孔，包括锥孔加工。',
          '大型法兰端面加工与铣削，包括甲板吊机基础法兰面。',
          '金属锁补（Metal Stitching）。',
        ]
      : [
          'Polishing, grinding or machining of engine crankshafts in situ or in workshop.',
          'Annealing or heat treatment of hardened shaft journals.',
          'Line boring of engine bedplates and blocks in situ or in workshop.',
          'Laser alignment checks for various machinery.',
          'In-situ boring of different types of holes, including tapered holes.',
          'Large-scale flange facing and milling, including deck crane foundations.',
          'Metal stitching repair of cracked structures.',
        ]

  const spareBullets =
    language === 'zh'
      ? [
          '两冲程与四冲程柴油机备件。',
          '涡轮增压器备件与组件。',
          '机械与电子调速器备件。',
          '发电机及励磁系统相关备件。',
          '主机遥控系统与远程控制系统组件。',
          '船舶通用机舱设备与备件供应。',
        ]
      : [
          'Spare parts for two-stroke and four-stroke diesel engines.',
          'Spare parts and assemblies for turbochargers.',
          'Mechanical and electronic governor spare parts.',
          'Spare parts for alternators and excitation systems.',
          'Components for main engine remote control and automation systems.',
          'General engine-room equipment and spare-part supply for ships.',
        ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-sky-50 text-slate-900">
      {/* Ocean background image */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="https://pub-cdn.sider.ai/u/U0L5HV95NWL/web-coder/6a1026bd614ae89139bff8ac/resource/5300dc93-9764-452e-9905-a30a5a856406.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        {/* Light overlay to keep text legible while background stays bright */}
        <div className="absolute inset-0 bg-sky-900/10" />
      </div>

      {/* Foreground content */}
      <div className="relative">
        <section className="border-b border-white/60 bg-sky-900/5 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
            <div className="inline-flex flex-col rounded-2xl bg-white/85 p-5 shadow-sm backdrop-blur">
              <p className="text-[11px] uppercase tracking-[0.2em] text-sky-700">
                Products &amp; Services
              </p>
              <h1 className="mt-2 text-2xl font-semibold text-slate-900">
                {t({ zh: '产品与服务', en: 'Products &amp; Services' })}
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-700">
                {t({
                  zh: '基于多年的船舶推进及动力系统服务经验，我们围绕主机、辅机、轴系、舵系、现场加工及备件供应六大板块，为客户提供从例行保养、故障检修到改装升级的全生命周期解决方案。',
                  en: 'With extensive experience in Marine Propulsion &amp; Power system services, we structure our offerings into six key modules: main engines, auxiliary engines, shafting, rudder systems, in-situ machining and spare parts supply, providing lifecycle solutions from routine maintenance and troubleshooting to retrofit and upgrades.',
                })}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-sky-900/5 py-8 md:py-10">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
            {/* Main Engine services */}
            <ServiceCard
              title={t({
                zh: '主机服务（M/E Services）',
                en: 'Main Engine Services (M/E)',
              })}
              description={t({
                zh: '适用于两冲程与四冲程柴油主机，覆盖例行保养、大修、电子控制系统及关键部件再制造。',
                en: 'For both two-stroke and four-stroke main engines, covering routine and major overhauls, electronic control systems and key component reconditioning.',
              })}
              bullets={meBullets}
            />

            {/* Auxiliary Engine services */}
            <ServiceCard
              title={t({
                zh: '辅机服务（A/E Services）',
                en: 'Auxiliary Engine Services (A/E)',
              })}
              description={t({
                zh: '面向各型辅机及发电机组，提供从曲轴到缸盖的完整解决方案，保障船舶电力系统安全可靠。',
                en: 'For various auxiliary engines and generator sets, providing complete solutions from crankshaft to cylinder head to secure safe and reliable power supply.',
              })}
              bullets={aeBullets}
            />

            {/* Shafting services */}
            <ServiceCard
              title={t({
                zh: '轴系服务（Shafting Services）',
                en: 'Shafting Services',
              })}
              description={t({
                zh: '面向中间轴、尾轴及推力轴承系统，提供对中测量、承载分析和现场加工服务，降低振动与故障风险。',
                en: 'For intermediate shafts, tail shafts and thrust bearing systems, providing alignment measurement, load analysis and in-situ machining to reduce vibration and failure risk.',
              })}
              bullets={shaftingBullets}
            />

            {/* Rudder services */}
            <ServiceCard
              title={t({
                zh: '舵系服务（Rudder Services）',
                en: 'Rudder Services',
              })}
              description={t({
                zh: '针对舵杆、舵叶及舵承系统，提供精准对中、镗孔及刮研服务，恢复舵系配合精度与可靠性。',
                en: 'Targeting rudder stocks, blades and bearing systems, providing precise alignment, boring and scraping to restore correct clearances and reliability.',
              })}
              bullets={rudderBullets}
            />

            {/* In-situ machining services */}
            <ServiceCard
              title={t({
                zh: '现场加工服务（In-situ Machining）',
                en: 'In-situ Machining Services',
              })}
              description={t({
                zh: '依托专业现场加工设备，在船上或坞修现场完成大型部件的精密加工，减少拆装与运输时间。',
                en: 'Using specialised portable machining equipment, we perform precision machining on board or in dry-dock, reducing dismantling and transport time.',
              })}
              bullets={insituBullets}
            />

            {/* Spare parts supply */}
            <ServiceCard
              title={t({
                zh: '备件供应（Spare Parts Supply）',
                en: 'Spare Parts Supply',
              })}
              description={t({
                zh: '依托稳定的供应链体系，为客户提供优选备件，并配合安装调试与技术支持。',
                en: 'Backed by a stable supply chain, we provide selected spare parts combined with installation supervision and technical support.',
              })}
              bullets={spareBullets}
              footerText={t({
                zh: '可根据机型与船级要求提供备件选型建议及替代方案，支持长期备件打包与框架协议。',
                en: 'We advise on spare-part selection and alternatives according to engine type and class requirements, supporting long-term package and frame agreements.',
              })}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

/**
 * @description Card component for a single service category.
 * @param props.title Localised card title text.
 * @param props.description Localised card description text.
 * @param props.bullets Localised bullet list items.
 * @param props.footerText Optional extra note shown at the bottom of the card.
 * @returns {JSX.Element} A styled service card.
 */
function ServiceCard(props: {
  title: string
  description: string
  bullets: string[]
  footerText?: string
}): JSX.Element {
  const { title, description, bullets, footerText } = props

  return (
    <div className="flex flex-col rounded-2xl border border-sky-100 bg-white/90 p-5 shadow-sm backdrop-blur">
      <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
      <p className="mt-2 text-xs text-slate-700">{description}</p>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-xs text-slate-700">
        {bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {footerText ? (
        <p className="mt-3 text-[11px] text-slate-600">{footerText}</p>
      ) : null}
    </div>
  )
}
