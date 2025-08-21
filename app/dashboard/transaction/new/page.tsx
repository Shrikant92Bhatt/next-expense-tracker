import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import DynamicBreadcrumb from "@/components/ui/dynamic-breadcrumb";
const NewTransactionPage = () => {
  return <div>
    <DynamicBreadcrumb />
    <Card className="mt-4 max-w-screen-md">
        <CardHeader>
            <CardTitle className="text-2xl font-bold">New Transaction</CardTitle>
        </CardHeader>
        <CardContent>
            <form>

            </form>
        </CardContent>
        <CardFooter className="flex justify-end gap-3">
            <Button type="submit">Create</Button>
            <Button type="button" variant="outline">Cancel</Button>
        </CardFooter>
    </Card>

  </div>;
};

export default NewTransactionPage;