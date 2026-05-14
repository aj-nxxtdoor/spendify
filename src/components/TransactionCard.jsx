import { useNavigate } from "react-router-dom";

const TransactionCard = ({ transaction, onDelete }) => {
  const navigate = useNavigate();
  const isIncome = transaction.type === 'income';

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this transaction?")) {
      onDelete(transaction.id);
    }
  };

  return (
    <div className="bg-gray-900 p-5 rounded-2xl flex justify-between items-center hover:bg-gray-800 transition-colors">
      <div>
        <p className="font-medium text-white">{transaction.description}</p>
        <p className="text-sm text-gray-400">{transaction.category} • {transaction.date}</p>
      </div>
      
      <div className="flex items-center gap-4">
        <p className={`font-bold text-xl ${isIncome ? 'text-emerald-400' : 'text-red-400'}`}>
          {isIncome ? '+' : '-'} {transaction.amount}
        </p>
        
        <button 
          onClick={() => navigate(`/edit/${transaction.id}`)}
          className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-xl text-sm font-medium"
        >
          Edit
        </button>
        
        <button 
          onClick={handleDelete}
          className="bg-red-600 hover:bg-red-500 px-5 py-2 rounded-xl text-sm font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TransactionCard;
