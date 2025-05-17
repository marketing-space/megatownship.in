import { getSiteConfig } from "@/lib/config";

type FormData = {
  name: string;
  email: string;
  phone: string;
};

async function submitToCRM(site: string, data: FormData) {
  const { crm } = getSiteConfig(site).formSubmission;
  const formData = new FormData();

  // Add CRM specific fields
  formData.append("__vtrftk", crm.__vtrftk);
  formData.append("publicid", crm.publicId);
  formData.append("urlencodeenable", "1");
  formData.append("name", crm.name);
  formData.append("__vtCurrency", crm.__vtCurrency);

  // Add user data
  formData.append("lastname", data.name);
  formData.append("mobile", data.phone);
  formData.append("email", data.email);
  formData.append("cf_leads_projectsite", crm.cfLeadsProjectSite);
  formData.append("leadsource", crm.leadSource);
  formData.append("emailoptin", crm.emailOptin);

  // Get IP address
  try {
    const ipResponse = await fetch("https://api.ipify.org?format=json");
    const ipData = await ipResponse.json();
    formData.append("cf_leads_ipaddress", ipData.ip);
  } catch (error) {
    console.error("Error getting IP:", error);
    formData.append("cf_leads_ipaddress", "Unknown");
  }

  // Submit to CRM
  const response = await fetch(`${crm.baseUrl}/modules/Webforms/capture.php`, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  });

  return response;
}

async function submitToEmail(site: string, data: FormData) {
  const { email } = getSiteConfig(site).formSubmission;

  console.log(process.env.NEXT_PUBLIC_EMAIL_RECIPIENTS);
  const response = await fetch(email.apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: process.env.NEXT_PUBLIC_EMAIL_RECIPIENTS,
      subject: email.template.subject,
      data: {
        ...data,
        date: new Date().toLocaleString(),
      },
    }),
  });

  if (!response.ok) {
    throw new Error("Email submission failed");
  }

  return response;
}

export async function submitForm(site: string, data: FormData) {
  if (process.env.NEXT_PUBLIC_LEAD_COLLECTION_MODE === "email") {
    await submitToEmail(site, data);
  } else {
    await submitToCRM(site, data);
  }
}
