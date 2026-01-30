import { cn } from "@/lib/utils";

interface QuizOptionProps {
  text: string;
  selected: boolean;
  onClick: () => void;
}

const QuizOption = ({ text, selected, onClick }: QuizOptionProps) => (
  <button
    onClick={onClick}
    className={cn(
      "w-full text-left px-5 py-4 rounded-xl transition-all duration-200",
      "bg-quiz-option text-quiz-option-text",
      "hover:bg-quiz-option-hover",
      "border-2",
      selected 
        ? "border-quiz-accent bg-quiz-option-selected" 
        : "border-transparent"
    )}
  >
    {text}
  </button>
);

export default QuizOption;
