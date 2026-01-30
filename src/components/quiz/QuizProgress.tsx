const QuizProgress = ({ current, total }: { current: number; total: number }) => {
  const percentage = (current / total) * 100;
  
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 bg-quiz-progress-bg rounded-full overflow-hidden">
        <div 
          className="h-full bg-quiz-progress-fill rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-sm font-medium text-quiz-title">
        {current}/{total}
      </span>
    </div>
  );
};

export default QuizProgress;
