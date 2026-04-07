"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/data/quizz1";

export default function QuestionCard({ q, total }: { q: QuizQuestion; total?: number }) {
  const [showExplanation, setShowExplanation] = useState(false);
  const [hideAnswer, setHideAnswer] = useState(false);

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-emerald-500/10 transition-shadow duration-300">
      {/* Header */}
      <div className="flex items-center justify-between px-4 sm:px-7 py-3.5 sm:py-4 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 border-b border-gray-700">
        <span className="text-xs sm:text-sm font-mono text-emerald-400 tracking-wider">
          QUESTION {q.id}/{total ?? q.id}
        </span>
        <div className="flex gap-1.5 sm:gap-2">
          <button
            onClick={() => setHideAnswer(!hideAnswer)}
            className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 transition-colors cursor-pointer"
          >
            {hideAnswer ? "Show" : "Hide"}
          </button>
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 transition-colors cursor-pointer"
          >
            {showExplanation ? "Hide Why" : "Why?"}
          </button>
        </div>
      </div>

      {/* Question */}
      <div className="px-4 sm:px-7 py-4 sm:py-6">
        <p className="text-gray-100 text-[15px] sm:text-[17px] font-medium leading-relaxed break-words">
          {q.question}
        </p>
      </div>

      {/* Options */}
      <div className="px-3 sm:px-7 pb-4 sm:pb-6 space-y-2 sm:space-y-2.5">
        {q.options.map((option, idx) => {
          const isCorrect = option === q.correctAnswer;
          const letter = String.fromCharCode(65 + idx);

          return (
            <div
              key={idx}
              className={`flex items-start gap-2.5 sm:gap-3 px-3 sm:px-5 py-3 sm:py-3.5 rounded-xl border transition-all duration-200 ${
                isCorrect && !hideAnswer
                  ? "bg-emerald-500/15 border-emerald-500/50"
                  : "bg-gray-800/50 border-gray-700/50"
              }`}
            >
              <span
                className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mt-0.5 ${
                  isCorrect && !hideAnswer
                    ? "bg-emerald-500 text-white"
                    : "bg-gray-700 text-gray-400"
                }`}
              >
                {letter}
              </span>
              <span
                className={`text-[13px] sm:text-[15px] leading-relaxed pt-0.5 break-words min-w-0 ${
                  isCorrect && !hideAnswer
                    ? "text-emerald-300 font-medium"
                    : "text-gray-300"
                }`}
              >
                <span className="sm:hidden font-mono text-[12px] bg-gray-700/50 px-1.5 py-0.5 rounded break-all">
                  {option}
                </span>
                <code className="hidden sm:inline text-[13px] bg-gray-700/50 px-2 py-0.5 rounded font-mono break-words">
                  {option}
                </code>
              </span>
              {isCorrect && !hideAnswer && (
                <span className="ml-auto flex-shrink-0 text-emerald-400 text-base sm:text-lg">
                  &#10003;
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Explanation */}
      {showExplanation && q.explanation && (
        <div className="mx-3 sm:mx-7 mb-4 sm:mb-6 p-3.5 sm:p-5 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
          <p className="text-[13px] sm:text-[15px] text-cyan-300 leading-relaxed break-words">
            <span className="font-semibold text-cyan-400">Explanation: </span>
            {q.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
