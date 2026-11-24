import LeadCard from "./LeadCard";

function LeadsList({ leads, onDeleteLead, onEditLead, onUpdateStatus }) {
  return leads.map((lead) => (
    <LeadCard
      lead={lead}
      key={lead.id}
      onDeleteLead={onDeleteLead}
      onEditLead={onEditLead}
      onUpdateStatus={onUpdateStatus}
    />
  ));
}

export default LeadsList;
