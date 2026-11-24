function LeadCard({ lead, onDeleteLead, onEditLead, onUpdateStatus }) {
  return (
    <div style={{ border: "1px solid black" }}>
      <p>{lead.name}</p>
      <p>{lead.email}</p>
      <p>{lead.phone}</p>
      <p>{lead.service}</p>
      <p>{lead.status}</p>
      <select
        value={lead.status}
        onChange={(e) => onUpdateStatus(lead.id, e.target.value)}
      >
        <option value="New">New</option>
        <option value="Contacted">Contacted</option>
        <option value="Estimate Sent">Estimate Sent</option>
        <option value="Won">Won</option>
        <option value="Lost">Lost</option>
      </select>
      <button onClick={() => onDeleteLead(lead.id)}>delete</button>
      <button onClick={() => onEditLead(lead)}>edit</button>
    </div>
  );
}

export default LeadCard;
