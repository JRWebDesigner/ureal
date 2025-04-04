'use client'
import { useState, useEffect } from "react";
import Container from './Container';
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaPhoneAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Inicio", href: "/" },
    { 
      name: "Pregrado", 
      href: "/pregrado",
    },
    {
      name:'Postgrado',
      href:"/maestria"
    },
    { name: "Conócenos", href: "/conocenos/mision-vision",
    },
    {
      name:"Planes", href:"/conocenos/planes-al-contado"
    },
    {
      name:"Descuentos", href:"/conocenos/descuentos"
    },
    { name: "Becas", href: "/conocenos/Becas" },
    { name: "Contactanos", href: "/contactanos" },
  ];

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null); // Cerrar todos los submenús al cambiar de ruta
  }, [pathname]);

  const toggleSubmenu = (menuName: string) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };

  return (
    <header className="">
      <Container>
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`fixed top-0 left-0 w-full px-4 py-2 transition-all z-50 ${
            scrolling ? "bg-black shadow-lg" : "bg-[#000000]"
          }`}
        >
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="/">
                <img width={140} src="/Images/logo.png" alt="logo" className="h-12 w-auto" />
              </Link>
            </motion.div>

            {/* Menú Desktop */}
            <ul className="hidden md:flex gap-6 text-white items-center">
              {links.map((link) => (
                <motion.li
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.submenu && setOpenSubmenu(link.name)}
                  onMouseLeave={() => link.submenu && setOpenSubmenu(null)}
                >
                  {link.submenu ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(link.name)}
                        className={`flex items-center gap-1 px-2 py-1 ${
                          pathname === link.href ? "font-bold" : ""
                        }`}
                      >
                        {link.name}
                        {openSubmenu === link.name ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                      </button>
                      
                      <AnimatePresence>
                        {openSubmenu === link.name && (
                          <motion.ul
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                          >
                            {link.submenu.map((subItem) => (
                              <motion.li
                                key={subItem.href}
                                whileHover={{ x: 5 }}
                              >
                                <Link
                                  href={subItem.href}
                                  className="block px-4 py-2 text-red-800 hover:bg-red-50"
                                >
                                  {subItem.name}
                                </Link>
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`relative px-2 py-1 ${
                        pathname === link.href ? "font-bold text-black bg-white rounded-2xl" : ""
                      }`}
                    >
                      {link.name}
                      {pathname === link.href && (
                        <motion.span
                          layoutId="underline"
                          className=""
                        />
                      )}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>

            {/* Botón Menú Móvil */}
            <button 
              className="md:hidden text-white text-2xl focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menú"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Menú Móvil */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <ul className="flex flex-col gap-1 py-4 text-white">
                  {links.map((link) => (
                    <motion.li
                      key={link.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {link.submenu ? (
                        <div className="flex flex-col">
                          <button
                            onClick={() => toggleSubmenu(link.name)}
                            className={`flex justify-between items-center px-4 py-3 text-lg ${
                              pathname === link.href ? "font-bold bg-red-700 rounded" : ""
                            }`}
                          >
                            {link.name}
                            {openSubmenu === link.name ? <FaChevronUp /> : <FaChevronDown />}
                          </button>
                          
                          <AnimatePresence>
                            {openSubmenu === link.name && (
                              <motion.ul
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pl-6 overflow-hidden"
                              >
                                {link.submenu.map((subItem) => (
                                  <motion.li
                                    key={subItem.href}
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <Link
                                      href={subItem.href}
                                      className={`block px-4 py-2 text-lg ${
                                        pathname === subItem.href ? "font-bold bg-red-700 rounded" : ""
                                      }`}
                                    >
                                      {subItem.name}
                                    </Link>
                                  </motion.li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          className={`block px-4 py-3 text-lg ${
                            pathname === link.href ? "font-bold bg-red-700 rounded" : ""
                          }`}
                        >
                          {link.name}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="mt-2"
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
