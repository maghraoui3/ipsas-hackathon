import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard } from "lucide-react";

const payments = [
  {
    date: "2024-01-15",
    amount: "500DT",
    description: "Tuition Fee",
  },
  {
    date: "2024-02-01",
    amount: "200DT",
    description: "Library Fee",
  },
  {
    date: "2024-03-10",
    amount: "300DT",
    description: "Hostel Fee",
  },
];

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Payments
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-[#0B2C67] dark:text-[#60A5FA]" />
            Payment History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {payments.map((payment, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {payment.description}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {payment.date}
                  </p>
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {payment.amount}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}