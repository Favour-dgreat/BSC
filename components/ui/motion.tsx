"use client";

import { createContext, useContext } from "react";
import { motion as framerMotion } from "framer-motion";

const MotionContext = createContext({
  isReducedMotion: false,
});

export const useMotionContext = () => useContext(MotionContext);

export const motion = framerMotion;