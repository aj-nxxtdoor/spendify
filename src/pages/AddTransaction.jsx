import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import TransactionForm from '../components/TransactionForm';
import { addTransaction } from '../services/api';

const AddTransaction = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      await addTransaction(data);
      alert("✅ Transaction added successfully!");
      navigate('/');           // Go back to dashboard
    } catch (error) {
      console.error(error);
      alert("❌ Failed to add transaction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Add New Transaction</h1>
        <p className="text-gray-400 mt-2">Fill in the details below</p>
      </div>

      <div className="bg-gray-900 rounded-3xl p-8">
        <TransactionForm onSubmit={handleSubmit} />
      </div>

      {loading && <p className="text-center mt-6 text-emerald-400">Saving transaction...</p>}
    </div>
  );
};

export default AddTransaction;