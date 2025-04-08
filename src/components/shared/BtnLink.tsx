interface BtnLinkProps  {
    href: string;
    text: string;
    className?: string;
}

const BtnLink = ({href, text, className=""} : BtnLinkProps) => {
  return (
    <a href={href} className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border dark:bg-violet-600 cursor-pointer transform transition duration-300 ${className}`}>
        <span className="relative z-10 dark:text-white">{text}</span>
    </a>
  )
}

export default BtnLink