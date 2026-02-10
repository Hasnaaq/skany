// 'use client';

// export default function Btn({ label = "Learn more →", onClick , href, }) {
//   return (
//     <button
//       onClick={onClick}
//       className="inline-flex items-center gap-2 px-6 py-3 text-sm bg-[#3D5A5E]   text-white rounded hover:bg-[#558186] transition"
//     >
//       {label}
//     </button>
//   );
// }

'use client';

import { useRouter } from 'next/navigation';

export default function Btn({
  label = "Learn more →",
  href,
  onClick,
}) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) onClick();
    if (href) router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2 px-6 py-3 text-sm bg-[#3D5A5E] text-white rounded hover:bg-[#558186] transition"
    >
      {label}
    </button>
  );
}

