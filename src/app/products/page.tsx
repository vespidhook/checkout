import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HomePage = () => {
  return (
    <div className="rounded-lg border border-red-500 p-5">
      <h1 className="text-red-500">Products</h1>
      <Button>Hello World</Button>
      <Input placeholder="Enter product name..."></Input>
    </div>
  );
};

export default HomePage;
