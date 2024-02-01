import CoreConcept from "../CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "../../data";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core concepts!</h2>
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept
            key={item.title}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </ul>
    </section>
  );
}
