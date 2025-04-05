'use client'
import { useState, useEffect } from "react";
import Container from './Container';
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";
export default function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  //const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
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
      name:"Planes", href:"/conocenos/plan-al-contado "
    },
    {
      name:"Descuentos", href:"/conocenos/descuentos"
    },
    { name: "Becas", href: "/conocenos/Becas" },
{ name: "Blog", href:"https://sites.google.com/view/turealblog/inicio"},
    { name: "Contactanos", href: "/contactanos" },
    
  ];

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

 // const toggleSubmenu = (menuName: string) => {
  //  setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  //};

  return (
    <header className="mb-16 md:mb-0">
      <Container>      
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`fixed top-0 left-0 w-full transition-all z-50 ${
            scrolling ? "bg-black shadow-lg" : "bg-[#000000]"
          }`}
        >
        <section className='redes bg-red-950 flex flex-center md:flex-start items-center md:items-start gap-6 text-white my-2 pl-6 px-4 py-2'>
          <a
          href="https://www.facebook.com/univreal"
          target="_blank"
          className="text-white hover:scale-105 transition-transform duration-300"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://instagram.com/univreal?utm_medium=copy_link"
          target="_blank"
          className="text-white hover:scale-105 transition-transform duration-300"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://twitter.com/UnivReal?s=08"
          target="_blank"
          className="text-white hover:scale-105 transition-transform duration-300"
        >
          <FaXTwitter size={20} />
        </a>
        <a
          href="https://www.youtube.com/c/universidadreal/videos"
          target="_blank"
          className="text-white hover:scale-105 transition-transform duration-300"
        >
          <FaYoutube size={20} />
        </a>
        <a
          href="https://wa.me/+59161190061"
          target="_blank"
          className="text-white hover:scale-105 transition-transform duration-300"
        >
          <FaWhatsapp size={20} />
        </a>
        </section>
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="/">
                <img width={140} src="/Images/logo.png" alt="logo" className="h-20 w-auto" />
              </Link>
            </motion.div>

            {/* Menú Desktop */}
            <ul className="hidden md:flex gap-6 text-white items-center">
              {links.map((link) => (
                <motion.li
                  key={link.name}
                  className="relative"
                 
                >
                {(
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
                      {(
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
