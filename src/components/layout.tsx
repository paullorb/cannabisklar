import NavBar from './NavBar';
import Footer from './Footer';

export default function Layout({ 
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <NavBar />
      {children}
      <Footer />
    </html>
  );
}
