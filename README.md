# 在庫管理システム

モビリティエージェント株式会社様向けの在庫管理・POS管理システムです。

## 技術スタック

- **フレームワーク**: Next.js 16
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **UIコンポーネント**: Radix UI + shadcn/ui
- **アイコン**: Lucide React

## 開発環境のセットアップ

### 必要な環境

- Node.js 18以上
- npm または pnpm

### インストール

```bash
npm install
# または
pnpm install
```

### 開発サーバーの起動

```bash
npm run dev
# または
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## ビルド

```bash
npm run build
npm start
```

## Vercelへのデプロイ

1. GitHubリポジトリにプッシュ
2. [Vercel](https://vercel.com)でアカウント作成
3. 「New Project」をクリック
4. GitHubリポジトリをインポート
5. デプロイ設定を確認して「Deploy」をクリック

自動的にデプロイされ、URLが発行されます。

