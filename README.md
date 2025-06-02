# [レビュー掲載アプリ]

**あなたのレビュー体験を革新し、本当に価値のある情報を見つけ出すためのレビュー掲載アプリ**

## スクリーンショット

![プロジェクトのスクリーンショット](https://github.com/user-attachments/assets/010689bb-2a24-457a-a5bc-d8427cdb3b78)

## 概要

[このプロジェクトでは、レビュー掲載アプリを構築します。 レビューの一覧を表示するだけでなく、アプリ内に生成 AI を組み込み、全てのレビューを踏まえた要約を表示します。]
GeminiAPIのキャッチアップのために作成したプロジェクトです。

## ✨ 主な機能

このレビュー掲載アプリでは、以下の主要な機能を提供します。

- **🧠 AI によるレビュー要約:** Google Gemini API を活用し、複数のレビューを分析して、その要点をまとめたサマリーを自動生成・表示します。
- **📱 レスポンシブデザイン:** デスクトップ、タブレット、スマートフォンなど、様々なデバイスの画面サイズに対応し、快適な閲覧体験を提供します。

## 🚀 技術スタック

このプロジェクトでは、以下の技術を使用しています。

- **フロントエンド:**
  - [React](https://react.dev/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Vite](https://vitejs.dev/)
- **UI コンポーネント & スタイリング:**
  - [shadcn/ui](https://ui.shadcn.com/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Lucide React](https://lucide.dev/)
- **🤖 AI 機能:**
  - [Google Gemini API (`@google/generative-ai`)](https://ai.google.dev/) - レビュー要約機能のための生成 AI モデル

## 🛠️ 開発環境のセットアップ

1.  **リポジトリをクローンします:**
    ```bash
    git clone [リポジトリのURL]
    cd [リポジトリ名]
    ```
2.  **依存関係をインストールします:**
    ```bash
    npm install
    # または
    # yarn install
    ```
3.  **開発サーバーを起動します:**
    ```bash
    npm run dev
    # または
    # yarn dev
    ```
    ブラウザで `http://localhost:5173` (Vite のデフォルト) など、表示された URL にアクセスしてください。

## 📁 プロジェクト構成 (src ディレクトリ)

```
src
├── App.tsx           # アプリケーションのメインコンポーネント
├── main.tsx          # アプリケーションのエントリーポイント
├── index.css         # グローバルなスタイル
├── components/       # 再利用可能なUIコンポーネント
│   └── ...           # (例: Button.tsx, Card.tsx)
├── hooks/            # カスタムフック (例: useReviews)
├── lib/              # Shadcn/UIの設定や共通関数 (例: utils.ts)
├── constants/        # 定数定義ファイル (例: apiEndpoints.ts)
└── vite-env.d.ts     # Vite環境変数の型定義
```