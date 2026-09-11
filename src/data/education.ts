export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  status: 'ongoing' | 'completed';
  details: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: 'internship' | 'part-time' | 'freelance' | 'volunteer';
  description: string;
  tech: string[];
}

export const education: EducationItem[] = [
  {
    institution: 'Government Polytechnic Sikandra, Kanpur Dehat',
    degree: 'Diploma',
    field: 'Computer Science & Engineering',
    period: '2024 – 2027',
    status: 'ongoing',
    details: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'Computer Networks',
      'Database Management Systems',
      'Software Engineering',
    ],
  },
  {
    institution: 'Nathuram Sushila Devi Saraswati Vidhya Mandir Inter College, Ganj Dundwara, Kasganj',
    degree: 'Class 10',
    field: 'Secondary Education',
    period: '2024',
    status: 'completed',
    details: [
      'Mathematics',
      'Science',
      'Computer',
    ],
  },
];

export const experience: ExperienceItem[] = [];
