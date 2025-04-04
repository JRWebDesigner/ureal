'use client'
import { useState, useEffect } from "react";
import Container from './Container';
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';

export default function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Conócenos", href: "/conocenos" },
    { name: "Contáctanos", href: "/contactanos" },
  ];

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="">
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
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="/">
                <img width={120} src="/Images/logo.png" alt="logo" className="h-12 w-auto" />
              </Link>
            </motion.div>

            {/* Menú Desktop (oculto en móviles) */}
            <ul className="hidden md:flex gap-6 text-white items-center">
              {links.map((link) => (
                <motion.li
                  key={link.href}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={link.href}
                    className={`relative px-2 py-1 ${
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
              <motion.li whileHover={{ scale: 1.1 }}>
                <a 
                  href="tel:+123456789" 
                  className="flex items-center gap-2 bg-red-600 px-4 py-2 rounded-full"
                >
                  <FaPhoneAlt /> Llamar
                </a>
              </motion.li>
            </ul>

            {/* Botón Menú Móvil (solo visible en móviles) */}
            <button 
              className="md:hidden text-white text-2xl focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menú"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Menú Móvil (animado con AnimatePresence) */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <ul className="flex flex-col gap-4 py-4 text-white">
                  {links.map((link) => (
                    <motion.li
                      key={link.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className={`block px-4 py-2 text-lg ${
                          pathname === link.href ? "font-bold text-white bg-red-700 rounded" : ""
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="mt-4"
                  >
                    <a 
                      href="tel:+123456789" 
                      className="flex items-center gap-2 bg-red-600 px-6 py-3 rounded-full text-lg w-full justify-center"
                    >
                      <FaPhoneAlt /> Llamar ahora
                    </a>
                  </motion.li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </Container>
    </header>
  );
}
