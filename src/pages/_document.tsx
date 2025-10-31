import { Html, Head, Main, NextScript } from "next/document";

// o arquivo _document.tsx é o componente principal da aplicação, executando no servidor
// é responsável por renderizar a página HTML completa, metadados, fontes , etc.
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
