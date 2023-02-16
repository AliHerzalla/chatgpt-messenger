import SessionProvider from "../components/SessionProvider";
import SideBar from "../components/SideBar";
import { getServerSession } from "next-auth/next";
import "../styles/globals.css";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import Login from "../components/Login";
import ClientProvider from "../components/ClientProvider";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex min-h-screen">
              {/* Side Bar */}
              <div className="bg-[#202123] max-w-xs overflow-y-auto md:min-w-[20rem]">
                <SideBar />
              </div>
              {/* Main Section */}

              <ClientProvider />

              <div className="flex-1 bg-[#343541]">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
