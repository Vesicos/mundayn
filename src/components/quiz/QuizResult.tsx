import { PackageType, packageDetails } from "./quizData";
import { Briefcase, Palette, GraduationCap, Users, ArrowRight } from "lucide-react";
import logoNav from '@/assets/logonav.svg';

const packageIcons: Record<PackageType, React.ReactNode> = {
  entrepreneur: <Briefcase className="w-6 h-6" />,
  creator: <Palette className="w-6 h-6" />,
  teacher: <GraduationCap className="w-6 h-6" />,
  leader: <Users className="w-6 h-6" />
};

interface QuizResultProps {
  packageType: PackageType;
  onStart: () => void;
}

const QuizResult = ({ packageType, onStart }: QuizResultProps) => {
  const pkg = packageDetails[packageType];
  
  return (
    <div className="flex flex-col items-center text-center">
      <img src={logoNav} alt="Mundayn" className="h-8 mb-6" />
      
      <h2 className="text-2xl md:text-3xl font-serif text-quiz-title mb-2">
        Perfect!
      </h2>
      <p className="text-quiz-title/80 mb-8 max-w-md">
        Based on your answers, the <strong>{pkg.name.replace(' Package', '')}</strong> package is your best starting point.
      </p>
      
      <div className="w-full max-w-md bg-quiz-option rounded-2xl p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-quiz-accent/20 flex items-center justify-center text-quiz-accent">
            {packageIcons[packageType]}
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-quiz-option-text">
              {pkg.name.replace(' Package', '')}
              <span className="text-quiz-option-text/60 font-normal ml-1">Package</span>
            </h3>
            <p className="text-quiz-accent font-bold">{pkg.price}</p>
          </div>
        </div>
        
        <div className="space-y-3 text-left text-sm">
          <div className="flex justify-between py-2 border-b border-quiz-option-text/10">
            <span className="text-quiz-option-text/60">Why it fits</span>
            <span className="text-quiz-option-text text-right max-w-[60%]">{pkg.whyItFits.slice(0, 60)}...</span>
          </div>
          <div className="flex justify-between py-2 border-b border-quiz-option-text/10">
            <span className="text-quiz-option-text/60">Setup details</span>
            <span className="text-quiz-option-text">Professional setup included</span>
          </div>
          <div className="flex justify-between py-2 border-b border-quiz-option-text/10">
            <span className="text-quiz-option-text/60">What's included</span>
            <span className="text-quiz-option-text text-right max-w-[60%]">{pkg.whatsIncluded[0]}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-quiz-option-text/10">
            <span className="text-quiz-option-text/60">Clear next step</span>
            <span className="text-quiz-option-text">Start your free trial</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-quiz-option-text/60">Monthly price</span>
            <span className="text-quiz-accent font-bold">{pkg.price}</span>
          </div>
        </div>
      </div>
      
      <button
        onClick={onStart}
        className="w-full max-w-md py-4 px-6 rounded-full bg-quiz-accent text-quiz-option font-semibold flex items-center justify-center gap-2 hover:brightness-110 transition-all"
      >
        Start With {pkg.name.replace(' Package', '')}
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default QuizResult;
