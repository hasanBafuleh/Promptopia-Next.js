import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
            <SpeedInsights />
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
