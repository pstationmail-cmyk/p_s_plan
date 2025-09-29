# Pricing & Policy

料金比較とポリシーを表示するWebアプリケーションです。

## 機能

- **React + Tailwind版**: Next.js 14を使用したモダンなWebアプリケーション
- **純HTML/CSS版**: メールやブログに貼り付け可能なスタンドアロンHTML

## ファイル構成

```
├── app/
│   ├── globals.css          # Tailwind CSS設定
│   ├── layout.tsx          # ルートレイアウト
│   └── pricing/
│       └── page.tsx        # 料金ページ（React版）
├── public/
│   └── static/
│       └── pricing.html    # 料金ページ（HTML版）
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## セットアップ

1. 依存関係をインストール:
```bash
npm install
```

2. 開発サーバーを起動:
```bash
npm run dev
```

3. ブラウザで `http://localhost:3000/pricing` にアクセス

## GitHub Pages デプロイ手順

### 1. GitHubリポジトリを作成
- GitHubで新しいリポジトリを作成
- リポジトリ名: `hikaku`（任意）

### 2. ファイルをアップロード
```bash
# プロジェクトディレクトリで実行
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/あなたのユーザー名/hikaku.git
git push -u origin main
```

### 3. GitHub Pagesを有効化
- リポジトリの「Settings」タブ
- 左メニューの「Pages」
- Source: 「GitHub Actions」を選択
- 自動でデプロイが開始される

### 4. アクセス
- `https://あなたのユーザー名.github.io/hikaku/pricing` でアクセス可能

## 特徴

### アクセシビリティ
- ARIA属性の適切な使用
- セマンティックHTML
- キーボードナビゲーション対応
- スクリーンリーダー対応

### レスポンシブデザイン
- モバイルファーストアプローチ
- 375px〜デスクトップまで対応
- 表の横スクロール対応

### カラーテーマ
- ライト/ダークモード対応
- 高コントラスト比の確保
- モノトーン基調のデザイン

### 機能
- Copy to Clipboard機能
- 印刷用CSS対応
- UTF-8文字エンコーディング

## 技術スタック

- **フロントエンド**: Next.js 14, React 18, TypeScript
- **スタイリング**: Tailwind CSS
- **アクセシビリティ**: ARIA, セマンティックHTML
- **レスポンシブ**: CSS Grid, Flexbox

## ライセンス

MIT License