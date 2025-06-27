"use client"

import { motion } from "framer-motion"

export default function MockUiPanel() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="relative w-full max-w-5xl mx-auto mt-16"
    >
      <div className="absolute -top-8 -left-8 w-48 h-48 bg-secondary rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent1-DEFAULT rounded-full filter blur-3xl opacity-20"></div>

      <div className="relative bg-primary/50 backdrop-blur-md rounded-xl border border-border shadow-2xl shadow-black/30 overflow-hidden">
        <div className="h-10 bg-primary border-b border-border flex items-center px-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div> {/* Keep green for UI convention */}
          </div>
          <div className="mx-auto text-sm text-muted-foreground">teknovistafest-submission.jsx</div>
        </div>
        <div className="p-4 md:p-6 text-sm font-mono text-muted-foreground bg-deepspace/70">
          <pre>
            <code>
              <span className="text-accent1-DEFAULT">import</span> React{" "}
              <span className="text-accent1-DEFAULT">from</span> <span className="text-accent2-DEFAULT">'react'</span>;
              {`
`}
              <span className="text-accent1-DEFAULT">import</span> {"{ Star }"}{" "}
              <span className="text-accent1-DEFAULT">from</span>{" "}
              <span className="text-accent2-DEFAULT">'lucide-react'</span>;
              {`

`}
              <span className="text-accent1-DEFAULT">const</span>{" "}
              <span className="text-yellow-400">DesignSubmission</span> = () => {"{"}
              {`
  `}
              <span className="text-accent1-DEFAULT">return</span> (
              {`
    `}
              <span className="text-gray-500">
                &lt;div className="w-full h-full bg-gradient-to-br from-primary to-secondary/70 p-8"&gt;
              </span>
              {`
      `}
              <span className="text-gray-500">&lt;h1 className="text-4xl font-bold text-white"&gt;</span>
              {`
        `}
              My Awesome Design
              {`
      `}
              <span className="text-gray-500">&lt;/h1&gt;</span>
              {`
      `}
              <span className="text-gray-500">&lt;p className="text-accent2-DEFAULT mt-2"&gt;</span>
              {`
        `}
              Teknovistafest 2025 Entry
              {`
      `}
              <span className="text-gray-500">&lt;/p&gt;</span>
              {`
    `}
              <span className="text-gray-500">&lt;/div&gt;</span>
              {`
  `}
              );
              {"}"};
              {`

`}
              <span className="text-accent1-DEFAULT">export default</span> DesignSubmission;
            </code>
          </pre>
        </div>
      </div>
    </motion.div>
  )
}
