const getStatusClass = (status: string) => {
    switch (status) {
        case "Completed":
            return "bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500";
        case "In review":
            return "text-gray-600";
        case "In progress":
            return "bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-purple-100 dark:bg-gray-700 dark:border-purple-500 dark:text-purple-400";
        case "Cancelled":
            return "bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-red-100 dark:border-red-400 dark:bg-gray-700 dark:text-red-400";
        default:
            return "text-black";
    }
};

export default getStatusClass;