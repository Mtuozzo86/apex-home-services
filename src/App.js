import "./styles.css";
import { useState } from "react";
import initialLeads from "./data/initialLeads";
import LeadsList from "./components/LeadsList";
import LeadForm from "./components/LeadForm";
import SearchLead from "./components/SearchLead";

export default function App() {
  const [leads, setLeads] = useState(initialLeads);
  const [selectedLead, setSelectedLead] = useState(null);
  const [search, setSearch] = useState("");

  function handleAddLead(newLead) {
    setLeads((prev) => [
      { id: crypto.randomUUID(), status: "New", ...newLead },
      ...prev,
    ]);
  }

  function handleDeleteLead(id) {
    setLeads((prev) => prev.filter((lead) => lead.id !== id));
  }

  function handleEditLead(leadToEdit) {
    setSelectedLead(leadToEdit);
  }

  function handleUpdatedLead(updatedLead) {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === updatedLead.id ? updatedLead : lead)),
    );
    setSelectedLead(null);
  }

  function handleUpdateStatus(id, newStatus) {
    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === id ? { ...lead, status: newStatus } : lead,
      ),
    );
  }

  function handleSearch(searchedLead) {
    setSearch(searchedLead);
  }

  let filtered = leads.filter((lead) =>
    lead.name.toLowerCase().includes(search.toLowerCase()),
  );

  console.log(filtered);

  return (
    <div className="App">
      <LeadForm
        selectedLead={selectedLead}
        onSubmitLeadForm={handleAddLead}
        onUpdateLead={handleUpdatedLead}
      />
      <SearchLead onSearch={handleSearch} />
      <LeadsList
        onDeleteLead={handleDeleteLead}
        onEditLead={handleEditLead}
        leads={filtered}
        onUpdateStatus={handleUpdateStatus}
      />
    </div>
  );
}
