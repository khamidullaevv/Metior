import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Settings, Sparkles, Camera, Key, Sidebar as SidebarIcon } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface SidebarProps {
    isDark: boolean;
    toggleTheme: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isDark, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <motion.aside
            initial={false}
            animate={{ width: isOpen ? 260 : 76 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="h-full bg-slate-100/70 dark:bg-slate-900/70 backdrop-blur-xl border-r border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between p-3 z-20 select-none"
        >
            <div>
                {/* Заголовок */}
                <div className="flex items-center justify-between p-2 mb-6 h-10 overflow-hidden">
                    <AnimatePresence mode="wait">
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                                className="flex items-center gap-2.5"
                            >
                                <div className="p-1.5 rounded-xl bg-gradient-to-br from-amethyst-400 to-amethyst-700 text-white shadow-md shadow-amethyst-500/20">
                                    <Sparkles className="w-5 h-5" />
                                </div>
                                <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amethyst-500 to-amethyst-300">
                  Metior
                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-xl hover:bg-slate-200/60 dark:hover:bg-slate-800/60 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                    >
                        <SidebarIcon className="w-5 h-5" />
                    </button>
                </div>

                {/* Навигация */}
                <nav className="flex flex-col gap-1.5">
                    <SidebarItem icon={MessageSquare} label="Чат с ИИ" active isOpen={isOpen} />
                    <SidebarItem icon={Camera} label="Скриншот экрана" isOpen={isOpen} />
                    <SidebarItem icon={Key} label="API Ключи" isOpen={isOpen} />
                    <SidebarItem icon={Settings} label="Настройки" isOpen={isOpen} />
                </nav>
            </div>

            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} isOpen={isOpen} />
        </motion.aside>
    );
};

interface SidebarItemProps {
    icon: React.ElementType;
    label: string;
    active?: boolean;
    isOpen: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, active, isOpen }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.02, x: 2 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-all relative overflow-hidden cursor-pointer ${
                active
                    ? "text-amethyst-600 dark:text-amethyst-300 font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            } ${!isOpen && "justify-center"}`}
        >
            {/* Мягкий градиент подложки активного пункта */}
            {active && (
                <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-amethyst-500/15 via-amethyst-500/5 to-transparent border-l-4 border-amethyst-500 rounded-r-xl"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
            )}

            <Icon className={`w-5 h-5 relative z-10 ${active ? "text-amethyst-500" : "text-slate-400"}`} />

            {isOpen && <span className="relative z-10 whitespace-nowrap">{label}</span>}
        </motion.button>
    );
};