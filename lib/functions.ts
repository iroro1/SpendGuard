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
            { name: "Emergency Fund", amount: income * 0.15 },
            { name: "Retirement Fund", amount: income * 0.1 },
            { name: "Short-Term Savings", amount: income * 0.1 },
            { name: "Investments", amount: income * 0.05 }, // Added investment
          ],
        },
        {
          name: "Housing",
          subcategories: [
            { name: "Rent/Mortgage", amount: income * 0.15 },
            { name: "Utilities", amount: income * 0.05 },
            { name: "Property Taxes", amount: income * 0.05 },
          ],
        },
        {
          name: "Groceries",
          subcategories: [
            { name: "Food", amount: income * 0.1 },
            { name: "Household Supplies", amount: income * 0.05 },
          ],
        },
        {
          name: "Transportation",
          subcategories: [
            { name: "Fuel", amount: income * 0.03 },
            { name: "Public Transport", amount: income * 0.02 },
            { name: "Maintenance", amount: income * 0.03 },
          ],
        },
        {
          name: "Entertainment",
          subcategories: [
            { name: "Movies/Shows", amount: income * 0.02 },
            { name: "Hobbies", amount: income * 0.02 },
            { name: "Dining Out", amount: income * 0.01 },
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
            { name: "Stocks", amount: income * 0.25 },
            { name: "Bonds", amount: income * 0.1 },
            { name: "Real Estate", amount: income * 0.1 },
            { name: "Savings", amount: income * 0.05 }, // Added savings
          ],
        },
        {
          name: "Housing",
          subcategories: [
            { name: "Rent/Mortgage", amount: income * 0.2 },
            { name: "Utilities", amount: income * 0.05 },
            { name: "Property Taxes", amount: income * 0.05 },
          ],
        },
        {
          name: "Groceries",
          subcategories: [
            { name: "Food", amount: income * 0.1 },
            { name: "Household Supplies", amount: income * 0.05 },
          ],
        },
        {
          name: "Transportation",
          subcategories: [
            { name: "Fuel", amount: income * 0.03 },
            { name: "Public Transport", amount: income * 0.02 },
            { name: "Maintenance", amount: income * 0.03 },
          ],
        },
        {
          name: "Entertainment",
          subcategories: [
            { name: "Movies/Shows", amount: income * 0.02 },
            { name: "Hobbies", amount: income * 0.02 },
            { name: "Dining Out", amount: income * 0.01 },
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
            { name: "Emergency Fund", amount: income * 0.1 },
            { name: "Retirement Fund", amount: income * 0.1 },
            { name: "Short-Term Savings", amount: income * 0.1 },
          ],
        },
        {
          name: "Investments",
          subcategories: [
            { name: "Stocks", amount: income * 0.15 },
            { name: "Bonds", amount: income * 0.1 },
            { name: "Real Estate", amount: income * 0.1 },
          ],
        },
        {
          name: "Housing",
          subcategories: [
            { name: "Rent/Mortgage", amount: income * 0.15 },
            { name: "Utilities", amount: income * 0.05 },
            { name: "Property Taxes", amount: income * 0.05 },
          ],
        },
        {
          name: "Groceries",
          subcategories: [
            { name: "Food", amount: income * 0.1 },
            { name: "Household Supplies", amount: income * 0.05 },
          ],
        },
        {
          name: "Transportation",
          subcategories: [
            { name: "Fuel", amount: income * 0.05 },
            { name: "Public Transport", amount: income * 0.03 },
            { name: "Maintenance", amount: income * 0.02 },
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

  // Return the calculated budget categories
  return categories;
};

export const randomColor = (ind: number) => {
  // pick out of and arraay of 10 bright and warm colors
  const colors = [
    "tomato",
    "navy",
    "deepskyblue",
    "orange",
    "fuchsia",
    "turquoise",
    "lime",
    "gold",
  ];
  return colors[ind];
};

export const capitalize = (str: string) => {
  return str?.charAt(0).toUpperCase() + str?.slice(1);
};
