import { IconName } from '@fortawesome/fontawesome-common-types';

export type Experience = {
    title: string;
    companyName: string;
    description: string;
    duration: string;
};

export type Interest = {
    description: string;
};

export type Social = {
    name: string;
    icon: IconName;
};

export type Profile = {
    firstName: string;
    lastName: string;
    addressLine1: string;
    addressLine2: string;
    telephone: string;
    email: string;
    description: string;
    socials: Social[];
};

export type School = {
    name: string;
    degree: string;
    fieldOfStudy: string;
    grade: string;
    duration: string;
};

export type Skill = {
    name: string;
    icon: IconName;
};

export type Workflow = {
    description: string;
};
