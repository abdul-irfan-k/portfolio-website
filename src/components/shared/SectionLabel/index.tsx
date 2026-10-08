import React, { FC } from "react";

interface SectionLabelProps {
  title: string;
  index: string;
}

const SectionLabel: FC<SectionLabelProps> = ({ title, index }) => {
  return (
    <div className="pb-5 flex items-center justify-between border-b-[1px] border-slate-300 text-sm uppercase tracking-widest text-slate-500">
      <span>{title}</span>
      <span>({index})</span>
    </div>
  );
};

export default SectionLabel;
