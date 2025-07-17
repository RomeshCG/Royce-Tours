import React from 'react';
import { useCountUp } from '../hooks/useCountUp';

interface AnimatedStatProps {
  icon: string;
  endValue: number;
  label: string;
  delay?: number;
  suffix?: string;
}

const AnimatedStat: React.FC<AnimatedStatProps> = ({ 
  icon, 
  endValue, 
  label, 
  delay = 0,
  suffix = ''
}) => {
  const count = useCountUp({ 
    end: endValue, 
    duration: 2000, 
    delay: delay 
  });

  return (
    <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="text-orange-500 text-2xl mb-2">{icon}</div>
      <div className="text-2xl font-bold text-orange-500">
        {count}{suffix}
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};

export default AnimatedStat; 