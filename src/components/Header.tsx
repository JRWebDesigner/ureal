'use client'
import { useState, useEffect } from "react";
import Container from './Container';
import Link from "next/link";
import {motion} from 'framer-motion';
import { usePathname } from "next/navigation";


export default function Header() {
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname(); // Obtiene la ruta actual

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Inicio", href: "/" },
  ];

  return (
    <header className='bg-red-800 px-2 w-full py-2 h-[40px]'>
      <Container>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full p-4 transition-all z-50 ${
          scrolling ? "bg-red-800 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            
          >
            <Link href="/"><img width={40} src="/Images/logo.png" alt="logo" /></Link>
          </motion.div>
          <ul className="flex gap-6 text-white">
            {links.map((link) => (
              <motion.li
                key={link.href}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={link.href}
                  className={`relative ${
                    pathname === link.href ? "font-bold text-black" : ""
                  }`}
                >
                  {link.name}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-400"
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>
      </Container>
    </header>
  );
}
