import Link from 'next/link';

export type ButtonProps = {
  link: string;
  content: string;
};

export const Button = ({ link, content }: ButtonProps) => {
  return (
    <Link
      href={link}
      className="transition-color h-11 rounded-lg bg-blue-800 px-4 py-2 font-semibold text-white shadow-sm duration-300 ease-in hover:bg-blue-900 hover:shadow"
    >
      {content}
    </Link>
  );
};
