import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

const StatCard = ({icon, target, label, suffix}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1400;
    const stepTime = Math.max(Math.floor(duration / target), 20);
    const timer = setInterval(() => {
      start += Math.ceil(target / (duration/stepTime));
      if (start >= target) { start = target; clearInterval(timer); }
      setValue(start);
    }, stepTime);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="card stat-card reveal">
      <div className="flex items-center gap-3">
        <div className="stat-icon">
          <Icon icon={icon} width="28" height="28" />
        </div>
        <div>
          <div className="text-2xl font-bold">{value}{suffix ? suffix : ''}</div>
          <div className="text-sm opacity-80">{label}</div>
        </div>
      </div>
    </div>
  )
}

const StatCards = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      <StatCard icon="mdi:clock-time-four-outline" target={30} label="Years Experience" suffix="+" />
      <StatCard icon="mdi:account-group-outline" target={1500} label="Athletes Trained" suffix="+" />
      <StatCard icon="mdi:trophy-outline" target={2} label="African Champion" suffix="x" />
      <StatCard icon="mdi:certificate-outline" target={3000} label="Certificates Issued" suffix="+" />
    </div>
  )
}

export default StatCards;