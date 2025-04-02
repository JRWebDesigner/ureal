'use client';

import { motion } from 'framer-motion';

const items = [
  { title: 'Administración Financiera', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.' },
  { title: 'Comercio Internacional', description: 'Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.' },
  { title: 'Comunicación Audiovisual', description: 'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.' },
  { title: 'Mercadotecnia', description: 'Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent.' },
  { title: 'Ingeniería en Sistemas y Computación Administrativa', description: 'Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.' },
  { title: 'Administración Turística y Hotelería', description: 'Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.' },
  { title: 'Administración de Empresas', description: 'Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.' },
  { title: 'Contaduría Pública', description: 'Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.' }
];

type ListItemProps = {
  title: string;
  description: string;
  index: number;
};

const ListItem = ({ title, description, index }: ListItemProps) => {
  return (
    <motion.li
      className="p-4 bg-white shadow-md rounded-2xl mb-2 text-lg"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.li>
  );
};

export default function AnimatedList() {
  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-2"
      >
        {items.map((item, index) => (
          <ListItem key={index} title={item.title} description={item.description} index={index} />
        ))}
      </motion.ul>
    </div>
  );
}
