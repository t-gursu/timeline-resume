import React from 'react';
import './TimelineItem.css';
import { tagConfigs } from './../config';

const getTagConfig = (tag) => {
    return tagConfigs[tag.trim()] || tagConfigs.default;
};

const TimelineItem = ({ title, description, details, date, tag }) => {
    const tags = tag.split(',');

    return (
        <div className={"timeline-item"} data-aos="fade-up">
            <div className="timeline-icon">
                {getTagConfig(tags[0]).icon}
            </div>
            <div className="timeline-content">
                <h3>{title}</h3>
                <b><p dangerouslySetInnerHTML={{ __html: description }} style={{ marginBottom: '10px' }}></p></b>

                {Array.isArray(details) ? (
                    <ul>
                        {details.map((detail, index) => (
                            <li key={index}><p dangerouslySetInnerHTML={{ __html: detail }}></p></li>
                        ))}
                    </ul>
                ) : (
                    <p dangerouslySetInnerHTML={{ __html: details }}></p>
                )}

                <p className="timeline-date">{date}</p>

                <div className="timeline-types">
                    {tags.map((t, index) => (
                        <span key={index} className={getTagConfig(t).className}>
                            {t.trim()}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TimelineItem;