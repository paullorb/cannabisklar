import Link from 'next/link';

export default function NavBar() {
  return (
    <nav>
      <Link href="/" />
      <Link href="/users" />
    </nav>
  );
}