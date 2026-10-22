import React from "react";

const SectionTitle = ({ eyebrow, title, description, light = false }) => {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-widest text-green-600">
        {eyebrow}
      </p>

      <h2
        className={`text-3xl font-black sm:text-4xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 leading-7 ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
