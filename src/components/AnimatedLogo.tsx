import { motion } from "framer-motion";
import { Feather } from "lucide-react";

const AnimatedLogo = () => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-sepia/20 via-warm-accent/30 to-sepia/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Main logo container */}
      <motion.div
        className="relative bg-gradient-to-br from-parchment via-paper to-sepia/5 p-6 rounded-full shadow-lg"
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Decorative rings */}
        <motion.div
          className="absolute inset-0 border-2 border-sepia/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-2 border border-warm-accent/30 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Feather icon with animation */}
        <motion.div
          animate={{
            y: [-2, 2, -2],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Feather className="h-12 w-12 text-sepia relative z-10" strokeWidth={1.5} />
        </motion.div>
        
        {/* Ink drop effect */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-sepia/40 rounded-full blur-sm"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
      
      {/* Sparkle effects */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-warm-accent rounded-full"
          style={{
            top: `${20 + i * 20}%`,
            left: `${10 + i * 30}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
};

export default AnimatedLogo;
