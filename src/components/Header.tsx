'use client'
import { useState, useEffect } from "react";
import Container from './Container';
import Link from "next/link";
import {motion} from 'framer-motion';
import { usePathname } from "next/navigation";


export default function Header() {
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Inicio", href: "/" },
  ];

  return (
    <header className=''>
      <Container>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full px-4 py-2 transition-all z-50 ${
          scrolling ? "bg-red-800 shadow-lg" : "bg-[#ff000049]"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            
          >
            <Link href="/"><img width={70} src="/Images/logo.png" alt="logo" /></Link>
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
                    pathname === link.href ? "font-bold text-white" : ""
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
