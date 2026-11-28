import React, { useState } from "react";// Reusable Presentational Child Component (Receives data via Props)
function SummaryCard({ label, amount, accentColor }) {
  return (
    <div
      style={{
        flex: 1,
        padding: "14px",
        borderRadius: "8px",
        border: "1px solid #cbd5e1",
        backgroundColor: "#f8fafc"
      }}
    >
      <span style={{ fontSize: "0.85rem", color: "#475569" }}>{label}</span>
      <h3 style={{ margin: "6px 0 0", color: accentColor }}>₹{amount.toLocaleString("en-IN")}</h3>
    </div>
  );
}

function App() {
  // 1. SOURCE OF TRUTH STATE (Minimal data required to represent the app)
  const [transactions, setTransactions] = useState([
    { id: "TXN-101", remark: "Opening Balance", type: "CREDIT", amount: 15000, date: "27 Nov 2026" },
    { id: "TXN-102", remark: "Cloud Hosting Bill", type: "DEBIT", amount: 2500, date: "27 Nov 2026" }
  ]);

  // 2. CONTROLLED FORM & UI FILTER STATE
  const [type, setType] = useState("CREDIT");
  const [remark, setRemark] = useState("");
  const [amount, setAmount] = useState("");
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [errorMsg, setErrorMsg] = useState("");

  // 3. DERIVED STATE (Calculated automatically on every render — zero extra useState needed)
  const totalDeposits = transactions
    .filter((txn) => txn.type === "CREDIT")
    .reduce((sum, txn) => sum + txn.amount, 0);

  const totalWithdrawals = transactions
    .filter((txn) => txn.type === "DEBIT")
    .reduce((sum, txn) => sum + txn.amount, 0);

  const currentBalance = totalDeposits - totalWithdrawals;

  const filteredTransactions = transactions.filter((txn) => {
    if (activeFilter === "ALL") return true;
    return txn.type === activeFilter;
  });

  // 4. EVENT HANDLERS (Immutable state transitions)
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Stop browser form reload
    const parsedAmount = Number(amount);

    // Guard 1: Empty remark or invalid/negative number
    if (!remark.trim() || Number.isNaN(parsedAmount) || parsedAmount <= 0) {
      setErrorMsg("Please enter a valid description and an amount greater than ₹0.");
      return;
    }

    // Guard 2: Overdraft prevention
    if (type === "DEBIT" && parsedAmount > currentBalance) {
      setErrorMsg(`Insufficient funds! Available balance is ₹${currentBalance}.`);
      return;
    }

    const newTransaction = {
      id: `TXN-${Date.now().toString().slice(-4)}`,
      remark: remark.trim(),
      type,
      amount: parsedAmount,
      date: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })
    };

    // Immutable prepend using functional updater + spread operator
    setTransactions((prev) => [newTransaction, ...prev]);

    // Reset controlled inputs & clear any previous error
    setRemark("");
    setAmount("");
    setErrorMsg("");
  };

  const handleDeleteTransaction = (idToRemove) => {
    // Immutable removal using .filter()
    setTransactions((prev) => prev.filter((txn) => txn.id !== idToRemove));
  };

  // 5. DECLARATIVE JSX RENDER
  return (
    <div style={{ maxWidth: "640px", margin: "32px auto", fontFamily: "system-ui, sans-serif", padding: "0 16px" }}>
      <h2>NovaBank — Reactive Account Ledger</h2>

      {/* Derived KPI Strip */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        <SummaryCard label="Current Balance" amount={currentBalance} accentColor="#0f172a" />
        <SummaryCard label="Total Deposits" amount={totalDeposits} accentColor="#15803d" />
        <SummaryCard label="Total Withdrawals" amount={totalWithdrawals} accentColor="#b91c1c" />
      </div>

      {/* Conditional Validation Alert */}
      {errorMsg && (
        <div style={{ background: "#fef2f2", color: "#b91c1c", padding: "10px 14px", borderRadius: "6px", marginBottom: "14px", border: "1px solid #fecaca" }}>
          {errorMsg}
        </div>
      )}

      {/* Controlled Transaction Form */}
      <form onSubmit={handleFormSubmit} style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
        <select value={type} onChange={(e) => setType(e.target.value)} style={{ padding: "8px" }}>
          <option value="CREDIT">Deposit (+)</option>
          <option value="DEBIT">Withdraw (-)</option>
        </select>

        <input
          type="text"
          placeholder="Description (e.g., Client Retainer)"
          value={remark}
          onChange={(e) => setRemark(e.target.value)}
          style={{ flex: 1, padding: "8px" }}
        />

        <input
          type="number"
          placeholder="Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: "120px", padding: "8px" }}
        />

        <button type="submit" style={{ padding: "8px 16px", background: "#2563eb", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}>
          Submit
        </button>
      </form>

      {/* Filter Controls */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
        {["ALL", "CREDIT", "DEBIT"].map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveFilter(tab)}
            style={{
              padding: "6px 12px",
              borderRadius: "6px",
              border: "1px solid #cbd5e1",
              background: activeFilter === tab ? "#0f172a" : "#fff",
              color: activeFilter === tab ? "#fff" : "#0f172a",
              cursor: "pointer"
            }}
          >
            {tab === "ALL" ? `All (${transactions.length})` : tab === "CREDIT" ? "Deposits" : "Withdrawals"}
          </button>
        ))}
      </div>

      {/* Filtered Statement List */}
      {filteredTransactions.length === 0 ? (
        <p style={{ color: "#64748b", textAlign: "center", padding: "20px" }}>No transactions found for this filter.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {filteredTransactions.map((txn) => (
            <li
              key={txn.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 0",
                borderBottom: "1px solid #e2e8f0"
              }}
            >
              <div>
                <strong>{txn.remark}</strong>
                <div style={{ fontSize: "0.78rem", color: "#64748b" }}>
                  {txn.id} • {txn.date}
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontWeight: "bold", color: txn.type === "CREDIT" ? "#15803d" : "#b91c1c" }}>
                  {txn.type === "CREDIT" ? "+" : "-"}₹{txn.amount.toLocaleString("en-IN")}
                </span>
                <button
                  type="button"
                  onClick={() => handleDeleteTransaction(txn.id)}
                  style={{ padding: "4px 8px", fontSize: "0.78rem", cursor: "pointer" }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;