import NavBar from './NavBar';
import Footer from './Footer';

export default function Layout({ 
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
