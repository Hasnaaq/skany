'use client';

export default function Titleheader({
  title = "",
  description = "",
  align = "center", 
}) {
  return (
    <div className={`text-${align} mb-10`}>
      <h2 className="text-3xl font-semibold text-gray-950 mb-2">{title}</h2>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}
