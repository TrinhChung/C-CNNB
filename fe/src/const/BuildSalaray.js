export const buildSalary = (min, max) => {
  if (!min && !max) return "Thỏa Thuận";
  else if (min && !max) return `Trên ${min}`;
  else if (!min && !max) return `Upto ${max}`;
  else return `${min}~${max} `;
};
