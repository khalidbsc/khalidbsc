import photoAsset from "@/assets/khalid-hasan.jpg.asset.json";

// ============================================================
// EDIT THIS FILE to update everything on your portfolio.
// Remove any skill / project / item you don't want by deleting it.
// ============================================================

export const profile = {
  name: "Khalid Hasan",
  initials: "KHALID HASAN",
  title: "RMG IT Professional | IT Infrastructure & Technology Specialist",
  headline: "Connecting Technology with the Garments Industry.",
  intro:
    "I keep garment factories running smoothly — managing IT operations, troubleshooting systems, maintaining reliable infrastructure, and supporting the digital transformation of production and business teams.",
  // Put your CV file in the /public folder (e.g. public/cv.pdf) and set the path here.
  cvUrl: "/cv.pdf",
  photoUrl: "", // optional: paste an image URL for your profile photo
  email: "khalidhasanbsc@gmail.com",
  phone: "+880 1827308503",
  linkedin: "https://www.linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
  location: "Bangladesh",
};

export const about = [
  "I am an IT professional working in Bangladesh's Ready-Made Garments (RMG) industry, where dependable technology is essential to production, compliance, and business operations.",
  "My focus is practical problem-solving: keeping users productive, networks stable, systems available, and data protected — so that factory teams can concentrate on delivering orders on time.",
  "I value business continuity, clear documentation, and continuous learning, and I'm always looking for ways technology can make factory workflows simpler and more reliable.",
];

export const skills: { icon: string; title: string; items: string[] }[] = [
  { icon: "Wrench", title: "IT Support & Troubleshooting", items: ["Helpdesk support", "Root-cause analysis", "User assistance"] },
  { icon: "Cpu", title: "Computer Hardware & Software", items: ["PC assembly & repair", "OS installation", "Software deployment"] },
  { icon: "Network", title: "Network Administration", items: ["LAN / Wi-Fi setup", "Switches & routers", "IP management"] },
  { icon: "MonitorCog", title: "Windows & System Administration", items: ["Windows client & server", "User accounts", "Group policies"] },
  { icon: "Server", title: "Server & Backup Management", items: ["File servers", "Scheduled backups", "Restore testing"] },
  { icon: "Boxes", title: "IT Asset Management", items: ["Inventory tracking", "Asset tagging", "Lifecycle records"] },
  { icon: "Factory", title: "ERP & Garments Software Support", items: ["ERP user support", "Module access", "Workflow issues"] },
  { icon: "ShieldCheck", title: "Cybersecurity Fundamentals", items: ["Antivirus & patching", "Access control", "Security awareness"] },
  { icon: "Mail", title: "Microsoft 365 & Email Administration", items: ["Mailbox management", "Outlook support", "Licensing"] },
  { icon: "Sheet", title: "Excel Reporting & Automation", items: ["Formulas & pivots", "Dashboards", "Report automation"] },
];

export const rmg: { icon: string; title: string; text: string }[] = [
  { icon: "Building2", title: "Factory IT Infrastructure", text: "Planning and maintaining computers, network points, and servers across offices and production floors." },
  { icon: "Users", title: "User & Department Support", text: "Supporting merchandising, HR, commercial, accounts, and production teams with daily IT needs." },
  { icon: "Activity", title: "Production System Availability", text: "Keeping critical systems running to minimise downtime that could affect production targets." },
  { icon: "Printer", title: "Network & Printer Troubleshooting", text: "Resolving connectivity, shared printer, and label/barcode printer issues quickly." },
  { icon: "ClipboardList", title: "IT Asset Tracking", text: "Maintaining accurate records of hardware, software licenses, and device assignments." },
  { icon: "DatabaseBackup", title: "Data Backup & Access", text: "Protecting business data with regular backups and controlled, role-based access." },
  { icon: "Workflow", title: "ERP Support & Workflow", text: "Helping users work effectively in ERP systems and identifying process improvements." },
];

export const projects: { title: string; description: string; tech: string[]; features: string[]; details: string }[] = [
  { title: "IT Asset Management System", description: "A structure for tracking hardware, software, and device assignments across departments.", tech: ["Excel", "SharePoint"], features: ["Asset register", "Assignment history", "Warranty alerts"], details: "Demo concept. Replace with a description of your real asset-tracking work." },
  { title: "IT Helpdesk & Ticket Tracking", description: "A simple workflow to log, prioritise, and resolve user IT requests.", tech: ["Microsoft Forms", "Excel"], features: ["Ticket logging", "Priority levels", "Resolution reports"], details: "Demo concept. Replace with your real helpdesk process or tool." },
  { title: "Network Monitoring Dashboard", description: "A dashboard concept to monitor device status and network uptime.", tech: ["PRTG / Zabbix", "SNMP"], features: ["Device status", "Uptime tracking", "Alerts"], details: "Demo concept. Replace with your real monitoring setup." },
  { title: "Excel Reporting Automation", description: "Automated reports that reduce manual data preparation time.", tech: ["Excel", "Power Query", "VBA"], features: ["Data import", "Auto-refresh", "Summary dashboards"], details: "Demo concept. Replace with a real report you automated." },
  { title: "Backup & IT Documentation System", description: "A documented approach to backup schedules and IT procedures.", tech: ["Windows Server Backup", "OneDrive"], features: ["Backup schedule", "Restore steps", "SOP library"], details: "Demo concept. Replace with your real documentation work." },
  { title: "Garments ERP Support Workflow", description: "A support process for handling ERP user requests and access changes.", tech: ["ERP", "Excel"], features: ["Request intake", "Access approvals", "Issue log"], details: "Demo concept. Replace with your real ERP support workflow." },
];

export const timeline: { period: string; role: string; org: string; points: string[]; type: "work" | "education" }[] = [
  { period: "[December-2024] – Present", role: "[Senior Executive - ICT & ERP]", org: "[Partex Star Group], Bangladesh", points: ["[IT infrastructure]", "[System Administration]", "[IT Support]"], type: "work" },
  { period: "[2017] – [2024]", role: "[Executive - IT & ERP]", org: "[IRIS GROUP] Bangladesh", points: ["[IT infrastructure]", "[IT infrastructure]"], type: "work" },
  { period: "[2019-2023]", role: "[Degree / Bachelor of Science]", org: "[Southeast University]", points: ["[BSC IN CSE]"], type: "education" },
];

export const achievements: { title: string; issuer: string; year: string; kind: string }[] = [
  { title: "[CCNA Networking]", issuer: "[ IBCS  PRIMAX]", year: "[2018]", kind: "Certification" },
  { title: "[Training Completed]", issuer: "[IBCS  PRIMAX]", year: "[2018]", kind: "Training" },
  { title: "[Inter University Programming]", issuer: "[Web Developer]", year: "[2020]", kind: "Achievement" },
  { title: "[Winner]", issuer: "[2nd Place]", year: "[2020]", kind: "Result" },
];
