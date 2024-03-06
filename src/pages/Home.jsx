import React from "react";
import ForLinh from "../components/ForLinh";
import Popular from "../components/Popular";
import { motion } from "framer-motion";
function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <ForLinh />
      <Popular />
    </motion.div>
  );
}

export default Home;
