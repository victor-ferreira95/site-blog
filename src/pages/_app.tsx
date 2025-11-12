import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components/layout";

// o arquivo _app.tsx é o componente principal da aplicação, executando no servidor e no cliente
// adiciona estilos globais e configurações da aplicação
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
