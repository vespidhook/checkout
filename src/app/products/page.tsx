import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HomePage = () => {
  return (
    <div className="p-5 border border-red-500 rounded-lg">
      <h1 className="text-red-500">Products</h1>
      <Button>Hello World</Button>
      <Input placeholder="Enter product name..."></Input>
    </div>
  );
};

export default HomePage;
