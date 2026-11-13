"use client";

// Packages
import Link from "next/link";
import { motion } from "framer-motion";

// Next.js Link that accepts framer-motion props
const MotionLink = motion.create(Link);

export default MotionLink;
