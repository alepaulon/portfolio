import Nav from "../components/Nav/Nav"


export default function Layout({ children }) {
    return (
      <html lang="en">
        <body className="flex flex-row m-24"><Nav />
        <main>{children}</main>
        </body>
      </html>
    )
  }
  