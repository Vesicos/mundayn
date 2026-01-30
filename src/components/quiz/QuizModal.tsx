import { useState, useCallback } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { quizQuestions, PackageType, getHighestPackage } from "./quizData";
import QuizOption from "./QuizOption";
import QuizProgress from "./QuizProgress";
import QuizResult from "./QuizResult";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoNav from '@/assets/logonav.svg';

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
      <DialogContent className="bg-quiz-bg border-0 max-w-xl p-8 rounded-3xl overflow-hidden">
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
              className="flex flex-col"
            >
              <img src={logoNav} alt="Mundayn" className="h-8 mb-6 self-start" />
              
              <QuizProgress current={currentQuestion + 1} total={quizQuestions.length} />
              
              <h2 className="text-xl md:text-2xl font-serif text-quiz-title mt-6 mb-6">
                {quizQuestions[currentQuestion].question}
              </h2>
              
              <div className="space-y-3 mb-8">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <QuizOption
                    key={index}
                    text={option.text}
                    selected={selectedOptions[currentQuestion] === index}
                    onClick={() => handleSelectOption(index)}
                  />
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <button
                  onClick={handleBack}
                  disabled={currentQuestion === 0}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                    currentQuestion === 0
                      ? "opacity-0 pointer-events-none"
                      : "text-quiz-title hover:bg-quiz-title/10"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                
                <button
                  onClick={handleNext}
                  disabled={selectedOptions[currentQuestion] === null}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedOptions[currentQuestion] === null
                      ? "bg-quiz-title/20 text-quiz-title/50 cursor-not-allowed"
                      : "bg-quiz-accent text-quiz-option hover:brightness-110"
                  }`}
                >
                  {currentQuestion === quizQuestions.length - 1 ? "Get My Package" : "Next"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
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
