// packages
export const randomPlanPackages = Array.from({ length: 5 }, () => {
  const duration = Math.floor(Math.random() * 365) + 1; // Random duration between 1 and 365 days
  const sessions = Math.floor(Math.random() * 50) + 1; // Random sessions between 1 and 50
  const packagePrice = Math.floor(Math.random() * 50000) + 1000; // Random price between 1000 and 50000
  const discount = Math.floor(Math.random() * 5000); // Random discount between 0 and 5000
  const netPrice = packagePrice - discount; // Calculate net price

  return {
    id: crypto.randomUUID(), // Generate a random UUID for id
    name: `Package ${Math.random().toString(36).substring(7)}`, // Random alphanumeric name
    duration,
    sessions,
    packagePrice,
    discount,
    netPrice: netPrice > 0 ? netPrice : 0, // Ensure net price is not negative
  };
});

//  Plans along with packages
const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomPlanType = () => {
  const planTypes = ["basic", "special", "FYT lead"];
  return planTypes[getRandomInt(0, planTypes.length - 1)];
};
const getRandomPlanFor = () => {
  const planTypes = ["male", "female", "unisex"];
  return planTypes[getRandomInt(0, planTypes.length - 1)];
};

const getRandomCategory = () => {
  const categories = ["gym", "yoga"];
  return categories[getRandomInt(0, categories.length - 1)];
};

const getRandomBoolean = () => Math.random() > 0.5;

const getRandomPackageType = () => {
  const packageTypes = [
    "weekly",
    "monthly",
    "quarterly",
    "yearly",
    "half yearly",
    "lifetime",
    "custom",
  ];
  return packageTypes[getRandomInt(0, packageTypes.length - 1)];
};

const getRandomIsActive = () => {
  const isActive = [true, false];
  return isActive[getRandomInt(0, isActive.length - 1)];
};

const generateRandomData = (numPlans = 5) => {
  // Default to generate 5 plans
  const plans = [];

  for (let i = 0; i < numPlans; i++) {
    const numPackages = getRandomInt(3, 4); // Generate 3-4 packages for each plan

    const packages = [];
    for (let j = 0; j < numPackages; j++) {
      packages.push({
        packageType: getRandomPackageType(),
        durationInDays: getRandomInt(7, 365), // Duration between 7 days to 365 days
        sessions: getRandomInt(5, 50), // Sessions between 5 to 50
        priceInRupees: getRandomInt(1000, 50000), // Price between 1000 to 50000
        discountInRupees: getRandomInt(0, 5000), // Discount between 0 to 5000
      });
    }

    plans.push({
      isActive: getRandomIsActive(),
      planName: `Plan ${getRandomInt(1, 100)}`,
      category: getRandomCategory(),
      planType: getRandomPlanType(),
      planFor: getRandomPlanFor(),
      showPlanOnline: getRandomBoolean(),
      description: "This is a random plan description.",
      packages,
    });
  }

  return plans;
};

export const randomPlanData = generateRandomData(15);
