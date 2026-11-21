export default function SectionTitle({
  eyebrow,
  title,
  shape,
  align = 'center',
  className = '',
  titleTag: TitleTag = 'h2',
  children,
}) {
  return (
    <div className={`sec-head sec-head--${align}${shape ? ' sec-head--shape' : ''} ${className}`.trim()}>
      {shape ? (
        <span className="sec-head__shape" aria-hidden="true">
          {shape}
        </span>
      ) : null}
      {eyebrow ? <span className="sec-head__eyebrow">{eyebrow}</span> : null}
      <TitleTag className="sec-head__title">{title}</TitleTag>
      {children}
    </div>
  )
}
