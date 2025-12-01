import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const FloatingLiteraryElements = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100 };
  const x1 = useSpring(mouseX, springConfig);
  const y1 = useSpring(mouseY, springConfig);
  const x2 = useSpring(mouseX, { damping: 20, stiffness: 80 });
  const y2 = useSpring(mouseY, { damping: 20, stiffness: 80 });
  const x3 = useSpring(mouseX, { damping: 15, stiffness: 60 });
  const y3 = useSpring(mouseY, { damping: 15, stiffness: 60 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      mouseX.set((clientX - centerX) / 25);
      mouseY.set((clientY - centerY) / 25);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Floating Book */}
      <motion.svg
        style={{ x: x1, y: y1 }}
        className="absolute top-1/4 left-1/4 w-16 h-16 text-sepia/10"
        animate={{
          y: [0, -20, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M12 6v10" />
        <path d="M8 10h8" />
      </motion.svg>

      {/* Floating Quill */}
      <motion.svg
        style={{ x: x2, y: y2 }}
        className="absolute top-1/3 right-1/4 w-20 h-20 text-sepia/8"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M16 3l5 5-1.5 1.5-5-5L16 3z" />
        <path d="M19 8l-10 10-4 1 1-4L16 5" />
        <path d="M2 19h4" />
      </motion.svg>

      {/* Floating Ink Drop */}
      <motion.svg
        style={{ x: x3, y: y3 }}
        className="absolute bottom-1/3 left-1/3 w-12 h-12 text-warm-accent/15"
        animate={{
          y: [0, -25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </motion.svg>

      {/* Floating Feather */}
      <motion.svg
        style={{ x: x1, y: y2 }}
        className="absolute top-2/3 right-1/3 w-16 h-16 text-sepia/12"
        animate={{
          y: [0, 20, 0],
          rotate: [10, -10, 10],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
        <line x1="16" y1="8" x2="2" y2="22" />
        <line x1="17.5" y1="15" x2="9" y2="15" />
      </motion.svg>

      {/* Floating Scroll */}
      <motion.svg
        style={{ x: x2, y: y3 }}
        className="absolute bottom-1/4 right-1/5 w-14 h-14 text-parchment/40"
        animate={{
          y: [0, -15, 0],
          rotate: [5, -5, 5],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M10 17v-2a2 2 0 0 1 2-2h8" />
        <path d="M20 17v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h8" />
        <path d="M20 7V5a2 2 0 0 0-2-2h-8" />
      </motion.svg>

      {/* Floating Bookmark */}
      <motion.svg
        style={{ x: x3, y: y1 }}
        className="absolute top-1/2 left-1/5 w-10 h-10 text-warm-accent/20"
        animate={{
          y: [0, 18, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </motion.svg>
    </div>
  );
};

export default FloatingLiteraryElements;
