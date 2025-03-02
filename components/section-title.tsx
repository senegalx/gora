interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionTitle({ title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div className={`space-y-4 ${centered ? "text-center" : ""}`}>
      <div className="decorative-border inline-block px-6 py-4">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{title}</h2>
        {subtitle && (
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {subtitle}
          </p>
        )}
      </div>
      <div className="geometric-divider" />
    </div>
  )
}

