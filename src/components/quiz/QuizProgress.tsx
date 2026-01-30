const QuizProgress = ({ current, total }: { current: number; total: number }) => {
  const percentage = (current / total) * 100;
  
  return (
    <div className="w-full max-w-md flex flex-col items-center gap-2">
      <div className="w-full h-1.5 bg-quiz-progress-bg rounded-full overflow-hidden">
        <div 
          className="h-full bg-quiz-progress-fill rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-sm font-medium text-quiz-title/60">
        {current}/{total}
      </span>
    </div>
  );
};

export default QuizProgress;
