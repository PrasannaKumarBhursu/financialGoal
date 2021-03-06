export const questions = [
  {
    category: "Personal Details",
    id: 1,
    question: "What is your age in years?	",
    options: ["Less than 30", "30-40", "40-50", "50+"],
    advice: [],
    scores: [0, 0, 0, 0],
  },
  {
    category: "Personal Details",
    id: 2,
    question: "What is your life cycle stage?	",
    options: [
      "Single",
      "Married couple without children",
      "Married couple with children",
      "Family with growing children",
      "Reaching retirmement",
      "Retired",
    ],
    advice: [],
    scores: [0, 0, 0, 0, 0, 0],
  },
  {
    category: "Personal Details",
    id: 3,
    question: "What is your current annual income in INR?",
    options: [
      "Less than 5,00,000",
      "5,00,000 - 10,00,000",
      "10,00,000 - 15,00,000",
      "15,00,000 - 25,00,000",
      "25,00,000 - 50,00,000",
      "Above 50,00,000",
    ],
    advice: [],
    scores: [0, 0, 0, 0, 0, 0],
  },
  {
    category: "Spend",
    id: 4,
    question:
      "How was your total spending compared to your income in last 12 months?",
    options: [
      "Spending was much less than income",
      "Spending was a little less than income",
      "Spending was nearly equal to income",
      "Spending was a little more than income",
      "Spending was much more than income",
    ],
    scores: [100, 75, 50, 25, 0],
    advice: [
      "You are doing great.",
      "You are doing good.",
      "It's ok but need to improve the current situation.",
      "Immediately required to give emphasis on increasing earning and reduce expenditure.",
      "Urgent emphasis should be on increasing earning and reduce expenditure.",
    ],
  },
  {
    category: "Spend",
    id: 5,
    question:
      "How comfortably you paid the monthly expense/bills in the last 12 months?",
    options: [
      "Paid all my expense/bills on time",
      "Paid nearly all my expense/bills on time",
      "Paid most of my expense/bills on time",
      "Paid some of my expense/bills on time",
      "Did not pay my expense/bills on time",
    ],
    scores: [100, 60, 40, 20, 0],
    advice: [
      "You are doing great.",
      "You are doing good.",
      "It's ok but need to improve the current situation.",
      "Immediately required to give emphasis to take requisite steps for paying expenses on time.",
      "Urgently required to give emphasis to take requisite steps for paying expenses on time.",
    ],
  },
  {
    category: "Save",
    id: 6,
    question:
      "Considering your current monthly expenses, how long will your emergency fund last?",
    options: [
      "More than 6 months",
      "6 months",
      "3-6 months",
      "1-3 months",
      "Less than a month",
    ],
    scores: [100, 75, 50, 25, 0],
    advice: [
      "You are doing great.",
      "You are doing good.",
      "It's ok but need to improve the current situation.",
      "Immediately required to give emphasis to increase your emergency fund and reduce expenses.",
      "Urgently required to give emphasis to increase your emergency fund and reduce expenses.",
    ],
  },
  {
    category: "Save",
    id: 7,
    question:
      "How confident are you that your current investments and savings are sufficient to meet your long-term goals?",
    definition:
      "(Long-term financial goals are like starting a new business, buying a home, paying off an existing loan, retirement planning etc.)",
    options: [
      "Very confident",
      "Moderately confident",
      "Somewhat confident",
      "Slightly confident",
      "Not at all confident",
    ],
    scores: [100, 75, 50, 25, 0],
    advice: [
      "You are doing great.",
      "You are doing good.",
      "It's ok but need to improve the current situation.",
      "Immediately required to give emphasis to align your investments and savings to meet your long term goals.",
      "Urgently required to give emphasis to align your investments and savings to meet your long term goals.",
    ],
  },
  {
    category: "Borrow",
    id: 8,
    question:
      "Which of the following statements describes your current debt situation?",
    definition:
      "(Current debt include bank loans, dues outstanding, credit card dues, etc.)",
    options: [
      "Do not have any debt",
      "Have a manageable amount of debt",
      "Have a bit more debt than is manageable",
      "Have far more debt than is manageable",
    ],
    scores: [100, 85, 40, 0],
    advice: [
      "You are doing great.",
      "You are doing good.",
      "You need to improve the current debt situation.",
      "Urgently required to give emphasis on reduction of EMI/ overall debt level.",
    ],
  },
  {
    category: "Borrow",
    id: 9,
    question: "How would you rate your credit score?",
    definition:
      "(Credit score is a number that tells lenders how risky or safe you are as a borrower.)",
    options: ["Excellent", "Very good", "Satisfactory", "Poor / Don't know"],
    scores: [100, 70, 40, 0],
    advice: [
      "You are doing great.",
      "Its ok but need to take steps to improve credit score.",
      "Immediately required to take steps to improve credit score.",
      "Urgently get in touch with your financial advisor to help you in improving credit scrore.",
    ],
  },
  {
    category: "Plan",
    id: 10,
    question: "Time horizon for major portion of your investments is",
    options: [
      "More than 10 years",
      "5-10 years",
      "3-5 years",
      "1-3 years",
      "Less than a year",
    ],
    scores: [100, 75, 50, 25, 10],
    advice: [
      "Your investment planning is robust.",
      "Your investment planning is good.",
      "You are doing good but align your planning as per your financial goals.",
      "Need to take steps to have a longer horizon in line with your financial goals.",
      "Urgent need to look at the investment horizon and align them with your financial goals.",
    ],
  },
  {
    category: "Plan",
    id: 11,
    question:
      'What would be your response to the statement, "I am making investments in line with my short-term and long-term financial goals"?',
    options: [
      "Strongly agree",
      "Somewhat agree",
      "Not sure",
      "Somewhat disagree",
      "Strongly disagree",
    ],
    scores: [100, 65, 35, 15, 0],
    advice: [
      "Your investment planning is robust.",
      "Your investment planning is good.",
      "Align your investment planning with your financial goals.",
      "Immediately take steps to align your investment planning with your financial goals.",
      "Urgently required to look at your investment planning to align it with your financial goals.",
    ],
  },
  {
    category: "Insurance",
    id: 12,
    question: "How much is your life insurance coverage?",
    options: [
      "Above 8 times of annual income",
      "5 to 8 times of annual income",
      "3 to 5 times of annual income",
      "Upto 3 times of annual income",
      "No life insurance coverage",
    ],
    scores: [100, 75, 50, 30, 0],
    advice: [
      "You are adequately insured.",
      "You are sufficiently insured.",
      "You may increase your life insurance coverage.",
      "You are required to increase your life insurance coverage.",
      "Urgently get in touch with your financial advisor to take adequate life insurance coverage.",
    ],
  },
  {
    category: "Insurance",
    id: 13,
    question: "How much is your personal/family medical insurance coverage?",
    options: [
      "10 lacs and above / Full reimbursement by employer",
      "5 to 10 lacs",
      "2 to 5 lacs",
      "Upto 2 lacs",
      "No medical insurance coverage",
    ],
    scores: [100, 80, 40, 20, 0],
    advice: [
      "You are adequately insured.",
      "You are sufficiently insured.",
      "You may increase your medical insurance coverage.",
      "You are required to increase your medical insurance coverage.",
      "Urgently get in touch with your financial advisor to take adequate medical insurance coverage.",
    ],
  },
  {
    category: "Risk profile",
    id: 14,
    question:
      "What is your approach towards risks and returns from investments?",
    options: [
      "Investments with no risk and ensuring capital protection",
      "Low risk investments with small allocation into high risk investments",
      "Balanced portfolio of investments",
      "Portfolio with inclination towards high risk investments",
      "Only high risk- high return investments",
    ],
    advice: [],
    scores: [100, 75, 50, 25, 0],
  },
  {
    category: "Risk profile",
    id: 15,
    question:
      "How do you adapt to sudden and unfavorable financial situations in your life?",
    options: [
      "Easily",
      "Somewhat easily",
      "Somewhat uneasily",
      "With difficulty",
      "Not able to adjust at all without external help",
    ],
    advice: [],
    scores: [0, 0, 0, 0, 0],
  },
  {
    category: "Risk profile",
    id: 16,
    question: "How good is your knowledge about various investment products?",
    options: ["Execellent", "Good", "Satisfactory", "Basic", "No knowledge"],
    advice: [],
    scores: [100, 75, 50, 25, 0],
  },
];

export const allAdvices = {
  Overall: {
    category: "Overall",
    advice: [
      "Your financial management is good. However, stay in touch with your financial advisor to further improve your financial planning.",
      "You are doing good. However, you should get the help of a professional to further strengthen your financial planning.",
      "You are required to give immediate attention on financial planning and sought professional help.",
    ],
    scores: [80, 40, 0],
  },
  Spend: {
    category: "Spend",
    advice: [
      "You are doing great; this is the right beginning to achieve financially secure future.",
      "You are doing good; this is a good beginning to achieve financially secure future.",
      "You need to improve your earnings and expenditure habits to have better financial stability.",
      "You are immediately required to give emphasis on increasing your earnings and/or reduce expenditure.",
      "You are urgently required to give emphasis on increasing your earnings and/or reduce expenditure.",
    ],
    scores: [80, 60, 40, 20, 0],
  },
  Save: {
    category: "Save",
    advice: [
      "You are having great savings; maintaining similar financial discipline will help you achieve financial stability.",
      "You are doing good in savings; bit more of financial discipline will positively improve your financial stability.",
      "You are doing okay, but needs to improve the current saving behavior to improve your financial stability.",
      "You are immediately required to give emphasis on your savings behavior to improve your financial stability.",
      "You are urgently required to rework your savings pattern to improve your financial stability.",
    ],
    scores: [85, 75, 50, 25, 0],
  },
  Borrow: {
    category: "Borrow",
    advice: [
      "You are doing great; Zero debt and/or excellent credit rating is always desirable.",
      "You are doing good liability management; limited/manageable debt enables you to have better credit score.",
      "You are doing okay. However, efforts are required to improve your current debt situation and your credit score.",
      "You are immediately required to give emphasis on reducing your EMI/overall debt level and to have better credit score.",
    ],
    scores: [80, 60, 40, 0],
  },
  Plan: {
    category: "Plan",
    advice: [
      "You are doing great; staying focused and having proper planning always helps in achieving financial stability.",
      "You are doing good; staying focused and having regular planning always helps in achieving financial stability.",
      "You are doing okay. However, you need to give emphasis on staying focussed and do regular financial planning to achieve financial stability.",
      "You are required to take immediate steps to improve your Investment horizon and also to plan your financials regularly.",
    ],
    scores: [75, 65, 35, 0],
  },
  Insurance: {
    category: "Insurance",
    advice: [
      "You are sufficiently insured; maintain the same coverage / ratio in coming years.",
      "You should look to increase your insurance coverage for better risk coverage.",
      "You should actively look to increase your insurance coverage.",
      "You should get Insurance coverage immediately.",
    ],
    scores: [75, 60, 20, 0],
  },
  "Risk profile 14": {
    category: "Risk profile 14",
    advice: [
      "You have stable investment approach with inclination for low risk investments.",
      "You have a stable investment approach with inclination for moderate risk investments.",
      "You have a reasonablly good investment approach, but you can always improve.",
      "Your financial knowledge and investment approach needs improvement in line with your risk appetite.",
      "Your investment approach and risk appetite needs immediate attention and course correction.",
    ],
    scores: [100, 75, 50, 25, 0],
  },
  "Risk profile 16": {
    category: "Risk profile 16",
    advice: [
      "You are well informed. However, stay in touch with your financial expert to keep yourself updated.",
      "You are well informed. However, stay  in touch with your financial expert to keep yourself updated.",
      "You are having basic information of various investment products. However, consult your financial expert to improve your knowledge.",
      "You are required to improve your understanding of investment products. For this, you can consult your financial expert.",
      "You should have investment product knowledge before making any investment. Consult your financial expert immediately to understand investment products.",
    ],
    scores: [100, 75, 50, 25, 0],
  },
};
