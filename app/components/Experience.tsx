import Image from "next/image";

export interface Experience {
  img?: string;
  title: string;
  company?: string;
  location: string;
  url?: string;
  timeframe: string;
  description?: string;
}

function Experience({
  experience,
  variant = "md",
}: {
  experience: Experience;
  variant?: "sm" | "md" | "lg";
}) {
  return (
    <div className="experience-row">
      <a
        className={`${variant === "md" ? "btn" : "btn-small"} ${
          !experience.url ? "disabled" : ""
        }`}
        target="_blank"
        {...(experience.url ? { href: experience.url } : { disabled: true })}
      >
        <Image
          src={experience.img || "/img/logos/placeholder.png"}
          width={variant === "md" ? 25 : 16}
          height={variant === "md" ? 25 : 16}
          alt={experience.company || experience.title}
        />
      </a>
      <div className="row-content">
        <div className="main">
          <div className="title">
            {variant === "md" ? (
              <div className="front">
                <h3>{experience.title}</h3>
                <p className="location">{experience.location}</p>
              </div>
            ) : (
              <p className="position">
                <strong>
                  {experience.title}
                  {experience.company ? ` @ ${experience.company}` : ""}
                </strong>
              </p>
            )}
            <p className="date">{experience.timeframe}</p>
          </div>
        </div>
        {variant === "md" && (
          <p className="position">
            <strong>{experience.company}</strong>
          </p>
        )}
        {experience.description && (
          <p
            className="experience-description"
            dangerouslySetInnerHTML={{
              __html: experience.description,
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Experience;
