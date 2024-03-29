import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main className="container mx-auto">
     <Link href="/about">Go to about page</Link> <br />
     <Link href="/services">Go to services page</Link> <br />
     <Link href="/blog">Go to blog page</Link> <br />
     <Link href="/contact">Go to contact page</Link>
    </main>
  );
}
