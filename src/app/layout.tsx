import type { Metadata } from "next";
import "@/common/style/globals.css";
import { LanguageProvider } from "@/common/context/LanguageContext";
import ReduxProvider from "@/common/context/ReduxContext";

export const metadata: Metadata = {
  title: "Analiso - Avalie ativos de maneira mais",
  description: "Site para análise fundamentalista de ações da bolsa de valores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <ReduxProvider> 
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
