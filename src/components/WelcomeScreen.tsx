import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface WelcomeScreenProps {
    onStart: () => void; // Функция для переключения экрана
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
    return (
        <motion.div
            key="welcome"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full w-full flex flex-col items-center justify-center relative p-6 select-none"
        >
            {/* Глубокое аметистовое фоновое свечение (как от кристалла) */}
            <div className="absolute w-[500px] h-[500px] bg-amethyst-600/15 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />

            {/* Логотип Metior с градиентом */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="w-24 h-24 rounded-3xl bg-gradient-to-br from-amethyst-600 via-amethyst-500 to-amethyst-400 p-[2px] shadow-2xl shadow-amethyst-500/30 mb-10"
            >
                <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center border border-white/5">
                    <Sparkles className="w-12 h-12 text-amethyst-300" />
                </div>
            </motion.div>

            {/* Заголовок и описание */}
            <motion.h1
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold text-center tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300"
            >
                Привет! Как дела?
            </motion.h1>

            <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-4 text-slate-400 text-center max-w-sm text-lg leading-relaxed"
            >
                Я <span className="text-amethyst-400 font-semibold shadow-amethyst-500/50 shadow-sm">Metior</span> — твой кристальный AI-помощник. Готов анализировать экран и отвечать на вопросы.
            </motion.p>

            {/* Кнопка "Начать" */}
            <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 400, damping: 10 }}
                onClick={onStart}
                className="mt-12 group relative inline-flex items-center gap-3 px-10 py-5 bg-amethyst-500 text-white font-semibold text-lg rounded-2xl shadow-2xl shadow-amethyst-600/30 hover:bg-amethyst-600 hover:shadow-amethyst-600/50 transition-all duration-300"
            >
                <span>Начать работу</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200" />

                {/* Эффект свечения при наведении */}
                <div className="absolute -inset-1 bg-amethyst-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
            </motion.button>
        </motion.div>
    );
};