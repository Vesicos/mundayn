import { useState, useCallback } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { quizQuestions, PackageType, getHighestPackage } from "./quizData";
import QuizOption from "./QuizOption";
import QuizProgress from "./QuizProgress";
import QuizResult from "./QuizResult";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import elephantYellow from '@/assets/icons/elephant-yellow.png';

interface QuizModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuizModal = ({ open, onOpenChange }: QuizModalProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<(number | null)[]>(
    Array(quizQuestions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for back

  const handleSelectOption = useCallback((optionIndex: number) => {
    const newSelected = [...selectedOptions];
    newSelected[currentQuestion] = optionIndex;
    setSelectedOptions(newSelected);
  }, [selectedOptions, currentQuestion]);

  const handleNext = useCallback(() => {
    if (selectedOptions[currentQuestion] === null) return;
    setDirection(1);
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  }, [currentQuestion, selectedOptions]);

  const handleBack = useCallback(() => {
    if (currentQuestion > 0) {
      setDirection(-1);
      setCurrentQuestion(currentQuestion - 1);
    }
  }, [currentQuestion]);

  const handleReset = useCallback(() => {
    setCurrentQuestion(0);
    setSelectedOptions(Array(quizQuestions.length).fill(null));
    setShowResult(false);
    setDirection(1);
  }, []);

  const getSelectedPackages = useCallback((): PackageType[] => {
    return selectedOptions
      .map((optionIndex, questionIndex) =>
        optionIndex !== null
          ? quizQuestions[questionIndex].options[optionIndex].package
          : null
      )
      .filter((pkg): pkg is PackageType => pkg !== null);
  }, [selectedOptions]);

  const packages = getSelectedPackages();
  const recommendedPackage = packages.length > 0 ? getHighestPackage(packages) : 'entrepreneur';

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0
    })
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-quiz-bg border-0 max-w-2xl p-8 md:p-12 rounded-3xl overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          {!showResult ? (
            <motion.div
              key={currentQuestion}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              {/* Yellow Elephant Logo */}
              <img 
                src={elephantYellow} 
                alt="Mundayn" 
                className="w-16 h-auto mb-6" 
              />
              
              {/* Question Title */}
              <h2 className="text-2xl md:text-4xl font-serif text-quiz-title text-center mb-8 leading-tight">
                {quizQuestions[currentQuestion].question}
              </h2>
              
              {/* Options */}
              <div className="w-full max-w-lg space-y-3 mb-8">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <QuizOption
                    key={index}
                    text={option.text}
                    selected={selectedOptions[currentQuestion] === index}
                    onClick={() => handleSelectOption(index)}
                  />
                ))}
              </div>
              
              {/* Navigation */}
              <div className="flex items-center justify-center mb-6">
                <button
                  onClick={handleNext}
                  disabled={selectedOptions[currentQuestion] === null}
                  className={`flex items-center gap-2 px-8 py-3.5 rounded-full font-bold uppercase tracking-wide transition-all ${
                    selectedOptions[currentQuestion] === null
                      ? "bg-quiz-title/20 text-quiz-title/50 cursor-not-allowed"
                      : "bg-quiz-accent text-quiz-option hover:brightness-110"
                  }`}
                >
                  {currentQuestion === quizQuestions.length - 1 ? "Get My Package" : "NEXT"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              {/* Progress Bar */}
              <QuizProgress current={currentQuestion + 1} total={quizQuestions.length} />
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <QuizResult
                packageType={recommendedPackage}
                onStart={() => {
                  onOpenChange(false);
                  handleReset();
                  // Navigate to packages section
                  const packagesSection = document.getElementById('packages');
                  if (packagesSection) {
                    packagesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default QuizModal;
