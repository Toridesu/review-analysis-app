# React + TypeScript 学習プロジェクト

[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3.1-61dafb)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.1-646cff)](https://vitejs.dev/)

## 🔧 開発環境

- Node.js: 22.10.0
- パッケージマネージャー: npm
- エディタ: Cursor

### 使用している主要パッケージ

- react: 18.3.1
- typescript: 5.6.2
- vite: 6.0.1
- eslint: 9.15.0

## 📖 参考にした資料

- ドキュメント
  https://cmmnty-docs.notion.site/React-shadcn-ui-155111c24256805fbb80dcf027938e89
- Tailwind サービス
  https://zenn.dev/d0ne1s/articles/c4909f32ce8fed5ac251
-

## 💡 学びのポイント

- git init
- git add .
- git commit -m "React の導入"
- git remote add origin [GitHub のリポジトリ URL]
- git push origin main(初回の場合:git push -u origin main)

### つまずきポイント

- 環境構築での初期エラー
  - tsconfig.app .node にエラー。
    "incremental": true, // この行を追加 これで対処した。
  - "noUncheckedSideEffectImports": true 　ここでエラー出てた。
    削除して対処した。
- "Unknown at rule @tailwind"の警告が出ていた。
  PostCSS Language Support の拡張機能を入れて対処した
- TailWind の ClassName がコードの整形をすると''になる。今度聞いてみたい。

## 📚 学習メモ

- 2024/12/13
  - 前回のハンズオンで学んだものを一から作ってみる。
  - shadcn/ui のサイドバー作成で躓いた。今日は終了(18:38)
- 2024/12/15
  - Footer とレビュー部分作った。
- 2024/12/17
  - 少しだけ進めた。tab の使い方。
