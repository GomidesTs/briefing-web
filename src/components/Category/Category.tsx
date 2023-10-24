type CategoryProps = {
  description: string;
};

export const Category = ({ description }: CategoryProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 md:text-6xl">
        {description}
      </h2>
      <div className="relative mt-4 w-3/4 border-t border-zinc-300 before:absolute before:bottom-0 before:left-0 before:w-3/12 before:border-t before:border-zinc-900" />
    </div>
  );
};
