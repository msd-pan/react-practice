interface CoreConceptProps {
  image: string;
  title: string;
  description: string;
}

export default function CoreConcept({
  image,
  title,
  description,
}: CoreConceptProps) {
  return (
    <li>
      <img src={image} alt="..." />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
