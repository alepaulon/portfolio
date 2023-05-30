import Nav from "../components/Nav/Nav"


export default function Layout({ children }) {
    return (
      <html lang="en">
        <body className="flex m-12 flex-col lg:flex-row lg:m-24"><Nav />
        <main>{children}</main>
        </body>
      </html>
    )
  }
  