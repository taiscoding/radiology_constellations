import { Card, CardContent } from '@/components/ui/card';
import { Brain, AlertTriangle, Eye, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { caseOptions } from '@/data/curated-cases';

interface CaseSelectorProps {
  selectedCase?: string;
  onCaseSelect: (caseId: string) => void;
}

const getCaseIcon = (caseId: string) => {
  switch (caseId) {
    case 'gas-bubbles-swi':
      return Brain;
    case 'trauma-gas':
      return AlertTriangle;
    case 'normal-brain':
      return Eye;
    default:
      return Brain;
  }
};

const getCaseColor = (caseId: string) => {
  switch (caseId) {
    case 'gas-bubbles-swi':
      return "bg-orange-500/20 text-orange-300";
    case 'trauma-gas':
      return "bg-red-500/20 text-red-300";
    case 'normal-brain':
      return "bg-green-500/20 text-green-300";
    default:
      return "bg-gray-500/20 text-gray-300";
  }
};

const upcomingCases = [
  {
    title: "Microbleeds on SWI",
    description: "Coming Soon",
    icon: Brain,
    color: "bg-purple-500/20 text-purple-300"
  },
  {
    title: "Ring Enhancement",
    description: "Coming Soon", 
    icon: Eye,
    color: "bg-indigo-500/20 text-indigo-300"
  },
  {
    title: "Diffusion Restriction",
    description: "Coming Soon",
    icon: Activity,
    color: "bg-pink-500/20 text-pink-300"
  }
];

export default function CaseSelector({ selectedCase, onCaseSelect }: CaseSelectorProps) {
  return (
    <section className="py-16 bg-gray-900/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Select a Case to Explore</h2>
          <p className="text-lg text-gray-300">Master pattern recognition across various radiology scenarios</p>
        </div>

        {/* Available Cases */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Available Cases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {caseOptions.map((caseItem, index) => {
              const Icon = getCaseIcon(caseItem.id);
              const colorClass = getCaseColor(caseItem.id);
              const isSelected = selectedCase === caseItem.id;
              
              return (
                <motion.div
                  key={caseItem.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card 
                    className={`
                      border-2 transition-all duration-300 cursor-pointer group backdrop-blur-xl
                      ${isSelected 
                        ? 'border-orange-500 bg-gray-900/80 shadow-lg shadow-orange-500/20' 
                        : 'border-gray-700 bg-gray-900/50 hover:border-orange-400 hover:shadow-md hover:bg-gray-800/60'
                      }
                    `}
                    onClick={() => onCaseSelect(caseItem.id)}
                  >
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className={`${colorClass} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-8 w-8" />
                        </div>
                        <h3 className={`font-semibold mb-2 transition-colors ${isSelected ? 'text-orange-300' : 'text-white group-hover:text-orange-300'}`}>
                          {caseItem.name}
                        </h3>
                        <p className="text-sm text-gray-400">{caseItem.description}</p>
                        {isSelected && (
                          <div className="mt-3 text-xs font-medium text-orange-400">
                            Currently Selected
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Coming Soon Cases */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Coming Soon</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingCases.map((caseItem, index) => (
              <motion.div
                key={caseItem.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: (caseOptions.length + index) * 0.1 }}
              >
                <Card className="bg-gray-900/30 border-2 border-dashed border-gray-600 hover:border-gray-500 transition-all duration-300 cursor-not-allowed backdrop-blur-xl">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className={`${caseItem.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 opacity-50`}>
                        <caseItem.icon className="h-8 w-8" />
                      </div>
                      <h3 className="font-semibold text-gray-400 mb-2">
                        {caseItem.title}
                      </h3>
                      <p className="text-sm text-gray-500">{caseItem.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
