
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ image, category, title, location }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="relative h-60 overflow-hidden bg-slate-200">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-green-700">
          {category}
        </span>
      </div>

      <div className="flex items-start justify-between gap-4 p-5">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          <p className="mt-2 text-sm text-slate-500">{location}</p>
        </div>

        <span className="rounded-full bg-green-50 p-2 text-green-700">
          <ArrowUpRight size={20} />
        </span>
      </div>
    </article>
  );
};

export default ProjectCard;
