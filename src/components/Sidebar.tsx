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
            animate={{ width: isOpen ? 250 : 72 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="h-full bg-slate-100 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between p-3 z-20 select-none"
        >
            <div>
                <div className="flex items-center justify-between p-2 mb-6 h-10 overflow-hidden">
                    <AnimatePresence mode="wait">
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center gap-2.5"
                            >
                                <div className="p-1.5 rounded-xl bg-gradient-to-br from-amethyst-400 to-amethyst-700 text-white">
                                    <Sparkles className="w-5 h-5" />
                                </div>
                                <span className="font-bold text-xl tracking-tight text-amethyst-400">
                  Metior
                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                        <SidebarIcon className="w-5 h-5" />
                    </button>
                </div>

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
        <button
            className={`w-full flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                active
                    ? "bg-amethyst-500/15 text-amethyst-400 border border-amethyst-500/30 font-semibold"
                    : "text-slate-400 hover:bg-slate-800/60 hover:text-white"
            } ${!isOpen && "justify-center"}`}
        >
            <Icon className={`w-5 h-5 ${active ? "text-amethyst-400" : "text-slate-400"}`} />
            {isOpen && <span className="whitespace-nowrap">{label}</span>}
        </button>
    );
};