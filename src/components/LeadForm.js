import { useState, useEffect } from "react";
function LeadForm({ onSubmitLeadForm, selectedLead, onUpdateLead }) {
  const [leadFormData, setLeadFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  useEffect(() => {
    if (selectedLead) {
      setLeadFormData(selectedLead);
    }
  }, [selectedLead]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (selectedLead) {
          onUpdateLead(leadFormData);
        } else {
          onSubmitLeadForm(leadFormData);
        }
        setLeadFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
        });
      }}
    >
      <input
        placeholder="name"
        required
        onChange={(e) =>
          setLeadFormData({ ...leadFormData, name: e.target.value })
        }
        type="text"
        value={leadFormData.name}
      />
      <input
        placeholder="email"
        required
        onChange={(e) =>
          setLeadFormData({ ...leadFormData, email: e.target.value })
        }
        type="email"
        value={leadFormData.email}
      />
      <input
        placeholder="phone"
        required
        onChange={(e) =>
          setLeadFormData({ ...leadFormData, phone: e.target.value })
        }
        type="tel"
        value={leadFormData.phone}
      />
      <input
        placeholder="service"
        required
        onChange={(e) =>
          setLeadFormData({ ...leadFormData, service: e.target.value })
        }
        type="text"
        value={leadFormData.service}
      />
      <button>Submit</button>
    </form>
  );
}

export default LeadForm;
