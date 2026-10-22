import { ArrowUpRight } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, number }) => {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-green-700 transition group-hover:bg-green-600 group-hover:text-white">
          <Icon size={27} />
        </div>
        <span className="text-sm font-bold text-slate-300">{number}</span>
      </div>

      <h3 className="text-xl font-bold text-slate-900">{title}</h3>

      <p className="mt-3 leading-7 text-slate-600">{description}</p>

      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-green-700">
        Energy solutions <ArrowUpRight size={16} />
      </div>
    </article>
  );
};

export default ServiceCard;
