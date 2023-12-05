<template>
  <div>
    <div class="min-h-screen flex items-center justify-center bg-cover bg-center relative" style="background-image: url('../img/mitchell-kmetz-unsplash.jpg'); max-height: 200px; overflow: hidden;">
        <div class="w-10/12 p-6 bg-white bg-opacity-75">
            <div class="flex justify-start items-center pt-4 mt-20 mb-20">
                <img class="rounded-full object-cover w-24 h-24 max-w-xs" src="../img/nw.jpeg" alt="nwikman">
                <div class="mt-4 mb-4 ml-4">
                    <h1 class="text-4xl lg:text-6xl font-bold tracking-wider">Nathan Wikman</h1>
                    <p class="text-2xl lg:text-3xl mt-2 tracking-wide">Solutions Architect &#64; Integris</p>
                </div>
            </div>
        </div>
    </div>
    <div class="mx-6 sm:mx-16 lg:mx-32 xl:mx-48">
        <!-- This class block contains the About section -->
        <div>
            <h2 class="text-3xl font-bold mt-20">About</h2>
            <div class="mt-4 border-2 rounded-lg p-5">
                <p>Network and systems engineer supporting clients in the finance and banking industry, skilled in Azure, Cisco networking, Windows server administration, Office 365, and VMware virtualization. Strengths include commitment to the job, a passion for customer experience that forges positive perception and satisfaction, strong communication and stakeholder management, and technical expertise.
                </p>
            </div>
        </div>

        <!-- This class block div represents the entire work experience & education blocks on the page -->
        <div class="mb-20" id="app">
            <h2 class="text-3xl font-bold mt-20" >Experience</h2>
            <div class="mt-4 border-2 rounded-lg p-5" >
                <!-- This role-section div represent a single work-role -->
                <div v-for="(job, index) in jobs" :key="index">
                    <!-- This role-header-flexbox is a flex container that holds the role header data: img, title, location -->
                    <div class="flex">
                        <img class="w-14 h-14 my-2" :src="job.img" :alt="job.alt">
                        <div class="ml-4">
                            <p class="text-xl font-bold">{{ job.title }}</p>
                            <p> {{ job.company }} &#183; {{ job.status}} </p>
                            <p> {{ job.location}} &#183; {{ job.office }} </p>
                        </div>
                    </div>
                    <!-- This role-experience span contains the ul of work experience role -->
                    <div>
                        <div class="m-4">
                            <ul>
                                <li class="list-disc ml-6" v-for="detail in job.details">{{detail}}</li>
                            </ul>
                        </div>
                        <div>
                            <div><b>Skills: </b>
                                <span class="bg-gray-300 text-gray-800 text-sm py-1 px-2 rounded inline-flex items-center ml-2 mb-1" v-for="skill in job.skills"> {{skill}} </span>
                            </div>
                        </div>
                    </div>
                    <hr class="mt-10 mb-10" v-if="index < jobs.length - 1">
                </div>
            </div>
            <h2 class="text-3xl font-bold mt-20 mb-4" >Education</h2>
            <!-- This div represent the Education section -->
            <div class="mt-4 border-2 rounded-lg p-5">
                <div v-for="(school, index) in schools" :key="index">
                    <!-- This is div is a flex container that holds the school header data: img, school, degree -->
                    <div class="flex">
                        <img class="w-14 h-14 my-2" :src="school.img" :alt="school.alt">
                        <div class="ml-4">
                            <p class="text-xl font-bold" > {{school.institution}} </p>
                            <p> {{school.degree}} </p>
                            <p> {{school.years}} </p>
                        </div>
                    </div>
                    <hr class="mt-10 mb-10" v-if="index < schools.length - 1">
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'App',
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
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTghZCN-myG-spjB3lMhr6dKLNjFOoeXkkzVEkwUbNvIa_7m5XzHh8v6Y_wGX16bsM_AW8&usqp=CAU",
                    alt: "Caltech-Logo",
                    company: "CalTech Software Systems",
                    title: "Project Engineer III",
                    status: "Full-time",
                    location: "Austin, Texas Metropolitan Area",
                    office: "Remote",
                    details: [
                        "Lead engineer on new customer onboardings",
                        "Lead engineer on server migrations to the CalTech datacenter",
                        "Senior technical resource for project engineers",
                        "Migrated core banking routers to the CalTech datacenter",
                        "Network upgrades deploying Cisco routers, switches, and firewalls",
                        "Windows server migrations from 2008/2012 to server 2019",
                        "Deployed, documented, and created standard processes around CalTech's new cybersecurity product",
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
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTghZCN-myG-spjB3lMhr6dKLNjFOoeXkkzVEkwUbNvIa_7m5XzHh8v6Y_wGX16bsM_AW8&usqp=CAU",
                    alt: "CalTech-Logo",
                    company: "CalTech Software Systems",
                    title: "Project Engineer II",
                    status: "Full-time",
                    location: "Austin, Texas Metropolitan Area",
                    office: "Onsite",
                    details: [
                        "Scoped and priced client projects and exceeded target efficiency by 6%",
                        "Surpassed yearly revenue goal",
                        "Executed server 2008 to server 2019 migrations",
                        "Performed network upgrades including Cisco 2960 and 9200 series switches, Cisco ISR 4000 series routers, - Cisco ASA 5506, Cisco Call Manager Express, Cisco Meraki access points and switches, and Cisco AnyConnect VPN",
                        "Planned and executed new site turn ups",
                        "Migrated core banking routers to the CalTech datacenters",
                        "Upgraded ATMs and ATM network equipment",
                        "Configured Microsoft MDT Server to facilitate mass Windows 10 deployments",
                        "Installed and upgraded VMWare ESXi versions 5.x, 6.x, and 7.x including SAN implementations",
                        "Migrated clients from Exchange 2013/2016 to Office 365",
                        "Configured Office 365 for DMARC email security",
                        "Migrated clients between email filter and email encryption solutions",
                        "Deployed Microsoft Intune MDM for mobile device and mobile app management",
                        "Built Azure Conditional Access rules securing access to Azure and Office 365",
                    ],
                    skills: [
                        "Network Administration",
                        "Cisco Networking",
                        "Windows Server",
                        "VMware",
                        "Microsoft 365",
                    ],
                },
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTghZCN-myG-spjB3lMhr6dKLNjFOoeXkkzVEkwUbNvIa_7m5XzHh8v6Y_wGX16bsM_AW8&usqp=CAU",
                    alt: "CalTech-Logo",
                    company: "CalTech Software Systems",
                    title: "Tier II Engineer",
                    status: "Full-time",
                    location: "Austin, Texas Metropolitan Area",
                    office: "Onsite",
                    details: [
                        "Provide support and resolutio for Priority 1 issues",
                        "Escalation point for helpdesk tickets",
                        "Documented customer networks and tested critical backup infrastructure",
                        "Migrated email filtering services from on premise Linux appliances to Zix cloud-based encryption",
                        "Migrated email filtering services from on Sophos Reflexion to Zix cloud-based filter",
                    ],
                    skills: ["Windows Server", "VMware", "Microsoft 365"],
                },
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTghZCN-myG-spjB3lMhr6dKLNjFOoeXkkzVEkwUbNvIa_7m5XzHh8v6Y_wGX16bsM_AW8&usqp=CAU",
                    alt: "CalTech-Logo",
                    company: "CalTech Software Systems",
                    title: "Tier I Engineer",
                    status: "Full-time",
                    location: "Austin, Texas Metropolitan Area",
                    office: "Onsite",
                    details: [
                        "Provided first line of support for customers and internal staff",
                        "Resolved break/fix issues with a priority placed upon customer service, perception, and satisfaction",
                        "Created and updated knowledge base articles with issue resolution and created documentation for software installation and upgrades",
                        "Applied working knowledge of policies and procedures, determining the best course of action to resolve issues according to service-level objectives",
                        "anaged workstation upgrades for multiple projects, installing hardware, software, and peripherals, and provided onsite support for clients in the greater Austin area",
                        "Assisted new team members with technical issues, workflow, and proper escalation procedures",
                    ],
                    skills: [
                        "Windows 10",
                        "Windows Server",
                        "Microsoft 365",
                        "Desktop Support",
                    ],
                },
                {
                    img: "https://media.licdn.com/dms/image/D560BAQGs1CBbJ5vMPA/company-logo_100_100/0/1663676834577/baesystemsinc_logo?e=1707350400&v=beta&t=yGRBpRbgkStjegmUULTDTZybJotmIqLyt5tLgbqjR6Q",
                    alt: "BAE Systems Logo",
                    company: "BAE Systems",
                    title: "Tech Intern II",
                    status: "Full-time",
                    location: "Hudson, New Hampshire",
                    office: "Onsite",
                    details: [
                        "Supported Engineering Tools group, handling break/fix tickets in Remedy and tested applications in Windows 10 ahead of Windows 7 to Windows 10 upgrades",
                        "Converted internal web-based applications from self-signed certificates to Active Directory PKI, including IBM Apache server",
                    ],
                    skills: ["Windows 10", "Desktop Support"],
                },
                {
                    img: "https://media.licdn.com/dms/image/D560BAQGs1CBbJ5vMPA/company-logo_100_100/0/1663676834577/baesystemsinc_logo?e=1707350400&v=beta&t=yGRBpRbgkStjegmUULTDTZybJotmIqLyt5tLgbqjR6Q",
                    alt: "BAE Systems Logo",
                    company: "BAE Systems",
                    title: "Tech Intern I",
                    status: "Full-time",
                    location: "Merrimack, New Hampshire",
                    office: "Onsite",
                    details: [
                        "Provided helpdesk first line of support for end users, handling break/fix tickets in Remedy for software applications and hardware issues",
                        "Performed desktop upgrades, inventory management, and printer support for multiple sites",
                    ],
                    skills: ["Windows 10", "Desktop Support"],
                },
            ],
            schools: [
                {
                    img: "https://media.licdn.com/dms/image/C560BAQGJ5uL-usZ0Yg/company-logo_100_100/0/1638370038780/thomas_edison_state_university_logo?e=1707350400&v=beta&t=1JwYdGWZyC4srBU85neUvi02AN50qspfuVkioptI1iY",
                    alt: "TESU Logo",
                    institution: "Thomas Edison State University",
                    degree: "B.S. Information Technology",
                    years: "2016 - 2018",
                    gpa: "4.0",
                },
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLc4FIRhqrMQFzhoWOIBHxG2nuT3hHWf4vYq3PzJ3l_SSdmksA",
                    alt: "College Plus Logo",
                    institution: "College Plus",
                    degree: "Information Technology",
                    years: "2015 - 2016",
                },
            ],
        };
    },
    }
</script>

<style scoped>

</style>
