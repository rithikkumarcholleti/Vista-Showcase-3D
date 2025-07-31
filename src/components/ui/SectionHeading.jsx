import { cn } from "@/lib/utils";

const SectionHeading = ({
  title,
  subtitle,
  alignment = 'center',
  className,
  titleClassName,
  subtitleClassName
}) => {
  return (
    <div
      className={cn(
        "mb-12",
        {
          'text-left': alignment === 'left',
          'text-center': alignment === 'center',
          'text-right': alignment === 'right',
        },
        className
      )}
    >
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-lg text-showcase-muted max-w-3xl mx-auto",
            {
              'mx-0': alignment === 'left',
              'mx-auto': alignment === 'center',
              'ml-auto': alignment === 'right',
            },
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
