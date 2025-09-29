'use client'

import { useState } from 'react'

export default function PricingPage() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(document.documentElement.outerHTML)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* 料金比較セクション */}
        <section className="rounded-2xl border bg-white p-6 mb-6 shadow-sm">
          <h1 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-lg">💰</span>
            料金比較（1回60分）
          </h1>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg overflow-hidden" role="table" aria-label="料金比較表">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 text-left text-sm font-medium text-gray-900" scope="col">プラン</th>
                  <th className="p-3 text-center text-sm font-medium text-gray-900" scope="col">ARTRY</th>
                  <th className="p-3 text-center text-sm font-medium text-gray-900" scope="col">P.S.parkle（月契約あり）</th>
                  <th className="p-3 text-center text-sm font-medium text-gray-900" scope="col">P.S.parkle（完全単発）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="p-3 font-medium text-gray-900">マンツーマン</td>
                  <td className="p-3 text-center text-gray-700">4,980円</td>
                  <td className="p-3 text-center text-gray-700">5,000円</td>
                  <td className="p-3 text-center text-gray-700">6,500円</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-3 font-medium text-gray-900">グループ</td>
                  <td className="p-3 text-center text-gray-700">3,980円</td>
                  <td className="p-3 text-center text-gray-700">3,500円</td>
                  <td className="p-3 text-center text-gray-700">4,000円</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 注記セクション */}
        <section className="rounded-2xl border bg-white p-6 mb-6 shadow-sm">
          <p className="text-sm text-gray-600">
            ※P.S.parkleは「レッスン繰越」や「3回まで保留」が可能。
          </p>
        </section>

        {/* 支払いシステムセクション */}
        <section className="rounded-2xl border bg-white p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-lg">👜</span>
            支払いシステム
          </h2>
          <ul className="space-y-2 list-disc pl-5 text-gray-700">
            <li><strong>ARTRY</strong></li>
            <li>回数をあらかじめ決めての月額制</li>
            <li><strong>P.S.parkle</strong></li>
            <li>月額型＋単発購入の併用可能</li>
            <li>例：月1回契約＋追加で単発購入（マンツーマン5,000円 / グループ3,500円）</li>
            <li>月契約なしの完全単発型も選択可能（マンツーマン6,500円 / グループ4,000円）</li>
          </ul>
        </section>

        {/* 退会タイミングセクション */}
        <section className="rounded-2xl border bg-white p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-lg">📅</span>
            退会タイミング
          </h2>
          <ul className="space-y-2 list-disc pl-5 text-gray-700">
            <li><strong>ARTRY</strong></li>
            <li>退会は「10日まで」の申し出が必要</li>
            <li><strong>P.S.parkle</strong></li>
            <li>毎月1日が引き落とし日 → それまでに申し出</li>
            <li>1日を超えた場合も、決済手数料を差し引いた額を返金対応可</li>
          </ul>
        </section>

        {/* まとめポイントセクション */}
        <section className="rounded-2xl border bg-white p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-lg">✨</span>
            まとめポイント
          </h2>
          <ul className="space-y-2 list-disc pl-5 text-gray-700">
            <li>料金：マンツーマンはARTRYの方が少し安いが、グループはP.S.parkleの方が安い。</li>
            <li>柔軟性：P.S.parkleは「月契約＋追加単発」「完全単発」など自由度が高い。</li>
            <li>退会：P.S.parkleは1日を過ぎても返金対応あり。</li>
          </ul>
        </section>

        {/* Copy to Clipboard ボタン */}
        <div className="text-center">
          <button
            onClick={copyToClipboard}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="HTMLをクリップボードにコピー"
          >
            {copied ? 'コピー完了！' : 'HTMLをコピー'}
          </button>
        </div>
      </div>
    </div>
  )
}
