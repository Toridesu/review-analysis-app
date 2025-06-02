# [レビュー掲載アプリ]

## スクリーンショット

![プロジェクトのスクリーンショット](https://github.com/user-attachments/assets/010689bb-2a24-457a-a5bc-d8427cdb3b78)

## 概要

[このプロジェクトでは、レビュー掲載アプリを構築します。 レビューの一覧を表示するだけでなく、アプリ内に生成 AI を組み込み、全てのレビューを踏まえた要約を表示します。]

## 主な機能

このレビュー掲載アプリでは、以下の主要な機能を提供します。

- **AI によるレビュー要約:**
  - Google Gemini API を活用し、複数のレビューを分析して、その要点をまとめたサマリーを自動生成・表示します。
- **レスポンシブデザイン:**
  - デスクトップ、タブレット、スマートフォンなど、様々なデバイスの画面サイズに対応し、快適な閲覧体験を提供します。

## 技術スタック

このプロジェクトでは、以下の技術を使用しています。

- **フロントエンド:**
  - [React](https://react.dev/) - ユーザーインターフェースを構築するための JavaScript ライブラリ
  - [TypeScript](https://www.typescriptlang.org/) - JavaScript に静的型付けを追加した言語
  - [Vite](https://vitejs.dev/) - 高速なフロントエンド開発ビルドツール
- **UI コンポーネント & スタイリング:**
  - [shadcn/ui](https://ui.shadcn.com/) - Radix UI と Tailwind CSS をベースにした再利用可能な UI コンポーネント群
  - [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファーストの CSS フレームワーク
  - [Lucide React](https://lucide.dev/) - シンプルで美しいアイコンライブラリ
- **AI 機能:**
  - [Google Gemini API (`@google/generative-ai`)](https://ai.google.dev/) - レビュー要約機能のための生成 AI モデル
- **開発ツール & ユーティリティ:**
  - ESLint - コードの静的解析
  - `class-variance-authority`, `clsx`, `tailwind-merge` - スタイルとクラス名管理の効率化
  - `tailwindcss-animate` - Tailwind CSS でのアニメーション実装

## インストールと実行方法

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
