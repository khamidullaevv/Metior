import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    Sun,
    Moon,
    Settings,
    MessageSquare,
    Sparkles,
    Camera,
    Key,
    Sidebar as SidebarIcon,
} from "lucide-react";

export default function App() {
    // Состояние экрана: 'welcome' | 'chat'
    const [screen, setScreen] = useState<"welcome" | "chat">("welcome");
    // Состояние темы: dark | light
    const [isDark, setIsDark] = useState(true);
    // Состояние боковой панели
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // Применяем класс 'dark' к элементу <html>
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);

    return (
        <div className="h-screen w-screen overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
            <AnimatePresence mode="wait">
                {screen === "welcome" ? (
                    /* ================= ЭКРАН ПРИВЕТСТВИЯ ================= */
                    <motion.div
                        key="welcome"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="h-full w-full flex flex-col items-center justify-center relative p-6 select-none"
                    >
                        {/* Аметистовое фоновое свечение */}
                        <div className="absolute w-96 h-96 bg-amethyst-500/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />

                        {/* Иконка / Логотип Metior */}
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-amethyst-700 via-amethyst-500 to-amethyst-300 p-[2px] shadow-lg shadow-amethyst-500/30 mb-8"
                        >
                            <div className="w-full h-full bg-slate-900 rounded-[22px] flex items-center justify-center">
                                <Sparkles className="w-10 h-10 text-amethyst-400" />
                            </div>
                        </motion.div>

                        {/* Приветствие */}
                        <motion.h1
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl font-bold text-center tracking-tight"
                        >
                            Привет! Как дела?
                        </motion.h1>

                        <motion.p
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mt-3 text-slate-500 dark:text-slate-400 text-center max-w-sm"
                        >
                            Я <span className="text-amethyst-500 font-semibold">Metior</span> — твой кристальный AI-помощник. Готов анализировать экран и отвечать на любые вопросы.
                        </motion.p>

                        {/* Кнопка перехода с плавной анимацией */}
                        <motion.button
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ delay: 0.4 }}
                            onClick={() => setScreen("chat")}
                            className="mt-10 group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amethyst-600 to-amethyst-500 text-white font-medium rounded-2xl shadow-xl shadow-amethyst-500/25 hover:shadow-amethyst-500/40 transition-all duration-300"
                        >
                            <span>Начать работу</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </motion.button>
                    </motion.div>
                ) : (
                    /* ================= ЭКРАН ЧАТА И НАСТРОЕК ================= */
                    <motion.div
                        key="chat"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="h-full w-full flex relative"
                    >
                        {/* --- ЛЕВАЯ БОКОВАЯ ПАНЕЛЬ (SIDEBAR) --- */}
                        <motion.aside
                            animate={{ width: isSidebarOpen ? 260 : 70 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="h-full bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-md border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between p-3 z-20"
                        >
                            {/* Шапка боковой панели */}
                            <div>
                                <div className="flex items-center justify-between p-2 mb-4">
                                    {isSidebarOpen && (
                                        <div className="flex items-center gap-2">
                                            <Sparkles className="w-6 h-6 text-amethyst-500" />
                                            <span className="font-bold text-lg tracking-wide text-amethyst-500">
                        Metior
                      </span>
                                        </div>
                                    )}
                                    <button
                                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                        className="p-2 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 transition-colors"
                                    >
                                        <SidebarIcon className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Навигация / Доп. функции */}
                                <nav className="flex flex-col gap-1">
                                    <SidebarItem
                                        icon={<MessageSquare className="w-5 h-5" />}
                                        label="Чат с ИИ"
                                        active
                                        isOpen={isSidebarOpen}
                                    />
                                    <SidebarItem
                                        icon={<Camera className="w-5 h-5" />}
                                        label="Скриншот экрана"
                                        isOpen={isSidebarOpen}
                                    />
                                    <SidebarItem
                                        icon={<Key className="w-5 h-5" />}
                                        label="API Ключи"
                                        isOpen={isSidebarOpen}
                                    />
                                    <SidebarItem
                                        icon={<Settings className="w-5 h-5" />}
                                        label="Настройки"
                                        isOpen={isSidebarOpen}
                                    />
                                </nav>
                            </div>

                            {/* Нижняя часть панели: Переключатель темы */}
                            <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                                <button
                                    onClick={toggleTheme}
                                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
                                >
                                    {isDark ? (
                                        <Sun className="w-5 h-5 text-amber-400" />
                                    ) : (
                                        <Moon className="w-5 h-5 text-amethyst-600" />
                                    )}
                                    {isSidebarOpen && (
                                        <span className="text-sm font-medium">
                      {isDark ? "Светлая тема" : "Темная тема"}
                    </span>
                                    )}
                                </button>
                            </div>
                        </motion.aside>

                        {/* --- ОСНОВНАЯ ОБЛАСТЬ ЧАТА --- */}
                        <main className="flex-1 h-full flex flex-col bg-white dark:bg-slate-950 relative">
                            {/* Верхняя панель чата */}
                            <header className="h-14 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Gemini 1.5 Flash (Готов к работе)
                </span>
                            </header>

                            {/* Сообщения чата */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                                <div className="flex gap-3 max-w-2xl">
                                    <div className="w-8 h-8 rounded-xl bg-amethyst-500/20 border border-amethyst-500/30 flex items-center justify-center shrink-0">
                                        <Sparkles className="w-4 h-4 text-amethyst-400" />
                                    </div>
                                    <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-sm leading-relaxed">
                                        Привет! Чем я могу тебе помочь прямо сейчас? Ты можешь сделать скриншот области экрана или просто задать вопрос.
                                    </div>
                                </div>
                            </div>

                            {/* Поле ввода сообщения */}
                            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                                <div className="max-w-4xl mx-auto flex items-center gap-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-2 focus-within:border-amethyst-500 transition-colors">
                                    <input
                                        type="text"
                                        placeholder="Спроси Metior о чём угодно..."
                                        className="flex-1 bg-transparent px-3 text-sm outline-none text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                                    />
                                    <button className="p-2.5 bg-amethyst-500 hover:bg-amethyst-600 text-white rounded-xl shadow-md shadow-amethyst-500/20 transition-all">
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </main>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// Вспомогательный компонент для пунктов меню
function SidebarItem({
                         icon,
                         label,
                         active = false,
                         isOpen,
                     }: {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    isOpen: boolean;
}) {
    return (
        <button
            className={`w-full flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-all ${
                active
                    ? "bg-amethyst-500/15 text-amethyst-600 dark:text-amethyst-400 border border-amethyst-500/30"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800/60"
            }`}
        >
            {icon}
            {isOpen && <span>{label}</span>}
        </button>
    );
}