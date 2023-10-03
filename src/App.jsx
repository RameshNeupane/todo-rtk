import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const App = () => {
    return (
        <div className=" bg-gray-700 mt-6 p-6 w-full max-w-4xl flex flex-col rounded-md">
            <h1 className="text-center text-white text-4xl font-semibold">
                Manage Your Todos
            </h1>
            <AddTodo />
            <Todos />
        </div>
    );
};

export default App;
