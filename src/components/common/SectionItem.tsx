import React from 'react';
import classnames from 'classnames';

interface SectionItemProps {
    heading: string;
    subheading: string;
    description: string;
    meta: string;
    last: boolean;
    lead?: string;
}

const SectionItem: React.FC<SectionItemProps> = props => {
    const classNames = classnames(
        'd-flex',
        'flex-column',
        'flex-md-row',
        'justify-content-between',
        {
            'mb-5': !props.last
        }
    );

    return (
        <div className={classNames}>
            <div className="flex-grow-1">
                <h3 className="mb-0">{props.heading}</h3>
                <div className="subheading mb-3">{props.subheading}</div>
                {props.lead && <div>{props.lead}</div>}
                <p>{props.description}</p>
            </div>
            <div className="flex-shrink-0">
                <span className="text-primary">{props.meta}</span>
            </div>
        </div>
    );
};

export default SectionItem;
