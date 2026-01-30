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
      "w-full text-center px-6 py-4 rounded-full transition-all duration-200",
      "bg-quiz-option text-quiz-option-text font-medium",
      "hover:bg-quiz-option-hover",
      selected 
        ? "ring-2 ring-quiz-accent ring-offset-2 ring-offset-quiz-bg bg-quiz-option-selected opacity-70" 
        : ""
    )}
  >
    {text}
  </button>
);

export default QuizOption;
