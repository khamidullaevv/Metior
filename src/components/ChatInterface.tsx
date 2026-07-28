import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export const ChatInterface: React.FC = () => {
    return (
        <main className="flex-1 h-full flex flex-col bg-white dark:bg-slate-950 relative">
            {/* Хедер чата */}
            <header className="h-16 border-b border-slate-200 dark:border-slate-800/50 flex items-center justify-between px-6 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm">
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          Gemini 1.5 Flash (Аметистовый кристалл активирован)
        </span>
            </header>

            {/* Область сообщений */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
                <div className="flex gap-4 max-w-2xl">
                    <div className="w-9 h-9 rounded-xl bg-amethyst-500/15 border border-amethyst-500/30 flex items-center justify-center shrink-0 shadow-lg shadow-amethyst-500/5">
                        <Sparkles className="w-5 h-5 text-amethyst-400" />
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl rounded-tl-none p-4.5 text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                        Привет! Чем я могу тебе помочь прямо сейчас? Ты можешь сделать скриншот области экрана или просто задать вопрос.
                    </div>
                </div>
            </div>

            {/* Поле ввода */}
            <div className="p-4 md:p-6 border-t border-slate-200 dark:border-slate-800/50 bg-white dark:bg-slate-950">
                <div className="max-w-4xl mx-auto flex items-center gap-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-2.5 focus-within:border-amethyst-500 focus-within:ring-1 focus-within:ring-amethyst-500 transition-all duration-200 shadow-inner">
                    <input
                        type="text"
                        placeholder="Спроси Metior о чём угодно..."
                        className="flex-1 bg-transparent px-2 text-sm outline-none text-slate-900 dark:text-slate-100 placeholder:text-slate-500"
                    />
                    <button className="p-3 bg-amethyst-500 hover:bg-amethyst-600 text-white rounded-xl shadow-md shadow-amethyst-500/20 transition-all active:scale-95 group">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </div>
            </div>
        </main>
    );
};