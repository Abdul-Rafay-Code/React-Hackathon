import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout(children: any) {
  return (
    <>
      <Navbar />

      <div className="content min-h-screen">{children?.children}</div>
      <Footer />
    </>
  );
}

export default Layout;
