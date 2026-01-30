import { PackageType, packageDetails } from "./quizData";
import { Briefcase, Palette, GraduationCap, Users, ArrowRight } from "lucide-react";
import elephantYellow from '@/assets/icons/elephant-yellow.png';

const packageIcons: Record<PackageType, React.ReactNode> = {
  entrepreneur: <Briefcase className="w-5 h-5" />,
  creator: <Palette className="w-5 h-5" />,
  teacher: <GraduationCap className="w-5 h-5" />,
  leader: <Users className="w-5 h-5" />
};

interface QuizResultProps {
  packageType: PackageType;
  onStart: () => void;
}

const QuizResult = ({ packageType, onStart }: QuizResultProps) => {
  const pkg = packageDetails[packageType];
  const packageName = pkg.name.replace(' Package', '');
  
  return (
    <div className="flex flex-col items-center text-center">
      {/* Yellow Elephant Logo */}
      <img 
        src={elephantYellow} 
        alt="Mundayn" 
        className="w-16 h-auto mb-6" 
      />
      
      {/* Result Heading */}
      <h2 className="text-2xl md:text-3xl font-serif text-quiz-title mb-8 leading-relaxed max-w-lg">
        <span className="italic">Perfect!</span> Based on your answers, the{' '}
        <strong>{packageName}</strong> package is your best starting point.
      </h2>
      
      {/* Package Card */}
      <div className="w-full max-w-xl bg-quiz-option rounded-2xl p-6 mb-8">
        <div className="grid grid-cols-[auto_1fr_1fr] gap-x-6 gap-y-4 text-left">
          {/* Left Column - Package Icon & Name */}
          <div className="row-span-3 flex flex-col items-start">
            <div className="w-10 h-10 rounded-lg bg-quiz-accent/20 flex items-center justify-center text-quiz-accent mb-2">
              {packageIcons[packageType]}
            </div>
            <h3 className="font-semibold text-quiz-option-text text-lg">
              {packageName}
            </h3>
            <span className="text-quiz-option-text/60 text-sm">Package</span>
            <p className="text-quiz-accent font-bold text-sm mt-1">{pkg.price.toUpperCase()}</p>
          </div>
          
          {/* Middle Column */}
          <div className="space-y-4">
            <div>
              <p className="text-quiz-option-text font-medium text-sm">Why it fits</p>
              <p className="text-quiz-option-text/70 text-xs leading-relaxed">
                {pkg.whyItFits.slice(0, 55)}...
              </p>
            </div>
            <div>
              <p className="text-quiz-option-text font-medium text-sm">What's included</p>
              <p className="text-quiz-option-text/70 text-xs">
                {pkg.whatsIncluded[0]}
              </p>
            </div>
            <div>
              <p className="text-quiz-option-text font-medium text-sm">Monthly price</p>
              <p className="text-quiz-option-text/70 text-xs">{pkg.price}</p>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <p className="text-quiz-option-text font-medium text-sm">Setup details</p>
              <p className="text-quiz-option-text/70 text-xs">Professional setup included</p>
            </div>
            <div>
              <p className="text-quiz-option-text font-medium text-sm">Clear next step</p>
              <p className="text-quiz-option-text/70 text-xs">Start your free trial</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Button */}
      <button
        onClick={onStart}
        className="px-10 py-4 rounded-full bg-quiz-accent text-quiz-option font-bold uppercase tracking-wide flex items-center justify-center gap-3 hover:brightness-110 transition-all"
      >
        Start With {packageName}
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default QuizResult;
