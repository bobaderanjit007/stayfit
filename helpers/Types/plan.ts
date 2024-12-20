// Plan Cards

type Package = {
  packageType: string;
  durationInDays: number;
  sessions: number;
  priceInRupees: number;
  discountInRupees: number;
};

export type PlanCardTypes = {
  _id: string;
  isActive: boolean;
  planName: string;
  category: string;
  planType: string;
  planFor: string;
  showPlanOnline: boolean;
  description: string;
  packages: Package[];
};
