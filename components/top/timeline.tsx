interface TimelineProps {
  className: string,
  time: string,
  title: string,
  color?: string,
  children?: React.ReactNode,
}

export default function Timeline({ className, time, title, color, children }: TimelineProps) {
  return (
    <li className={className}>
      <div
        className={`absolute w-6 h-6 rounded-full mt-1 -left-3.5 ${
          color !== undefined ? color : 'bg-amber-100'
        }`}
      ></div>
      <time className="mb-1 text-sm font-normal">{time}</time>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mb-4 text-base font-normal">{children}</p>
    </li>
  );
}