interface BudgetCategory {
  name: string;
  amount: number;
}

interface DetailedBudgetCategory {
  name: string;
  subcategories: BudgetCategory[];
}

export const calculateBudget = (
  income: number,
  focus: string
): DetailedBudgetCategory[] => {
  let categories: DetailedBudgetCategory[] = [];

  switch (focus) {
    case "savings":
      categories = [
        {
          name: "Savings",
          subcategories: [
            { name: "Emergency Fund", amount: income * 0.1 },
            { name: "Retirement Fund", amount: income * 0.1 },
            { name: "Short-Term Savings", amount: income * 0.1 },
          ],
        },
        {
          name: "Investments",
          subcategories: [
            { name: "Stocks", amount: income * 0.1 },
            { name: "Bonds", amount: income * 0.05 },
            { name: "Real Estate", amount: income * 0.05 },
          ],
        },
        {
          name: "Housing",
          subcategories: [
            { name: "Rent/Mortgage", amount: income * 0.2 },
            { name: "Utilities", amount: income * 0.05 },
            { name: "Property Taxes", amount: income * 0.03 },
          ],
        },
        {
          name: "Groceries",
          subcategories: [
            { name: "Food", amount: income * 0.2 },
            { name: "Household Supplies", amount: income * 0.03 },
          ],
        },
        {
          name: "Transportation",
          subcategories: [
            { name: "Fuel", amount: income * 0.05 },
            { name: "Public Transport", amount: income * 0.02 },
            { name: "Maintenance", amount: income * 0.03 },
          ],
        },
        {
          name: "Entertainment",
          subcategories: [
            { name: "Movies/Shows", amount: income * 0.02 },
            { name: "Hobbies", amount: income * 0.02 },
            { name: "Dining Out", amount: income * 0.02 },
          ],
        },
        {
          name: "Healthcare",
          subcategories: [
            { name: "Medical Insurance", amount: income * 0.05 },
            { name: "Out-of-Pocket Expenses", amount: income * 0.03 },
          ],
        },
        {
          name: "Miscellaneous",
          subcategories: [
            { name: "Gifts", amount: income * 0.02 },
            { name: "Personal Care", amount: income * 0.02 },
          ],
        },
      ];
      break;

    case "investments":
      categories = [
        {
          name: "Investments",
          subcategories: [
            { name: "Stocks", amount: income * 0.2 },
            { name: "Bonds", amount: income * 0.1 },
            { name: "Real Estate", amount: income * 0.1 },
          ],
        },
        {
          name: "Savings",
          subcategories: [
            { name: "Emergency Fund", amount: income * 0.05 },
            { name: "Retirement Fund", amount: income * 0.05 },
            { name: "Short-Term Savings", amount: income * 0.05 },
          ],
        },
        {
          name: "Housing",
          subcategories: [
            { name: "Rent/Mortgage", amount: income * 0.2 },
            { name: "Utilities", amount: income * 0.05 },
            { name: "Property Taxes", amount: income * 0.03 },
          ],
        },
        {
          name: "Groceries",
          subcategories: [
            { name: "Food", amount: income * 0.15 },
            { name: "Household Supplies", amount: income * 0.03 },
          ],
        },
        {
          name: "Transportation",
          subcategories: [
            { name: "Fuel", amount: income * 0.05 },
            { name: "Public Transport", amount: income * 0.02 },
            { name: "Maintenance", amount: income * 0.03 },
          ],
        },
        {
          name: "Entertainment",
          subcategories: [
            { name: "Movies/Shows", amount: income * 0.02 },
            { name: "Hobbies", amount: income * 0.02 },
            { name: "Dining Out", amount: income * 0.02 },
          ],
        },
        {
          name: "Healthcare",
          subcategories: [
            { name: "Medical Insurance", amount: income * 0.05 },
            { name: "Out-of-Pocket Expenses", amount: income * 0.03 },
          ],
        },
        {
          name: "Miscellaneous",
          subcategories: [
            { name: "Gifts", amount: income * 0.02 },
            { name: "Personal Care", amount: income * 0.02 },
          ],
        },
      ];
      break;

    case "balanced":
      categories = [
        {
          name: "Savings",
          subcategories: [
            { name: "Emergency Fund", amount: income * 0.08 },
            { name: "Retirement Fund", amount: income * 0.08 },
            { name: "Short-Term Savings", amount: income * 0.08 },
          ],
        },
        {
          name: "Investments",
          subcategories: [
            { name: "Stocks", amount: income * 0.1 },
            { name: "Bonds", amount: income * 0.08 },
            { name: "Real Estate", amount: income * 0.1 },
          ],
        },
        {
          name: "Housing",
          subcategories: [
            { name: "Rent/Mortgage", amount: income * 0.2 },
            { name: "Utilities", amount: income * 0.05 },
            { name: "Property Taxes", amount: income * 0.03 },
          ],
        },
        {
          name: "Groceries",
          subcategories: [
            { name: "Food", amount: income * 0.15 },
            { name: "Household Supplies", amount: income * 0.03 },
          ],
        },
        {
          name: "Transportation",
          subcategories: [
            { name: "Fuel", amount: income * 0.05 },
            { name: "Public Transport", amount: income * 0.02 },
            { name: "Maintenance", amount: income * 0.03 },
          ],
        },
        {
          name: "Entertainment",
          subcategories: [
            { name: "Movies/Shows", amount: income * 0.02 },
            { name: "Hobbies", amount: income * 0.02 },
            { name: "Dining Out", amount: income * 0.02 },
          ],
        },
        {
          name: "Healthcare",
          subcategories: [
            { name: "Medical Insurance", amount: income * 0.05 },
            { name: "Out-of-Pocket Expenses", amount: income * 0.03 },
          ],
        },
        {
          name: "Miscellaneous",
          subcategories: [
            { name: "Gifts", amount: income * 0.02 },
            { name: "Personal Care", amount: income * 0.02 },
          ],
        },
      ];
      break;

    default:
      throw new Error("Invalid focus type");
  }

  const totalAllocated = categories.reduce(
    (sum, category) =>
      sum +
      category.subcategories.reduce(
        (subSum, subcategory) => subSum + subcategory.amount,
        0
      ),
    0
  );

  if (totalAllocated > income) {
    const adjustmentFactor = income / totalAllocated;
    categories = categories.map((category) => ({
      ...category,
      subcategories: category.subcategories.map((subcategory) => ({
        ...subcategory,
        amount: subcategory.amount * adjustmentFactor,
      })),
    }));
  }

  return categories;
};

export const randomColor = (ind: number) => {
  // Pick out of an array of 10 bright and warm colors
  const colors = [
    "#FF5733", // Fiery Red-Orange
    "#FFBF00", // Vivid Yellow
    "#FF6F61", // Coral
    "#FF8C00", // Dark Orange
    "#FFD700", // Gold
    "#FF69B4", // Hot Pink
    "#FF1493", // Deep Pink
    "#FF4500", // Orange Red
    "#F4A460", // Sandy Brown
    "#FFA07A", // Light Salmon
  ];

  // Use modulo to ensure index is within bounds
  return colors[ind % colors.length];
};

export const capitalize = (str: string) => {
  return str?.charAt(0).toUpperCase() + str?.slice(1);
};
