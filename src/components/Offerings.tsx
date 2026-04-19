"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, RevealX, replayViewport, staggerItemVariants } from "@/components/motion";

const OFFERINGS = [
  { num: "01.", label: "German Language Levels" },
  { num: "02.", label: "Specialized Training" },
  { num: "03.", label: "Goethe & TELC Exam Preparation" },
  { num: "04.", label: "Placement Assistance" },
] as const;

export default function Offerings() {
  return (
    <section className="offerings-root">
      <div className="offerings-section-inner">
        <div className="offerings-text-col">
          <Reveal>
            <h2 className="offerings-title">
              Our Key <span className="offerings-title-accent">Offerings</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="offerings-desc">
            Comprehensive programs designed to support your learning journey with structured training, exam preparation, and career-focused guidance.            </p>
          </Reveal>
          <motion.ul
            className="offerings-list"
            role="list"
            initial="hidden"
            whileInView="visible"
            viewport={replayViewport}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
            }}
            style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "clamp(1rem, 3vw, 1.5rem)" }}
          >
            {OFFERINGS.map((item) => (
              <motion.li key={item.label} className="offerings-list-item" variants={staggerItemVariants}>
                <span className="offerings-num" aria-hidden>
                  {item.num}
                </span>
                <span className="offerings-item-label">{item.label}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <RevealX x={56} className="offerings-image-col" delay={0.12}>
          <div className="offerings-image-frame">
            <Image
              src="/key_offerings_image.png"
              alt="Key offerings: language training, exams, and placement support"
              width={657}
              height={564}
              className="offerings-key-img"
              sizes="(max-width: 768px) min(100vw - 40px, 400px), (max-width: 1200px) 45vw, 480px"
            />
          </div>
        </RevealX>
      </div>
    </section>
  );
}
