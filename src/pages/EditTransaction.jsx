import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TransactionForm from "../components/TransactionForm";
import { getTransactionById, updateTransaction } from "../services/api";

const EditTransaction = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTransactionById(id);
        setTransaction(data);
      } catch (error) {
        alert("Transaction not found!");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, navigate]);

  const handleSubmit = async (data) => {
    try {
      await updateTransaction(id, data);
      alert("✅ Transaction updated successfully!");
      navigate("/");
    } catch (error) {
      alert("Failed to update transaction");
    }
  };

  if (loading) return <div className="text-center py-10">Loading transaction...</div>;
  if (!transaction) return <div>Transaction not found</div>;

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-8">Edit Transaction</h1>
      <TransactionForm 
        onSubmit={handleSubmit} 
        initialData={transaction} 
      />
    </div>
  );
};

export default EditTransaction;
