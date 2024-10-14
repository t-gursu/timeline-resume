import React, { useEffect, useRef, useState } from 'react';
import './TimelineItem.css';
import { tagConfigs } from '../config';

const TimelineItem = ({ title, description, details, date, tag }) => {
    const [isVisible, setIsVisible] = useState(false);
    const itemRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1
            }
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => {
            if (itemRef.current) {
                observer.unobserve(itemRef.current);
            }
        };
    }, []);

    const { icon, className } = tagConfigs[tag] || tagConfigs.default;

    return (
        <div 
            ref={itemRef}
            className={`timeline-item ${isVisible ? 'visible' : ''}`}
        >
            <div className="timeline-icon">
                {icon}
            </div>
            <div className="timeline-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <p dangerouslySetInnerHTML={{ __html: details }}></p>
                <span className="timeline-date">{date}</span>
                <span className={className}>{tag}</span>
            </div>
        </div>
    );
};

export default TimelineItem;
