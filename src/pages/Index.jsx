import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

const App = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [items, setItems] = React.useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow py-8">
        <div className="container mx-auto">
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle>My Application</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2 mb-4">
                <Input
                  type="text"
                  placeholder="Enter an item"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <Button onClick={handleAddItem}>Add</Button>
              </div>
              <ul className="space-y-2">
                {items.map((item, index) => (
                  <li key={index} className="bg-white p-2 rounded shadow">
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-500">
                Total items: {items.length}
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>

      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">© 2023 My Application. All rights reserved.</p>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;