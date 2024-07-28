import "@/styles/globals.css";
import dotenv from 'dotenv';

// .env ファイルの読み込み
dotenv.config();

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
