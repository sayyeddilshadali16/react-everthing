export default function Card({ props }) {
  return (
    <div className="group relative bg-black p-4 rounded-lg shadow-2xl">
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="w-full rounded-lg object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
      />
      <h3 className="mt-6 text-sm">
        <a href={props.href}>
          <span className="absolute inset-0" />
          {props.name}
        </a>
      </h3>
      <p className="text-base font-semibold">{props.description}</p>
    </div>
  );
}
