/**
 * @file Contact.tsx
 * @description Contact page with enquiry form and basic contact details for HMS-PowerTec, supporting bilingual content, displayed on a bright ocean background.
 */

import { FormEvent, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

/**
 * @description Contact page component with enquiry form and contact channels over a light ocean background.
 * @returns {JSX.Element} The contact page layout.
 */
export default function Contact(): JSX.Element {
  const { t } = useLanguage()
  const [submitting, setSubmitting] = useState(false)

  /**
   * @description Handles contact form submission by preventing default and simulating send.
   * @param event Form submission event.
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    setSubmitting(true)

    // Simulate simple client-side submission without backend.
    window.setTimeout(() => {
      setSubmitting(false)
      window.alert(
        t({
          zh: '感谢您的留言，我们的工程团队将尽快与您联系。',
          en: 'Thank you for your message. Our engineering team will contact you shortly.',
        }),
      )
    }, 600)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-sky-50 text-slate-900">
      {/* Ocean background image */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="https://pub-cdn.sider.ai/u/U0L5HV95NWL/web-coder/6a1026bd614ae89139bff8ac/resource/5300dc93-9764-452e-9905-a30a5a856406.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-sky-900/10" />
      </div>

      {/* Foreground content */}
      <div className="relative">
        <section className="border-b border-white/60 bg-sky-900/5 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
            <div className="inline-flex flex-col rounded-2xl bg-white/95 p-5 shadow-sm backdrop-blur">
              <p className="text-[11px] uppercase tracking-[0.2em] text-sky-700">
                Contact
              </p>
              <h1 className="mt-2 text-2xl font-semibold text-slate-900">
                {t({ zh: '联系我们', en: 'Contact Us' })}
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-700">
                {t({
                  zh: '无论您正在计划主机/辅机大修、轴系/舵系检修，还是面临突发故障，欢迎将您的需求与工况信息发送给我们。我们的工程师将根据您的船型与时间窗口，提供专业建议。',
                  en: 'Whether you are planning M/E or A/E overhaul, shafting or rudder maintenance, or facing an emergency breakdown, please share your requirements and operating condition with us. Our engineers will provide professional advice based on your vessel type and time window.',
                })}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-sky-900/5">
          <div className="mx-auto max-w-6xl px-4 py-8 md:grid md:grid-cols-[1.1fr,0.9fr] md:gap-8 md:py-10">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-2xl border border-sky-100 bg-white/95 p-5 text-xs text-slate-800 shadow-sm backdrop-blur"
            >
              <h2 className="text-sm font-semibold text-slate-900">
                {t({
                  zh: '提交项目与服务需求',
                  en: 'Submit Project & Service Request',
                })}
              </h2>
              <p className="text-slate-700">
                {t({
                  zh: '请尽可能提供完整信息，以便我们更快评估并给出建议。',
                  en: 'Please provide as much information as possible to help us assess your request efficiently.',
                })}
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-[11px] text-slate-700">
                    {t({ zh: '联系人姓名 *', en: 'Contact person *' })}
                  </label>
                  <input
                    required
                    name="name"
                    className="w-full rounded border border-slate-300 bg-white px-2 py-1.5 text-xs text-slate-900 outline-none focus:border-sky-500"
                    placeholder={t({
                      zh: '例如：张三 / Capt. Zhang',
                      en: 'e.g. Capt. Zhang / Mr. Smith',
                    })}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[11px] text-slate-700">
                    {t({ zh: '公司 / 船东 *', en: 'Company / Owner *' })}
                  </label>
                  <input
                    required
                    name="company"
                    className="w-full rounded border border-slate-300 bg-white px-2 py-1.5 text-xs text-slate-900 outline-none focus:border-sky-500"
                    placeholder="ABC Shipping"
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-[11px] text-slate-700">
                    {t({ zh: '邮箱 *', en: 'E-mail *' })}
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full rounded border border-slate-300 bg-white px-2 py-1.5 text-xs text-slate-900 outline-none focus:border-sky-500"
                    placeholder="your.name@example.com"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[11px] text-slate-700">
                    {t({
                      zh: '电话（含国家区号） *',
                      en: 'Phone (with country code) *',
                    })}
                  </label>
                  <input
                    required
                    name="phone"
                    className="w-full rounded border border-slate-300 bg-white px-2 py-1.5 text-xs text-slate-900 outline-none focus:border-sky-500"
                    placeholder="+86-138-0000-0000"
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-[11px] text-slate-700">
                    {t({ zh: '船名 / 呼号', en: 'Vessel name / Call sign' })}
                  </label>
                  <input
                    name="vessel"
                    className="w-full rounded border border-slate-300 bg-white px-2 py-1.5 text-xs text-slate-900 outline-none focus:border-sky-500"
                    placeholder={t({
                      zh: '例如：MV XXXXX',
                      en: 'e.g. MV XXXXX',
                    })}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[11px] text-slate-700">
                    IMO
                  </label>
                  <input
                    name="imo"
                    className="w-full rounded border border-slate-300 bg-white px-2 py-1.5 text-xs text-slate-900 outline-none focus:border-sky-500"
                    placeholder="IMO 9xxxxxx"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-[11px] text-slate-700">
                  {t({ zh: '需求类型 *', en: 'Service type *' })}
                </label>
                <select
                  required
                  name="serviceType"
                  className="w-full rounded border border-slate-300 bg-white px-2 py-1.5 text-xs text-slate-900 outline-none focus:border-sky-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    {t({ zh: '请选择', en: 'Please select' })}
                  </option>
                  <option value="me">
                    {t({
                      zh: '主机服务（M/E）',
                      en: 'Main engine services (M/E)',
                    })}
                  </option>
                  <option value="ae">
                    {t({
                      zh: '辅机服务（A/E）',
                      en: 'Auxiliary engine services (A/E)',
                    })}
                  </option>
                  <option value="shaft">
                    {t({ zh: '轴系服务', en: 'Shafting services' })}
                  </option>
                  <option value="rudder">
                    {t({ zh: '舵系服务', en: 'Rudder services' })}
                  </option>
                  <option value="onsite">
                    {t({
                      zh: '现场加工服务',
                      en: 'In-situ machining',
                    })}
                  </option>
                  <option value="spares">
                    {t({ zh: '备件供应', en: 'Spare parts supply' })}
                  </option>
                  <option value="other">
                    {t({
                      zh: '其他 / 综合方案',
                      en: 'Other / combined solution',
                    })}
                  </option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-[11px] text-slate-700">
                  {t({
                    zh: '简要描述当前工况与问题 *',
                    en: 'Brief description of current condition & issue *',
                  })}
                </label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="w-full resize-none rounded border border-slate-300 bg-white px-2 py-1.5 text-xs text-slate-900 outline-none focus:border-sky-500"
                  placeholder={t({
                    zh: '请描述设备类型、故障现象、计划时间窗口、靠港/坞修地点等关键信息。',
                    en: 'Please describe equipment type, failure symptoms, time window and port/dry-dock details.',
                  })}
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-sky-500 px-5 py-1.5 text-xs font-semibold text-white shadow-lg shadow-red-500/30 hover:shadow-sky-500/40 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting
                    ? t({ zh: '提交中…', en: 'Submitting…' })
                    : t({ zh: '提交需求', en: 'Submit request' })}
                </button>
                <p className="text-[11px] text-slate-600">
                  {t({
                    zh: '提交信息后，我们一般会在 24 小时内与您取得联系。',
                    en: 'We normally respond within 24 hours after receiving your enquiry.',
                  })}
                </p>
              </div>
            </form>

            <aside className="mt-8 space-y-4 rounded-2xl border border-sky-100 bg-white/95 p-5 text-xs text-slate-800 shadow-sm backdrop-blur md:mt-0">
              <h2 className="text-sm font-semibold text-slate-900">
                {t({ zh: '其他联系方式', en: 'Other Contact Channels' })}
              </h2>
              <p className="text-slate-700">
                {t({
                  zh: '您也可以通过以下方式直接与我们联系，获取紧急支持或技术咨询。',
                  en: 'You may also contact us directly via the channels below for urgent support or technical consultation.',
                })}
              </p>
              <div className="space-y-2 text-slate-800">
                <p>
                  <span className="font-semibold text-sky-700">
                    {t({
                      zh: '24/7 技术支持：',
                      en: '24/7 technical support: ',
                    })}
                  </span>
                  +XX-XXXX-XXXX
                </p>
                <p>
                  <span className="font-semibold text-sky-700">E-mail: </span>
                  info@hms-powertec.com
                </p>
                <p>
                  <span className="font-semibold text-sky-700">
                    {t({ zh: '地址：', en: 'Address: ' })}
                  </span>
                  {t({
                    zh: '待补充 · Marine Service Hub',
                    en: 'To be confirmed · Marine Service Hub',
                  })}
                </p>
              </div>
              <div className="overflow-hidden rounded-xl border border-sky-100">
                <img
                  src="https://pub-cdn.sider.ai/u/U0L5HV95NWL/web-coder/6a1026bd614ae89139bff8ac/resource/c7db23f0-36c0-4be9-85cc-b42704d54034.jpg"
                  className="h-40 w-full object-cover"
                  alt="Global marine service coverage"
                />
              </div>
              <p className="text-[11px] text-slate-600">
                {t({
                  zh: '如需长期服务或船队合作，请在留言中注明“长期合作”或“框架协议”，我们将安排专项人员跟进。',
                  en: 'For long-term service or fleet cooperation, please mention “long-term cooperation” or “frame agreement” in your message so that we can assign a dedicated contact.',
                })}
              </p>
            </aside>
          </div>
        </section>
      </div>
    </div>
  )
}
