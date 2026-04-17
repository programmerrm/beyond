import { CaseStudyType } from "@/types/case-study";
import operational_impact_image from "../assets/img/oparational-impact.png";
import overview_image from "../assets/img/overview.png";
import solution_image from "../assets/img/solution-image.png";
import caseStudyImage1 from "../assets/img/system-capability.png";
import caseStudyImage2 from "../assets/img/integration.png";
import caseStudyImage3 from "../assets/img/operational.png";
import caseStudyImage4 from "../assets/img/automation.png";
import caseStudyImage5 from "../assets/img/system-deploy.png";
import caseStudyImage6 from "../assets/img/industry.png";

export const CaseStudyData: CaseStudyType[] = [
    {
        id: 1,
        title: "System capability",
        slug: "system-capability",
        image: caseStudyImage1,
        description: "Evaluates the system’s ability to deliver core intelligence functions, including data processing, automation...",
        info: {
            "company": {
                title: "Company Name",
                name: "OpsIntel Solutions",
            },
            "category": {
                title: "Category",
                name: "Dashboard Design",
            },
            "timelines": {
                title: "Timelines",
                months: "3 Months",
            },
            "related_tags": {
                title: "Related Tags",
                 tags: [
                    {
                        id: 1,
                        name: "Intelligent",
                    },
                    {
                        id: 2,
                        name: "Artificial",
                    },
                    {
                        id: 3,
                        name: "System",
                    },
                 ],
            },
        },
        overview: [
            {
                id: 1,
                title: "Overview",
                description: "OpsIntel Solutions is a large enterprise organization facing challenges in operational visibility, reporting inefficiencies, and delayed decision-making due to fragmented systems and manual workflows.",
                image: overview_image,
            }
        ],
        challenge: [
            {
                id: 1,
                title: "Challenge",
                sub_title: "Despite investing in digital tools, OpsIntel Solutions struggled with:",
                list: `
                    <li>Lack of real-time operational visibility</li>
                    <li>Heavy reliance on manual reporting processes</li>
                    <li>Disconnected systems across departments</li>
                    <li>Delays in executive decision-making</li>
                    <li>Inefficient data retrieval and workflow bottlenecks</li>
                `,
                description: "These challenges limited the organization’s ability to scale efficiently and respond to operational demands.",
            }
        ],
        solution: [
            {
                id: 1,
                title: "Solution",
                sub_title: "A structured Operational Intelligence System was deployed to integrate workflows, automate reporting, and enable real-time decision support.",
                key_title: "Key Implementations",
                list: `
                    <li>Deployment of AI-powered operational intelligence assistants</li>
                    <li>Integration with ERP systems and internal databases</li>
                    <li>Automated reporting infrastructure with real-time dashboards</li>
                    <li>Workflow automation and execution tracking systems</li>
                    <li>Centralized knowledge and document intelligence system</li>
                `,
                image: solution_image,
            }
        ],
        system_capability: [
            {
                id: 1,
                title: "System Capability",
                sub_title: "The system was engineered to handle complex operational environments with:",
                list: `
                    <li>Real-time data processing and intelligence generation</li>
                    <li>Seamless integration across multiple platforms</li>
                    <li>Scalable infrastructure aligned with organizational growth</li>
                    <li>Secure deployment within internal infrastructure</li>
                `,
            }
        ],
        integration_readiness: [
            {
                id: 1,
                title: "Integration Readiness",
                sub_title: "The solution was fully integrated into existing infrastructure:",
                list: `
                    <li>Connected with ERP, reporting tools, and internal systems</li>
                    <li>No disruption to ongoing operations during deployment</li>
                    <li>Aligned with governance frameworks and security policies</li>
                    <li>Configured to match organizational workflows</li>
                `,
            }
        ],
        operational_impact: [
            {
                id: 1,
                title: "Operational Impact",
                sub_title: "Following deployment, OpsIntel Solutions achieved:",
                list: `
                    <li>60–80% faster information retrieval</li>
                    <li>Up to 85% reduction in manual reporting workload</li>
                    <li>Real-time operational visibility across departments</li>
                    <li>Significant improvement in decision-making speed</li>
                    <li>Enhanced workflow efficiency and execution tracking</li>
                `,
                image: operational_impact_image,
            }
        ],
        results: [
            {
                id: 1,
                title: "Results",
                sub_title: "Improved operational efficiency and system reliability",
                list: `
                <span>Faster and more informed executive decisions</span>
                <span>Reduced dependency on manual processes</span>
                <span>Scalable infrastructure supporting long-term growth</span>`
            },
        ],
        conclusion: [
            {
                id: 1,
                title: "Conclusion",
                description: "By implementing a structured operational intelligence system, OpsIntel Solutions successfully transformed its operational model from fragmented and manual to intelligent, automated, and data-driven."
            },
        ],
    },

    {
        id: 2,
        title: "Integration Readiness",
        slug: "integration-readiness",
        image: caseStudyImage2,
        description: "Assesses how seamlessly the system can integrate with existing infrastructure, including ERP systems, databases...",
        info: {
            "company": {
                title: "Company Name",
                name: "OpsIntel Solutions",
            },
            "category": {
                title: "Category",
                name: "Dashboard Design",
            },
            "timelines": {
                title: "Timelines",
                months: "3 Months",
            },
            "related_tags": {
                title: "Related Tags",
                 tags: [
                    {
                        id: 1,
                        name: "Intelligent",
                    },
                    {
                        id: 2,
                        name: "Artificial",
                    },
                    {
                        id: 3,
                        name: "System",
                    },
                 ],
            },
        },
        overview: [
            {
                id: 1,
                title: "Overview",
                description: "OpsIntel Solutions is a large enterprise organization facing challenges in operational visibility, reporting inefficiencies, and delayed decision-making due to fragmented systems and manual workflows.",
                image: overview_image,
            }
        ],
        challenge: [
            {
                id: 1,
                title: "Challenge",
                sub_title: "Despite investing in digital tools, OpsIntel Solutions struggled with:",
                list: `
                    <li>Lack of real-time operational visibility</li>
                    <li>Heavy reliance on manual reporting processes</li>
                    <li>Disconnected systems across departments</li>
                    <li>Delays in executive decision-making</li>
                    <li>Inefficient data retrieval and workflow bottlenecks</li>
                `,
                description: "These challenges limited the organization’s ability to scale efficiently and respond to operational demands.",
            }
        ],
        solution: [
            {
                id: 1,
                title: "Solution",
                sub_title: "A structured Operational Intelligence System was deployed to integrate workflows, automate reporting, and enable real-time decision support.",
                key_title: "Key Implementations",
                list: `
                    <li>Deployment of AI-powered operational intelligence assistants</li>
                    <li>Integration with ERP systems and internal databases</li>
                    <li>Automated reporting infrastructure with real-time dashboards</li>
                    <li>Workflow automation and execution tracking systems</li>
                    <li>Centralized knowledge and document intelligence system</li>
                `,
                image: solution_image,
            }
        ],
        system_capability: [
            {
                id: 1,
                title: "System Capability",
                sub_title: "The system was engineered to handle complex operational environments with:",
                list: `
                    <li>Real-time data processing and intelligence generation</li>
                    <li>Seamless integration across multiple platforms</li>
                    <li>Scalable infrastructure aligned with organizational growth</li>
                    <li>Secure deployment within internal infrastructure</li>
                `,
            }
        ],
        integration_readiness: [
            {
                id: 1,
                title: "Integration Readiness",
                sub_title: "The solution was fully integrated into existing infrastructure:",
                list: `
                    <li>Connected with ERP, reporting tools, and internal systems</li>
                    <li>No disruption to ongoing operations during deployment</li>
                    <li>Aligned with governance frameworks and security policies</li>
                    <li>Configured to match organizational workflows</li>
                `,
            }
        ],
        operational_impact: [
            {
                id: 1,
                title: "Operational Impact",
                sub_title: "Following deployment, OpsIntel Solutions achieved:",
                list: `
                    <li>60–80% faster information retrieval</li>
                    <li>Up to 85% reduction in manual reporting workload</li>
                    <li>Real-time operational visibility across departments</li>
                    <li>Significant improvement in decision-making speed</li>
                    <li>Enhanced workflow efficiency and execution tracking</li>
                `,
                image: operational_impact_image,
            }
        ],
        results: [
            {
                id: 1,
                title: "Results",
                sub_title: "Improved operational efficiency and system reliability",
                list: `
                <span>Faster and more informed executive decisions</span>
                <span>Reduced dependency on manual processes</span>
                <span>Scalable infrastructure supporting long-term growth</span>`
            },
        ],
        conclusion: [
            {
                id: 1,
                title: "Conclusion",
                description: "By implementing a structured operational intelligence system, OpsIntel Solutions successfully transformed its operational model from fragmented and manual to intelligent, automated, and data-driven."
            },
        ],
    },

    {
        id: 3,
        title: "Operational Impact",
        slug: "operational-impact",
        image: caseStudyImage3,
        description: "Measures the system’s effectiveness in improving execution, reducing manual workload, enhancing visibilit...",
        info: {
            "company": {
                title: "Company Name",
                name: "OpsIntel Solutions",
            },
            "category": {
                title: "Category",
                name: "Dashboard Design",
            },
            "timelines": {
                title: "Timelines",
                months: "3 Months",
            },
            "related_tags": {
                title: "Related Tags",
                 tags: [
                    {
                        id: 1,
                        name: "Intelligent",
                    },
                    {
                        id: 2,
                        name: "Artificial",
                    },
                    {
                        id: 3,
                        name: "System",
                    },
                 ],
            },
        },
        overview: [
            {
                id: 1,
                title: "Overview",
                description: "OpsIntel Solutions is a large enterprise organization facing challenges in operational visibility, reporting inefficiencies, and delayed decision-making due to fragmented systems and manual workflows.",
                image: overview_image,
            }
        ],
        challenge: [
            {
                id: 1,
                title: "Challenge",
                sub_title: "Despite investing in digital tools, OpsIntel Solutions struggled with:",
                list: `
                    <li>Lack of real-time operational visibility</li>
                    <li>Heavy reliance on manual reporting processes</li>
                    <li>Disconnected systems across departments</li>
                    <li>Delays in executive decision-making</li>
                    <li>Inefficient data retrieval and workflow bottlenecks</li>
                `,
                description: "These challenges limited the organization’s ability to scale efficiently and respond to operational demands.",
            }
        ],
        solution: [
            {
                id: 1,
                title: "Solution",
                sub_title: "A structured Operational Intelligence System was deployed to integrate workflows, automate reporting, and enable real-time decision support.",
                key_title: "Key Implementations",
                list: `
                    <li>Deployment of AI-powered operational intelligence assistants</li>
                    <li>Integration with ERP systems and internal databases</li>
                    <li>Automated reporting infrastructure with real-time dashboards</li>
                    <li>Workflow automation and execution tracking systems</li>
                    <li>Centralized knowledge and document intelligence system</li>
                `,
                image: solution_image,
            }
        ],
        system_capability: [
            {
                id: 1,
                title: "System Capability",
                sub_title: "The system was engineered to handle complex operational environments with:",
                list: `
                    <li>Real-time data processing and intelligence generation</li>
                    <li>Seamless integration across multiple platforms</li>
                    <li>Scalable infrastructure aligned with organizational growth</li>
                    <li>Secure deployment within internal infrastructure</li>
                `,
            }
        ],
        integration_readiness: [
            {
                id: 1,
                title: "Integration Readiness",
                sub_title: "The solution was fully integrated into existing infrastructure:",
                list: `
                    <li>Connected with ERP, reporting tools, and internal systems</li>
                    <li>No disruption to ongoing operations during deployment</li>
                    <li>Aligned with governance frameworks and security policies</li>
                    <li>Configured to match organizational workflows</li>
                `,
            }
        ],
        operational_impact: [
            {
                id: 1,
                title: "Operational Impact",
                sub_title: "Following deployment, OpsIntel Solutions achieved:",
                list: `
                    <li>60–80% faster information retrieval</li>
                    <li>Up to 85% reduction in manual reporting workload</li>
                    <li>Real-time operational visibility across departments</li>
                    <li>Significant improvement in decision-making speed</li>
                    <li>Enhanced workflow efficiency and execution tracking</li>
                `,
                image: operational_impact_image,
            }
        ],
        results: [
            {
                id: 1,
                title: "Results",
                sub_title: "Improved operational efficiency and system reliability",
                list: `
                <span>Faster and more informed executive decisions</span>
                <span>Reduced dependency on manual processes</span>
                <span>Scalable infrastructure supporting long-term growth</span>`
            },
        ],
        conclusion: [
            {
                id: 1,
                title: "Conclusion",
                description: "By implementing a structured operational intelligence system, OpsIntel Solutions successfully transformed its operational model from fragmented and manual to intelligent, automated, and data-driven."
            },
        ],
    },

    {
        id: 4,
        title: "Automation System",
        slug: "automation-system",
        image: caseStudyImage4,
        description: "Evaluates the system’s ability to deliver core intelligence functions, including data processing, automation...",
        info: {
            "company": {
                title: "Company Name",
                name: "OpsIntel Solutions",
            },
            "category": {
                title: "Category",
                name: "Dashboard Design",
            },
            "timelines": {
                title: "Timelines",
                months: "3 Months",
            },
            "related_tags": {
                title: "Related Tags",
                 tags: [
                    {
                        id: 1,
                        name: "Intelligent",
                    },
                    {
                        id: 2,
                        name: "Artificial",
                    },
                    {
                        id: 3,
                        name: "System",
                    },
                 ],
            },
        },
        overview: [
            {
                id: 1,
                title: "Overview",
                description: "OpsIntel Solutions is a large enterprise organization facing challenges in operational visibility, reporting inefficiencies, and delayed decision-making due to fragmented systems and manual workflows.",
                image: overview_image,
            }
        ],
        challenge: [
            {
                id: 1,
                title: "Challenge",
                sub_title: "Despite investing in digital tools, OpsIntel Solutions struggled with:",
                list: `
                    <li>Lack of real-time operational visibility</li>
                    <li>Heavy reliance on manual reporting processes</li>
                    <li>Disconnected systems across departments</li>
                    <li>Delays in executive decision-making</li>
                    <li>Inefficient data retrieval and workflow bottlenecks</li>
                `,
                description: "These challenges limited the organization’s ability to scale efficiently and respond to operational demands.",
            }
        ],
        solution: [
            {
                id: 1,
                title: "Solution",
                sub_title: "A structured Operational Intelligence System was deployed to integrate workflows, automate reporting, and enable real-time decision support.",
                key_title: "Key Implementations",
                list: `
                    <li>Deployment of AI-powered operational intelligence assistants</li>
                    <li>Integration with ERP systems and internal databases</li>
                    <li>Automated reporting infrastructure with real-time dashboards</li>
                    <li>Workflow automation and execution tracking systems</li>
                    <li>Centralized knowledge and document intelligence system</li>
                `,
                image: solution_image,
            }
        ],
        system_capability: [
            {
                id: 1,
                title: "System Capability",
                sub_title: "The system was engineered to handle complex operational environments with:",
                list: `
                    <li>Real-time data processing and intelligence generation</li>
                    <li>Seamless integration across multiple platforms</li>
                    <li>Scalable infrastructure aligned with organizational growth</li>
                    <li>Secure deployment within internal infrastructure</li>
                `,
            }
        ],
        integration_readiness: [
            {
                id: 1,
                title: "Integration Readiness",
                sub_title: "The solution was fully integrated into existing infrastructure:",
                list: `
                    <li>Connected with ERP, reporting tools, and internal systems</li>
                    <li>No disruption to ongoing operations during deployment</li>
                    <li>Aligned with governance frameworks and security policies</li>
                    <li>Configured to match organizational workflows</li>
                `,
            }
        ],
        operational_impact: [
            {
                id: 1,
                title: "Operational Impact",
                sub_title: "Following deployment, OpsIntel Solutions achieved:",
                list: `
                    <li>60–80% faster information retrieval</li>
                    <li>Up to 85% reduction in manual reporting workload</li>
                    <li>Real-time operational visibility across departments</li>
                    <li>Significant improvement in decision-making speed</li>
                    <li>Enhanced workflow efficiency and execution tracking</li>
                `,
                image: operational_impact_image,
            }
        ],
        results: [
            {
                id: 1,
                title: "Results",
                sub_title: "Improved operational efficiency and system reliability",
                list: `
                <span>Faster and more informed executive decisions</span>
                <span>Reduced dependency on manual processes</span>
                <span>Scalable infrastructure supporting long-term growth</span>`
            },
        ],
        conclusion: [
            {
                id: 1,
                title: "Conclusion",
                description: "By implementing a structured operational intelligence system, OpsIntel Solutions successfully transformed its operational model from fragmented and manual to intelligent, automated, and data-driven."
            },
        ],
    },

    {
        id: 5,
        title: "System Deployment",
        slug: "system-deployment",
        image: caseStudyImage5,
        description: "Assesses how seamlessly the system can integrate with existing infrastructure, including ERP systems, databases...",
        info: {
            "company": {
                title: "Company Name",
                name: "OpsIntel Solutions",
            },
            "category": {
                title: "Category",
                name: "Dashboard Design",
            },
            "timelines": {
                title: "Timelines",
                months: "3 Months",
            },
            "related_tags": {
                title: "Related Tags",
                 tags: [
                    {
                        id: 1,
                        name: "Intelligent",
                    },
                    {
                        id: 2,
                        name: "Artificial",
                    },
                    {
                        id: 3,
                        name: "System",
                    },
                 ],
            },
        },
        overview: [
            {
                id: 1,
                title: "Overview",
                description: "OpsIntel Solutions is a large enterprise organization facing challenges in operational visibility, reporting inefficiencies, and delayed decision-making due to fragmented systems and manual workflows.",
                image: overview_image,
            }
        ],
        challenge: [
            {
                id: 1,
                title: "Challenge",
                sub_title: "Despite investing in digital tools, OpsIntel Solutions struggled with:",
                list: `
                    <li>Lack of real-time operational visibility</li>
                    <li>Heavy reliance on manual reporting processes</li>
                    <li>Disconnected systems across departments</li>
                    <li>Delays in executive decision-making</li>
                    <li>Inefficient data retrieval and workflow bottlenecks</li>
                `,
                description: "These challenges limited the organization’s ability to scale efficiently and respond to operational demands.",
            }
        ],
        solution: [
            {
                id: 1,
                title: "Solution",
                sub_title: "A structured Operational Intelligence System was deployed to integrate workflows, automate reporting, and enable real-time decision support.",
                key_title: "Key Implementations",
                list: `
                    <li>Deployment of AI-powered operational intelligence assistants</li>
                    <li>Integration with ERP systems and internal databases</li>
                    <li>Automated reporting infrastructure with real-time dashboards</li>
                    <li>Workflow automation and execution tracking systems</li>
                    <li>Centralized knowledge and document intelligence system</li>
                `,
                image: solution_image,
            }
        ],
        system_capability: [
            {
                id: 1,
                title: "System Capability",
                sub_title: "The system was engineered to handle complex operational environments with:",
                list: `
                    <li>Real-time data processing and intelligence generation</li>
                    <li>Seamless integration across multiple platforms</li>
                    <li>Scalable infrastructure aligned with organizational growth</li>
                    <li>Secure deployment within internal infrastructure</li>
                `,
            }
        ],
        integration_readiness: [
            {
                id: 1,
                title: "Integration Readiness",
                sub_title: "The solution was fully integrated into existing infrastructure:",
                list: `
                    <li>Connected with ERP, reporting tools, and internal systems</li>
                    <li>No disruption to ongoing operations during deployment</li>
                    <li>Aligned with governance frameworks and security policies</li>
                    <li>Configured to match organizational workflows</li>
                `,
            }
        ],
        operational_impact: [
            {
                id: 1,
                title: "Operational Impact",
                sub_title: "Following deployment, OpsIntel Solutions achieved:",
                list: `
                    <li>60–80% faster information retrieval</li>
                    <li>Up to 85% reduction in manual reporting workload</li>
                    <li>Real-time operational visibility across departments</li>
                    <li>Significant improvement in decision-making speed</li>
                    <li>Enhanced workflow efficiency and execution tracking</li>
                `,
                image: operational_impact_image,
            }
        ],
        results: [
            {
                id: 1,
                title: "Results",
                sub_title: "Improved operational efficiency and system reliability",
                list: `
                <span>Faster and more informed executive decisions</span>
                <span>Reduced dependency on manual processes</span>
                <span>Scalable infrastructure supporting long-term growth</span>`
            },
        ],
        conclusion: [
            {
                id: 1,
                title: "Conclusion",
                description: "By implementing a structured operational intelligence system, OpsIntel Solutions successfully transformed its operational model from fragmented and manual to intelligent, automated, and data-driven."
            },
        ],
    },

    {
        id: 6,
        title: "How Impact on Your Industry",
        slug: "how-impact-on-your-industry",
        image: caseStudyImage6,
        description: "Measures the system’s effectiveness in improving execution, reducing manual workload, enhancing visibilit...",
        info: {
            "company": {
                title: "Company Name",
                name: "OpsIntel Solutions",
            },
            "category": {
                title: "Category",
                name: "Dashboard Design",
            },
            "timelines": {
                title: "Timelines",
                months: "3 Months",
            },
            "related_tags": {
                title: "Related Tags",
                 tags: [
                    {
                        id: 1,
                        name: "Intelligent",
                    },
                    {
                        id: 2,
                        name: "Artificial",
                    },
                    {
                        id: 3,
                        name: "System",
                    },
                 ],
            },
        },
        overview: [
            {
                id: 1,
                title: "Overview",
                description: "OpsIntel Solutions is a large enterprise organization facing challenges in operational visibility, reporting inefficiencies, and delayed decision-making due to fragmented systems and manual workflows.",
                image: overview_image,
            }
        ],
        challenge: [
            {
                id: 1,
                title: "Challenge",
                sub_title: "Despite investing in digital tools, OpsIntel Solutions struggled with:",
                list: `
                    <li>Lack of real-time operational visibility</li>
                    <li>Heavy reliance on manual reporting processes</li>
                    <li>Disconnected systems across departments</li>
                    <li>Delays in executive decision-making</li>
                    <li>Inefficient data retrieval and workflow bottlenecks</li>
                `,
                description: "These challenges limited the organization’s ability to scale efficiently and respond to operational demands.",
            }
        ],
        solution: [
            {
                id: 1,
                title: "Solution",
                sub_title: "A structured Operational Intelligence System was deployed to integrate workflows, automate reporting, and enable real-time decision support.",
                key_title: "Key Implementations",
                list: `
                    <li>Deployment of AI-powered operational intelligence assistants</li>
                    <li>Integration with ERP systems and internal databases</li>
                    <li>Automated reporting infrastructure with real-time dashboards</li>
                    <li>Workflow automation and execution tracking systems</li>
                    <li>Centralized knowledge and document intelligence system</li>
                `,
                image: solution_image,
            }
        ],
        system_capability: [
            {
                id: 1,
                title: "System Capability",
                sub_title: "The system was engineered to handle complex operational environments with:",
                list: `
                    <li>Real-time data processing and intelligence generation</li>
                    <li>Seamless integration across multiple platforms</li>
                    <li>Scalable infrastructure aligned with organizational growth</li>
                    <li>Secure deployment within internal infrastructure</li>
                `,
            }
        ],
        integration_readiness: [
            {
                id: 1,
                title: "Integration Readiness",
                sub_title: "The solution was fully integrated into existing infrastructure:",
                list: `
                    <li>Connected with ERP, reporting tools, and internal systems</li>
                    <li>No disruption to ongoing operations during deployment</li>
                    <li>Aligned with governance frameworks and security policies</li>
                    <li>Configured to match organizational workflows</li>
                `,
            }
        ],
        operational_impact: [
            {
                id: 1,
                title: "Operational Impact",
                sub_title: "Following deployment, OpsIntel Solutions achieved:",
                list: `
                    <li>60–80% faster information retrieval</li>
                    <li>Up to 85% reduction in manual reporting workload</li>
                    <li>Real-time operational visibility across departments</li>
                    <li>Significant improvement in decision-making speed</li>
                    <li>Enhanced workflow efficiency and execution tracking</li>
                `,
                image: operational_impact_image,
            }
        ],
        results: [
            {
                id: 1,
                title: "Results",
                sub_title: "Improved operational efficiency and system reliability",
                list: `
                <span>Faster and more informed executive decisions</span>
                <span>Reduced dependency on manual processes</span>
                <span>Scalable infrastructure supporting long-term growth</span>`
            },
        ],
        conclusion: [
            {
                id: 1,
                title: "Conclusion",
                description: "By implementing a structured operational intelligence system, OpsIntel Solutions successfully transformed its operational model from fragmented and manual to intelligent, automated, and data-driven."
            },
        ],
    },
]
