const app = Vue.createApp({
    data() {
        return {
            jobs: [
                {
                    img: "https://media.licdn.com/dms/image/C4D0BAQEdRuehGN2rGQ/company-logo_100_100/0/1633369276620/domain_technology_partners_logo?e=1707350400&v=beta&t=eublF2aKFxd4MjuvsNXb0A-KewCIsx8GV45Ar1oPqwY",
                    alt: "Integris-Logo",
                    company: "Integris",
                    title: "PMO Solutions Architect",
                    status: "Full-time",
                    location: "Austin, Texas Metropolitan Area",
                    office: "Remote",
                    details: [
                        "Design & deployed Azure networks",
                        "Design & deployed hybrid connectivity (Azure VPN Gateway, 3rd party NVA's)",
                        "Primary technical resource for server and network migrations",
                    ],
                    skills: [
                        "Network Administration",
                        "Azure Networking",
                        "Cisco Networking",
                        "Windows Server",
                        "VMware",
                        "Microsoft 365",
                    ],
                },
            ],
        };
    },
});

app.mount("#app");
