import { FaBriefcase, FaGraduationCap, FaCertificate, FaCheckCircle, FaSourcetree } from 'react-icons/fa';

export const tagConfigs = {
  work: {
    icon: <FaBriefcase className="icon-work" />,
    className: 'timeline-type work'
  },
  education: {
    icon: <FaGraduationCap className="icon-education" />,
    className: 'timeline-type education'
  },
  certification: {
    icon: <FaCertificate className="icon-certification" />,
    className: 'timeline-type certification'
  },
  milestone: {
    icon: <FaSourcetree className="icon-milestone" />,
    className: 'timeline-type milestone'
  },
  default: {
    icon: <FaCheckCircle className="icon-default" />,
    className: 'timeline-type default'
  }
};

export const careerPaths = [
  { label: "All", value: "all" },
  { label: "RPA Experience", value: "rpa" },
  { label: "Coding Experience", value: "code" },
  { label: "Management & Operation Experience", value: "management" }
];

export const tags = [
  { label: "All", value: "all" },
  { label: "Work Exp.", value: "work" },
  { label: "Education", value: "education" },
  { label: "Certification", value: "certification" },
  { label: "Project", value: "project" },
  { label: "Interest", value: "interest" },
  { label: "Language", value: "language" },
  { label: "Milestone", value: "milestone" },
];