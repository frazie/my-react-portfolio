interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference'
    };
}
export interface PageInfo extends SanityBody {
    _type: 'pageInfo';
    address: string;
    backgroundInformation: string;
    email: string;
    phoneNumber: string;
    role: string;
    name: string;
    heroImage: Image;
    profilePic: Image;
}

export interface Technology extends SanityBody {
    _type: 'skill';
    image: Image;
    nameOfSkill: string;
    title: string;
}

export interface Skill extends SanityBody {
    _type: 'skill';
    image: Image;
    nameOfSkill: string;
    title: string;
}

export interface Experience extends SanityBody {
    summaries: any;
    _type: 'experience';
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    technologies: Technology[];
    technologiesName: string[];
    
}

export interface Project extends SanityBody {
    projectImage: any;
    title: string;
    _type: 'project';
    image: Image;
    linkToBuild: string;
    linkToBuildCode: string;
    summary: string;
    technologies: Technology[];
}

export interface Social extends SanityBody {
    _type: 'social';
    title: string;
    url: string;
}