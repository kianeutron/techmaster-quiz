"use client";

import { useState, useMemo } from "react";
import { linuxQuizz1 } from "@/data/quizz1";
import { linuxQuizz2 } from "@/data/quizz2";
import { linuxQuizz3 } from "@/data/quizz3";
import { linuxQuizz4 } from "@/data/quizz4";
import { linuxExam1 } from "@/data/exam1";
import { linuxExam2 } from "@/data/exam2";
import { linuxRecap1 } from "@/data/recap1";
import { linuxRecap2 } from "@/data/recap2";
import QuestionCard from "@/components/QuestionCard";
import type { QuizQuestion } from "@/data/quizz1";

type ViewMode = "all" | "study";

interface QuizData {
  name: string;
  label: string;
  questions: QuizQuestion[];
  icon: string;
}

const quizzes: Record<string, QuizData> = {
  recap1: {
    name: "Recap 1",
    label: "Linux 1 - Recap 1",
    icon: "R1",
    questions: linuxRecap1,
  },
  recap2: {
    name: "Recap 2",
    label: "Linux 1 - Recap 2",
    icon: "R2",
    questions: linuxRecap2,
  },
  quiz1: {
    name: "Quiz 1",
    label: "Linux 2 - Quiz 1",
    icon: "Q1",
    questions: linuxQuizz1,
  },
  quiz2: {
    name: "Quiz 2",
    label: "Linux 2 - Quiz 2",
    icon: "Q2",
    questions: linuxQuizz2,
  },
  quiz3: {
    name: "Quiz 3",
    label: "Linux 2 - Quiz 3",
    icon: "Q3",
    questions: linuxQuizz3,
  },
  quiz4: {
    name: "Quiz 4",
    label: "Linux 2 - Quiz 4",
    icon: "Q4",
    questions: linuxQuizz4,
  },
  exam1: {
    name: "Exam 1",
    label: "Linux 2 - Exam 1",
    icon: "E1",
    questions: linuxExam1,
  },
  exam2: {
    name: "Exam 2",
    label: "Linux 2 - Exam 2",
    icon: "E2",
    questions: linuxExam2,
  },
};

export default function Home() {
  const [activeQuiz, setActiveQuiz] = useState("quiz1");
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("all");
  const [hideAllAnswers, setHideAllAnswers] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentQuiz = quizzes[activeQuiz];
  const questions = currentQuiz.questions;

  const filtered = useMemo(() => {
    if (!search.trim()) return questions;
    const q = search.toLowerCase();
    return questions.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.correctAnswer.toLowerCase().includes(q) ||
        item.options.some((o) => o.toLowerCase().includes(q))
    );
  }, [search, questions]);

  const switchQuiz = (key: string) => {
    setActiveQuiz(key);
    setSearch("");
    setViewMode("all");
    setHideAllAnswers(false);
    setSidebarOpen(false);
  };

  return (
    <div className="h-screen bg-[#0a0a0f] flex overflow-hidden">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-[#0d0d14] border-r border-gray-800 flex flex-col transition-transform duration-300 lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="px-6 py-6 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
              <span className="text-white font-bold text-base">TM</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-white">TechMaster</h1>
              <p className="text-xs text-gray-500">Linux Study Guide</p>
            </div>
          </div>
        </div>

        {/* Quiz Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <p className="px-3 mb-3 text-[10px] font-semibold uppercase tracking-widest text-gray-600">
            Quizzes & Exams
          </p>
          <div className="space-y-1">
            {Object.entries(quizzes).map(([key, quiz]) => (
              <button
                key={key}
                onClick={() => switchQuiz(key)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all cursor-pointer group ${
                  activeQuiz === key
                    ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
                    : "text-gray-400 hover:bg-gray-800/60 hover:text-gray-200 border border-transparent"
                }`}
              >
                <span
                  className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                    activeQuiz === key
                      ? "bg-emerald-500/25 text-emerald-400"
                      : "bg-gray-800 text-gray-500 group-hover:bg-gray-700 group-hover:text-gray-300"
                  }`}
                >
                  {quiz.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{quiz.name}</p>
                  <p className="text-[11px] text-gray-600 truncate">
                    {quiz.questions.length} questions
                  </p>
                </div>
                {activeQuiz === key && (
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* Sidebar footer */}
        <div className="px-4 py-4 border-t border-gray-800">
          <p className="text-[10px] text-gray-600 text-center">
            {Object.values(quizzes).reduce((a, q) => a + q.questions.length, 0)} total questions
          </p>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4">
            <div className="flex items-center gap-4">
              {/* Mobile hamburger */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-gray-200 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* Current quiz label */}
              <div className="flex-1 min-w-0">
                <h2 className="text-base font-semibold text-white truncate">
                  {currentQuiz.label}
                </h2>
                <p className="text-xs text-gray-500">
                  {filtered.length} of {questions.length} questions
                </p>
              </div>

              <div className="flex items-center gap-2">
                {/* Search */}
                <div className="relative hidden sm:block">
                  <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-56 pl-9 pr-4 py-2 text-sm bg-gray-800/50 border border-gray-700 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                  />
                </div>

                {/* View Toggle */}
                <div className="flex rounded-xl bg-gray-800/50 border border-gray-700 p-0.5">
                  <button
                    onClick={() => setViewMode("all")}
                    className={`px-3 py-2 text-xs rounded-lg transition-all cursor-pointer ${
                      viewMode === "all"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "text-gray-400 hover:text-gray-300"
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setViewMode("study")}
                    className={`px-3 py-2 text-xs rounded-lg transition-all cursor-pointer ${
                      viewMode === "study"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "text-gray-400 hover:text-gray-300"
                    }`}
                  >
                    Study
                  </button>
                </div>

                {/* Hide All Answers */}
                <button
                  onClick={() => setHideAllAnswers(!hideAllAnswers)}
                  className={`px-3 py-2 text-xs rounded-xl border transition-all cursor-pointer whitespace-nowrap ${
                    hideAllAnswers
                      ? "bg-amber-500/20 border-amber-500/50 text-amber-400"
                      : "bg-gray-800/50 border-gray-700 text-gray-400 hover:text-gray-300"
                  }`}
                >
                  {hideAllAnswers ? "Shown" : "Hide"}
                </button>
              </div>
            </div>

            {/* Mobile search */}
            <div className="sm:hidden mt-3">
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 text-sm bg-gray-800/50 border border-gray-700 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-8 py-8">
          {viewMode === "study" ? (
            <StudyMode
              key={activeQuiz}
              questions={questions}
              hideAnswers={hideAllAnswers}
            />
          ) : (
            <div className="space-y-6">
              {filtered.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-gray-500 text-lg">
                    No questions match your search
                  </p>
                </div>
              )}
              {filtered.map((q) => (
                <QuestionCard key={q.id} q={q} total={questions.length} hideAnswers={hideAllAnswers} />
              ))}
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-6 mt-auto">
          <p className="text-center text-xs text-gray-600">
            TechMaster - Linux Quiz Study Guide - {questions.length} Questions
          </p>
        </footer>
      </div>
    </div>
  );
}

function StudyMode({
  questions,
  hideAnswers,
}: {
  questions: QuizQuestion[];
  hideAnswers: boolean;
}) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showAnswer, setShowAnswer] = useState(hideAnswers);
  const [showExplanation, setShowExplanation] = useState(false);
  const [mastered, setMastered] = useState<Set<number>>(new Set());

  // Sync showAnswer with hideAnswers toggle
  const effectiveShowAnswer = hideAnswers ? false : showAnswer;

  const q = questions[currentIdx];
  const isMastered = mastered.has(q.id);

  const goNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setShowAnswer(hideAnswers);
      setShowExplanation(false);
    }
  };

  const goPrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
      setShowAnswer(hideAnswers);
      setShowExplanation(false);
    }
  };

  const toggleMastered = () => {
    setMastered((prev) => {
      const next = new Set(prev);
      if (next.has(q.id)) next.delete(q.id);
      else next.add(q.id);
      return next;
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Progress */}
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all duration-300"
            style={{
              width: `${((currentIdx + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
        <span className="text-xs sm:text-sm text-gray-400 font-mono min-w-[3.5rem] text-right">
          {currentIdx + 1}/{questions.length}
        </span>
      </div>

      {/* Card */}
      <div className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-8 py-3.5 sm:py-5 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 border-b border-gray-700">
          <span className="text-xs sm:text-sm font-mono text-emerald-400 tracking-wider">
            QUESTION {q.id}/{questions.length}
          </span>
          <div className="flex gap-2">
            <button
              onClick={toggleMastered}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-sm rounded-lg transition-all cursor-pointer ${
                isMastered
                  ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {isMastered ? "Mastered" : "Mark"}
            </button>
          </div>
        </div>

        {/* Question */}
        <div className="px-4 sm:px-8 py-4 sm:py-7">
          <p className="text-gray-100 text-base sm:text-xl font-medium leading-relaxed break-words">
            {q.question}
          </p>
        </div>

        {/* Options */}
        <div className="px-3 sm:px-8 pb-4 sm:pb-7 space-y-2 sm:space-y-3">
          {q.options.map((option, idx) => {
            const isCorrect = option === q.correctAnswer;
            const letter = String.fromCharCode(65 + idx);

            return (
              <div
                key={idx}
                className={`flex items-start gap-2.5 sm:gap-4 px-3 sm:px-5 py-3 sm:py-4 rounded-xl border transition-all duration-200 ${
                  isCorrect && effectiveShowAnswer
                    ? "bg-emerald-500/15 border-emerald-500/50 ring-1 ring-emerald-500/20"
                    : "bg-gray-800/50 border-gray-700/50"
                }`}
              >
                <span
                  className={`flex-shrink-0 w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold ${
                    isCorrect && effectiveShowAnswer
                      ? "bg-emerald-500 text-white"
                      : "bg-gray-700 text-gray-400"
                  }`}
                >
                  {letter}
                </span>
                <span
                  className={`text-[13px] sm:text-[15px] leading-relaxed pt-0.5 sm:pt-1 break-words min-w-0 ${
                    isCorrect && effectiveShowAnswer
                      ? "text-emerald-300 font-medium"
                      : "text-gray-300"
                  }`}
                >
                  <span className="sm:hidden font-mono text-[12px] bg-gray-700/50 px-1.5 py-0.5 rounded break-all">
                    {option}
                  </span>
                  <code className="hidden sm:inline text-sm bg-gray-700/50 px-2 py-1 rounded font-mono break-words">
                    {option}
                  </code>
                </span>
                {isCorrect && effectiveShowAnswer && (
                  <span className="ml-auto flex-shrink-0 text-emerald-400 text-base sm:text-xl font-bold">
                    &#10003;
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Show Answer / Explanation buttons */}
        <div className="px-4 sm:px-8 pb-4 sm:pb-5 flex gap-2 sm:gap-3">
          {!effectiveShowAnswer && !hideAnswers && (
            <button
              onClick={() => setShowAnswer(true)}
              className="px-4 sm:px-6 py-2.5 sm:py-3 text-[13px] sm:text-sm rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/30 transition-all cursor-pointer"
            >
              Show Answer
            </button>
          )}
          {effectiveShowAnswer && q.explanation && (
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="px-4 sm:px-6 py-2.5 sm:py-3 text-[13px] sm:text-sm rounded-xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/30 transition-all cursor-pointer"
            >
              {showExplanation ? "Hide Explanation" : "Why?"}
            </button>
          )}
        </div>

        {/* Explanation */}
        {showExplanation && q.explanation && (
          <div className="mx-4 sm:mx-8 mb-4 sm:mb-7 p-3.5 sm:p-5 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
            <p className="text-[13px] sm:text-sm text-cyan-300 leading-relaxed break-words">
              <span className="font-semibold text-cyan-400">Explanation: </span>
              {q.explanation}
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={goPrev}
          disabled={currentIdx === 0}
          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* Question dots */}
        <div className="hidden sm:flex gap-1.5 flex-wrap justify-center max-w-md">
          {questions.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentIdx(idx);
                setShowAnswer(hideAnswers);
                setShowExplanation(false);
              }}
              className={`w-7 h-7 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                idx === currentIdx
                  ? "bg-emerald-500 text-white"
                  : mastered.has(item.id)
                  ? "bg-amber-500/30 text-amber-400 border border-amber-500/30"
                  : "bg-gray-800 text-gray-500 hover:bg-gray-700"
              }`}
            >
              {item.id}
            </button>
          ))}
        </div>

        <button
          onClick={goNext}
          disabled={currentIdx === questions.length - 1}
          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer text-sm"
        >
          <span className="hidden sm:inline">Next</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Mobile question jump */}
      <div className="sm:hidden flex justify-center">
        <div className="flex gap-1 flex-wrap justify-center max-w-[280px]">
          {questions.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentIdx(idx);
                setShowAnswer(hideAnswers);
                setShowExplanation(false);
              }}
              className={`w-6 h-6 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                idx === currentIdx
                  ? "bg-emerald-500 text-white"
                  : mastered.has(item.id)
                  ? "bg-amber-500/30 text-amber-400 border border-amber-500/30"
                  : "bg-gray-800 text-gray-500"
              }`}
            >
              {item.id}
            </button>
          ))}
        </div>
      </div>

      {/* Mastered counter */}
      <div className="text-center">
        <p className="text-xs text-gray-600">
          {mastered.size} of {questions.length} mastered
        </p>
      </div>
    </div>
  );
}
