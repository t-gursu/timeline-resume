import React from 'react';
import TimelineItem from './TimelineItem';
import './Timeline.css';

const Timeline = ({ data }) => {
    return (
        <>
            <div className="timeline">
                <div className="timeline-line"></div>
                {data.map((item, index) => (
                    <TimelineItem
                        key={index}
                        title={item.title}
                        description={item.description}
                        details={item.details}
                        date={item.date}
                        tag={item.tag}
                    />
                ))}
            </div>
        </>
    );
};

export default Timeline;
