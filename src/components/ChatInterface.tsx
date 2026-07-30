import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export const ChatInterface: React.FC = () => {
    return (
        <main className="flex-1 h-full flex flex-col bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
            {/* Нежная фоновая подсветка для области чата */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amethyst-500/5 dark:bg-amethyst-500/10 rounded-full blur-[150px] pointer-events-none" />

            {/* Хедер чата с полупрозрачным стеклом */}
            <header className="h-16 border-b border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between px-6 bg-white/60 dark:bg-slate-950/60 backdrop-blur-md z-10">
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amethyst-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amethyst-500"></span>
          </span>
          Gemini 1.5 Flash (Аметистовый кристалл)
        </span>
            </header>

            {/* Область сообщений */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex gap-4 max-w-2xl"
                >
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amethyst-400 to-amethyst-700 flex items-center justify-center shrink-0 shadow-lg shadow-amethyst-500/20 text-white">
                        <Sparkles className="w-5 h-5" />
                    </div>
                    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 rounded-2xl rounded-tl-none p-5 text-sm leading-relaxed text-slate-800 dark:text-slate-200 shadow-sm">
                        Привет! Чем я могу тебе помочь прямо сейчас? Ты можешь сделать скриншот области экрана или просто задать вопрос.
                    </div>
                </motion.div>
            </div>

            {/* Поле ввода с плавным градиентным бордером при фокусе */}
            <div className="p-4 md:p-6 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/40 dark:bg-slate-950/40 backdrop-blur-lg relative z-10">
                <div className="max-w-4xl mx-auto relative group">

                    {/* Градиентный светящийся контур при наведении/фокусе */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amethyst-500 to-amethyst-300 rounded-2xl blur opacity-0 group-focus-within:opacity-60 group-hover:opacity-30 transition duration-500" />

                    <div className="relative flex items-center gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-2.5 shadow-sm">
                        <input
                            type="text"
                            placeholder="Спроси Metior о чём угодно..."
                            className="flex-1 bg-transparent px-3 text-sm outline-none text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                        />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3 bg-gradient-to-r from-amethyst-600 to-amethyst-500 text-white rounded-xl shadow-md shadow-amethyst-500/25 hover:shadow-amethyst-500/40 transition-all cursor-pointer"
                        >
                            <ArrowRight className="w-4 h-4" />
                        </motion.button>
                    </div>

                </div>
            </div>
        </main>
    );
};