import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface WelcomeScreenProps {
    onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
    return (
        <motion.div
            key="welcome"
            initial={{ opacity: 0, scale: 0.96, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="h-full w-full flex flex-col items-center justify-center relative p-6 select-none overflow-hidden"
        >
            {/* 1. Живые аметистовые градиентные пятна (Mesh Glow) */}
            <div className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-amethyst-900 via-amethyst-500 to-amethyst-400 opacity-20 dark:opacity-35 rounded-full blur-[140px] pointer-events-none -z-10 animate-glow" />
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-gradient-to-br from-amethyst-400 to-amethyst-700 opacity-15 dark:opacity-25 rounded-full blur-[120px] pointer-events-none -z-10 animate-glow" style={{ animationDelay: "-4s" }} />

            {/* 2. Иконка с градиентной рамкой и эффектом стекла */}
            <motion.div
                initial={{ y: -30, opacity: 0, rotate: -10 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                className="relative group mb-10"
            >
                <div className="absolute -inset-1 bg-gradient-to-r from-amethyst-400 via-amethyst-500 to-amethyst-700 rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition duration-500" />
                <div className="w-24 h-24 rounded-3xl bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/40 dark:border-white/10 flex items-center justify-center relative shadow-2xl">
                    <Sparkles className="w-12 h-12 text-amethyst-500 dark:text-amethyst-400 animate-pulse" />
                </div>
            </motion.div>

            {/* 3. Заголовок с насыщенным 3D-градиентным текстом */}
            <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl md:text-7xl font-extrabold text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-amethyst-900 to-amethyst-700 dark:from-white dark:via-amethyst-300 dark:to-amethyst-500 drop-shadow-sm"
            >
                Привет! Как дела?
            </motion.h1>

            {/* 4. Подзаголовок */}
            <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-5 text-slate-600 dark:text-slate-400 text-center max-w-md text-lg md:text-xl font-normal leading-relaxed"
            >
                Я <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amethyst-500 to-amethyst-400">Metior</span> — твой кристальный AI-помощник.
            </motion.p>

            {/* 5. Кнопка с живым градиентом и плавным откликом */}
            <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 350, damping: 15, delay: 0.4 }}
                onClick={onStart}
                className="mt-12 group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-semibold text-lg text-white shadow-xl shadow-amethyst-500/25 cursor-pointer overflow-hidden"
            >
                {/* Анимированный градиентный фон кнопки */}
                <div className="absolute inset-0 bg-gradient-to-r from-amethyst-700 via-amethyst-500 to-amethyst-400 group-hover:scale-105 transition-transform duration-500" />

                {/* Блик при наведении */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                <span className="relative z-10">Начать работу</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
            </motion.button>
        </motion.div>
    );
};